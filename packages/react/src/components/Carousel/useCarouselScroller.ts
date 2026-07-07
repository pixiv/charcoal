import { useCallback, useEffect, useRef, type RefObject } from 'react'
import { useIsomorphicLayoutEffect } from '../../_lib/useIsomorphicLayoutEffect'
import type { CarouselStore } from './carouselStore'
import type { ScrollAlign, ScrollStep } from './index'

const INTERACTION_EVENTS = ['pointerdown', 'wheel', 'touchstart'] as const

export type CarouselScrollerOptions = Readonly<{
  align: ScrollAlign
  offset: number
  scrollStep: ScrollStep
  onScroll?: (left: number) => void
  onResize?: (width: number) => void
  onScrollStateChange?: (canScroll: boolean) => void
}>

export type CarouselScrollerResult = Readonly<{
  scrollByStep: (direction: 'prev' | 'next') => void
  onItemResize: () => void
  resetScroll: () => void
}>

export function useCarouselScroller(
  scrollerRef: RefObject<HTMLElement | null>,
  store: CarouselStore,
  itemCount: number,
  options: CarouselScrollerOptions,
): CarouselScrollerResult {
  const { align, offset, scrollStep, onScroll, onResize, onScrollStateChange } =
    options
  const initialScrollActive = useRef(true)

  // コールバックは最新参照を ref に保持し、リスナーの貼り直しを避ける。
  const callbacksRef = useRef({ onScroll, onResize, onScrollStateChange })
  useEffect(() => {
    callbacksRef.current = { onScroll, onResize, onScrollStateChange }
  })

  // onScrollStateChange は canScroll(=canPrev||canNext) が変化した時だけ発火する。
  const prevCanScroll = useRef<boolean | null>(null)

  const updateScrollState = useCallback(() => {
    const el = scrollerRef.current
    if (!el) return
    const { scrollLeft, scrollWidth, clientWidth } = el
    const canPrev = scrollLeft > 1
    const canNext = scrollLeft < scrollWidth - clientWidth - 1
    store.dispatch({ type: 'setScrollState', canPrev, canNext })
    const canScroll = canPrev || canNext
    if (prevCanScroll.current !== canScroll) {
      prevCanScroll.current = canScroll
      callbacksRef.current.onScrollStateChange?.(canScroll)
    }
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
    // scrollLeft 代入は CSS の scroll-behavior: smooth の対象になり
    // 初期位置決めがアニメーションしてしまうため、instant で確定させる。
    el.scrollTo({
      left: Math.max(0, Math.min(left, maxScroll)),
      behavior: 'instant',
    })
  }, [scrollerRef, align, offset])

  // canPrev/canNext: scroll で更新。onScroll もここから発火。itemCount 変化で貼り直し。
  useIsomorphicLayoutEffect(() => {
    const el = scrollerRef.current
    if (!el) return
    updateScrollState()
    const handleScroll = () => {
      updateScrollState()
      callbacksRef.current.onScroll?.(el.scrollLeft)
    }
    el.addEventListener('scroll', handleScroll, { passive: true })
    return () => el.removeEventListener('scroll', handleScroll)
  }, [scrollerRef, updateScrollState, itemCount])

  // scroller 幅の変化で onResize(clientWidth) を通知し、状態と初期位置を再計算する。
  useIsomorphicLayoutEffect(() => {
    const el = scrollerRef.current
    if (!el || typeof ResizeObserver === 'undefined') return
    const ro = new ResizeObserver(() => {
      applyInitialScroll()
      updateScrollState()
      callbacksRef.current.onResize?.(el.clientWidth)
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [scrollerRef, applyInitialScroll, updateScrollState])

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

  // defaultScroll の初期位置へ戻す（命令的 API: CarouselHandlerRef.resetScroll）。
  const resetScroll = useCallback(() => {
    initialScrollActive.current = true
    applyInitialScroll()
    updateScrollState()
  }, [applyInitialScroll, updateScrollState])

  const scrollByStep = useCallback(
    (direction: 'prev' | 'next') => {
      const el = scrollerRef.current
      if (!el) return
      initialScrollActive.current = false
      const { clientWidth, scrollWidth, scrollLeft } = el
      // 進む量(px)の絶対値。符号は direction で付ける。
      const delta =
        typeof scrollStep === 'function'
          ? scrollStep({ clientWidth, scrollWidth, scrollLeft, direction })
          : clientWidth * scrollStep
      el.scrollBy({
        left: direction === 'next' ? delta : -delta,
        behavior: 'smooth',
      })
    },
    [scrollerRef, scrollStep],
  )

  return { scrollByStep, onItemResize, resetScroll }
}
