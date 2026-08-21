import './index.css'

import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react'
import type { ElementType, ReactNode, RefObject } from 'react'
import { Overlay } from 'react-aria/Overlay'
import { useToast, useToastRegion } from 'react-aria/useToast'
import {
  useToastState,
  type QueuedToast,
  type ToastState,
} from 'react-stately/useToastState'
import { useClassNames } from '../../_lib/useClassNames'
import Button, { type ButtonProps } from '../Button'

const DEFAULT_DURATION_MS = 5000
const DEFAULT_Z_INDEX = 10
const ENTER_ANIMATION_DURATION_MS = 300
const EXIT_ANIMATION_DURATION_MS = 300

type SnackbarPosition = 'top' | 'bottom'

type SnackbarButtonOption<T extends ElementType = 'button'> = Omit<
  ButtonProps<T>,
  'component' | 'className' | 'size'
> & {
  /**
   * ボタンのルート要素として使用するコンポーネント。ページ遷移を伴う場合は `Link` を指定する
   * @default 'button'
   * @example 'Link'
   */
  component?: T
} & ('button' extends T ? unknown : { component: T })

export type SnackbarShowOptions<T extends ElementType = 'button'> = {
  /**
   * Snackbar を表示する時間（ミリ秒）。負の値は 0、数値でない値は 5000 として扱う
   * @default 5000
   */
  duration?: number
  /**
   * Snackbar の右側に表示するボタン
   */
  button?: SnackbarButtonOption<T>
}

export type SnackbarHandler = {
  show: <T extends ElementType = 'button'>(
    message: ReactNode,
    options?: SnackbarShowOptions<T>,
  ) => void
}

export type SnackbarProps = {
  /**
   * Snackbar の表示位置。ボタン付きの場合は `bottom` に固定される
   * @default 'bottom'
   */
  position?: SnackbarPosition
  /**
   * 画面端からの距離（ピクセル）
   * @default 16
   */
  offset?: number
  /**
   * 暗い背景色
   * @default false
   */
  dim?: boolean
  zIndex?: number
  portalContainer?: HTMLElement
  className?: string
}

type SnackbarContent = {
  message: ReactNode
  button?: SnackbarButtonContent
}

type QueuedSnackbar = SnackbarContent & {
  duration: number
}

type SnackbarButtonContent = Omit<SnackbarButtonOption, 'component'> & {
  component?: ElementType
}

const Snackbar = forwardRef<SnackbarHandler, SnackbarProps>(function Snackbar(
  {
    position = 'bottom',
    offset = 16,
    dim = false,
    zIndex = DEFAULT_Z_INDEX,
    portalContainer,
    className,
  },
  ref,
) {
  'use memo'

  const snackbarRef = useRef<HTMLDivElement>(null)
  const queueRef = useRef<QueuedSnackbar[]>([])
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

    if (snackbarRef.current === null) {
      finish()
      return
    }
    const snackbar: HTMLDivElement = snackbarRef.current

    // allow-discreteが Newly Available で使えないので、要素の削除をアニメーション完了まで待つ
    snackbar.dataset.exiting = 'true'
    let completed = false
    let fallbackTimer = 0 // complete 内で clearTimeout(setTimeout(...)) すると新規タイマーを即キャンセルしてしまう
    function handleAnimationEnd(event: AnimationEvent) {
      if (
        event.target === snackbar &&
        event.animationName === 'charcoal-snackbar-exit'
      ) {
        complete()
      }
    }
    function complete() {
      if (completed) return
      completed = true
      snackbar.removeEventListener('animationend', handleAnimationEnd)
      window.clearTimeout(fallbackTimer)
      finish()
    }
    snackbar.addEventListener('animationend', handleAnimationEnd)
    fallbackTimer = window.setTimeout(
      complete,
      EXIT_ANIMATION_DURATION_MS + 100,
    )
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      complete()
    }
  }, [])

  const state = useToastState<SnackbarContent>({
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

  function show<T extends ElementType = 'button'>(
    message: ReactNode,
    options: SnackbarShowOptions<T> = {},
  ) {
    const { duration: durationOption = DEFAULT_DURATION_MS, button } = options
    const duration =
      typeof durationOption === 'number' && Number.isFinite(durationOption)
        ? Math.max(0, durationOption)
        : DEFAULT_DURATION_MS

    queueRef.current.push({
      message,
      button: button as SnackbarButtonContent | undefined,
      duration,
    })
    if (!isShowingRef.current) {
      playNext()
    }
  }

  useImperativeHandle(ref, () => ({ show }))

  return (
    <SnackbarRegion
      state={state}
      position={position}
      offset={offset}
      dim={dim}
      zIndex={zIndex}
      portalContainer={portalContainer}
      className={className}
      snackbarRef={snackbarRef}
      onHoverStart={() => {
        hoverRef.current.active = true
      }}
      onHoverEnd={() => {
        hoverRef.current.active = false
        const pending = hoverRef.current.pending
        hoverRef.current.pending = undefined
        pending?.()
      }}
      onActionClose={() => {
        hoverRef.current.active = false
        hoverRef.current.pending = undefined
      }}
    />
  )
})

