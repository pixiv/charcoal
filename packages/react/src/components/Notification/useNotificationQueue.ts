import { useCallback, useEffect, useRef } from 'react'
import { useToastState } from 'react-stately/useToastState'
import type { NotificationName, NotificationOrder } from './types'

const DEFAULT_DURATION_MS = 5000
const ANIMATION_DURATION_MS = 300

type QueueItem<TContent, TCloseReason> = {
  content: TContent
  onClose?: (reason?: TCloseReason) => void
}

export function useNotificationQueue<
  TContent,
  TCloseReason extends string = never,
>(
  name: NotificationName,
  {
    duration: durationOption,
    order = 'queue',
    animateReplace = false,
  }: {
    duration?: number
    order?: NotificationOrder
    animateReplace?: boolean
  } = {},
) {
  const itemRef = useRef<HTMLDivElement>(null)
  const queueRef = useRef<
    Array<QueueItem<TContent, TCloseReason> & { duration: number }>
  >([])
  const isShowingRef = useRef(false)
  const activeRef = useRef<{
    key: string
    onClose?: (reason?: TCloseReason) => void
    reason?: TCloseReason
    notified: boolean
  }>()
  const replaceRef = useRef(false)
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
        const active = activeRef.current
        activeRef.current = undefined
        update()
        if (active !== undefined && !active.notified) {
          active.notified = true
          active.onClose?.(active.reason)
        }
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

      if (replaceRef.current) {
        replaceRef.current = false
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
      const active = activeRef.current
      if (active !== undefined && !active.notified) {
        active.notified = true
        active.onClose?.(active.reason)
      }
      activeRef.current = undefined
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

    const { duration, onClose, content } = next
    isShowingRef.current = true
    const enterMs = window.matchMedia?.('(prefers-reduced-motion: reduce)')
      .matches
      ? 0
      : ANIMATION_DURATION_MS
    const key = state.add(content, {
      // react-stately は 0 を「タイマーなし」と扱うため、最小の正数を渡す
      timeout: Math.max(1, duration + enterMs),
    })
    activeRef.current = { key, onClose, notified: false }
  }
  playNextRef.current = playNext

  function enqueue(
    content: TContent,
    onClose?: (reason?: TCloseReason) => void,
  ) {
    const duration =
      typeof durationOption === 'number' && Number.isFinite(durationOption)
        ? Math.max(0, durationOption)
        : DEFAULT_DURATION_MS

    queueRef.current.push({
      content,
      onClose,
      duration,
    })
    if (!isShowingRef.current) {
      playNext()
    } else if (order === 'replace') {
      const active = activeRef.current
      if (active === undefined) return

      replaceRef.current = !animateReplace
      hoverRef.current.active = false
      const pending = hoverRef.current.pending
      hoverRef.current.pending = undefined
      if (pending !== undefined) {
        pending()
      } else {
        state.close(active.key)
      }
    }
  }

  function close(key: string, reason: TCloseReason) {
    const active = activeRef.current
    if (active?.key !== key) return
    active.reason = reason
    hoverRef.current.active = false
    const pending = hoverRef.current.pending
    hoverRef.current.pending = undefined
    if (pending !== undefined) {
      pending()
    } else {
      state.close(key)
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
    close,
    onHoverStart,
    onHoverEnd,
    clearHover,
  }
}
