import {
  forwardRef,
  useEffect,
  useRef,
  type ComponentPropsWithoutRef,
} from 'react'
import { useObjectRef } from 'react-aria/useObjectRef'
import { useMedia } from '../../core/themeHelper'
import { onScrollSettle } from './scrollSettle'

export type AutoplayProviderProps = ComponentPropsWithoutRef<'div'> &
  Readonly<{
    // 1 スライドあたりの滞留時間 (ms)。未指定なら自動送りしない。
    interval?: number
    // hover やキーボードフォーカス中は呼び出し側が true にする。
    paused: boolean
    advance: (source: 'auto') => void
  }>

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

  const prefersReducedMotion = useMedia('(prefers-reduced-motion: reduce)')

  useEffect(() => {
    const el = ref.current
    // interval が有限かつ正でなければ起動しない（setTimeout の即時発火・暴走を避ける）
    if (!el || interval == null || !Number.isFinite(interval) || interval <= 0)
      return
    // 判定前(undefined)も動かさない
    if (paused || prefersReducedMotion !== false) return
    let timer: ReturnType<typeof setTimeout> | undefined
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
      advanceRef.current('auto')
      arm()
    }
    arm()
    const stopSettle = onScrollSettle(el, arm)
    return () => {
      clearTimeout(timer)
      stopSettle()
    }
  }, [ref, interval, paused, prefersReducedMotion])

  return <div ref={ref} {...divProps} />
})
