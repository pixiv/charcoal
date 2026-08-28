import {
  forwardRef,
  useEffect,
  useRef,
  type ComponentPropsWithoutRef,
} from 'react'
import { useObjectRef } from 'react-aria/useObjectRef'
import { onScrollSettle } from './scrollSettle'

export type AutoplayProviderProps = ComponentPropsWithoutRef<'div'> &
  Readonly<{
    // 1 スライドあたりの滞留時間 (ms)。未指定なら自動送りしない。
    interval?: number
    // hover やキーボードフォーカス中は呼び出し側が true にする。
    paused: boolean
    advance: (source: 'auto') => void
  }>

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

// 自動送りのタイマーを持つ scroller。滞留時間はスライドの到着（静止）から数える。
// className / data 属性などの div 属性はそのまま透過する。
export const AutoplayProvider = forwardRef<
  HTMLDivElement,
  AutoplayProviderProps
>(function AutoplayProvider(
  { interval, paused, advance, ...divProps },
  forwardedRef,
) {
  const ref = useObjectRef(forwardedRef)
  const advanceRef = useRef(advance)
  useEffect(() => {
    advanceRef.current = advance
  })

  useEffect(() => {
    const el = ref.current
    // interval が有限かつ正でなければ起動しない（setTimeout の即時発火・暴走を避ける）
    if (!el || interval == null || !Number.isFinite(interval) || interval <= 0)
      return
    if (paused) return

    // useMedia（React state 経由）だとここが autoplay 未指定の Carousel も含めて
    // 全 Carousel を購読させ、初回判定の反映で余分な再レンダーを起こす。
    // interval/paused で早期 return した後のここでしか呼ばないことで、
    // 自動送りが実際に動く間だけ購読する。matchMedia 非対応環境
    // （consumer 側のテスト window shim 等）でも落ちないようガードする。
    const matcher =
      typeof window.matchMedia === 'function'
        ? window.matchMedia(REDUCED_MOTION_QUERY)
        : null

    let timer: ReturnType<typeof setTimeout> | undefined
    let stopSettle: (() => void) | undefined

    // 手動スクロールも静止を起こすため、ユーザー操作によるタイマーのリセットは
    // この張り直しに含まれる。
    const arm = () => {
      clearTimeout(timer)
      timer = setTimeout(tick, interval)
    }
    // 送りが空振り（要素なし・スクロール不要）でスクロールイベントが起きなくても
    // 次のティックを張り直す。張り直しを静止イベントだけに頼ると、その回だけ
    // 自動送りが止まったままになる。settle からの arm はこれを上書きして
    // 到着起点の滞留に揃える（意図した優先順位）。
    const tick = () => {
      try {
        advanceRef.current('auto')
      } finally {
        arm()
      }
    }
    const stop = () => {
      clearTimeout(timer)
      stopSettle?.()
      stopSettle = undefined
    }
    // prefers-reduced-motion の切り替わり（matchMedia の change イベント）に
    // 追従して起動・停止をやり直す。
    const syncMotion = () => {
      stop()
      if (matcher?.matches) return
      arm()
      stopSettle = onScrollSettle(el, arm)
    }

    syncMotion()
    matcher?.addEventListener('change', syncMotion)
    return () => {
      stop()
      matcher?.removeEventListener('change', syncMotion)
    }
  }, [ref, interval, paused])

  return <div ref={ref} {...divProps} />
})
