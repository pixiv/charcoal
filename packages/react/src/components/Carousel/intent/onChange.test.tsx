import { createRef } from 'react'
import { render, fireEvent, act } from '@testing-library/react'
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest'
import Carousel, { type CarouselHandlerRef } from '../index'
import {
  getScroller,
  installCenterObserver,
  mockScrollerGeometry,
  stubHoverMatches,
} from '../testUtils'

// jsdom の :hover が常に true だと autoplay が hover 扱いで止まる
stubHoverMatches()

describe('onChange', () => {
  let triggerCenter: (el: Element) => void
  let restoreIO: () => void

  beforeEach(() => {
    // jsdom は onscrollend を持つが実イベントは発火しないため、debounce(100ms) 経路を
    // 強制する（scrollSettle.ts の分岐は 'onscrollend' in window で判定するため）。
    Reflect.deleteProperty(window, 'onscrollend')
    const io = installCenterObserver()
    triggerCenter = io.triggerCenter
    restoreIO = io.restore
  })

  afterEach(() => {
    restoreIO()
    vi.useRealTimers()
  })

  const renderWithOnChange = () => {
    const onChange = vi.fn()
    const ref = createRef<CarouselHandlerRef>()
    const { container } = render(
      <Carousel navigationButtons indicator onChange={onChange} ref={ref}>
        <div>0</div>
        <div>1</div>
        <div>2</div>
      </Carousel>,
    )
    const scroller = container.querySelector(
      '.charcoal-carousel__scroller',
    ) as HTMLElement
    // jsdom はレイアウトを持たず scrollWidth/clientWidth/scrollTo が無いため、
    // nav ボタンの活性化とプログラム的スクロールが成立するようスタブする。
    // 本物のブラウザ同様、scrollTo は scroll イベントを起こす（これが無いと
    // IntersectionObserver の報告が移動より先に届く非現実的な順序になる）。
    mockScrollerGeometry(scroller)
    scroller.scrollTo = vi.fn(() => {
      scroller.dispatchEvent(new Event('scroll'))
    }) as unknown as typeof scroller.scrollTo
    fireEvent.scroll(scroller)
    const slides = container.querySelectorAll(
      '.charcoal-carousel__scroller > *',
    )
    return { onChange, container, scroller, slides, ref }
  }

  // scrollend 非対応の jsdom では debounce(100ms) 経路になる
  const settleScroll = (scroller: HTMLElement) => {
    scroller.dispatchEvent(new Event('scroll'))
    vi.advanceTimersByTime(150)
  }

  it('next ボタンの送りは source=navigation で発火する', () => {
    vi.useFakeTimers()
    try {
      const { onChange, container, scroller, slides } = renderWithOnChange()
      // マウント直後の静止（初期位置の適用）は帰属できないので発火しない
      settleScroll(scroller)
      expect(onChange).not.toHaveBeenCalled()

      container
        .querySelector<HTMLButtonElement>('[data-direction="next"]')
        ?.click()
      triggerCenter(slides[1])
      settleScroll(scroller)

      expect(onChange).toHaveBeenCalledExactlyOnceWith({
        index: 1,
        source: 'navigation',
      })
    } finally {
      vi.useRealTimers()
    }
  })

  it('← / → は source=keyboard で発火する', () => {
    vi.useFakeTimers()
    try {
      const { onChange, scroller, slides } = renderWithOnChange()
      fireEvent.keyDown(scroller, { key: 'ArrowRight' })
      triggerCenter(slides[1])
      settleScroll(scroller)

      expect(onChange).toHaveBeenCalledExactlyOnceWith({
        index: 1,
        source: 'keyboard',
      })
    } finally {
      vi.useRealTimers()
    }
  })

  it('indicator の dot は source=indicator で発火する', () => {
    vi.useFakeTimers()
    // jsdom には scrollIntoView が無いのでモックを定義する。
    Element.prototype.scrollIntoView = vi.fn()
    try {
      const { onChange, container, scroller, slides } = renderWithOnChange()
      const dots = container.querySelectorAll(
        '.charcoal-carousel__indicator__item',
      )
      act(() => {
        fireEvent.click(dots[2])
      })
      // scrollIntoView のモックは scroll イベントを起こさないので明示的に起こす
      fireEvent.scroll(scroller)
      triggerCenter(slides[2])
      settleScroll(scroller)

      expect(onChange).toHaveBeenCalledExactlyOnceWith({
        index: 2,
        source: 'indicator',
      })
    } finally {
      delete (Element.prototype as { scrollIntoView?: unknown }).scrollIntoView
      vi.useRealTimers()
    }
  })

  it('スワイプなどのポインタ操作は source=pointer で発火し、指を離すまで静止処理を保留する', () => {
    vi.useFakeTimers()
    try {
      const { onChange, scroller, slides } = renderWithOnChange()
      scroller.dispatchEvent(new Event('pointerdown', { bubbles: true }))
      scroller.dispatchEvent(new Event('scroll'))
      triggerCenter(slides[2])
      // 指が触れたまま debounce が切れても発火しない
      vi.advanceTimersByTime(150)
      expect(onChange).not.toHaveBeenCalled()

      window.dispatchEvent(new Event('pointerup', { bubbles: true }))
      expect(onChange).toHaveBeenCalledExactlyOnceWith({
        index: 2,
        source: 'pointer',
      })
    } finally {
      vi.useRealTimers()
    }
  })

  it('タッチのパン開始で来る pointercancel では静止処理を保留したままにする', () => {
    vi.useFakeTimers()
    try {
      const { onChange, scroller, slides } = renderWithOnChange()
      // jsdom に PointerEvent は無いので pointerType だけを載せた Event で代用する
      scroller.dispatchEvent(
        Object.assign(new Event('pointerdown', { bubbles: true }), {
          pointerType: 'touch',
        }),
      )
      scroller.dispatchEvent(new Event('scroll'))
      triggerCenter(slides[2])

      // パンに転じた時点で pointercancel が来るが、指はまだ触れている
      window.dispatchEvent(
        Object.assign(new Event('pointercancel', { bubbles: true }), {
          pointerType: 'touch',
        }),
      )
      vi.advanceTimersByTime(150)
      expect(onChange).not.toHaveBeenCalled()

      window.dispatchEvent(new Event('touchend', { bubbles: true }))
      expect(onChange).toHaveBeenCalledExactlyOnceWith({
        index: 2,
        source: 'pointer',
      })
    } finally {
      vi.useRealTimers()
    }
  })

  it('同じ index への着地では発火しない', () => {
    vi.useFakeTimers()
    try {
      const { onChange, container, scroller, slides } = renderWithOnChange()
      container
        .querySelector<HTMLButtonElement>('[data-direction="next"]')
        ?.click()
      triggerCenter(slides[0])
      settleScroll(scroller)

      expect(onChange).not.toHaveBeenCalled()
    } finally {
      vi.useRealTimers()
    }
  })

  it('resetScroll() による初期位置への復帰では発火せず、基準だけ進む', () => {
    vi.useFakeTimers()
    try {
      const { onChange, container, scroller, slides, ref } =
        renderWithOnChange()
      container
        .querySelector<HTMLButtonElement>('[data-direction="next"]')
        ?.click()
      triggerCenter(slides[1])
      settleScroll(scroller)
      expect(onChange).toHaveBeenCalledTimes(1)

      act(() => ref.current?.resetScroll())
      triggerCenter(slides[0])
      settleScroll(scroller)
      expect(onChange).toHaveBeenCalledTimes(1)

      // 基準は 0 に戻っているので、0 への再着地は発火しない
      container
        .querySelector<HTMLButtonElement>('[data-direction="next"]')
        ?.click()
      triggerCenter(slides[0])
      settleScroll(scroller)
      expect(onChange).toHaveBeenCalledTimes(1)
    } finally {
      vi.useRealTimers()
    }
  })
})

