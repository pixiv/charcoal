import { createRef } from 'react'
import { render, screen, fireEvent, act } from '@testing-library/react'
import { renderToString } from 'react-dom/server'
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest'
import Carousel, {
  type CarouselAutoplay,
  type CarouselChangeEvent,
  type CarouselHandlerRef,
  type CarouselDefaultScroll,
} from '.'

const slides = Array.from({ length: 6 }, (_, i) => (
  <div key={`item-${i}`} data-testid={`slide-${i}`}>
    Slide {i}
  </div>
))

function mockScrollerGeometry(
  el: HTMLElement,
  { scrollLeft = 0, scrollWidth = 2400, clientWidth = 800 } = {},
) {
  Object.defineProperty(el, 'scrollLeft', {
    get: () => scrollLeft,
    set: vi.fn(),
    configurable: true,
  })
  Object.defineProperty(el, 'scrollWidth', {
    value: scrollWidth,
    configurable: true,
  })
  Object.defineProperty(el, 'clientWidth', {
    value: clientWidth,
    configurable: true,
  })

  for (let i = 0; i < el.children.length; i++) {
    const child = el.children[i] as HTMLElement
    Object.defineProperty(child, 'offsetLeft', {
      value: i * 400,
      configurable: true,
    })
    Object.defineProperty(child, 'offsetWidth', {
      value: 380,
      configurable: true,
    })
  }
}

function getScroller() {
  return document.querySelector('.charcoal-carousel__scroller') as HTMLElement
}

// 各 observer が「observe した要素 → コールバック」を覚え、テストから任意要素の
// intersection を発火できるようにする（新設計は item ごとに observer を持つ）。
type IOEntry = { cb: (entries: unknown[]) => void; els: Set<Element> }
const ioRegistry: IOEntry[] = []

function installIOMock() {
  ioRegistry.length = 0
  const orig = globalThis.IntersectionObserver
  globalThis.IntersectionObserver = class {
    private entry: IOEntry
    constructor(cb: (entries: unknown[]) => void) {
      this.entry = { cb, els: new Set() }
      ioRegistry.push(this.entry)
    }
    observe = (el: Element) => this.entry.els.add(el)
    unobserve = (el: Element) => this.entry.els.delete(el)
    disconnect = () => this.entry.els.clear()
    takeRecords = () => []
  } as unknown as typeof globalThis.IntersectionObserver
  return () => {
    globalThis.IntersectionObserver = orig
  }
}

function fireIntersect(el: Element) {
  for (const e of ioRegistry) {
    if (e.els.has(el)) e.cb([{ isIntersecting: true, target: el }])
  }
}