export default Snackbar

export function useSnackbar(props: SnackbarProps = {}) {
  'use memo'

  const { position, offset, dim, zIndex, portalContainer, className } = props
  const snackbarHandlerRef = useRef<SnackbarHandler>(null)
  const element = (
    <Snackbar
      ref={snackbarHandlerRef}
      position={position}
      offset={offset}
      dim={dim}
      zIndex={zIndex}
      portalContainer={portalContainer}
      className={className}
    />
  )
  function show<T extends ElementType = 'button'>(
    message: ReactNode,
    options?: SnackbarShowOptions<T>,
  ) {
    snackbarHandlerRef.current?.show(message, options)
  }
  return [element, show] as const
}

function SnackbarRegion({
  state,
  position,
  offset,
  dim,
  zIndex,
  portalContainer,
  className,
  snackbarRef,
  onHoverStart,
  onHoverEnd,
  onActionClose,
}: {
  state: ToastState<SnackbarContent>
  position: SnackbarPosition
  offset: number
  dim: boolean
  zIndex: number
  portalContainer?: HTMLElement
  className?: string
  snackbarRef: RefObject<HTMLDivElement>
  onHoverStart: () => void
  onHoverEnd: () => void
  onActionClose: () => void
}) {
  const regionRef = useRef<HTMLDivElement>(null)
  const pausedByFocusRef = useRef(false)
  const timerState: ToastState<SnackbarContent> = {
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
  const classNames = useClassNames('charcoal-snackbar-region', className)

  if (state.visibleToasts.length === 0) {
    return null
  }

  // ボタン付きの Snackbar は常に下部に表示される
  const hasButton = state.visibleToasts.some(
    (toast) => toast.content.button !== undefined,
  )
  const effectivePosition = hasButton ? 'bottom' : position

  return (
    <Overlay disableFocusManagement portalContainer={portalContainer}>
      <div
        {...regionProps}
        ref={regionRef}
        className={classNames}
        data-position={effectivePosition}
        style={{
          zIndex,
          '--charcoal-snackbar-offset': `${offset}px`,
        }}
      >
        {state.visibleToasts.map((toast) => (
          <SnackbarItem
            key={toast.key}
            toast={toast}
            state={state}
            dim={dim}
            snackbarRef={snackbarRef}
            onHoverStart={onHoverStart}
            onHoverEnd={onHoverEnd}
            onActionClose={() => {
              onActionClose()
              state.close(toast.key)
            }}
          />
        ))}
      </div>
    </Overlay>
  )
}

function SnackbarItem({
  toast,
  state,
  dim,
  snackbarRef,
  onHoverStart,
  onHoverEnd,
  onActionClose,
}: {
  toast: QueuedToast<SnackbarContent>
  state: ToastState<SnackbarContent>
  dim: boolean
  snackbarRef: RefObject<HTMLDivElement>
  onHoverStart: () => void
  onHoverEnd: () => void
  onActionClose: () => void
}) {
  const { toastProps, contentProps, titleProps } = useToast(
    { toast },
    state,
    snackbarRef,
  )
  const { message, button } = toast.content

  return (
    <div
      {...toastProps}
      ref={snackbarRef}
      className="charcoal-snackbar"
      data-dim={dim}
      data-with-button={button !== undefined}
      onPointerEnter={onHoverStart}
      onPointerLeave={onHoverEnd}
    >
      <div
        {...contentProps}
        role="status"
        className="charcoal-snackbar-content"
      >
        <div {...titleProps} className="charcoal-snackbar-label">
          {message}
        </div>
      </div>
      {button !== undefined && (
        <SnackbarAction button={button} dim={dim} onClose={onActionClose} />
      )}
    </div>
  )
}

function SnackbarAction({
  button,
  dim,
  onClose,
}: {
  button: SnackbarButtonContent
  dim: boolean
  onClose: () => void
}) {
  const { onClick, variant, children: buttonChildren, ...buttonProps } = button

  function handleButtonClick(
    event: Parameters<NonNullable<ButtonProps<'button'>['onClick']>>[0],
  ) {
    onClick?.(event)
    onClose()
  }

  return (
    <PolymorphicButton
      {...buttonProps}
      size="S"
      variant={variant ?? (dim ? 'Navigation' : undefined)}
      onClick={handleButtonClick}
    >
      {buttonChildren}
    </PolymorphicButton>
  )
}

function PolymorphicButton({
  component,
  ...props
}: Omit<ButtonProps, 'component'> & { component?: ElementType }) {
  if (component === undefined || component === 'button') {
    return <Button {...props} />
  }

  return <Button {...props} component={component} />
}
