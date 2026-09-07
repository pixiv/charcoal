import { useCallback, useEffect, useRef, useState, type RefObject } from 'react'
import { useIsomorphicLayoutEffect } from '../../_lib/useIsomorphicLayoutEffect'
import { findNextSlideScrollLeft } from './carouselAutoplay'
import {
  computeCenterScrollLeft,
  computeLoopCloneCount,
  computeLoopTeleport,
  computeWallEscape,
  isLoopActive,
  measureLoopGeometry,
  type LoopGeometry,
} from './carouselLoop'
import type { CarouselStore } from './carouselStore'
import type {
  CarouselChangeSource,
  ScrollAlign,
  ScrollSnapAlign,
  ScrollSnapType,
  ScrollStep,
} from './index'
import { observeResize } from './resizeObserver'
import {
  createScrollIntent,
  scrollOrigin,
  type ScrollIntentStore,
} from './scrollIntent'
import { onScrollSettle } from './scrollSettle'

// 指 / ボタンが scroller に触れた・離れたことを表すイベント。解除は要素外での
// 指離しも取りこぼさないよう window で拾う。
const POINTER_DOWN_EVENTS = ['pointerdown', 'touchstart'] as const
const POINTER_UP_EVENTS = [
  'pointerup',
  'pointercancel',
  'touchend',
  'touchcancel',
] as const

export type CarouselScrollerOptions = Readonly<{
  align: ScrollAlign
  offset: number
  scrollStep: ScrollStep
  // 自動送りの寄せ先。snapType が 'none' の構成では静止位置＝実座標であり
  // center を狙う根拠がないため start に倒す。
  snapAlign: ScrollSnapAlign
  snapType: ScrollSnapType
  loop: boolean
  centerItem?: number
  onScroll?: (left: number) => void
  onResize?: (width: number) => void
  onScrollStateChange?: (canScroll: boolean) => void
}>

