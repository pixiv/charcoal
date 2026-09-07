import { useEffect, useRef } from 'react'
import { useIsomorphicLayoutEffect } from '../../_lib/useIsomorphicLayoutEffect'
import type { CarouselStore } from './carouselStore'
import type { CarouselChangeEvent } from './index'
import type { ScrollIntentStore } from './scrollIntent'

// スクロールが idle で activeIndex が基準から変わったとき、その移動の発生源を添えて
// onChange を 1 回だけ呼ぶ。settle（scrollend）と activeIndex の更新
// （IntersectionObserver）はどちらが先に来るか定まらないため、両方を購読して
// 同じ判定を走らせる。
export function useCarouselChange(
  store: CarouselStore,
  intent: ScrollIntentStore,
  onChange: ((e: CarouselChangeEvent) => void) | undefined,
): void {
  const onChangeRef = useRef(onChange)
  useEffect(() => {
    onChangeRef.current = onChange
  })

  // 基準は常に最新の idle 時の activeIndex。帰属できない移動でも進める。
  const lastReported = useRef<number | null>(null)
  useIsomorphicLayoutEffect(() => {
    lastReported.current = store.getSnapshot().activeIndex
  }, [store])

  useEffect(() => {
    const check = () => {
      const { phase, landed } = intent.getSnapshot()
      if (phase !== 'idle') return
      const { activeIndex } = store.getSnapshot()
      if (activeIndex === lastReported.current) return
      lastReported.current = activeIndex
      if (landed == null) return
      // 消費側が投げても landed が残らないよう、呼ぶ前に報告済みを確定させる。
      intent.dispatch({ type: 'reported' })
      onChangeRef.current?.({ index: activeIndex, source: landed })
    }
    const unsubscribeStore = store.subscribe(check)
    const unsubscribeIntent = intent.subscribe(check)
    return () => {
      unsubscribeStore()
      unsubscribeIntent()
    }
  }, [store, intent])
}
