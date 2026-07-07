import { createRef } from 'react'
import { render, screen, fireEvent, act } from '@testing-library/react'
import { renderToString } from 'react-dom/server'
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest'
import Carousel, { type CarouselHandlerRef } from '.'

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
    it('calls scrollBy with 0.75x viewport width on next button click', () => {
      render(<Carousel>{slides}</Carousel>)
      const scroller = getScroller()
      mockScrollerGeometry(scroller, { scrollLeft: 100 })
      act(() => {
        fireEvent.scroll(scroller)
      })

      const scrollBySpy = vi.fn()
      scroller.scrollBy = scrollBySpy

      const next = screen.getByRole('button', { name: 'Next' })
      fireEvent.click(next)

      expect(scrollBySpy).toHaveBeenCalledWith({
        left: 600,
        behavior: 'smooth',
      })
    })

    it('calls scrollBy with negative 0.75x on prev button click', () => {
      render(<Carousel>{slides}</Carousel>)
      const scroller = getScroller()
      mockScrollerGeometry(scroller, { scrollLeft: 400 })
      act(() => {
        fireEvent.scroll(scroller)
      })

      const scrollBySpy = vi.fn()
      scroller.scrollBy = scrollBySpy

      const prev = screen.getByRole('button', { name: 'Previous' })
      fireEvent.click(prev)

      expect(scrollBySpy).toHaveBeenCalledWith({
        left: -600,
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

      const scrollBySpy = vi.fn()
      scroller.scrollBy = scrollBySpy

      const next = screen.getByRole('button', { name: 'Next' })
      fireEvent.click(next)

      expect(scrollBySpy).toHaveBeenCalledWith({
        left: 400,
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

      const scrollBySpy = vi.fn()
      scroller.scrollBy = scrollBySpy

      const next = screen.getByRole('button', { name: 'Next' })
      fireEvent.click(next)

      expect(scrollStep).toHaveBeenCalledWith(
        expect.objectContaining({
          clientWidth: 800,
          direction: 'next',
        }),
      )
      // clientWidth(800) - 48 = 752
      expect(scrollBySpy).toHaveBeenCalledWith({
        left: 752,
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

      const scrollBySpy = vi.fn()
      scroller.scrollBy = scrollBySpy

      fireEvent.keyDown(scroller, { key: 'ArrowRight' })

      expect(scrollBySpy).toHaveBeenCalledWith({
        left: 600,
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

      const scrollBySpy = vi.fn()
      scroller.scrollBy = scrollBySpy

      fireEvent.keyDown(scroller, { key: 'ArrowLeft' })

      expect(scrollBySpy).toHaveBeenCalledWith({
        left: -600,
        behavior: 'smooth',
      })
    })

    it('ignores unrelated keys', () => {
      render(<Carousel>{slides}</Carousel>)
      const scroller = getScroller()
      mockScrollerGeometry(scroller, { scrollLeft: 100 })

      const scrollBySpy = vi.fn()
      scroller.scrollBy = scrollBySpy

      fireEvent.keyDown(scroller, { key: 'Enter' })

      expect(scrollBySpy).not.toHaveBeenCalled()
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
        roCallbacks.forEach((cb) => cb([]))
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

  describe('loop (clone slides)', () => {
    it('loop で前後に clone セットを加えた 3n 枚を描画する', () => {
      const { container } = render(<Carousel loop>{slides}</Carousel>)
      expect(container.querySelectorAll('.charcoal-carousel__item')).toHaveLength(
        18,
      )
      expect(
        container.querySelectorAll('.charcoal-carousel__item[data-clone]'),
      ).toHaveLength(12)
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
      for (const clone of clones) {
        expect(clone).toHaveAttribute('aria-hidden', 'true')
      }
      expect((clones[0] as HTMLElement & { inert?: boolean }).inert).toBe(true)
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
      delete (Element.prototype as { scrollIntoView?: unknown }).scrollIntoView
    })

    it('clone の中央到達でも実セットと同じ index を activeIndex にする', () => {
      const restore = installIOMock()
      const { container } = render(
        <Carousel size="M" indicator loop>
          {slides}
        </Carousel>,
      )
      // clone-before セットの 3 枚目（論理 index 2）
      const cloneEls = container.querySelectorAll(
        '.charcoal-carousel__item[data-clone]',
      )
      act(() => {
        fireIntersect(cloneEls[2])
      })
      const dots = container.querySelectorAll(
        '.charcoal-carousel__indicator__item',
      )
      expect(dots[2]).toHaveAttribute('data-active', 'true')
      restore()
    })

    it('型: loop と defaultScroll は併用できない', () => {
      // @ts-expect-error loop=true では defaultScroll を渡せない（初期位置は centerItem が決める）
      const invalid = (
        <Carousel loop defaultScroll={{ align: 'center' }}>
          {slides}
        </Carousel>
      )
      const valid = (
        <Carousel loop centerItem={0}>
          {slides}
        </Carousel>
      )
      // 型検査のための式（描画はしない）
      expect(invalid).toBeTruthy()
      expect(valid).toBeTruthy()
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

    it('loop でも clone 込みで例外なく静的描画される', () => {
      const html = renderToString(<Carousel loop>{slides}</Carousel>)
      expect(html).toContain('data-clone')
    })
  })
})
