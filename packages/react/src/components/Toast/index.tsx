import './index.css'

import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react'
import type { ReactNode, RefObject } from 'react'
import { Overlay } from 'react-aria/Overlay'
import { useToast as useAriaToast, useToastRegion } from 'react-aria/useToast'
import {
  useToastState,
  type QueuedToast,
  type ToastState,
} from 'react-stately/useToastState'
import { useClassNames } from '../../_lib/useClassNames'

const DEFAULT_DURATION_MS = 5000
const DEFAULT_Z_INDEX = 20
const ENTER_ANIMATION_DURATION_MS = 300
const EXIT_ANIMATION_DURATION_MS = 300

type ToastPosition = 'top' | 'bottom'

export type ToastVariant = 'success' | 'error'

export type ToastShowOptions = {
  variant: ToastVariant
  /**
   * Toast を表示する時間（ミリ秒）。負の値は 0、数値でない値は 5000 として扱う
   * @default 5000
   */
  duration?: number
}

export type ToastHandler = {
  show: (message: ReactNode, options: ToastShowOptions) => void
}

export type ToastProps = {
  /**
   * Toast の表示位置
   * @default 'top'
   */
  position?: ToastPosition
  /**
   * 画面端からの距離（ピクセル）
   * @default 16
   */
  offset?: number
  zIndex?: number
  portalContainer?: HTMLElement
  className?: string
}

type ToastContent = {
  message: ReactNode
  variant: ToastVariant
}

type QueuedToastContent = ToastContent & {
  duration: number
}

const Toast = forwardRef<ToastHandler, ToastProps>(function Toast(
  {
    position = 'top',
    offset = 16,
    zIndex = DEFAULT_Z_INDEX,
    portalContainer,
    className,
  },
  ref,
) {
  'use memo'

  const toastRef = useRef<HTMLDivElement>(null)
  const queueRef = useRef<QueuedToastContent[]>([])
  const isShowingRef = useRef(false)
  const hoverRef = useRef({
    active: false,
    pending: undefined as (() => void) | undefined,
  })
  // wrapUpdate を固定したまま、後から定義する playNext の最新版を呼ぶ
  const playNextRef = useRef<(() => void) | undefined>(undefined)

  // wrapUpdate の参照が変わると useToastState が ToastQueue を作り直すため useCallback で固定する
  const wrapToastUpdate = useCallback(function wrapToastUpdate(
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
      hoverRef.current.pending = () => wrapToastUpdate(update, 'remove')
      return
    }

    if (toastRef.current === null) {
      finish()
      return
    }
    const toast: HTMLDivElement = toastRef.current

    // allow-discreteが Newly Available で使えないので、要素の削除をアニメーション完了まで待つ
    toast.dataset.exiting = 'true'
    let completed = false
    let fallbackTimer = 0 // complete 内で clearTimeout(setTimeout(...)) すると新規タイマーを即キャンセルしてしまう
    function handleAnimationEnd(event: AnimationEvent) {
      if (
        event.target === toast &&
        event.animationName === 'charcoal-toast-exit'
      ) {
        complete()
      }
    }
    function complete() {
      if (completed) return
      completed = true
      toast.removeEventListener('animationend', handleAnimationEnd)
      window.clearTimeout(fallbackTimer)
      finish()
    }
    toast.addEventListener('animationend', handleAnimationEnd)
    fallbackTimer = window.setTimeout(
      complete,
      EXIT_ANIMATION_DURATION_MS + 100,
    )
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      complete()
    }
  }, [])

  const state = useToastState<ToastContent>({
    maxVisibleToasts: 1,
    wrapUpdate: wrapToastUpdate,
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
      : ENTER_ANIMATION_DURATION_MS
    state.add(content, {
      // react-stately は 0 を「タイマーなし」と扱うため、最小の正数を渡す
      timeout: Math.max(1, duration + enterMs),
    })
  }
  playNextRef.current = playNext

  function show(message: ReactNode, options: ToastShowOptions) {
    const { duration: durationOption = DEFAULT_DURATION_MS, variant } = options
    const duration =
      typeof durationOption === 'number' && Number.isFinite(durationOption)
        ? Math.max(0, durationOption)
        : DEFAULT_DURATION_MS

    queueRef.current.push({
      message,
      variant,
      duration,
    })
    if (!isShowingRef.current) {
      playNext()
    }
  }

  useImperativeHandle(ref, () => ({ show }))

  return (
    <ToastRegion
      state={state}
      position={position}
      offset={offset}
      zIndex={zIndex}
      portalContainer={portalContainer}
      className={className}
      toastRef={toastRef}
      onHoverStart={() => {
        hoverRef.current.active = true
      }}
      onHoverEnd={() => {
        hoverRef.current.active = false
        const pending = hoverRef.current.pending
        hoverRef.current.pending = undefined
        pending?.()
      }}
    />
  )
})

