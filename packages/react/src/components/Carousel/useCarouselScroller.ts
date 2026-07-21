import { useCallback, useEffect, useRef, useState, type RefObject } from 'react'
import { useIsomorphicLayoutEffect } from '../../_lib/useIsomorphicLayoutEffect'
import {
  computeCenterScrollLeft,
  computeLoopCloneCount,
  computeLoopTeleport,
  isLoopActive,
  measureLoopGeometry,
  type LoopGeometry,
} from './carouselLoop'
import type { CarouselStore } from './carouselStore'
import type { ScrollAlign, ScrollStep } from './index'

const INTERACTION_EVENTS = ['pointerdown', 'wheel', 'touchstart'] as const

// scrollend 非対応環境でスクロール静止とみなすまでの待ち時間
const SCROLL_SETTLE_DELAY = 100

// 維持帯域から外れた scrollLeft を補正する 1 回分のテレポート。
// scrollLeft 代入は CSS scroll-behavior: smooth に従うため、必ず instant の scrollTo を使う。
const createLoopTeleport =
  (el: HTMLElement, getGeometry: () => LoopGeometry | null) => () => {
    const geometry = getGeometry()
    if (!geometry || !isLoopActive(geometry)) return
    const corrected = computeLoopTeleport(el.scrollLeft, geometry)
    if (corrected != null) {
      el.scrollTo({ left: corrected, behavior: 'instant' })
    }
  }

// 連続呼び出しの最後から delay 後に fn を 1 回だけ呼ぶ。
const debounce = (fn: () => void, delay: number) => {
  let timer: ReturnType<typeof setTimeout> | undefined
  return Object.assign(
    () => {
      clearTimeout(timer)
      timer = setTimeout(fn, delay)
    },
    { cancel: () => clearTimeout(timer) },
  )
}

export type CarouselScrollerOptions = Readonly<{
  align: ScrollAlign
  offset: number
  scrollStep: ScrollStep
  loop: boolean
  centerItem?: number
  onScroll?: (left: number) => void
  onResize?: (width: number) => void
  onScrollStateChange?: (canScroll: boolean) => void
}>

export type CarouselScrollerResult = Readonly<{
  scrollByStep: (direction: 'prev' | 'next') => void
  onItemResize: () => void
  resetScroll: () => void
  // loop 時に各端へ描画すべき clone 枚数（実測から算出。初回 render は 0）
  loopCloneCount: number
}>

