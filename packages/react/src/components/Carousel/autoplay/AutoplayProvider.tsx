import {
  forwardRef,
  useEffect,
  useRef,
  type ComponentPropsWithoutRef,
} from 'react'
import { useObjectRef } from 'react-aria/useObjectRef'
import { canAutoAdvance, type ScrollIntentStore } from '../intent/scrollIntent'

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

export type AutoplayProviderProps = ComponentPropsWithoutRef<'div'> &
  Readonly<{
    // 1 スライドあたりの滞留時間 (ms)。null なら自動送りしない。
    interval: number | null
    // hover / キーボードフォーカス中は呼び出し側が true にする。
    paused: boolean
    intent: ScrollIntentStore
    advance: () => void
  }>

// 自動送りのタイマー。滞留はスライドの到着（intent の moving → idle）から数える。
// 送るのは idle かつ指が触れていないときだけで、走行中の tick は次に譲る。
// className / tabIndex などの div 属性はそのまま透過する。
export const AutoplayProvider = forwardRef<
  HTMLDivElement,
  AutoplayProviderProps
>(function AutoplayProvider(
  { interval, paused, intent, advance, ...divProps },
  forwardedRef,
) {
  const ref = useObjectRef(forwardedRef)

  const advanceRef = useRef(advance)
  useEffect(() => {
    advanceRef.current = advance
  })

  useEffect(() => {
    if (interval == null || paused) return
    // matchMedia 非対応環境（consumer 側のテスト window shim 等）でも落ちないようガードする
    const matcher =
      typeof window.matchMedia === 'function'
        ? window.matchMedia(REDUCED_MOTION_QUERY)
        : null

    let timer: ReturnType<typeof setTimeout> | undefined
    let running = false
    const arm = () => {
      clearTimeout(timer)
      timer = setTimeout(tick, interval)
    }
    // 送りが空振りしても次の tick を張り直す（張り直しを静止だけに頼ると、
    // その回だけ自動送りが止まったままになる）。
    const tick = () => {
      try {
        if (canAutoAdvance(intent.getSnapshot())) advanceRef.current()
      } finally {
        arm()
      }
    }
    const stop = () => {
      clearTimeout(timer)
      running = false
    }
    // prefers-reduced-motion の切り替わりに追従して起動・停止をやり直す
    const sync = () => {
      stop()
      if (matcher?.matches) return
      running = true
      arm()
    }

    let prevPhase = intent.getSnapshot().phase
    const onIntentChange = () => {
      const { phase } = intent.getSnapshot()
      const arrived = prevPhase === 'moving' && phase === 'idle'
      prevPhase = phase
      if (arrived && running) arm()
    }

    sync()
    const unsubscribeIntent = intent.subscribe(onIntentChange)
    matcher?.addEventListener?.('change', sync)
    return () => {
      stop()
      unsubscribeIntent()
      matcher?.removeEventListener?.('change', sync)
    }
  }, [interval, paused, intent])

  return <div ref={ref} {...divProps} />
})
