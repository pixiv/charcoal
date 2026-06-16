import { render, screen, fireEvent, act } from '@testing-library/react'
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest'
import Carousel, { type CarouselItem } from '.'

const items: CarouselItem[] = Array.from({ length: 6 }, (_, i) => ({
  id: `item-${i}`,
  children: <div data-testid={`slide-${i}`}>Slide {i}</div>,
}))

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

describe('Carousel', () => {
  describe('rendering', () => {
    it('renders all items', () => {
      render(<Carousel items={items} />)
      for (let i = 0; i < 6; i++) {
        expect(screen.getByTestId(`slide-${i}`)).toBeInTheDocument()
      }
    })

    it('has carousel ARIA attributes', () => {
      render(<Carousel items={items} />)
      const region = screen.getByRole('region')
      expect(region).toHaveAttribute('aria-roledescription', 'carousel')
      expect(region).toHaveAttribute('aria-label', 'Carousel')
    })
  })

  describe('Size M (default)', () => {
    it('shows navigation buttons', () => {
      render(<Carousel items={items} size="M" />)
      expect(
        screen.getByRole('button', { name: 'Previous' }),
      ).toBeInTheDocument()
      expect(screen.getByRole('button', { name: 'Next' })).toBeInTheDocument()
    })

    it('hides indicator by default', () => {
      const { container } = render(<Carousel items={items} size="M" />)
      const indicator = container.querySelector('.charcoal-carousel__indicator')
      expect(indicator).toHaveAttribute('data-visible', 'false')
    })
  })

  describe('Size S', () => {
    it('hides navigation buttons by default', () => {
      const { container } = render(<Carousel items={items} size="S" />)
      const nav = container.querySelector('.charcoal-carousel__navigation')
      expect(nav).toHaveAttribute('data-visible', 'false')
    })
  })

  describe('navigation button state', () => {
    it('disables prev button at scroll start', () => {
      render(<Carousel items={items} />)
      const prev = screen.getByRole('button', { name: 'Previous' })
      expect(prev).toBeDisabled()
    })

    it('enables next button when scrollable content exists', () => {
      render(<Carousel items={items} />)
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
      render(<Carousel items={items} />)
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
      render(<Carousel items={items} />)
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

    it('respects custom scrollStepRatio', () => {
      render(<Carousel items={items} scrollStepRatio={0.5} />)
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
  })

  describe('keyboard navigation', () => {
    it('scrolls next by 0.75x viewport on ArrowRight', () => {
      render(<Carousel items={items} />)
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
      render(<Carousel items={items} />)
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
      render(<Carousel items={items} />)
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
      const { container } = render(<Carousel items={items} size="S" />)

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

  describe('scroll-state data attributes (mask)', () => {
    it('reflects canPrev/canNext on the root element', () => {
      const { container } = render(<Carousel items={items} hasGradient />)
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
      const { container } = render(<Carousel items={items} hasGradient />)
      const root = container.querySelector('.charcoal-carousel')
      const scroller = getScroller()
      mockScrollerGeometry(scroller, { scrollLeft: 0 })
      act(() => {
        fireEvent.scroll(scroller)
      })
      expect(root).toHaveAttribute('data-can-prev', 'false')
    })
  })

  describe('resize position restoration', () => {
    let resizeCallback: (() => void) | null = null
    let intersectionCallback: ((entries: unknown[]) => void) | null = null

    let originalResizeObserver: typeof globalThis.ResizeObserver
    let originalIntersectionObserver: typeof globalThis.IntersectionObserver

    beforeEach(() => {
      resizeCallback = null
      intersectionCallback = null
      originalResizeObserver = globalThis.ResizeObserver
      globalThis.ResizeObserver = class {
        observe = vi.fn()
        unobserve = vi.fn()
        disconnect = vi.fn()
        constructor(cb: () => void) {
          resizeCallback = cb
        }
      } as unknown as typeof globalThis.ResizeObserver

      originalIntersectionObserver = globalThis.IntersectionObserver
      globalThis.IntersectionObserver = class {
        observe = vi.fn()
        unobserve = vi.fn()
        disconnect = vi.fn()
        takeRecords = vi.fn()
        constructor(cb: (entries: unknown[]) => void) {
          intersectionCallback = cb
        }
      } as unknown as typeof globalThis.IntersectionObserver
    })

    afterEach(() => {
      globalThis.ResizeObserver = originalResizeObserver
      globalThis.IntersectionObserver = originalIntersectionObserver
    })

    it('re-centers the active item when the viewport width changes', () => {
      const { container } = render(<Carousel items={items} />)
      const scroller = getScroller()
      mockScrollerGeometry(scroller, { scrollLeft: 700 })
      act(() => {
        fireEvent.scroll(scroller)
      })

      // IntersectionObserver で item index 2 を active として報告する。
      const item2 = container.querySelectorAll('.charcoal-carousel__item')[2]
      act(() => {
        intersectionCallback?.([{ isIntersecting: true, target: item2 }])
      })

      const scrollToSpy = vi.fn()
      scroller.scrollTo = scrollToSpy

      act(() => {
        resizeCallback?.()
      })

      // item 2: offsetLeft 800 + offsetWidth/2 190 - clientWidth/2 400 = 590
      expect(scrollToSpy).toHaveBeenCalledWith({ left: 590, behavior: 'auto' })
    })

    it('does not re-center when the width is unchanged', () => {
      render(<Carousel items={items} />)
      const scroller = getScroller()
      mockScrollerGeometry(scroller, { scrollLeft: 700 })
      act(() => {
        fireEvent.scroll(scroller)
      })

      const scrollToSpy = vi.fn()
      scroller.scrollTo = scrollToSpy

      act(() => {
        resizeCallback?.()
      })
      scrollToSpy.mockClear()
      act(() => {
        resizeCallback?.()
      })

      expect(scrollToSpy).not.toHaveBeenCalled()
    })

    it('stays at the start edge on resize instead of jumping to center', () => {
      render(<Carousel items={items} />)
      const scroller = getScroller()
      mockScrollerGeometry(scroller, { scrollLeft: 0 })
      act(() => {
        fireEvent.scroll(scroller)
      })

      const scrollToSpy = vi.fn()
      scroller.scrollTo = scrollToSpy

      act(() => {
        resizeCallback?.()
      })

      expect(scrollToSpy).toHaveBeenCalledWith({ left: 0, behavior: 'auto' })
    })

    it('stays at the end edge on resize', () => {
      render(<Carousel items={items} />)
      const scroller = getScroller()
      // scrollWidth 2400, clientWidth 800 -> max scroll 1600 (end)
      mockScrollerGeometry(scroller, { scrollLeft: 1600 })
      act(() => {
        fireEvent.scroll(scroller)
      })

      const scrollToSpy = vi.fn()
      scroller.scrollTo = scrollToSpy

      act(() => {
        resizeCallback?.()
      })

      expect(scrollToSpy).toHaveBeenCalledWith({ left: 1600, behavior: 'auto' })
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
      render(<Carousel items={items} />)
      expect(lastSetLeft).toBe(0)
    })

    it('centers the content when align=center (maxScroll / 2)', () => {
      render(<Carousel items={items} defaultScroll={{ align: 'center' }} />)
      expect(lastSetLeft).toBe(800)
    })

    it('aligns to the right edge when align=right (maxScroll)', () => {
      render(<Carousel items={items} defaultScroll={{ align: 'right' }} />)
      expect(lastSetLeft).toBe(1600)
    })

    it('applies offset from the base position', () => {
      render(
        <Carousel
          items={items}
          defaultScroll={{ align: 'left', offset: 100 }}
        />,
      )
      expect(lastSetLeft).toBe(100)
    })
  })

  describe('defaultScroll robustness (late-loading content)', () => {
    let roCallbacks: Array<() => void>
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
        constructor(cb: () => void) {
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
      render(<Carousel items={items} defaultScroll={{ align: 'right' }} />)
      // at mount the content is not laid out yet (maxScroll 0) -> right -> 0
      expect(lastSetLeft).toBe(0)

      // images finish loading -> content width grows
      scrollWidthVal = 2400
      lastSetLeft = undefined
      act(() => {
        roCallbacks.forEach((cb) => cb())
      })

      expect(lastSetLeft).toBe(1600)
    })

    it('stops re-applying once the user interacts', () => {
      const { container } = render(
        <Carousel items={items} defaultScroll={{ align: 'right' }} />,
      )
      const root = container.querySelector('.charcoal-carousel') as HTMLElement

      // user interacts before the content settles
      fireEvent.pointerDown(root)

      scrollWidthVal = 2400
      lastSetLeft = undefined
      act(() => {
        roCallbacks.forEach((cb) => cb())
      })

      expect(lastSetLeft).toBeUndefined()
    })
  })

  describe('props override defaults', () => {
    it('shows indicator on Size M when prop is true', () => {
      const { container } = render(
        <Carousel items={items} size="M" indicator />,
      )
      expect(container.querySelector("[data-indicator='true']")).toBeTruthy()
    })

    it('shows navigation on Size S when prop is true', () => {
      render(<Carousel items={items} size="S" navigationButtons />)
      const nav = document.querySelector('.charcoal-carousel__navigation')
      expect(nav).toHaveAttribute('data-visible', 'true')
    })
  })

  describe('variant data attributes', () => {
    it('sets gradient data attribute', () => {
      const { container } = render(<Carousel items={items} hasGradient />)
      expect(container.querySelector("[data-has-gradient='true']")).toBeTruthy()
    })

    it('sets full-width data attribute', () => {
      const { container } = render(<Carousel items={items} fullWidth />)
      expect(container.querySelector("[data-full-width='true']")).toBeTruthy()
    })
  })
})
