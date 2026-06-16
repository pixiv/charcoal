import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  type RefObject,
} from 'react'
import type { CarouselStore } from './carouselStore'
import type { ScrollAlign } from './index'

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

const INTERACTION_EVENTS = ['pointerdown', 'wheel', 'touchstart'] as const

export type CarouselScrollerOptions = Readonly<{
  align: ScrollAlign
  offset: number
  scrollStepRatio: number
}>

export type CarouselScrollerResult = Readonly<{
  scrollByStep: (direction: 'prev' | 'next') => void
  onItemResize: () => void
}>

export function useCarouselScroller(
  scrollerRef: RefObject<HTMLElement | null>,
  store: CarouselStore,
  itemCount: number,
  options: CarouselScrollerOptions,
): CarouselScrollerResult {
  const { align, offset, scrollStepRatio } = options
  const initialScrollActive = useRef(true)

  const updateScrollState = useCallback(() => {
    const el = scrollerRef.current
    if (!el) return
    const { scrollLeft, scrollWidth, clientWidth } = el
    store.dispatch({
      type: 'setScrollState',
      canPrev: scrollLeft > 1,
      canNext: scrollLeft < scrollWidth - clientWidth - 1,
    })
  }, [scrollerRef, store])

  const applyInitialScroll = useCallback(() => {
    const el = scrollerRef.current
    if (!el || !initialScrollActive.current) return
    const maxScroll = el.scrollWidth - el.clientWidth
    let left = offset
    switch (align) {
      case 'center':
        left = maxScroll / 2 + offset
        break
      case 'right':
        left = maxScroll + offset
        break
    }
    // eslint-disable-next-line react-compiler/react-compiler
    el.scrollLeft = Math.max(0, Math.min(left, maxScroll))
  }, [scrollerRef, align, offset])

  // canPrev/canNext: scroll で更新。itemCount 変化で貼り直し。
  useIsomorphicLayoutEffect(() => {
    const el = scrollerRef.current
    if (!el) return
    updateScrollState()
    el.addEventListener('scroll', updateScrollState, { passive: true })
    return () => el.removeEventListener('scroll', updateScrollState)
  }, [scrollerRef, updateScrollState, itemCount])

  // 初期スクロール適用 + ユーザー操作で打ち切り。
  useIsomorphicLayoutEffect(() => {
    initialScrollActive.current = true
    applyInitialScroll()
    // 初期位置適用後の scrollLeft で canPrev/canNext を確定させる
    // （center/right 初期化で scroll イベント待ちにならないように）。
    updateScrollState()
    const el = scrollerRef.current
    if (!el) return
    const stop = () => {
      initialScrollActive.current = false
    }
    for (const type of INTERACTION_EVENTS) el.addEventListener(type, stop, true)
    return () => {
      for (const type of INTERACTION_EVENTS)
        el.removeEventListener(type, stop, true)
    }
  }, [scrollerRef, applyInitialScroll, updateScrollState, itemCount])

  const onItemResize = useCallback(() => {
    applyInitialScroll()
    updateScrollState()
  }, [applyInitialScroll, updateScrollState])

  const scrollByStep = useCallback(
    (direction: 'prev' | 'next') => {
      const el = scrollerRef.current
      if (!el) return
      initialScrollActive.current = false
      const delta = el.clientWidth * scrollStepRatio
      el.scrollBy({
        left: direction === 'next' ? delta : -delta,
        behavior: 'smooth',
      })
    },
    [scrollerRef, scrollStepRatio],
  )

  return { scrollByStep, onItemResize }
}