export default Toast

export function useToast(props: ToastProps = {}) {
  'use memo'

  const { position, offset, zIndex, portalContainer, className } = props
  const toastHandlerRef = useRef<ToastHandler>(null)
  const element = (
    <Toast
      ref={toastHandlerRef}
      position={position}
      offset={offset}
      zIndex={zIndex}
      portalContainer={portalContainer}
      className={className}
    />
  )
  function show(message: ReactNode, options: ToastShowOptions) {
    toastHandlerRef.current?.show(message, options)
  }
  return [element, show] as const
}

function ToastRegion({
  state,
  position,
  offset,
  zIndex,
  portalContainer,
  className,
  toastRef,
  onHoverStart,
  onHoverEnd,
}: {
  state: ToastState<ToastContent>
  position: ToastPosition
  offset: number
  zIndex: number
  portalContainer?: HTMLElement
  className?: string
  toastRef: RefObject<HTMLDivElement>
  onHoverStart: () => void
  onHoverEnd: () => void
}) {
  const regionRef = useRef<HTMLDivElement>(null)
  const pausedByFocusRef = useRef(false)
  const timerState: ToastState<ToastContent> = {
    ...state,
    pauseAll() {
      if (regionRef.current?.contains(document.activeElement)) {
        pausedByFocusRef.current = true
        state.pauseAll()
      }
    },
    resumeAll() {
      if (pausedByFocusRef.current) {
        pausedByFocusRef.current = false
        state.resumeAll()
      }
    },
  }
  const { regionProps } = useToastRegion({}, timerState, regionRef)
  const classNames = useClassNames('charcoal-toast-region', className)

  if (state.visibleToasts.length === 0) {
    return null
  }

  return (
    <Overlay disableFocusManagement portalContainer={portalContainer}>
      <div
        {...regionProps}
        ref={regionRef}
        className={classNames}
        data-position={position}
        style={{
          zIndex,
          '--charcoal-toast-offset': `${offset}px`,
        }}
      >
        {state.visibleToasts.map((toast) => (
          <ToastItem
            key={toast.key}
            toast={toast}
            state={state}
            toastRef={toastRef}
            onHoverStart={onHoverStart}
            onHoverEnd={onHoverEnd}
          />
        ))}
      </div>
    </Overlay>
  )
}

function ToastItem({
  toast,
  state,
  toastRef,
  onHoverStart,
  onHoverEnd,
}: {
  toast: QueuedToast<ToastContent>
  state: ToastState<ToastContent>
  toastRef: RefObject<HTMLDivElement>
  onHoverStart: () => void
  onHoverEnd: () => void
}) {
  const { toastProps, contentProps, titleProps } = useAriaToast(
    { toast },
    state,
    toastRef,
  )
  const { message, variant } = toast.content

  return (
    <div
      {...toastProps}
      ref={toastRef}
      className="charcoal-toast"
      data-variant={variant}
      onPointerEnter={onHoverStart}
      onPointerLeave={onHoverEnd}
    >
      <div {...contentProps} role="status" className="charcoal-toast-content">
        <div {...titleProps} className="charcoal-toast-label">
          {message}
        </div>
      </div>
    </div>
  )
}