export function useCarouselScroller(
  scrollerRef: RefObject<HTMLElement | null>,
  store: CarouselStore,
  itemCount: number,
  options: CarouselScrollerOptions,
): CarouselScrollerResult {
  const {
    align,
    offset,
    scrollStep,
    loop,
    centerItem,
    onScroll,
    onResize,
    onScrollStateChange,
  } = options
  const initialScrollActive = useRef(true)

  // コールバックは最新参照を ref に保持し、リスナーの貼り直しを避ける。
  const callbacksRef = useRef({ onScroll, onResize, onScrollStateChange })
  useEffect(() => {
    callbacksRef.current = { onScroll, onResize, onScrollStateChange }
  })

  // clone は「各端が 1 viewport を覆う枚数」だけ描画する。初回 render は 0 枚で、
  // layout effect の実測 → state 反映が paint 前に完了する（SSR/no-JS は実セットのみ）。
  const [cloneCount, setCloneCount] = useState(0)

  const measureCloneCount = useCallback(() => {
    const el = scrollerRef.current
    if (!loop || !el) {
      setCloneCount(0)
      return
    }
    const realItems = Array.from(el.children)
      .slice(cloneCount, cloneCount + itemCount)
      .filter((child): child is HTMLElement => child instanceof HTMLElement)
    if (realItems.length !== itemCount) return
    setCloneCount(computeLoopCloneCount(realItems, el.clientWidth))
  }, [scrollerRef, loop, itemCount, cloneCount])

  // loop 幾何は resize / item resize 時にのみ実測してキャッシュする
  // （scroll イベント中の layout 読みを避ける）。
  const geometryRef = useRef<LoopGeometry | null>(null)

  const measureLoop = useCallback(() => {
    const el = scrollerRef.current
    geometryRef.current =
      loop && el ? measureLoopGeometry(el, itemCount, cloneCount) : null
  }, [scrollerRef, loop, itemCount, cloneCount])

  // onScrollStateChange は canScroll(=canPrev||canNext) が変化した時だけ発火する。
  const prevCanScroll = useRef<boolean | null>(null)

  const updateScrollState = useCallback(() => {
    const el = scrollerRef.current
    if (!el) return
    const geometry = geometryRef.current
    const looping = geometry != null && isLoopActive(geometry)
    const { scrollLeft, scrollWidth, clientWidth } = el
    const canPrev = looping || scrollLeft > 1
    const canNext = looping || scrollLeft < scrollWidth - clientWidth - 1
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
    if (loop) {
      const realFirst = el.children.item(cloneCount)
      if (!(realFirst instanceof HTMLElement)) return
      const geometry = geometryRef.current
      const centerEl =
        centerItem == null ? null : el.children.item(cloneCount + centerItem)
      // centerItem はループ成立時のみ中央へ。それ以外は実セット先頭の左寄せ。
      const left =
        geometry != null &&
        isLoopActive(geometry) &&
        centerEl instanceof HTMLElement
          ? computeCenterScrollLeft(centerEl, geometry)
          : realFirst.offsetLeft
      el.scrollTo({ left, behavior: 'instant' })
      return
    }
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
  }, [scrollerRef, loop, centerItem, cloneCount, align, offset])

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
      measureCloneCount()
      measureLoop()
      applyInitialScroll()
      updateScrollState()
      callbacksRef.current.onResize?.(el.clientWidth)
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [
    scrollerRef,
    measureCloneCount,
    measureLoop,
    applyInitialScroll,
    updateScrollState,
  ])

  // 初期スクロール適用 + ユーザー操作で打ち切り。
  useIsomorphicLayoutEffect(() => {
    initialScrollActive.current = true
    // clone 枚数の実測 → state 反映で本 effect が再実行され、clone 描画後の
    // DOM に対して幾何実測と初期位置適用がやり直される（いずれも paint 前）。
    measureCloneCount()
    measureLoop()
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
  }, [
    scrollerRef,
    measureCloneCount,
    measureLoop,
    applyInitialScroll,
    updateScrollState,
    itemCount,
  ])

  // loop: スクロール静止後に維持帯域へテレポートする。走行中には行わない
  // （scrollTo は進行中のスクロールを中断して momentum を殺すため、がくつきに見える）。
  useEffect(() => {
    const el = scrollerRef.current
    if (!loop || !el) return
    const teleport = createLoopTeleport(el, () => geometryRef.current)
    // 静止検出: scrollend 対応環境はブラウザに任せ、非対応環境は scroll の途切れで代替する。
    const supportsScrollEnd = 'onscrollend' in window
    const debouncedTeleport = supportsScrollEnd
      ? null
      : debounce(teleport, SCROLL_SETTLE_DELAY)
    const settleEvent = supportsScrollEnd ? 'scrollend' : 'scroll'
    const settleTeleport = debouncedTeleport ?? teleport

    el.addEventListener(settleEvent, settleTeleport, { passive: true })
    return () => {
      el.removeEventListener(settleEvent, settleTeleport)
      debouncedTeleport?.cancel()
    }
  }, [loop, scrollerRef, itemCount])

  const onItemResize = useCallback(() => {
    measureCloneCount()
    measureLoop()
    applyInitialScroll()
    updateScrollState()
  }, [measureCloneCount, measureLoop, applyInitialScroll, updateScrollState])

  // defaultScroll の初期位置へ戻す（命令的 API: CarouselHandlerRef.resetScroll）。
  const resetScroll = useCallback(() => {
    initialScrollActive.current = true
    measureLoop()
    applyInitialScroll()
    updateScrollState()
  }, [measureLoop, applyInitialScroll, updateScrollState])

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

  return { scrollByStep, onItemResize, resetScroll, loopCloneCount: cloneCount }
}