export type CarouselScrollerResult = Readonly<{
  scrollByStep: (
    direction: 'prev' | 'next',
    source: CarouselChangeSource,
  ) => void
  scrollToNextSlide: (source: CarouselChangeSource) => void
  onItemResize: () => void
  resetScroll: () => void
  // loop 時に各端へ描画すべき clone 枚数（実測から算出。初回 render は 0）
  loopCloneCount: number
  intent: ScrollIntentStore
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
    snapAlign,
    snapType,
    loop,
    centerItem,
    onScroll,
    onResize,
    onScrollStateChange,
  } = options
  const initialScrollActive = useRef(true)
  const [intent] = useState(createScrollIntent)

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
    const realItems = Array.from(el.children).filter(
      (child): child is HTMLElement =>
        child instanceof HTMLElement && !child.hasAttribute('data-clone'),
    )
    if (realItems.length !== itemCount) return
    setCloneCount(computeLoopCloneCount(realItems, el.clientWidth))
  }, [scrollerRef, loop, itemCount])

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
      // 範囲外・非整数（NaN 含む）の centerItem は clone 帯の要素を
      // 中央化してしまうため実セット先頭へ倒す
      const centerEl =
        centerItem == null ||
        !Number.isInteger(centerItem) ||
        centerItem < 0 ||
        centerItem >= itemCount
          ? null
          : el.children.item(cloneCount + centerItem)
      // centerItem はループ成立時のみ中央へ。それ以外は実セット先頭の左寄せ。
      const left =
        geometry != null &&
        isLoopActive(geometry) &&
        centerEl instanceof HTMLElement
          ? computeCenterScrollLeft(centerEl, geometry)
          : realFirst.offsetLeft
      intent.dispatch({ type: 'reset' })
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
    intent.dispatch({ type: 'reset' })
    el.scrollTo({
      left: Math.max(0, Math.min(left, maxScroll)),
      behavior: 'instant',
    })
  }, [
    scrollerRef,
    intent,
    loop,
    centerItem,
    itemCount,
    cloneCount,
    align,
    offset,
  ])

  // canPrev/canNext: scroll で更新。onScroll もここから発火。
  useIsomorphicLayoutEffect(() => {
    const el = scrollerRef.current
    if (!el) return
    updateScrollState()
    const handleScroll = () => {
      intent.dispatch({ type: 'scroll' })
      updateScrollState()
      callbacksRef.current.onScroll?.(el.scrollLeft)
    }
    el.addEventListener('scroll', handleScroll, { passive: true })
    return () => el.removeEventListener('scroll', handleScroll)
  }, [scrollerRef, intent, updateScrollState])

  // 実測 → 状態反映の一連。順序依存がある（measureLoop が geometryRef を書き、
  // applyInitialScroll がそれを読む）ため、必ずこの並びで呼ぶ。
  const remeasure = useCallback(() => {
    measureCloneCount()
    measureLoop()
    applyInitialScroll()
    // 位置確定後の scrollLeft で canPrev/canNext を確定させる
    // （center/right 初期化で scroll イベント待ちにならないように）。
    updateScrollState()
  }, [measureCloneCount, measureLoop, applyInitialScroll, updateScrollState])

  // measureLoop / applyInitialScroll は cloneCount 依存で identity が変わるため、
  // 安定参照が要る購読（scroller の ResizeObserver・memo 化 item の onResize）へは
  // ref 経由で最新を渡す。paint 前に更新しないと、コミット直後に届いた
  // ResizeObserver 通知が前 render の閉包を呼ぶ。
  const remeasureRef = useRef(remeasure)
  useIsomorphicLayoutEffect(() => {
    remeasureRef.current = remeasure
  })

  // scroller 幅の変化で onResize(clientWidth) を通知し、状態と初期位置を再計算する。
  // 購読は張りっぱなしにする（re-observe は RO 仕様上初回通知を必ず発火させるため、
  // 貼り直すと幅が変わっていないのに onResize が漏れる）。
  useIsomorphicLayoutEffect(() => {
    const el = scrollerRef.current
    if (!el) return
    return observeResize(el, () => {
      remeasureRef.current()
      callbacksRef.current.onResize?.(el.clientWidth)
    })
  }, [scrollerRef])

  // 初期スクロール適用。clone 枚数の実測 → state 反映で本 effect が再実行され、
  // clone 描画後の DOM に対して幾何実測と初期位置適用がやり直される（いずれも paint 前）。
  // initialScrollActive はここでは再武装しない（マウント時は useRef(true) が担い、
  // ユーザー操作で false になった後の再実行は実測と状態更新だけを行う）。
  useIsomorphicLayoutEffect(() => {
    remeasure()
  }, [remeasure, itemCount])

  // indicator の dot などの scroll 命令もユーザー由来の操作なので、
  // プログラム由来のスクロール意図をまとめて破棄する（dot は scroller の外に
  // あるため DOM の入力イベントでは拾えない）。
  useEffect(() => {
    let lastNonce = store.getSnapshot().scroll?.nonce ?? 0
    return store.subscribe(() => {
      const nonce = store.getSnapshot().scroll?.nonce ?? 0
      if (nonce === lastNonce) return
      lastNonce = nonce
      initialScrollActive.current = false
      intent.dispatch({ type: 'drive', source: 'indicator', target: null })
    })
  }, [store, intent])

  // 維持帯域から外れた scrollLeft を補正する 1 回分のテレポート（loop 幾何が無ければ no-op）。
  // scrollLeft 代入は CSS scroll-behavior: smooth に従うため、必ず instant の scrollTo を使う。
  const teleport = useCallback(() => {
    const el = scrollerRef.current
    const geometry = geometryRef.current
    if (!el || !geometry || !isLoopActive(geometry)) return
    const corrected = computeLoopTeleport(el.scrollLeft, geometry)
    if (corrected == null) return
    intent.dispatch({ type: 'teleport' })
    el.scrollTo({ left: corrected, behavior: 'instant' })
  }, [scrollerRef, intent])

  // DOM の入力・静止・壁エスケープを intent に流す。購読は scroller の寿命に固定し
  // itemCount 等で張り直さない（scroll と settle が必ず対になるための条件）。
  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return

    const pointerDown = () => {
      initialScrollActive.current = false
      intent.dispatch({ type: 'input', kind: 'pointer' })
    }
    const wheel = () => {
      initialScrollActive.current = false
      intent.dispatch({ type: 'input', kind: 'wheel' })
    }
    // 指が触れている間に来た settle は保留され、離した時点で 1 回だけ静止処理を行う
    // （scrollend 非対応環境の debounce は指が触れたまま止まっていても発火するため）。
    const pointerUp = (event: Event) => {
      // ブラウザはタッチがパンに転じた時点で pointercancel を投げる（指はまだ触れている）。
      // touch の終端は touchend / touchcancel が担うので、ここでは接触を解除しない。
      if (
        event.type === 'pointercancel' &&
        (event as PointerEvent).pointerType === 'touch'
      ) {
        return
      }
      const { settlePending } = intent.getSnapshot()
      intent.dispatch({ type: 'release' })
      if (settlePending) teleport()
    }
    // 走行中にはテレポートしない（scrollTo は進行中のスクロールを中断して
    // momentum を殺すため、がくつきに見える）。
    const settle = () => {
      intent.dispatch({ type: 'settle' })
      if (intent.getSnapshot().phase === 'idle') teleport()
    }

    // 強フリックが clone の滑走路を使い切って物理端にクランプした場合だけは
    // 静止を待たずに補正する（壁に張り付いたまま scrollend を待つ「詰まり」対策）。
    let prevLeft = el.scrollLeft
    const escapeWall = () => {
      const geometry = geometryRef.current
      const left = el.scrollLeft
      const corrected =
        geometry != null && isLoopActive(geometry)
          ? computeWallEscape(left, prevLeft, geometry)
          : null
      prevLeft = left
      if (corrected != null) {
        intent.dispatch({ type: 'teleport' })
        el.scrollTo({ left: corrected, behavior: 'instant' })
        prevLeft = corrected
      }
    }

    for (const type of POINTER_DOWN_EVENTS)
      el.addEventListener(type, pointerDown, true)
    el.addEventListener('wheel', wheel, true)
    for (const type of POINTER_UP_EVENTS)
      window.addEventListener(type, pointerUp, true)
    // scroll の intent 反映は layout effect で先に登録済み。この購読はその後に走る
    // 前提で、teleport が phase === 'moving' の source を引き継ぐ。
    el.addEventListener('scroll', escapeWall, { passive: true })
    const stopSettle = onScrollSettle(el, settle)
    return () => {
      for (const type of POINTER_DOWN_EVENTS)
        el.removeEventListener(type, pointerDown, true)
      el.removeEventListener('wheel', wheel, true)
      for (const type of POINTER_UP_EVENTS)
        window.removeEventListener(type, pointerUp, true)
      el.removeEventListener('scroll', escapeWall)
      stopSettle()
    }
  }, [scrollerRef, intent, teleport])

  // memo 化された CarouselItem には安定参照で渡す（identity が変わると memo が無効化される）。
  const onItemResize = useCallback(() => remeasureRef.current(), [])

  // defaultScroll の初期位置へ戻す（命令的 API: CarouselHandlerRef.resetScroll）。
  const resetScroll = useCallback(() => {
    initialScrollActive.current = true
    remeasure()
  }, [remeasure])

  // 目標へ smooth スクロールする送りの共通経路。ブラウザ側でもクランプされるので
  // 目標も同じ範囲に揃えないと、端での連打で到達不能な目標が積み上がる。
  // 動かない送りは意図を消費しない（無関係な次の静止に発生源が付かないように）。
  const driveTo = useCallback(
    (el: HTMLElement, source: CarouselChangeSource, target: number) => {
      const clamped = Math.max(
        0,
        Math.min(target, el.scrollWidth - el.clientWidth),
      )
      const origin = scrollOrigin(intent.getSnapshot(), el.scrollLeft)
      if (Math.abs(clamped - origin) < 1) return
      initialScrollActive.current = false
      intent.dispatch({ type: 'drive', source, target: clamped })
      el.scrollTo({ left: clamped, behavior: 'smooth' })
    },
    [intent],
  )

  const scrollByStep = useCallback(
    (direction: 'prev' | 'next', source: CarouselChangeSource) => {
      const el = scrollerRef.current
      if (!el) return
      const { clientWidth, scrollWidth } = el
      const scrollLeft = scrollOrigin(intent.getSnapshot(), el.scrollLeft)
      // 進む量(px)の絶対値。符号は direction で付ける。
      const delta =
        typeof scrollStep === 'function'
          ? scrollStep({ clientWidth, scrollWidth, scrollLeft, direction })
          : clientWidth * scrollStep
      driveTo(el, source, scrollLeft + (direction === 'next' ? delta : -delta))
    },
    [scrollerRef, intent, scrollStep, driveTo],
  )

  // 次のスライドへ 1 枚ぶん進む（自動送り用。scrollStep は使わない）。
  const scrollToNextSlide = useCallback(
    (source: CarouselChangeSource) => {
      const el = scrollerRef.current
      if (!el) return
      const geometry = geometryRef.current
      const items = Array.from(el.children)
        .filter((child): child is HTMLElement => child instanceof HTMLElement)
        .map(({ offsetLeft, offsetWidth }) => ({ offsetLeft, offsetWidth }))
      const target = findNextSlideScrollLeft(items, {
        scrollLeft: scrollOrigin(intent.getSnapshot(), el.scrollLeft),
        clientWidth: el.clientWidth,
        maxScroll: el.scrollWidth - el.clientWidth,
        align: snapType === 'none' ? 'start' : snapAlign,
        // clone が 0 枚のときは clone 帯のない実セットだけの列になる
        loop: geometry != null && isLoopActive(geometry),
      })
      if (target != null) driveTo(el, source, target)
    },
    [scrollerRef, intent, snapAlign, snapType, driveTo],
  )

  return {
    scrollByStep,
    scrollToNextSlide,
    onItemResize,
    resetScroll,
    // cloneCount state は effect 更新で 1 render 遅れるため、children が空に
    // 変わった直後の render でも消費側が stale な枚数を見ないよう同期的に丸める。
    loopCloneCount: itemCount === 0 ? 0 : cloneCount,
    intent,
  }
}