describe('loop + onChange', () => {
  // item の offsetLeft/offsetWidth は clone の作り直しに追従させるため、
  // scroller 内の位置から導出する（index.test.tsx の describe('loop') と同じ手口）。
  //
  // slot 400 / clientWidth 800 では実 3 枚に対し clone が各端 9 枚（children 21）:
  //   setWidth = children[12].offsetLeft − children[9].offsetLeft = 1200
  //   maxScroll = 8400 − 800 = 7600 / 帯域 = 中央 [(7600−1200)/2, +1200) = [3200, 4400)
  const SLOT_WIDTH = 400
  const slotIndex = (el: HTMLElement) => {
    const parent = el.parentElement
    return parent?.classList.contains('charcoal-carousel__scroller')
      ? Array.prototype.indexOf.call(parent.children, el)
      : null
  }
  const originalOffsetLeft = Object.getOwnPropertyDescriptor(
    HTMLElement.prototype,
    'offsetLeft',
  )
  const originalOffsetWidth = Object.getOwnPropertyDescriptor(
    HTMLElement.prototype,
    'offsetWidth',
  )

  let roCallbacks: Array<(entries: unknown[]) => void>
  let origRO: typeof globalThis.ResizeObserver
  let restoreIO: () => void
  let triggerCenter: (el: Element) => void

  beforeEach(() => {
    // jsdom は onscrollend を持つが実イベントは発火しないため debounce(100ms) 経路を強制する
    Reflect.deleteProperty(window, 'onscrollend')
    Object.defineProperty(HTMLElement.prototype, 'offsetLeft', {
      configurable: true,
      get(this: HTMLElement) {
        const i = slotIndex(this)
        return i == null ? 0 : i * SLOT_WIDTH
      },
    })
    Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
      configurable: true,
      get(this: HTMLElement) {
        return slotIndex(this) == null ? 0 : SLOT_WIDTH - 20
      },
    })

    roCallbacks = []
    origRO = globalThis.ResizeObserver
    globalThis.ResizeObserver = class {
      observe = vi.fn()
      unobserve = vi.fn()
      disconnect = vi.fn()
      constructor(cb: (entries: unknown[]) => void) {
        roCallbacks.push(cb)
      }
    } as unknown as typeof globalThis.ResizeObserver

    const io = installCenterObserver()
    triggerCenter = io.triggerCenter
    restoreIO = io.restore
  })

  afterEach(() => {
    if (originalOffsetLeft) {
      Object.defineProperty(
        HTMLElement.prototype,
        'offsetLeft',
        originalOffsetLeft,
      )
    }
    if (originalOffsetWidth) {
      Object.defineProperty(
        HTMLElement.prototype,
        'offsetWidth',
        originalOffsetWidth,
      )
    }
    globalThis.ResizeObserver = origRO
    restoreIO()
    vi.useRealTimers()
  })

  it('clone 帯への自動送りは、静止後のテレポートを挟んでも source=auto で 1 回だけ発火する', () => {
    vi.useFakeTimers()
    try {
      const onChange = vi.fn()
      render(
        <Carousel loop autoplay={{ interval: 3000 }} onChange={onChange}>
          <div>0</div>
          <div>1</div>
          <div>2</div>
        </Carousel>,
      )
      const scroller = getScroller()
      let scrollLeft = 0
      Object.defineProperty(scroller, 'scrollLeft', {
        get: () => scrollLeft,
        set: (v: number) => {
          scrollLeft = v
        },
        configurable: true,
      })
      Object.defineProperty(scroller, 'scrollWidth', {
        value: 8400,
        configurable: true,
      })
      Object.defineProperty(scroller, 'clientWidth', {
        value: 800,
        configurable: true,
      })
      // 本物のブラウザ同様、scrollTo は scroll イベントを起こす
      const scrollTo = vi.fn((opts: ScrollToOptions) => {
        if (opts.left != null) scrollLeft = opts.left
        scroller.dispatchEvent(new Event('scroll'))
      })
      scroller.scrollTo = scrollTo as unknown as typeof scroller.scrollTo

      // 幾何の実測 → clone 枚数の確定 → 初期位置（実セット先頭 = 3600）の適用
      act(() => {
        roCallbacks.forEach((cb) => cb([{ target: scroller }]))
      })
      expect(scroller.children).toHaveLength(21)
      act(() => {
        vi.advanceTimersByTime(150)
      })
      expect(scrollLeft).toBe(3600)

      // 帯域上限（4400）の直前まで手で送っておき、次の自動送りで帯域外へ出す
      act(() => {
        scrollLeft = 4400
        scroller.dispatchEvent(new Event('scroll'))
        vi.advanceTimersByTime(150)
      })
      expect(onChange).not.toHaveBeenCalled()
      scrollTo.mockClear()

      // t+3000: 自動送りが clone-after 帯（children[12] = 4800）へ進む
      act(() => {
        vi.advanceTimersByTime(3000)
      })
      expect(scrollTo).toHaveBeenCalledExactlyOnceWith({
        left: 4800,
        behavior: 'smooth',
      })

      // 静止で 4800 は帯域外と判明し、合同位置 3600 へテレポートする
      act(() => {
        vi.advanceTimersByTime(150)
      })
      expect(scrollTo).toHaveBeenLastCalledWith({
        left: 3600,
        behavior: 'instant',
      })
      expect(onChange).not.toHaveBeenCalled()

      // 中央検出はテレポートの飛行中に遅れて届く（clone-after の 2 枚目＝論理 index 1）
      act(() => {
        triggerCenter(scroller.children[13])
      })
      act(() => {
        vi.advanceTimersByTime(150)
      })

      expect(onChange).toHaveBeenCalledExactlyOnceWith({
        index: 1,
        source: 'auto',
      })
    } finally {
      vi.useRealTimers()
    }
  })
})
