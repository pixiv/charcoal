import { vi, afterEach, beforeAll } from 'vitest'

export function mockScrollerGeometry(
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

export function getScroller() {
  return document.querySelector('.charcoal-carousel__scroller') as HTMLElement
}

// 中央検出を手動で駆動するため IntersectionObserver を差し替える
export function installCenterObserver() {
  const callbacks = new Map<Element, IntersectionObserverCallback>()
  const original = globalThis.IntersectionObserver
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

  return {
    triggerCenter: (el: Element) => {
      callbacks.get(el)?.(
        [{ target: el, isIntersecting: true } as IntersectionObserverEntry],
        {} as IntersectionObserver,
      )
    },
    restore: () => {
      globalThis.IntersectionObserver = original
    },
  }
}

// scrollLeft を反映し scroll イベントを発火するスタブ。静止（debounce settle）経路が
// 実際に走らないと滞留の数え直しを検証できないため、bare な vi.fn() では足りない。
export function stubScrollTo(scroller: HTMLElement) {
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

// jsdom は :hover のライブ判定を持たず、matches(':hover') が実際の状態に関わらず
// 常に true を返す。useHoverPause の種付けがテスト全体を止めないよう、
// :hover の結果だけをテストから制御する（既定は「乗っていない」＝ false）。
export function stubHoverMatches() {
  let stubbedHover = false
  beforeAll(() => {
    const originalMatches = Element.prototype.matches
    vi.spyOn(Element.prototype, 'matches').mockImplementation(function (
      this: Element,
      selector: string,
    ) {
      return selector === ':hover'
        ? stubbedHover
        : originalMatches.call(this, selector)
    })
  })
  afterEach(() => {
    stubbedHover = false
  })
  return (hovered: boolean) => {
    stubbedHover = hovered
  }
}
