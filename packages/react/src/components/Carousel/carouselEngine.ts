export type ScrollAlign = 'left' | 'center' | 'right'

export type CarouselState = Readonly<{
  activeIndex: number
  canPrev: boolean
  canNext: boolean
}>

export type CarouselEngineOptions = Readonly<{
  align?: ScrollAlign
  offset?: number
  scrollStepRatio?: number
  /** false の場合 activeIndex の state 更新を省く（リサイズ用の active 追跡は継続）。 */
  trackActiveIndex?: boolean
}>

export type CarouselEngine = Readonly<{
  getState: () => CarouselState
  subscribe: (listener: () => void) => () => void
  /** 指定インデックスのアイテムを中央へスクロールする。 */
  scrollToItem: (index: number) => void
  /** 表示幅 × ratio だけスクロールする（ナビゲーション / 矢印キー用）。 */
  scrollByStep: (direction: 'prev' | 'next') => void
  destroy: () => void
}>

const ITEM_SELECTOR = '.charcoal-carousel__item'
const INTERACTION_EVENTS = ['pointerdown', 'wheel', 'touchstart'] as const
// index.css の @supports と同じ条件。
const SCROLL_MARKER_QUERY = 'scroll-marker-group: after'

function centerItemScrollLeft(el: HTMLElement, item: HTMLElement): number {
  return Math.max(
    0,
    item.offsetLeft + item.offsetWidth / 2 - el.clientWidth / 2,
  )
}

/**
 * CSS Scroll Markers 対応ブラウザでは CSS の ::scroll-marker がインジケーターを
 * 描画するため、JS の activeIndex 計算（hidden な dots の再レンダー）は不要になる。
 * engine はクライアント専用なので CSS.supports を直接呼べる（SSR 問題なし）。
 */
function supportsScrollMarker(): boolean {
  return (
    typeof CSS !== 'undefined' &&
    typeof CSS.supports === 'function' &&
    CSS.supports(SCROLL_MARKER_QUERY)
  )
}

/**
 * フレームワーク非依存のカルーセル中核。スクローラ要素を受け取り、スクロール状態の
 * 観測（canPrev/canNext・activeIndex）、リサイズ補正、初期スクロール位置の適用、
 * 指定アイテムへのスクロールを担う。UI 層は `subscribe`/`getState` で状態を受け取り、
 * `scrollToItem`/`scrollByStep` を呼ぶだけ。
 */
