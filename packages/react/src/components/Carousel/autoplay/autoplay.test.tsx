import { render, fireEvent, act } from '@testing-library/react'
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest'
import Carousel, { type CarouselProps } from '../index'
import {
  installCenterObserver,
  mockScrollerGeometry,
  stubHoverMatches,
  stubScrollTo,
} from '../testUtils'

const setHovered = stubHoverMatches()

describe('autoplay', () => {
  let triggerCenter: (el: Element) => void
  let restoreIO: () => void

  beforeEach(() => {
    // jsdom は onscrollend を持つが実イベントは発火しないため debounce(100ms) 経路を強制する
    Reflect.deleteProperty(window, 'onscrollend')
    const io = installCenterObserver()
    triggerCenter = io.triggerCenter
    restoreIO = io.restore
  })

  afterEach(() => {
    restoreIO()
    vi.useRealTimers()
  })

  const renderAutoplay = (
    props: Partial<Pick<CarouselProps, 'autoplay' | 'onChange'>> = {},
  ) => {
    const { container } = render(
      <Carousel autoplay={{ interval: 3000 }} {...props}>
        <div>0</div>
        <div>1</div>
        <div>2</div>
      </Carousel>,
    )
    const root = container.querySelector('.charcoal-carousel') as HTMLElement
    const scroller = container.querySelector(
      '.charcoal-carousel__scroller',
    ) as HTMLElement
    // jsdom はレイアウトを持たないので、送り先の算出に必要な寸法を与える
    mockScrollerGeometry(scroller)
    const scrollTo = stubScrollTo(scroller)
    const slides = container.querySelectorAll(
      '.charcoal-carousel__scroller > *',
    )
    return { container, root, scroller, scrollTo, slides }
  }

  const settle = () => vi.advanceTimersByTime(150)

  it('interval 経過で次のスライドの静止位置へ smooth スクロールする', () => {
    vi.useFakeTimers()
    try {
      const { scrollTo } = renderAutoplay()
      expect(scrollTo).not.toHaveBeenCalled()
      vi.advanceTimersByTime(3000)
      // mockScrollerGeometry: clientWidth 800 / 子は offsetLeft i*400・offsetWidth 380。
      // 既定は size M ＝ snapType 'none' なので start（実座標）に寄せる: 0, 400, 800。
      expect(scrollTo).toHaveBeenCalledExactlyOnceWith({
        left: 400,
        behavior: 'smooth',
      })
    } finally {
      vi.useRealTimers()
    }
  })

  it('autoplay={true} は既定の 5000ms で回る', () => {
    vi.useFakeTimers()
    try {
      const { scrollTo } = renderAutoplay({ autoplay: true })
      vi.advanceTimersByTime(4999)
      expect(scrollTo).not.toHaveBeenCalled()
      vi.advanceTimersByTime(1)
      expect(scrollTo).toHaveBeenCalledTimes(1)
    } finally {
      vi.useRealTimers()
    }
  })

  it('autoplay 未指定 / false ならタイマーを張らない', () => {
    vi.useFakeTimers()
    try {
      const a = renderAutoplay({ autoplay: undefined })
      const b = renderAutoplay({ autoplay: false })
      vi.advanceTimersByTime(60_000)
      expect(a.scrollTo).not.toHaveBeenCalled()
      expect(b.scrollTo).not.toHaveBeenCalled()
    } finally {
      vi.useRealTimers()
    }
  })

  it.each([0, -1, Number.NaN, Number.POSITIVE_INFINITY, 2_147_483_648])(
    '無効な interval=%s では既定値 (5000ms) にフォールバックし、開発時は警告する',
    (interval) => {
      vi.useFakeTimers()
      const error = vi.spyOn(console, 'error').mockImplementation(() => {})
      try {
        const { scrollTo } = renderAutoplay({ autoplay: { interval } })
        expect(error).toHaveBeenCalledWith(
          expect.stringContaining('"interval"'),
        )
        vi.advanceTimersByTime(4999)
        expect(scrollTo).not.toHaveBeenCalled()
        vi.advanceTimersByTime(1)
        expect(scrollTo).toHaveBeenCalledTimes(1)
      } finally {
        error.mockRestore()
        vi.useRealTimers()
      }
    },
  )

  it('hover 中は進まず、外すと再開する', () => {
    vi.useFakeTimers()
    try {
      const { root, scrollTo } = renderAutoplay()
      act(() => {
        root.dispatchEvent(
          Object.assign(new Event('pointerenter'), { pointerType: 'mouse' }),
        )
      })
      vi.advanceTimersByTime(3000)
      expect(scrollTo).not.toHaveBeenCalled()

      act(() => {
        root.dispatchEvent(
          Object.assign(new Event('pointerleave'), { pointerType: 'mouse' }),
        )
      })
      vi.advanceTimersByTime(3000)
      expect(scrollTo).toHaveBeenCalledTimes(1)
    } finally {
      vi.useRealTimers()
    }
  })

  it('pauseOnHover: false なら hover でも止まらない', () => {
    vi.useFakeTimers()
    try {
      const { root, scrollTo } = renderAutoplay({
        autoplay: { interval: 3000, pauseOnHover: false },
      })
      act(() => {
        root.dispatchEvent(
          Object.assign(new Event('pointerenter'), { pointerType: 'mouse' }),
        )
      })
      vi.advanceTimersByTime(3000)
      expect(scrollTo).toHaveBeenCalledTimes(1)
    } finally {
      vi.useRealTimers()
    }
  })

  it('マウント時に既にポインタが乗っていれば止まっている', () => {
    vi.useFakeTimers()
    setHovered(true)
    try {
      const { scrollTo } = renderAutoplay()
      vi.advanceTimersByTime(3000)
      expect(scrollTo).not.toHaveBeenCalled()
    } finally {
      vi.useRealTimers()
    }
  })

  it('キーボードフォーカスが Carousel 内にある間は進まない', () => {
    vi.useFakeTimers()
    try {
      const { scroller, scrollTo } = renderAutoplay()
      // react-aria は document 上の keydown でフォーカスの由来を keyboard と判定する
      fireEvent.keyDown(document.body, { key: 'Tab' })
      act(() => scroller.focus())
      vi.advanceTimersByTime(3000)
      expect(scrollTo).not.toHaveBeenCalled()

      act(() => scroller.blur())
      vi.advanceTimersByTime(3000)
      expect(scrollTo).toHaveBeenCalledTimes(1)
    } finally {
      vi.useRealTimers()
    }
  })

  it('手動スクロールの静止で滞留が頭から数え直される', () => {
    vi.useFakeTimers()
    try {
      const { scroller, scrollTo } = renderAutoplay()
      vi.advanceTimersByTime(2000)
      scroller.dispatchEvent(new Event('scroll'))
      settle()
      // 到着（静止）は scroll(t=2000) から debounce(100ms) 後の t=2100。
      // 滞留はそこから数え直すので次の送りは t=5100。
      vi.advanceTimersByTime(2949)
      expect(scrollTo).not.toHaveBeenCalled()
      vi.advanceTimersByTime(1)
      expect(scrollTo).toHaveBeenCalledTimes(1)
    } finally {
      vi.useRealTimers()
    }
  })

  it('自動送りの滞留は到着（静止）から数える', () => {
    vi.useFakeTimers()
    try {
      const { scrollTo } = renderAutoplay()
      // t=3000: 送り。stubScrollTo が scroll を出し、debounce(100ms) で t=3100 に静止する。
      vi.advanceTimersByTime(3000)
      expect(scrollTo).toHaveBeenCalledTimes(1)
      // t=6000: 送りから 3000ms 経ったが、到着（t=3100）からは 2900ms なので送らない
      vi.advanceTimersByTime(3000)
      expect(scrollTo).toHaveBeenCalledTimes(1)
      // t=6100: 到着から 3000ms
      vi.advanceTimersByTime(100)
      expect(scrollTo).toHaveBeenCalledTimes(2)
    } finally {
      vi.useRealTimers()
    }
  })

  it('自動送りの着地は onChange に source=auto で通知される', () => {
    vi.useFakeTimers()
    try {
      const onChange = vi.fn()
      const { slides } = renderAutoplay({ onChange })
      vi.advanceTimersByTime(3000)
      triggerCenter(slides[1])
      settle()
      expect(onChange).toHaveBeenCalledExactlyOnceWith({
        index: 1,
        source: 'auto',
      })
    } finally {
      vi.useRealTimers()
    }
  })

  it('自動送り中のスワイプは source=pointer に帰属する', () => {
    vi.useFakeTimers()
    try {
      const onChange = vi.fn()
      const { scroller, slides } = renderAutoplay({ onChange })
      vi.advanceTimersByTime(3000)
      scroller.dispatchEvent(new Event('pointerdown', { bubbles: true }))
      scroller.dispatchEvent(new Event('scroll'))
      window.dispatchEvent(new Event('pointerup', { bubbles: true }))
      triggerCenter(slides[1])
      settle()
      expect(onChange).toHaveBeenCalledExactlyOnceWith({
        index: 1,
        source: 'pointer',
      })
    } finally {
      vi.useRealTimers()
    }
  })

  it('prefers-reduced-motion: reduce では一切進まない', () => {
    vi.useFakeTimers()
    const original = window.matchMedia
    window.matchMedia = vi.fn(
      () =>
        ({
          matches: true,
          addEventListener: vi.fn(),
          removeEventListener: vi.fn(),
        }) as unknown as MediaQueryList,
    ) as typeof window.matchMedia
    try {
      const { scrollTo } = renderAutoplay()
      vi.advanceTimersByTime(60_000)
      expect(scrollTo).not.toHaveBeenCalled()
    } finally {
      window.matchMedia = original
      vi.useRealTimers()
    }
  })
})
