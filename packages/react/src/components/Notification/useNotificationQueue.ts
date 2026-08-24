import { useCallback, useEffect, useRef } from 'react'
import { useToastState } from 'react-stately/useToastState'
import type { NotificationName } from './types'

const DEFAULT_DURATION_MS = 5000
const ANIMATION_DURATION_MS = 300

export function useNotificationQueue<TContent>(name: NotificationName) {
  const itemRef = useRef<HTMLDivElement>(null)
  const queueRef = useRef<Array<TContent & { duration: number }>>([])
  const isShowingRef = useRef(false)
  const hoverRef = useRef({
    active: false,
    pending: undefined as (() => void) | undefined,
  })
  // wrapUpdate を固定したまま、後から定義する playNext の最新版を呼ぶ
  const playNextRef = useRef<(() => void) | undefined>(undefined)

  // wrapUpdate の参照が変わると useToastState が ToastQueue を作り直すため useCallback で固定する
  const wrapUpdate = useCallback(
    function wrapUpdate(
      update: () => void,
      action: 'add' | 'remove' | 'clear',
    ) {
      if (action !== 'remove') {
        update()
        return
      }

      function finish() {
        update()
        playNextRef.current?.()
      }

      if (hoverRef.current.active) {
        hoverRef.current.pending = () => wrapUpdate(update, 'remove')
        return
      }

      if (itemRef.current === null) {
        finish()
        return
      }
      const item: HTMLDivElement = itemRef.current

      // allow-discreteが Newly Available で使えないので、要素の削除をアニメーション完了まで待つ
      item.dataset.exiting = 'true'
      let completed = false
      let fallbackTimer = 0 // complete 内で clearTimeout(setTimeout(...)) すると新規タイマーを即キャンセルしてしまう
      function handleAnimationEnd(event: AnimationEvent) {
        if (
          event.target === item &&
          event.animationName === `charcoal-${name}-exit`
        ) {
          complete()
        }
      }
      function complete() {
        if (completed) return
        completed = true
        item.removeEventListener('animationend', handleAnimationEnd)
        window.clearTimeout(fallbackTimer)
        finish()
      }
      item.addEventListener('animationend', handleAnimationEnd)
      fallbackTimer = window.setTimeout(complete, ANIMATION_DURATION_MS + 100)
      if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
        complete()
      }
    },
    [name],
  )

  const state = useToastState<TContent>({
    maxVisibleToasts: 1,
    wrapUpdate,
  })

  useEffect(() => {
    return () => {
      queueRef.current = []
      isShowingRef.current = false
    }
  }, [])

  function playNext() {
    const next = queueRef.current.shift()
    if (next === undefined) {
      isShowingRef.current = false
      return
    }

    const { duration, ...content } = next
    isShowingRef.current = true
    const enterMs = window.matchMedia?.('(prefers-reduced-motion: reduce)')
      .matches
      ? 0
      : ANIMATION_DURATION_MS
    state.add(content as TContent, {
      // react-stately は 0 を「タイマーなし」と扱うため、最小の正数を渡す
      timeout: Math.max(1, duration + enterMs),
    })
  }
  playNextRef.current = playNext

  function enqueue(
    content: TContent,
    durationOption: unknown = DEFAULT_DURATION_MS,
  ) {
    const duration =
      typeof durationOption === 'number' && Number.isFinite(durationOption)
        ? Math.max(0, durationOption)
        : DEFAULT_DURATION_MS

    queueRef.current.push({
      ...content,
      duration,
    })
    if (!isShowingRef.current) {
      playNext()
    }
  }

  function onHoverStart() {
    hoverRef.current.active = true
  }

  function onHoverEnd() {
    hoverRef.current.active = false
    const pending = hoverRef.current.pending
    hoverRef.current.pending = undefined
    pending?.()
  }

  function clearHover() {
    hoverRef.current.active = false
    hoverRef.current.pending = undefined
  }

  return {
    state,
    itemRef,
    enqueue,
    onHoverStart,
    onHoverEnd,
    clearHover,
  }
}