describe('Carousel', () => {
  describe('rendering', () => {
    it('renders all items', () => {
      render(<Carousel>{slides}</Carousel>)
      for (let i = 0; i < 6; i++) {
        expect(screen.getByTestId(`slide-${i}`)).toBeInTheDocument()
      }
    })

    it('has carousel ARIA attributes', () => {
      render(<Carousel>{slides}</Carousel>)
      const region = screen.getByRole('region')
      expect(region).toHaveAttribute('aria-roledescription', 'carousel')
      expect(region).toHaveAttribute('aria-label', 'Carousel')
    })
  })

  describe('gap', () => {
    it('sets --charcoal-carousel-gap in px when gap is a number', () => {
      const { container } = render(<Carousel gap={24}>{slides}</Carousel>)
      const root = container.querySelector('.charcoal-carousel') as HTMLElement
      expect(root.style.getPropertyValue('--charcoal-carousel-gap')).toBe(
        '24px',
      )
    })

    it('passes string gap values through as-is', () => {
      const { container } = render(<Carousel gap="1rem">{slides}</Carousel>)
      const root = container.querySelector('.charcoal-carousel') as HTMLElement
      expect(root.style.getPropertyValue('--charcoal-carousel-gap')).toBe(
        '1rem',
      )
    })

    it('does not set the custom property when gap is not specified', () => {
      const { container } = render(<Carousel>{slides}</Carousel>)
      const root = container.querySelector('.charcoal-carousel') as HTMLElement
      expect(root.style.getPropertyValue('--charcoal-carousel-gap')).toBe('')
    })
  })

  describe('Size M (default)', () => {
    it('shows navigation buttons', () => {
      render(<Carousel size="M">{slides}</Carousel>)
      expect(
        screen.getByRole('button', { name: 'Previous' }),
      ).toBeInTheDocument()
      expect(screen.getByRole('button', { name: 'Next' })).toBeInTheDocument()
    })

    it('hides indicator by default', () => {
      const { container } = render(<Carousel size="M">{slides}</Carousel>)
      const indicator = container.querySelector('.charcoal-carousel__indicator')
      expect(indicator).toHaveAttribute('data-visible', 'false')
    })
  })

  describe('Size S', () => {
    it('hides navigation buttons by default', () => {
      const { container } = render(<Carousel size="S">{slides}</Carousel>)
      const nav = container.querySelector('.charcoal-carousel__navigation')
      expect(nav).toHaveAttribute('data-visible', 'false')
    })
  })

  describe('navigation button state', () => {
    it('disables prev button at scroll start', () => {
      render(<Carousel>{slides}</Carousel>)
      const prev = screen.getByRole('button', { name: 'Previous' })
      expect(prev).toBeDisabled()
    })

    it('enables next button when scrollable content exists', () => {
      render(<Carousel>{slides}</Carousel>)
      const scroller = getScroller()
      mockScrollerGeometry(scroller, { scrollLeft: 0 })
      act(() => {
        fireEvent.scroll(scroller)
      })
      const next = screen.getByRole('button', { name: 'Next' })
      expect(next).not.toBeDisabled()
    })
  })

  describe('scrollByStep (0.75x viewport)', () => {
    it('scrolls to current + 0.75x viewport on next button click', () => {
      render(<Carousel>{slides}</Carousel>)
      const scroller = getScroller()
      mockScrollerGeometry(scroller, { scrollLeft: 100 })
      act(() => {
        fireEvent.scroll(scroller)
      })

      const scrollToSpy = vi.fn()
      scroller.scrollTo = scrollToSpy

      const next = screen.getByRole('button', { name: 'Next' })
      fireEvent.click(next)

      // 走行中の目標を積算できるよう、相対 scrollBy ではなく絶対座標で送る
      expect(scrollToSpy).toHaveBeenCalledWith({
        left: 700,
        behavior: 'smooth',
      })
    })

    it('scrolls to current − 0.75x viewport on prev button click', () => {
      render(<Carousel>{slides}</Carousel>)
      const scroller = getScroller()
      mockScrollerGeometry(scroller, { scrollLeft: 400 })
      act(() => {
        fireEvent.scroll(scroller)
      })

      const scrollToSpy = vi.fn()
      scroller.scrollTo = scrollToSpy

      const prev = screen.getByRole('button', { name: 'Previous' })
      fireEvent.click(prev)

      // 400 − 600 は負なので 0 へクランプする
      expect(scrollToSpy).toHaveBeenCalledWith({
        left: 0,
        behavior: 'smooth',
      })
    })

    it('respects custom scrollStep ratio (number)', () => {
      render(<Carousel scrollStep={0.5}>{slides}</Carousel>)
      const scroller = getScroller()
      mockScrollerGeometry(scroller, { scrollLeft: 100 })
      act(() => {
        fireEvent.scroll(scroller)
      })

      const scrollToSpy = vi.fn()
      scroller.scrollTo = scrollToSpy

      const next = screen.getByRole('button', { name: 'Next' })
      fireEvent.click(next)

      expect(scrollToSpy).toHaveBeenCalledWith({
        left: 500,
        behavior: 'smooth',
      })
    })

    it('respects custom scrollStep function (returns px)', () => {
      const scrollStep = vi.fn(
        ({ clientWidth }: { clientWidth: number }) => clientWidth - 48,
      )
      render(<Carousel scrollStep={scrollStep}>{slides}</Carousel>)
      const scroller = getScroller()
      mockScrollerGeometry(scroller, { scrollLeft: 100 })
      act(() => {
        fireEvent.scroll(scroller)
      })

      const scrollToSpy = vi.fn()
      scroller.scrollTo = scrollToSpy

      const next = screen.getByRole('button', { name: 'Next' })
      fireEvent.click(next)

      expect(scrollStep).toHaveBeenCalledWith(
        expect.objectContaining({
          clientWidth: 800,
          direction: 'next',
        }),
      )
      // scrollLeft(100) + clientWidth(800) - 48 = 852
      expect(scrollToSpy).toHaveBeenCalledWith({
        left: 852,
        behavior: 'smooth',
      })
    })
  })

  describe('keyboard navigation', () => {
    it('scrolls next by 0.75x viewport on ArrowRight', () => {
      render(<Carousel>{slides}</Carousel>)
      const scroller = getScroller()
      mockScrollerGeometry(scroller, { scrollLeft: 100 })
      act(() => {
        fireEvent.scroll(scroller)
      })

      const scrollToSpy = vi.fn()
      scroller.scrollTo = scrollToSpy

      fireEvent.keyDown(scroller, { key: 'ArrowRight' })

      expect(scrollToSpy).toHaveBeenCalledWith({
        left: 700,
        behavior: 'smooth',
      })
    })

    it('scrolls prev by negative 0.75x viewport on ArrowLeft', () => {
      render(<Carousel>{slides}</Carousel>)
      const scroller = getScroller()
      mockScrollerGeometry(scroller, { scrollLeft: 400 })
      act(() => {
        fireEvent.scroll(scroller)
      })

      const scrollToSpy = vi.fn()
      scroller.scrollTo = scrollToSpy

      fireEvent.keyDown(scroller, { key: 'ArrowLeft' })

      expect(scrollToSpy).toHaveBeenCalledWith({
        left: 0,
        behavior: 'smooth',
      })
    })

    it('ignores unrelated keys', () => {
      render(<Carousel>{slides}</Carousel>)
      const scroller = getScroller()
      mockScrollerGeometry(scroller, { scrollLeft: 100 })

      const scrollToSpy = vi.fn()
      scroller.scrollTo = scrollToSpy

      fireEvent.keyDown(scroller, { key: 'Enter' })

      expect(scrollToSpy).not.toHaveBeenCalled()
    })
  })

  describe('indicator navigation', () => {
    it('scrolls the clicked item into view via the store (item self-scrolls)', () => {
      // jsdom には scrollIntoView が無いのでモックを定義する。
      const scrollIntoView = vi.fn()
      Element.prototype.scrollIntoView = scrollIntoView
      const { container } = render(<Carousel size="S">{slides}</Carousel>)

      const dots = container.querySelectorAll(
        '.charcoal-carousel__indicator__item',
      )
      act(() => {
        fireEvent.click(dots[2])
      })

      // 対象 item だけが自分自身に scrollIntoView を発行する。
      expect(scrollIntoView).toHaveBeenCalledTimes(1)
      expect(scrollIntoView).toHaveBeenCalledWith({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      })
      const itemEls = container.querySelectorAll('.charcoal-carousel__item')
      expect(scrollIntoView.mock.contexts[0]).toBe(itemEls[2])

      delete (Element.prototype as { scrollIntoView?: unknown }).scrollIntoView
    })
  })

  describe('activeIndex (item self-detection)', () => {
    it('item が中央に入ると activeIndex が更新され indicator に反映される', () => {
      const restore = installIOMock()
      const { container } = render(
        <Carousel size="M" indicator>
          {slides}
        </Carousel>,
      )
      const itemEls = container.querySelectorAll('.charcoal-carousel__item')
      act(() => {
        fireIntersect(itemEls[2])
      })
      const dots = container.querySelectorAll(
        '.charcoal-carousel__indicator__item',
      )
      expect(dots[2]).toHaveAttribute('data-active', 'true')
      restore()
    })
  })

  describe('scroll-state data attributes (mask)', () => {
    it('reflects canPrev/canNext on the root element', () => {
      const { container } = render(<Carousel hasGradient>{slides}</Carousel>)
      const root = container.querySelector('.charcoal-carousel')
      const scroller = getScroller()
      mockScrollerGeometry(scroller, { scrollLeft: 100 })
      act(() => {
        fireEvent.scroll(scroller)
      })
      expect(root).toHaveAttribute('data-can-prev', 'true')
      expect(root).toHaveAttribute('data-can-next', 'true')
    })

    it('marks data-can-prev false at the start edge', () => {
      const { container } = render(<Carousel hasGradient>{slides}</Carousel>)
      const root = container.querySelector('.charcoal-carousel')
      const scroller = getScroller()
      mockScrollerGeometry(scroller, { scrollLeft: 0 })
      act(() => {
        fireEvent.scroll(scroller)
      })
      expect(root).toHaveAttribute('data-can-prev', 'false')
    })
  })

  describe('defaultScroll (initial position)', () => {
    let lastSetLeft: number | undefined
    let swSpy: ReturnType<typeof vi.spyOn>
    let cwSpy: ReturnType<typeof vi.spyOn>
    let slSpy: ReturnType<typeof vi.spyOn>

    beforeEach(() => {
      lastSetLeft = undefined
      swSpy = vi
        .spyOn(HTMLElement.prototype, 'scrollWidth', 'get')
        .mockReturnValue(2400)
      cwSpy = vi
        .spyOn(HTMLElement.prototype, 'clientWidth', 'get')
        .mockReturnValue(800)
      slSpy = vi
        .spyOn(HTMLElement.prototype, 'scrollLeft', 'set')
        .mockImplementation((v: number) => {
          lastSetLeft = v
        })
    })

    afterEach(() => {
      swSpy.mockRestore()
      cwSpy.mockRestore()
      slSpy.mockRestore()
    })

    it('defaults to the left edge (0)', () => {
      render(<Carousel>{slides}</Carousel>)
      expect(lastSetLeft).toBe(0)
    })

    it('centers the content when align=center (maxScroll / 2)', () => {
      render(<Carousel defaultScroll={{ align: 'center' }}>{slides}</Carousel>)
      expect(lastSetLeft).toBe(800)
    })

    it('aligns to the right edge when align=right (maxScroll)', () => {
      render(<Carousel defaultScroll={{ align: 'right' }}>{slides}</Carousel>)
      expect(lastSetLeft).toBe(1600)
    })

    it('applies offset from the base position', () => {
      render(
        <Carousel defaultScroll={{ align: 'left', offset: 100 }}>
          {slides}
        </Carousel>,
      )
      expect(lastSetLeft).toBe(100)
    })
  })

  describe('defaultScroll robustness (late-loading content)', () => {
    let roCallbacks: Array<(entries: Array<{ target: Element }>) => void>
    let scrollWidthVal: number
    let lastSetLeft: number | undefined
    let origRO: typeof globalThis.ResizeObserver
    let spies: Array<ReturnType<typeof vi.spyOn>>

    beforeEach(() => {
      roCallbacks = []
      scrollWidthVal = 800 // == clientWidth -> maxScroll 0 at mount
      lastSetLeft = undefined
      origRO = globalThis.ResizeObserver
      globalThis.ResizeObserver = class {
        observe = vi.fn()
        unobserve = vi.fn()
        disconnect = vi.fn()
        constructor(cb: (entries: Array<{ target: Element }>) => void) {
          roCallbacks.push(cb)
        }
      } as unknown as typeof globalThis.ResizeObserver
      spies = [
        vi
          .spyOn(HTMLElement.prototype, 'scrollWidth', 'get')
          .mockImplementation(() => scrollWidthVal),
        vi
          .spyOn(HTMLElement.prototype, 'clientWidth', 'get')
          .mockReturnValue(800),
        vi
          .spyOn(HTMLElement.prototype, 'scrollLeft', 'set')
          .mockImplementation((v: number) => {
            lastSetLeft = v
          }),
      ]
    })

    afterEach(() => {
      spies.forEach((s) => s.mockRestore())
      globalThis.ResizeObserver = origRO
    })

    it('re-applies the initial position when content width settles later', () => {
      render(<Carousel defaultScroll={{ align: 'right' }}>{slides}</Carousel>)
      // at mount the content is not laid out yet (maxScroll 0) -> right -> 0
      expect(lastSetLeft).toBe(0)

      // images finish loading -> content width grows
      scrollWidthVal = 2400
      lastSetLeft = undefined
      const entries = [...getScroller().children].map((el) => ({ target: el }))
      act(() => {
        roCallbacks.forEach((cb) => cb(entries))
      })

      expect(lastSetLeft).toBe(1600)
    })

    it('stops re-applying once the user interacts', () => {
      render(<Carousel defaultScroll={{ align: 'right' }}>{slides}</Carousel>)

      // user interacts (pointerdown on the scroller) before the content settles
      fireEvent.pointerDown(getScroller())

      scrollWidthVal = 2400
      lastSetLeft = undefined
      const entries = [...getScroller().children].map((el) => ({ target: el }))
      act(() => {
        roCallbacks.forEach((cb) => cb(entries))
      })

      expect(lastSetLeft).toBeUndefined()
    })
  })

  describe('children (sandbox-compatible API)', () => {
    it('renders each direct child as one slide', () => {
      const { container } = render(<Carousel>{slides}</Carousel>)
      expect(
        container.querySelectorAll('.charcoal-carousel__item'),
      ).toHaveLength(6)
    })
  })

  describe('props override defaults', () => {
    it('shows indicator on Size M when prop is true', () => {
      const { container } = render(
        <Carousel size="M" indicator>
          {slides}
        </Carousel>,
      )
      expect(container.querySelector("[data-indicator='true']")).toBeTruthy()
    })

    it('shows navigation on Size S when prop is true', () => {
      render(
        <Carousel size="S" navigationButtons>
          {slides}
        </Carousel>,
      )
      const nav = document.querySelector('.charcoal-carousel__navigation')
      expect(nav).toHaveAttribute('data-visible', 'true')
    })
  })

  describe('variant data attributes', () => {
    it('sets gradient data attribute', () => {
      const { container } = render(<Carousel hasGradient>{slides}</Carousel>)
      expect(container.querySelector("[data-has-gradient='true']")).toBeTruthy()
    })

    it('sets full-width data attribute', () => {
      const { container } = render(<Carousel fullWidth>{slides}</Carousel>)
      expect(container.querySelector("[data-full-width='true']")).toBeTruthy()
    })
  })

  describe('scrollSnap', () => {
    const getRegion = () => screen.getByRole('region')

    it('defaults to none / center on Size M (sandbox 同等の 0.75)', () => {
      render(<Carousel size="M">{slides}</Carousel>)
      expect(getRegion()).toHaveAttribute('data-scroll-snap-type', 'none')
      expect(getRegion()).toHaveAttribute('data-scroll-snap-align', 'center')
    })

    it('defaults to mandatory on Size S', () => {
      render(<Carousel size="S">{slides}</Carousel>)
      expect(getRegion()).toHaveAttribute('data-scroll-snap-type', 'mandatory')
    })

    it('overrides type per prop (item-ごと mandatory)', () => {
      render(
        <Carousel size="M" scrollSnap={{ type: 'mandatory' }}>
          {slides}
        </Carousel>,
      )
      expect(getRegion()).toHaveAttribute('data-scroll-snap-type', 'mandatory')
    })

    it('overrides align per prop', () => {
      render(<Carousel scrollSnap={{ align: 'start' }}>{slides}</Carousel>)
      expect(getRegion()).toHaveAttribute('data-scroll-snap-align', 'start')
    })

    it('supports disabling snap (none)', () => {
      render(<Carousel scrollSnap={{ type: 'none' }}>{slides}</Carousel>)
      expect(getRegion()).toHaveAttribute('data-scroll-snap-type', 'none')
    })
  })

  describe('react-sandbox compat (callbacks / ref)', () => {
    it('calls onScroll with scrollLeft on scroll', () => {
      const onScroll = vi.fn()
      render(<Carousel onScroll={onScroll}>{slides}</Carousel>)
      const scroller = getScroller()
      mockScrollerGeometry(scroller, { scrollLeft: 240 })
      act(() => {
        fireEvent.scroll(scroller)
      })
      expect(onScroll).toHaveBeenCalledWith(240)
    })

    it('calls onScrollStateChange when scrollability changes', () => {
      const onScrollStateChange = vi.fn()
      render(
        <Carousel onScrollStateChange={onScrollStateChange}>{slides}</Carousel>,
      )
      const scroller = getScroller()
      mockScrollerGeometry(scroller, { scrollLeft: 100 })
      act(() => {
        fireEvent.scroll(scroller)
      })
      expect(onScrollStateChange).toHaveBeenCalledWith(true)
    })

    it('exposes resetScroll() via ref to restore the initial position', () => {
      let lastSetLeft: number | undefined
      const spies = [
        vi
          .spyOn(HTMLElement.prototype, 'scrollWidth', 'get')
          .mockReturnValue(2400),
        vi
          .spyOn(HTMLElement.prototype, 'clientWidth', 'get')
          .mockReturnValue(800),
        vi
          .spyOn(HTMLElement.prototype, 'scrollLeft', 'set')
          .mockImplementation((v: number) => {
            lastSetLeft = v
          }),
      ]
      const ref = createRef<CarouselHandlerRef>()
      render(
        <Carousel ref={ref} defaultScroll={{ align: 'right' }}>
          {slides}
        </Carousel>,
      )
      lastSetLeft = undefined
      act(() => {
        ref.current?.resetScroll()
      })
      // align right -> maxScroll = 2400 - 800 = 1600
      expect(lastSetLeft).toBe(1600)
      spies.forEach((s) => s.mockRestore())
    })

    it('calls onResize with clientWidth when the scroller resizes', () => {
      const roCallbacks: Array<(e: Array<{ target: Element }>) => void> = []
      const origRO = globalThis.ResizeObserver
      globalThis.ResizeObserver = class {
        observe = vi.fn()
        unobserve = vi.fn()
        disconnect = vi.fn()
        constructor(cb: (e: Array<{ target: Element }>) => void) {
          roCallbacks.push(cb)
        }
      } as unknown as typeof globalThis.ResizeObserver
      const cwSpy = vi
        .spyOn(HTMLElement.prototype, 'clientWidth', 'get')
        .mockReturnValue(640)
      const onResize = vi.fn()
      render(<Carousel onResize={onResize}>{slides}</Carousel>)
      act(() => {
        roCallbacks.forEach((cb) => cb([{ target: getScroller() }]))
      })
      expect(onResize).toHaveBeenCalledWith(640)
      cwSpy.mockRestore()
      globalThis.ResizeObserver = origRO
    })
  })

  describe('navigation button visibility (focus modality)', () => {
    // jsdom はジオメトリが全て 0 で Next ボタンが disabled（=フォーカス不可）の
    // ままになるため、スクロール余地をモックして有効化してからフォーカスする。
    function renderWithFocusableNext() {
      render(<Carousel size="M">{slides}</Carousel>)
      const scroller = getScroller()
      mockScrollerGeometry(scroller, { scrollLeft: 0 })
      scroller.scrollBy = vi.fn()
      act(() => {
        fireEvent.scroll(scroller)
      })
      const next = screen.getByRole('button', { name: 'Next' })
      expect(next).not.toBeDisabled()
      return next
    }

    // react-aria は document 上の keydown / pointerdown でフォーカスの由来
    // （keyboard / pointer）を判定するため、focus() の前にイベントを発火して
    // モダリティを切り替える。
    it('does not mark focus-visible when a button is focused by pointer', () => {
      const next = renderWithFocusableNext()
      fireEvent.pointerDown(next)
      fireEvent.mouseDown(next)
      act(() => next.focus())
      fireEvent.click(next)
      expect(document.activeElement).toBe(next)
      expect(screen.getByRole('region')).not.toHaveAttribute(
        'data-focus-visible-within',
      )
    })

    it('marks focus-visible when a button is focused by keyboard', () => {
      const next = renderWithFocusableNext()
      fireEvent.keyDown(document.body, { key: 'Tab' })
      act(() => next.focus())
      expect(screen.getByRole('region')).toHaveAttribute(
        'data-focus-visible-within',
        'true',
      )
    })

    it('clears focus-visible when focus leaves the carousel', () => {
      const next = renderWithFocusableNext()
      fireEvent.keyDown(document.body, { key: 'Tab' })
      act(() => next.focus())
      act(() => next.blur())
      expect(screen.getByRole('region')).not.toHaveAttribute(
        'data-focus-visible-within',
      )
    })
  })

  describe('loop', () => {
    // item の offsetLeft/offsetWidth は「scroller 内の位置 × slotWidth」の getter で導出する。
    // clone 枚数が実測で増減して要素が作り直されるため、要素単位の固定値モックでは
    // 再生成後の clone に追従できない。
    //
    // 既定値（slotWidth 400 / clientWidth 800）では clone は各端 9 枚
    // （被覆要求 3.5 viewport = 2800 に 1 周 2380 + 残り 420 を 2 枚 + 部分見え対策の 1 枚）:
    //   children = clone 9 + 実 6 + clone 9 = 24
    //   setWidth = children[15].offsetLeft − children[9].offsetLeft = 2400
    //   maxScroll = 9600 − 800 = 8800 / 帯域 = 中央 [(8800−2400)/2, +2400) = [3200, 5600)
    let slotWidth = 400
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

    // scroller 自身の scrollLeft/scrollWidth/clientWidth は要素単位で実測モックする。
    function mockLoopGeometry(
      scroller: HTMLElement,
      { scrollLeft = 4400, slotWidth: slot = 400, scrollWidth = 9600 } = {},
    ) {
      slotWidth = slot
      let sl = scrollLeft
      Object.defineProperty(scroller, 'scrollLeft', {
        get: () => sl,
        set: (v: number) => {
          sl = v
        },
        configurable: true,
      })
      Object.defineProperty(scroller, 'scrollWidth', {
        value: scrollWidth,
        configurable: true,
      })
      Object.defineProperty(scroller, 'clientWidth', {
        value: 800,
        configurable: true,
      })
    }

    let roCallbacks: Array<(entries: unknown[]) => void>
    let origRO: typeof globalThis.ResizeObserver

    beforeEach(() => {
      slotWidth = 400
      Object.defineProperty(HTMLElement.prototype, 'offsetLeft', {
        configurable: true,
        get(this: HTMLElement) {
          const i = slotIndex(this)
          return i == null ? 0 : i * slotWidth
        },
      })
      Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
        configurable: true,
        get(this: HTMLElement) {
          return slotIndex(this) == null ? 0 : slotWidth - 20
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
      // fake timers を使うテストが assert 失敗しても後続へ漏らさない
      vi.useRealTimers()
    })

    // 幾何モック → RO 発火で実測キャッシュ + 初期位置適用、までを共通化
    function setupLoop(ui: Parameters<typeof render>[0], geometry = {}) {
      const rendered = render(ui)
      const scroller = getScroller()
      const scrollTo = vi.fn()
      scroller.scrollTo = scrollTo
      mockLoopGeometry(scroller, geometry)
      act(() => {
        roCallbacks.forEach((cb) => cb([{ target: scroller }]))
      })
      return { ...rendered, scroller, scrollTo }
    }

    describe('loop (clone slides)', () => {
      it('loop で各端に clone を加えて描画する', () => {
        const { container } = render(<Carousel loop>{slides}</Carousel>)
        // clone 枚数は実測で決まる。この describe のモックで item 幾何はスロット
        // 実測になるが scroller の clientWidth は 0 のままなので、被覆要求 0 に対し
        // 「覆う最小枚数 1 + 部分見え対策 1」= 各端 2 枚になる。
        expect(
          container.querySelectorAll('.charcoal-carousel__item'),
        ).toHaveLength(10)
        expect(
          container.querySelectorAll('.charcoal-carousel__item[data-clone]'),
        ).toHaveLength(4)
      })

      it('indicator の dot は実スライド数のまま', () => {
        const { container } = render(
          <Carousel loop indicator>
            {slides}
          </Carousel>,
        )
        expect(
          container.querySelectorAll('.charcoal-carousel__indicator__item'),
        ).toHaveLength(6)
      })

      it('clone は aria-hidden かつ inert', () => {
        const { container } = render(<Carousel loop>{slides}</Carousel>)
        const clones = container.querySelectorAll(
          '.charcoal-carousel__item[data-clone]',
        )
        clones.forEach((clone) => {
          expect(clone).toHaveAttribute('aria-hidden', 'true')
        })
        expect((clones[0] as HTMLElement & { inert?: boolean }).inert).toBe(
          true,
        )
      })

      it('scroll 命令では実セットの要素だけが scrollIntoView する', () => {
        const scrollIntoView = vi.fn()
        Element.prototype.scrollIntoView = scrollIntoView
        const { container } = render(
          <Carousel size="S" loop>
            {slides}
          </Carousel>,
        )
        const dots = container.querySelectorAll(
          '.charcoal-carousel__indicator__item',
        )
        act(() => {
          fireEvent.click(dots[2])
        })
        expect(scrollIntoView).toHaveBeenCalledTimes(1)
        const realItems = container.querySelectorAll(
          '.charcoal-carousel__item:not([data-clone])',
        )
        expect(scrollIntoView.mock.contexts[0]).toBe(realItems[2])
        delete (Element.prototype as { scrollIntoView?: unknown })
          .scrollIntoView
      })

      it('clone の中央到達でも実セットと同じ index を activeIndex にする', () => {
        const restore = installIOMock()
        const { container } = render(
          <Carousel size="M" indicator loop>
            {slides}
          </Carousel>,
        )
        // clone-before 帯は実セット末尾の複製。1 枚目 = 論理 index 4（n=6, k=2）
        const cloneEls = container.querySelectorAll(
          '.charcoal-carousel__item[data-clone]',
        )
        act(() => {
          fireIntersect(cloneEls[0])
        })
        const dots = container.querySelectorAll(
          '.charcoal-carousel__indicator__item',
        )
        expect(dots[4]).toHaveAttribute('data-active', 'true')
        restore()
      })

      it('children が空になっても clone 描画でクラッシュしない', () => {
        const { container, rerender } = render(
          <Carousel loop>{slides}</Carousel>,
        )
        expect(
          container.querySelectorAll('.charcoal-carousel__item[data-clone]')
            .length,
        ).toBeGreaterThan(0)
        // 非同期フィルタ等で children が空になると、clone 枚数 state が
        // 効果で 0 に戻るより先に空 slides で render が走る
        rerender(<Carousel loop>{[]}</Carousel>)
        expect(
          container.querySelectorAll('.charcoal-carousel__item'),
        ).toHaveLength(0)
      })

      it('clone は ref を複製しない（ユーザーの ref は実スライドだけを指す）', () => {
        const refCalls: HTMLElement[] = []
        const refSlides = Array.from({ length: 6 }, (_, i) => (
          <div
            key={i}
            // index 0 は clone-after 帯にも複製される（jsdom は各端 2 枚）
            ref={
              i === 0
                ? (el: HTMLElement | null) => {
                    if (el) refCalls.push(el)
                  }
                : undefined
            }
          >
            {i + 1}
          </div>
        ))
        render(<Carousel loop>{refSlides}</Carousel>)
        expect(refCalls).toHaveLength(1)
        expect(refCalls[0].closest('[data-clone]')).toBeNull()
      })

      it('型: loop と defaultScroll は併用できない', () => {
        const defaultScroll: CarouselDefaultScroll = { align: 'center' }
        const invalid = (
          // @ts-expect-error loop=true では defaultScroll を渡せない（初期位置は centerItem が決める）
          <Carousel loop defaultScroll={defaultScroll}>
            {slides}
          </Carousel>
        )
        const invalidCenter = (
          // @ts-expect-error centerItem は loop 専用（非 loop では渡せない）
          <Carousel centerItem={0}>{slides}</Carousel>
        )
        const valid = (
          <Carousel loop centerItem={0}>
            {slides}
          </Carousel>
        )
        // 型検査のための式（描画はしない）
        expect(invalid).toBeTruthy()
        expect(invalidCenter).toBeTruthy()
        expect(valid).toBeTruthy()
      })
    })

    describe('initial position / teleport', () => {
      it('centerItem の実スライドが viewport 中央へ instant 配置される', () => {
        const { scrollTo } = setupLoop(
          <Carousel loop centerItem={0}>
            {slides}
          </Carousel>,
        )
        // children[9]: offsetLeft 3600, width 380 → 3600 + 190 − 400 = 3390（帯域内）
        expect(scrollTo).toHaveBeenLastCalledWith({
          left: 3390,
          behavior: 'instant',
        })
      })

      it('範囲外の centerItem は実セット先頭の左寄せに倒れる', () => {
        const { scrollTo } = setupLoop(
          <Carousel loop centerItem={99}>
            {slides}
          </Carousel>,
        )
        expect(scrollTo).toHaveBeenLastCalledWith({
          left: 3600,
          behavior: 'instant',
        })
      })

      it('NaN の centerItem も実セット先頭の左寄せに倒れる', () => {
        // NaN は < / >= の比較が全て false になり範囲ガードをすり抜けるため、
        // 整数判定で弾かないと item(cloneCount + NaN) → item(0) = clone を中央化する
        const { scrollTo } = setupLoop(
          <Carousel loop centerItem={NaN}>
            {slides}
          </Carousel>,
        )
        expect(scrollTo).toHaveBeenLastCalledWith({
          left: 3600,
          behavior: 'instant',
        })
      })

      it('ユーザー操作後は clone 枚数が変わっても初期位置へ引き戻さない', () => {
        const { scroller, scrollTo } = setupLoop(
          <Carousel loop centerItem={0}>
            {slides}
          </Carousel>,
        )
        fireEvent.pointerDown(scroller)
        scrollTo.mockClear()
        // slotWidth の変化で clone 枚数の実測が変わり、state 更新で effect が再実行される
        act(() => {
          mockLoopGeometry(scroller, { slotWidth: 300, scrollWidth: 9600 })
          roCallbacks.forEach((cb) => cb([{ target: scroller }]))
        })
        expect(scrollTo).not.toHaveBeenCalled()
      })

      it('dot ナビ後のページ送りは stale な目標から積算しない', () => {
        const scrollIntoView = vi.fn()
        Element.prototype.scrollIntoView = scrollIntoView
        try {
          const { container, scrollTo } = setupLoop(
            <Carousel loop indicator>
              {slides}
            </Carousel>,
          )
          scrollTo.mockClear()
          const next = screen.getByRole('button', { name: 'Next' })
          // 走行中の目標 4400 + 600 = 5000 が積まれる
          fireEvent.click(next)
          // dot は scroller の外にあるため INTERACTION_EVENTS では拾えないが、
          // scroll 命令の dispatch で目標が破棄される
          const dots = container.querySelectorAll(
            '.charcoal-carousel__indicator__item',
          )
          act(() => {
            fireEvent.click(dots[2])
          })
          fireEvent.click(next)
          // 破棄済みなので現在位置 4400 から積算し直す（5000 + 600 = 5600 にならない）
          expect(scrollTo).toHaveBeenLastCalledWith({
            left: 5000,
            behavior: 'smooth',
          })
        } finally {
          delete (Element.prototype as { scrollIntoView?: unknown })
            .scrollIntoView
        }
      })

      it('自動送りの目標も scrollByStep と同じくクランプして積算する', () => {
        vi.useFakeTimers()
        try {
          const { scrollTo } = setupLoop(
            // center 揃えを強制する（none だと start 揃えになり本ケースの
            // クランプが no-op になってしまうため）
            <Carousel
              loop
              autoplay={{ interval: 3000 }}
              scrollSnap={{ type: 'mandatory' }}
            >
              {slides}
            </Carousel>,
            { scrollLeft: 8600, scrollWidth: 9600 },
          )
          scrollTo.mockClear()

          vi.advanceTimersByTime(3000)

          // 末尾 clone（slot23）の中央位置は 23*400+190-400=8990 で
          // maxScroll(8800) を超える。ブラウザ側でもクランプされるので、
          // 積算する目標もクランプ後の値に揃えないと、以降の tick が
          // 「二度と届かない目標（8990）」を起点にして動けなくなる。
          expect(scrollTo).toHaveBeenLastCalledWith({
            left: 8800,
            behavior: 'smooth',
          })
        } finally {
          vi.useRealTimers()
        }
      })

      it('centerItem 未指定なら実セット先頭の左寄せで開始する', () => {
        const { scrollTo } = setupLoop(<Carousel loop>{slides}</Carousel>)
        expect(scrollTo).toHaveBeenLastCalledWith({
          left: 3600,
          behavior: 'instant',
        })
      })

      it('loop 成立時は端でも canPrev/canNext が有効', () => {
        setupLoop(<Carousel loop>{slides}</Carousel>, { scrollLeft: 0 })
        expect(
          screen.getByRole('button', { name: 'Previous' }),
        ).not.toBeDisabled()
        expect(screen.getByRole('button', { name: 'Next' })).not.toBeDisabled()
      })

      it('スクロール静止後、帯域外なら合同位置へ instant テレポートする', () => {
        vi.useFakeTimers()
        const { scroller, scrollTo } = setupLoop(
          <Carousel loop>{slides}</Carousel>,
          {
            scrollLeft: 1000,
          },
        )
        scrollTo.mockClear()
        fireEvent.scroll(scroller)
        // scrollend 対応環境と debounce フォールバックの両経路を発火させる
        fireEvent(scroller, new Event('scrollend'))
        act(() => {
          vi.advanceTimersByTime(150)
        })
        // 1000 は帯域 [3200, 5600) の外 → +2400 で 3400
        expect(scrollTo).toHaveBeenCalledWith({
          left: 3400,
          behavior: 'instant',
        })
      })

      it('scrollend 非対応環境では debounce でテレポートする', () => {
        // jsdom は onscrollend を window の own property (accessor) として持つため、
        // 一時的に削除して 'onscrollend' in window === false を再現する。
        const descriptor = Object.getOwnPropertyDescriptor(
          window,
          'onscrollend',
        )
        delete (window as { onscrollend?: unknown }).onscrollend
        expect('onscrollend' in window).toBe(false)
        try {
          vi.useFakeTimers()
          const { scroller, scrollTo } = setupLoop(
            <Carousel loop>{slides}</Carousel>,
            {
              scrollLeft: 1000,
            },
          )
          scrollTo.mockClear()
          fireEvent.scroll(scroller)
          act(() => {
            vi.advanceTimersByTime(150)
          })
          // 1000 は帯域 [3200, 5600) の外 → +2400 で 3400
          expect(scrollTo).toHaveBeenCalledWith({
            left: 3400,
            behavior: 'instant',
          })
        } finally {
          if (descriptor)
            Object.defineProperty(window, 'onscrollend', descriptor)
          vi.useRealTimers()
        }
      })

      it('走行中（scroll イベント）にはテレポートせず、静止後にのみ補正する', () => {
        const { scroller, scrollTo } = setupLoop(
          <Carousel loop>{slides}</Carousel>,
          {
            scrollLeft: 100,
          },
        )
        scrollTo.mockClear()
        // 走行中の scrollTo は momentum を中断してがくつくため、物理端付近でも撃たない
        fireEvent.scroll(scroller)
        expect(scrollTo).not.toHaveBeenCalled()
        fireEvent(scroller, new Event('scrollend'))
        // 100 → 帯域 [3200, 5600) の合同位置 +4800 = 4900
        expect(scrollTo).toHaveBeenCalledWith({
          left: 4900,
          behavior: 'instant',
        })
      })

      it('走行中でも物理端にクランプしたら即時テレポートで滑走路を回復する', () => {
        const { scroller, scrollTo } = setupLoop(
          <Carousel loop>{slides}</Carousel>,
          {
            scrollLeft: 90,
          },
        )
        scrollTo.mockClear()
        // 強フリックが滑走路を使い切り scrollLeft が物理端 0 にクランプした状況。
        // 静止(scrollend)を待つと壁に張り付いたままになるため、scroll イベントで補正する。
        scroller.scrollLeft = 0
        fireEvent.scroll(scroller)
        // 0 → 帯域 [3200, 5600) の合同位置 +4800 = 4800
        expect(scrollTo).toHaveBeenCalledWith({
          left: 4800,
          behavior: 'instant',
        })
      })

      it('実セット幅 ≤ viewport ではテレポートせず実セット先頭から開始する', () => {
        vi.useFakeTimers()
        // slotWidth 40 → 実セット幅 220 ≤ clientWidth 800 でループ不成立。
        // clone を積んでも成立しないので 0 枚になる
        const { scroller, scrollTo } = setupLoop(
          <Carousel loop>{slides}</Carousel>,
          {
            scrollLeft: 0,
            slotWidth: 40,
            scrollWidth: 800,
          },
        )
        // ループ不成立なので clone は描画されず、実セット先頭は children[0]
        expect(scrollTo).toHaveBeenLastCalledWith({
          left: 0,
          behavior: 'instant',
        })
        scrollTo.mockClear()
        fireEvent.scroll(scroller)
        fireEvent(scroller, new Event('scrollend'))
        act(() => {
          vi.advanceTimersByTime(150)
        })
        expect(scrollTo).not.toHaveBeenCalled()
      })

      it('resetScroll() が loop の初期位置へ instant で戻す', () => {
        const ref = createRef<CarouselHandlerRef>()
        const { scrollTo } = setupLoop(
          <Carousel ref={ref} loop centerItem={0}>
            {slides}
          </Carousel>,
        )
        scrollTo.mockClear()
        act(() => {
          ref.current?.resetScroll()
        })
        expect(scrollTo).toHaveBeenLastCalledWith({
          left: 3390,
          behavior: 'instant',
        })
      })
    })
  })

  describe('SSR (server rendering)', () => {
    // jsdom では window が定義されているため renderToString 時に
    // 「useLayoutEffect does nothing on the server」警告が出る（実 SSR=window 無しでは
    // useEffect に切り替わり出ない）。テスト出力を汚さないよう、この警告だけ抑制する。
    let errorSpy: ReturnType<typeof vi.spyOn>
    beforeEach(() => {
      // eslint-disable-next-line no-console
      const original = console.error
      errorSpy = vi.spyOn(console, 'error').mockImplementation((...args) => {
        if (
          typeof args[0] === 'string' &&
          args[0].includes('useLayoutEffect does nothing on the server')
        ) {
          return
        }
        // eslint-disable-next-line no-console
        original(...args)
      })
    })
    afterEach(() => {
      errorSpy.mockRestore()
    })

    it('renders to static HTML without throwing', () => {
      // engine は effect 内でのみ生成され、useSyncExternalStore は
      // getServerSnapshot を使うため、サーバー描画でブラウザ API に触れない。
      expect(() =>
        renderToString(
          <Carousel defaultScroll={{ align: 'center' }}>{slides}</Carousel>,
        ),
      ).not.toThrow()
    })

    it('uses the server snapshot (canPrev/canNext = false) and renders items + indicator', () => {
      const html = renderToString(<Carousel size="M">{slides}</Carousel>)

      // サーバースナップショットでは canPrev/canNext は false。
      expect(html).toContain('data-can-prev="false"')
      expect(html).toContain('data-can-next="false"')
      // 全アイテムが描画される。
      for (let i = 0; i < 6; i++) {
        expect(html).toContain(`data-testid="slide-${i}"`)
      }
      // インジケーターは常に描画される（表示制御は CSS @supports が担当）。
      expect(html).toContain('charcoal-carousel__indicator')
      // ナビゲーションボタンは存在する（サーバースナップショットでは無効状態）。
      expect(html).toContain('aria-label="Previous"')
      expect(html).toContain('aria-label="Next"')
    })

    it('loop の SSR は実セットのみを静的描画する（clone は実測後に付く）', () => {
      const html = renderToString(<Carousel loop>{slides}</Carousel>)
      expect(html).not.toContain('data-clone')
      expect(html).toContain('data-testid="slide-0"')
    })
  })
})

describe('onChange', () => {
  // 中央検出を手動で駆動するため IntersectionObserver を差し替える
  let triggerCenter: (el: Element) => void
  let origIO: typeof globalThis.IntersectionObserver

  beforeEach(() => {
    // jsdom は onscrollend を持つが実イベントは発火しないため、debounce(100ms) 経路を
    // 強制する（scrollSettle.ts の分岐は 'onscrollend' in window で判定するため）。
    Reflect.deleteProperty(window, 'onscrollend')
    const callbacks = new Map<Element, IntersectionObserverCallback>()
    origIO = globalThis.IntersectionObserver
    globalThis.IntersectionObserver = class {
      constructor(private cb: IntersectionObserverCallback) {}
      observe(el: Element) {
        callbacks.set(el, this.cb)
      }
      unobserve(el: Element) {
        callbacks.delete(el)
      }
      disconnect() {
        callbacks.clear()
      }
    } as unknown as typeof globalThis.IntersectionObserver
    triggerCenter = (el) => {
      const cb = callbacks.get(el)
      cb?.(
        [{ target: el, isIntersecting: true } as IntersectionObserverEntry],
        {} as IntersectionObserver,
      )
    }
  })

  afterEach(() => {
    globalThis.IntersectionObserver = origIO
    vi.useRealTimers()
  })

  const renderWithOnChange = () => {
    const onChange = vi.fn()
    const { container } = render(
      <Carousel navigationButtons indicator onChange={onChange}>
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
    mockScrollerGeometry(scroller)
    scroller.scrollTo = vi.fn()
    fireEvent.scroll(scroller)
    return { onChange, container, scroller }
  }

  // scrollend 非対応の jsdom では debounce(100ms) 経路になる
  const settleScroll = (scroller: HTMLElement) => {
    scroller.dispatchEvent(new Event('scroll'))
    vi.advanceTimersByTime(150)
  }

  it('next ボタンの送りは source=navigation で発火する', () => {
    vi.useFakeTimers()
    try {
      const { onChange, container, scroller } = renderWithOnChange()
      const slides = container.querySelectorAll(
        '.charcoal-carousel__scroller > *',
      )

      container
        .querySelector<HTMLButtonElement>('[data-direction="next"]')
        ?.click()
      triggerCenter(slides[1])
      settleScroll(scroller)

      expect(onChange).toHaveBeenCalledTimes(1)
      expect(onChange).toHaveBeenCalledWith({ index: 1, source: 'navigation' })
    } finally {
      vi.useRealTimers()
    }
  })

  it('スワイプなどのポインタ操作は source=pointer で発火する', () => {
    vi.useFakeTimers()
    try {
      const { onChange, container, scroller } = renderWithOnChange()
      const slides = container.querySelectorAll(
        '.charcoal-carousel__scroller > *',
      )

      scroller.dispatchEvent(new Event('pointerdown', { bubbles: true }))
      triggerCenter(slides[2])
      settleScroll(scroller)

      expect(onChange).toHaveBeenCalledWith({ index: 2, source: 'pointer' })
    } finally {
      vi.useRealTimers()
    }
  })

  it('indicator の dot は source=indicator で発火する', () => {
    vi.useFakeTimers()
    // jsdom には scrollIntoView が無いのでモックを定義する（dot クリックが item 自身の
    // scrollIntoView を呼ぶため、無いと store の dispatch が例外で中断してしまう）。
    Element.prototype.scrollIntoView = vi.fn()
    try {
      const { onChange, container, scroller } = renderWithOnChange()
      const slides = container.querySelectorAll(
        '.charcoal-carousel__scroller > *',
      )

      container
        .querySelectorAll<HTMLButtonElement>(
          '.charcoal-carousel__indicator__item',
        )[1]
        ?.click()
      triggerCenter(slides[1])
      settleScroll(scroller)

      expect(onChange).toHaveBeenCalledWith({ index: 1, source: 'indicator' })
    } finally {
      vi.useRealTimers()
      delete (Element.prototype as { scrollIntoView?: unknown }).scrollIntoView
    }
  })

  it('activeIndex が変わらない静止では発火しない', () => {
    vi.useFakeTimers()
    try {
      const { onChange, container, scroller } = renderWithOnChange()
      const slides = container.querySelectorAll(
        '.charcoal-carousel__scroller > *',
      )

      container
        .querySelector<HTMLButtonElement>('[data-direction="next"]')
        ?.click()
      triggerCenter(slides[1])
      settleScroll(scroller)
      settleScroll(scroller)

      expect(onChange).toHaveBeenCalledTimes(1)
    } finally {
      vi.useRealTimers()
    }
  })

  it('初期位置の適用（どの入口も通っていない静止）では発火しない', () => {
    vi.useFakeTimers()
    try {
      const { onChange, container, scroller } = renderWithOnChange()
      const slides = container.querySelectorAll(
        '.charcoal-carousel__scroller > *',
      )

      triggerCenter(slides[1])
      settleScroll(scroller)

      expect(onChange).not.toHaveBeenCalled()
    } finally {
      vi.useRealTimers()
    }
  })

  it('端で空振りしたキーボード送りは次の無関係な静止に発生源を残さない', () => {
    vi.useFakeTimers()
    try {
      const { onChange, container, scroller } = renderWithOnChange()
      const slides = container.querySelectorAll(
        '.charcoal-carousel__scroller > *',
      )

      // scrollLeft 0 で ArrowLeft は空振りする（動かない）
      fireEvent.keyDown(scroller, { key: 'ArrowLeft' })

      // どの入口も通っていない静止と同じはず
      triggerCenter(slides[1])
      settleScroll(scroller)

      expect(onChange).not.toHaveBeenCalled()
    } finally {
      vi.useRealTimers()
    }
  })
})

describe('autoplay', () => {
  // vi.unstubAllGlobals() は使わない。vitest.setup.ts の beforeAll が張った
  // ResizeObserver / IntersectionObserver / matchMedia / scrollTo の stub まで剥がれ、
  // beforeAll はファイルごとに 1 回しか走らないので後続テスト全部が stub 無しになる。
  beforeEach(() => {
    // jsdom は onscrollend を持つが実イベントは発火しないため debounce(100ms) 経路を強制する
    Reflect.deleteProperty(window, 'onscrollend')
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  // scrollLeft を反映し scroll イベントを発火するスタブ。空振り後の再武装（Finding 1）や
  // 保留中の意図の保持（Finding 2）は静止（debounce settle）経路が実際に走らないと
  // 検証できないため、bare な vi.fn() では足りない。
  const stubScrollTo = (scroller: HTMLElement) => {
    let currentScrollLeft = 0
    Object.defineProperty(scroller, 'scrollLeft', {
      get: () => currentScrollLeft,
      set: (v: number) => {
        currentScrollLeft = v
      },
      configurable: true,
    })
    const scrollTo = vi.fn((opts: ScrollToOptions) => {
      if (opts.left != null) currentScrollLeft = opts.left
      scroller.dispatchEvent(new Event('scroll'))
    })
    scroller.scrollTo = scrollTo as unknown as typeof scroller.scrollTo
    return scrollTo
  }

  const renderAutoplay = (
    props: {
      autoplay?: CarouselAutoplay
      onChange?: (e: CarouselChangeEvent) => void
    } = {},
  ) => {
    const { container } = render(
      <Carousel autoplay={{ interval: 3000 }} {...props}>
        <div>0</div>
        <div>1</div>
        <div>2</div>
      </Carousel>,
    )
    const scroller = container.querySelector(
      '.charcoal-carousel__scroller',
    ) as HTMLElement
    // jsdom はレイアウトを持たないので、送り先の算出に必要な寸法を与える
    mockScrollerGeometry(scroller)
    const scrollTo = stubScrollTo(scroller)
    return { container, scroller, scrollTo }
  }

  it('interval 経過で次のスライドの静止位置へ smooth スクロールする', () => {
    vi.useFakeTimers()
    try {
      const { scrollTo } = renderAutoplay()
      expect(scrollTo).not.toHaveBeenCalled()

      vi.advanceTimersByTime(3000)

      // mockScrollerGeometry: clientWidth 800 / 子は offsetLeft i*400・offsetWidth 380。
      // 既定は size M ＝ snapType 'none'（何もスナップしない）なので、advanceSlide は
      // snapAlign(center) を無視して start（実座標そのもの）に寄せる: 0, 400, 800。
      // 起点 0 から前へ進む最初の位置は 400。
      expect(scrollTo).toHaveBeenCalledExactlyOnceWith({
        left: 400,
        behavior: 'smooth',
      })
    } finally {
      vi.useRealTimers()
    }
  })

  it('autoplay 未指定ならタイマーを張らない', () => {
    vi.useFakeTimers()
    try {
      const { scrollTo } = renderAutoplay({ autoplay: undefined })
      vi.advanceTimersByTime(60_000)
      expect(scrollTo).not.toHaveBeenCalled()
    } finally {
      vi.useRealTimers()
    }
  })

  it('hover 中は進まず、hover を外すと再開する', () => {
    vi.useFakeTimers()
    try {
      const { container, scrollTo } = renderAutoplay()
      const root = container.firstElementChild as HTMLElement

      // PointerEvent が無い jsdom では useHover は mouse フォールバックに落ち、
      // React は onMouseEnter/Leave を mouseover/mouseout から合成する。
      fireEvent.mouseOver(root)
      vi.advanceTimersByTime(6000)
      expect(scrollTo).not.toHaveBeenCalled()

      fireEvent.mouseOut(root)
      vi.advanceTimersByTime(3000)
      expect(scrollTo).toHaveBeenCalledTimes(1)
    } finally {
      vi.useRealTimers()
    }
  })

  it('pauseOnHover: false なら hover しても止まらない', () => {
    vi.useFakeTimers()
    try {
      const { container, scrollTo } = renderAutoplay({
        autoplay: { interval: 3000, pauseOnHover: false },
      })
      fireEvent.mouseOver(container.firstElementChild as HTMLElement)
      vi.advanceTimersByTime(3000)
      expect(scrollTo).toHaveBeenCalledTimes(1)
    } finally {
      vi.useRealTimers()
    }
  })

  // キーボードフォーカスでの停止テストは削除。react-aria の focus-visible の
  // モダリティ判定が jsdom で駆動できず、fireEvent.keyDown → focus() の経路では
  // isFocusVisible が true にならない。停止ポリシー自体は CarouselAutoplayProvider.test.tsx
  // が paused prop で決定的に検証済みで、paused={isHovered || rootFocusVisible} の
  // 配線は実機（Task 5 Step 5）で確認する。

  it('手動スクロールの静止で滞留時間が頭から数え直される', () => {
    vi.useFakeTimers()
    try {
      const { scroller, scrollTo } = renderAutoplay()

      vi.advanceTimersByTime(2000)
      // beforeEach で onscrollend を消してあるので debounce(100ms) 経路
      scroller.dispatchEvent(new Event('scroll'))
      vi.advanceTimersByTime(150)

      // 張り直されていなければ、ここまでで元の 3000ms を超えて発火しているはず
      vi.advanceTimersByTime(2000)
      expect(scrollTo).not.toHaveBeenCalled()

      vi.advanceTimersByTime(1000)
      expect(scrollTo).toHaveBeenCalledTimes(1)
    } finally {
      vi.useRealTimers()
    }
  })

  it('interval を跨いで 2 回連続で進む', () => {
    vi.useFakeTimers()
    try {
      const { scrollTo } = renderAutoplay()

      vi.advanceTimersByTime(3000)
      expect(scrollTo).toHaveBeenNthCalledWith(1, {
        left: 400,
        behavior: 'smooth',
      })

      // 1 回目の送りが起こす scroll イベントの静止（debounce 100ms）が
      // 到着起点で滞留を張り直すため、2 回目は 3000ms ちょうどでは進まない。
      vi.advanceTimersByTime(3110)
      expect(scrollTo).toHaveBeenNthCalledWith(2, {
        left: 800,
        behavior: 'smooth',
      })
    } finally {
      vi.useRealTimers()
    }
  })

  it('進める先が無い tick で止まらず、children 到着後の tick で進む', () => {
    vi.useFakeTimers()
    try {
      const { container, rerender } = render(
        <Carousel autoplay={{ interval: 3000 }}>{[]}</Carousel>,
      )
      const scroller = container.querySelector(
        '.charcoal-carousel__scroller',
      ) as HTMLElement
      mockScrollerGeometry(scroller)
      const scrollTo = stubScrollTo(scroller)

      // children が空なら findNextSlideScrollLeft が null を返し空振りする
      vi.advanceTimersByTime(3000)
      expect(scrollTo).not.toHaveBeenCalled()

      rerender(
        <Carousel autoplay={{ interval: 3000 }}>
          <div>0</div>
          <div>1</div>
          <div>2</div>
        </Carousel>,
      )
      mockScrollerGeometry(scroller)

      vi.advanceTimersByTime(3000)
      expect(scrollTo).toHaveBeenCalledTimes(1)
    } finally {
      vi.useRealTimers()
    }
  })

  it('自動送りは onChange を source=auto で発火する', () => {
    // 中央検出を手動で駆動するため IntersectionObserver を差し替える
    const callbacks = new Map<Element, IntersectionObserverCallback>()
    const origIO = globalThis.IntersectionObserver
    globalThis.IntersectionObserver = class {
      constructor(private cb: IntersectionObserverCallback) {}
      observe(el: Element) {
        callbacks.set(el, this.cb)
      }
      unobserve(el: Element) {
        callbacks.delete(el)
      }
      disconnect() {
        callbacks.clear()
      }
    } as unknown as typeof globalThis.IntersectionObserver

    vi.useFakeTimers()
    try {
      const onChange = vi.fn()
      const { container } = renderAutoplay({ onChange })
      const slides = container.querySelectorAll(
        '.charcoal-carousel__scroller > *',
      )

      vi.advanceTimersByTime(3000)
      callbacks.get(slides[1])?.(
        [
          {
            target: slides[1],
            isIntersecting: true,
          } as IntersectionObserverEntry,
        ],
        {} as IntersectionObserver,
      )
      vi.advanceTimersByTime(150)

      expect(onChange).toHaveBeenCalledWith({ index: 1, source: 'auto' })
    } finally {
      vi.useRealTimers()
      globalThis.IntersectionObserver = origIO
    }
  })

  it('自動送り後の無関係な静止は前回の source=auto を引き継がない', () => {
    // 中央検出を手動で駆動するため IntersectionObserver を差し替える
    const callbacks = new Map<Element, IntersectionObserverCallback>()
    const origIO = globalThis.IntersectionObserver
    globalThis.IntersectionObserver = class {
      constructor(private cb: IntersectionObserverCallback) {}
      observe(el: Element) {
        callbacks.set(el, this.cb)
      }
      unobserve(el: Element) {
        callbacks.delete(el)
      }
      disconnect() {
        callbacks.clear()
      }
    } as unknown as typeof globalThis.IntersectionObserver

    vi.useFakeTimers()
    try {
      const onChange = vi.fn()
      const { container, scroller } = renderAutoplay({ onChange })
      const slides = container.querySelectorAll(
        '.charcoal-carousel__scroller > *',
      )

      // 自動送りが 1 回発火して source=auto を報告する
      vi.advanceTimersByTime(3000)
      callbacks.get(slides[1])?.(
        [
          {
            target: slides[1],
            isIntersecting: true,
          } as IntersectionObserverEntry,
        ],
        {} as IntersectionObserver,
      )
      vi.advanceTimersByTime(150)
      expect(onChange).toHaveBeenCalledWith({ index: 1, source: 'auto' })
      onChange.mockClear()

      // どの入口も通らない静止（Tab フォーカスや find-in-page 等のブラウザ主導の
      // scrollIntoView 相当。ここでは中央検出の再発火と scroll イベントだけで模す）
      callbacks.get(slides[2])?.(
        [
          {
            target: slides[2],
            isIntersecting: true,
          } as IntersectionObserverEntry,
        ],
        {} as IntersectionObserver,
      )
      scroller.dispatchEvent(new Event('scroll'))
      vi.advanceTimersByTime(150)

      expect(onChange).not.toHaveBeenCalled()
    } finally {
      vi.useRealTimers()
      globalThis.IntersectionObserver = origIO
    }
  })

  it('indicator クリックで飛行中のスクロールへ自動送りの tick が割り込まない', () => {
    vi.useFakeTimers()
    Element.prototype.scrollIntoView = vi.fn()
    try {
      const { container, scroller, scrollTo } = renderAutoplay()
      const dots = container.querySelectorAll(
        '.charcoal-carousel__indicator__item',
      )

      // t=2950ms: ユーザーが dot をクリックする（indicator は scroller の外なので
      // INTERACTION_EVENTS では拾えず、store の nonce 購読だけが発生源を記録する）。
      vi.advanceTimersByTime(2950)
      fireEvent.click(dots[2])
      // scrollIntoView(smooth) が実際にアニメーションを開始したことを表す
      // （jsdom は scrollIntoView を実装しないためモック済み。素の vi.fn() は
      // scroll イベントを起こさないので、手動で 1 フレーム分の進行を模す）。
      scroller.dispatchEvent(new Event('scroll'))
      scrollTo.mockClear()

      // t=3000ms: 自動送りの tick がアニメーション中（飛行中）に重なる
      vi.advanceTimersByTime(50)
      expect(scrollTo).not.toHaveBeenCalled()

      // アニメーションが静止すれば（t=3050ms, debounce 100ms 未満だが scroll から
      // 100ms 経過）飛行中フラグは解除され、次の tick からは自動送りが再開する
      // （割り込みを避けるための一時的な yield であり、恒久停止ではないことの確認）。
      vi.advanceTimersByTime(3050)
      expect(scrollTo).toHaveBeenCalledTimes(1)
    } finally {
      vi.useRealTimers()
      delete (Element.prototype as { scrollIntoView?: unknown }).scrollIntoView
    }
  })

  it('進める先が無い tick は保留中の初期スクロールを破棄しない', () => {
    vi.useFakeTimers()
    try {
      const { container, rerender } = render(
        <Carousel
          autoplay={{ interval: 3000 }}
          defaultScroll={{ align: 'right' }}
        >
          {[]}
        </Carousel>,
      )
      const scroller = container.querySelector(
        '.charcoal-carousel__scroller',
      ) as HTMLElement
      mockScrollerGeometry(scroller)
      const scrollTo = stubScrollTo(scroller)

      // children が空の間は空振りする（defaultScroll の適用先がまだ無い）
      vi.advanceTimersByTime(3000)
      expect(scrollTo).not.toHaveBeenCalled()

      rerender(
        <Carousel
          autoplay={{ interval: 3000 }}
          defaultScroll={{ align: 'right' }}
        >
          <div>0</div>
          <div>1</div>
          <div>2</div>
        </Carousel>,
      )

      // itemCount 変化の remeasure で defaultScroll の初期位置が適用される。
      // 空振りが initialScrollActive を倒していれば、ここで呼ばれないまま終わる。
      expect(scrollTo).toHaveBeenCalledWith({ left: 1600, behavior: 'instant' })
    } finally {
      vi.useRealTimers()
    }
  })

  it('レイアウト未確定（maxScroll 0）で動かない tick は保留中の初期スクロールを破棄しない', () => {
    // children を空にする既存の回帰テストは items.length===0 の早期 return で
    // findNextSlideScrollLeft の ?? 0 フォールバックへ到達しない。ここでは非空の
    // 実スライドを使い、offsetLeft/offsetWidth 未実測（全スライドが位置 0 に潰れる）
    // による「動かない tick」を再現する。
    vi.useFakeTimers()
    let roCallbacks: Array<(entries: Array<{ target: Element }>) => void> = []
    let scrollWidthVal = 800 // mount 時はまだ画像未読込で maxScroll 0
    let lastSetLeft: number | undefined
    const origRO = globalThis.ResizeObserver
    globalThis.ResizeObserver = class {
      observe = vi.fn()
      unobserve = vi.fn()
      disconnect = vi.fn()
      constructor(cb: (entries: Array<{ target: Element }>) => void) {
        roCallbacks.push(cb)
      }
    } as unknown as typeof globalThis.ResizeObserver
    const spies = [
      vi
        .spyOn(HTMLElement.prototype, 'scrollWidth', 'get')
        .mockImplementation(() => scrollWidthVal),
      vi
        .spyOn(HTMLElement.prototype, 'clientWidth', 'get')
        .mockReturnValue(800),
      vi
        .spyOn(HTMLElement.prototype, 'scrollLeft', 'set')
        .mockImplementation((v: number) => {
          lastSetLeft = v
        }),
    ]
    try {
      render(
        <Carousel
          autoplay={{ interval: 3000 }}
          defaultScroll={{ align: 'right' }}
        >
          {slides}
        </Carousel>,
      )
      // mount 時: maxScroll 0 なので align:right も 0 に丸まる
      expect(lastSetLeft).toBe(0)

      // 画像読み込み前に tick が発火する。全スライド位置 0 → 進む先なし（巻き戻しの 0）。
      vi.advanceTimersByTime(3000)

      // 画像読み込みが完了して幅が確定する
      scrollWidthVal = 2400
      lastSetLeft = undefined
      const scroller = getScroller()
      const entries = [...scroller.children].map((el) => ({ target: el }))
      act(() => {
        roCallbacks.forEach((cb) => cb(entries))
      })

      expect(lastSetLeft).toBe(1600)
    } finally {
      spies.forEach((s) => s.mockRestore())
      globalThis.ResizeObserver = origRO
      vi.useRealTimers()
    }
  })
})