export function createCarouselEngine(
  scroller: HTMLElement,
  options: CarouselEngineOptions = {},
): CarouselEngine {
  const align = options.align ?? 'left'
  const offset = options.offset ?? 0
  const scrollStepRatio = options.scrollStepRatio ?? 0.75
  // CSS マーカー対応ブラウザでは activeIndex の state 更新を省く（既定）。
  const trackActiveIndex = options.trackActiveIndex ?? !supportsScrollMarker()

  let state: CarouselState = { activeIndex: 0, canPrev: false, canNext: false }
  const listeners = new Set<() => void>()
  let activeItem: HTMLElement | null = null
  let initialScrollActive = true
  const cleanups: Array<() => void> = []

  const items = (): HTMLElement[] =>
    Array.from(scroller.querySelectorAll<HTMLElement>(ITEM_SELECTOR))

  const setStatePartial = (next: Partial<CarouselState>): void => {
    const merged = { ...state, ...next }
    if (
      merged.activeIndex === state.activeIndex &&
      merged.canPrev === state.canPrev &&
      merged.canNext === state.canNext
    ) {
      return
    }
    state = merged
    for (const listener of listeners) listener()
  }

  // canPrev / canNext: スクロール位置・コンテンツ幅から判定。
  const updateScrollState = (): void => {
    const { scrollLeft, scrollWidth, clientWidth } = scroller
    setStatePartial({
      canPrev: scrollLeft > 1,
      canNext: scrollLeft < scrollWidth - clientWidth - 1,
    })
  }

  const applyInitialScroll = (): void => {
    if (!initialScrollActive) return
    const maxScroll = scroller.scrollWidth - scroller.clientWidth
    let left = offset
    if (align === 'center') {
      left = maxScroll / 2 + offset
    } else if (align === 'right') {
      left = maxScroll + offset
    }
    scroller.scrollLeft = Math.max(0, Math.min(left, maxScroll))
  }

  const setupScrollState = (): void => {
    const update = () => updateScrollState()
    update()
    scroller.addEventListener('scroll', update, { passive: true })
    cleanups.push(() => scroller.removeEventListener('scroll', update))
  }

  // activeIndex: 中央ラインに重なるアイテムを IntersectionObserver で検出。
  const setupActiveIndex = (): void => {
    if (typeof IntersectionObserver === 'undefined') return
    const list = items()
    const indexOf = new Map<Element, number>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const index = indexOf.get(entry.target)
          if (index === undefined) continue
          activeItem = entry.target as HTMLElement
          if (trackActiveIndex) {
            setStatePartial({ activeIndex: index })
          }
        }
      },
      { root: scroller, rootMargin: '0px -50% 0px -50%', threshold: 0 },
    )

    for (const [i, item] of list.entries()) {
      indexOf.set(item, i)
      observer.observe(item)
    }
    cleanups.push(() => observer.disconnect())
  }

  // リサイズ時: 直前まで見ていたアイテムを画面外に出さないよう補正。
  const setupResize = (): void => {
    if (typeof ResizeObserver === 'undefined') return
    let lastWidth = scroller.clientWidth
    const observer = new ResizeObserver(() => {
      if (scroller.clientWidth === lastWidth) return
      lastWidth = scroller.clientWidth
      if (!state.canPrev) {
        scroller.scrollTo({ left: 0, behavior: 'auto' })
      } else if (!state.canNext) {
        scroller.scrollTo({
          left: scroller.scrollWidth - scroller.clientWidth,
          behavior: 'auto',
        })
      } else if (activeItem) {
        scroller.scrollTo({
          left: centerItemScrollLeft(scroller, activeItem),
          behavior: 'auto',
        })
      }
      updateScrollState()
    })
    observer.observe(scroller)
    cleanups.push(() => observer.disconnect())
  }

  // 初期スクロール位置を適用。遅延コンテンツに備え、ユーザー操作までは再適用する。
  const setupInitialScroll = (): void => {
    applyInitialScroll()

    if (typeof ResizeObserver !== 'undefined') {
      const observer = new ResizeObserver(() => {
        // コンテンツ幅が確定したら初期位置と canPrev/canNext を更新する。
        applyInitialScroll()
        updateScrollState()
      })
      for (const item of items()) observer.observe(item)
      cleanups.push(() => observer.disconnect())
    }

    const stop = () => {
      initialScrollActive = false
    }
    for (const type of INTERACTION_EVENTS) {
      scroller.addEventListener(type, stop, true)
      cleanups.push(() => scroller.removeEventListener(type, stop, true))
    }
  }

  const scrollToItem = (index: number): void => {
    initialScrollActive = false
    items()[index]?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    })
  }

  const scrollByStep = (direction: 'prev' | 'next'): void => {
    initialScrollActive = false
    const delta = scroller.clientWidth * scrollStepRatio
    scroller.scrollBy({
      left: direction === 'next' ? delta : -delta,
      behavior: 'smooth',
    })
  }

  const destroy = (): void => {
    for (const cleanup of cleanups) cleanup()
    cleanups.length = 0
    listeners.clear()
  }

  setupInitialScroll()
  setupScrollState()
  setupActiveIndex()
  setupResize()

  return {
    getState: () => state,
    subscribe: (listener) => {
      listeners.add(listener)
      return () => {
        listeners.delete(listener)
      }
    },
    scrollToItem,
    scrollByStep,
    destroy,
  }
}
