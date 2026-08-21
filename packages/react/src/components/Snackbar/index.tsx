import './index.css'

import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react'
import type { ElementType, RefObject } from 'react'
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
  /**
   * ボタンを押したときに Snackbar を閉じるか
   * @default true
   */
  hideSnackbarOnClick?: boolean
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
    message: string,
    options?: SnackbarShowOptions<T>,
  ) => void
}

export type SnackbarProps = {
  /**
   * Snackbar の表示位置。ボタン付きの場合は `bottom` に固定される
   * @default 'top'
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
  message: string
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
    position = 'top',
    offset = 16,
    dim = false,
    zIndex = DEFAULT_Z_INDEX,
    portalContainer,
    className,
  },
  ref,
) {
  'use memo'

  const regionRef = useRef<HTMLDivElement>(null)
  const queueRef = useRef<QueuedSnackbar[]>([]) // 前の要素が消えるまで呼び出し関数を持っておく
  const onRemovedRef = useRef<(() => void) | null>(null)
  
  // wrapUpdate の参照が変わると useToastState が ToastQueue を作り直すため固定する
  const wrapToastUpdate = useCallback(
    (update: () => void, action: 'add' | 'remove' | 'clear') => {
      if (action !== 'remove') {
        update()
        return
      }

      const finish = () => {
        update()
        const onRemoved = onRemovedRef.current
        onRemovedRef.current = null
        onRemoved?.()
      }

      const snackbar =
        regionRef.current?.querySelector<HTMLElement>('.charcoal-snackbar')
      if (snackbar === undefined || snackbar === null) {
        finish()
        return
      }

      // allow-discreteが Newly Available で使えないので、要素の削除をアニメーション完了まで待つ
      snackbar.dataset.exiting = 'true'
      let completed = false
      const complete = () => {
        if (completed) return
        completed = true
        snackbar.removeEventListener('animationend', handleAnimationEnd)
        window.clearTimeout(fallbackTimer)
        finish()
      }
      const handleAnimationEnd = (event: AnimationEvent) => {
        if (
          event.target === snackbar &&
          event.animationName === 'charcoal-snackbar-exit'
        ) {
          complete()
        }
      }
      const fallbackTimer = window.setTimeout(
        complete,
        EXIT_ANIMATION_DURATION_MS + 100,
      )

      snackbar.addEventListener('animationend', handleAnimationEnd)

      if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
        complete()
      }
    },
    [],
  )

  const state = useToastState<SnackbarContent>({
    maxVisibleToasts: 1,
    wrapUpdate: wrapToastUpdate,
  })

  useEffect(() => {
    return () => {
      queueRef.current = []
      onRemovedRef.current = null
    }
  }, [])

  function playNext() {
    const next = queueRef.current.shift()
    if (next === undefined) {
      return
    }

    const { duration, ...content } = next
    state.add(content, {
      // react-stately は 0 を「タイマーなし」と扱うため、最小の正数を渡す
      timeout: duration === 0 ? 1 : duration,
    })
    onRemovedRef.current = playNext
  }

  function show<T extends ElementType = 'button'>(
    message: string,
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
    if (onRemovedRef.current === null) {
      playNext()
    }
  }

  useImperativeHandle(ref, () => ({ show }), [show])

  return (
    <SnackbarRegion
      state={state}
      position={position}
      offset={offset}
      dim={dim}
      zIndex={zIndex}
      portalContainer={portalContainer}
      className={className}
      regionRef={regionRef}
    />
  )
})

export default Snackbar

export function useSnackbar(props: SnackbarProps = {}) {
  const { position, offset, dim, zIndex, portalContainer, className } = props
  const snackbarHandlerRef = useRef<SnackbarHandler>(null)
  const element = useMemo(
    () => (
      <Snackbar
        ref={snackbarHandlerRef}
        position={position}
        offset={offset}
        dim={dim}
        zIndex={zIndex}
        portalContainer={portalContainer}
        className={className}
      />
    ),
    [position, offset, dim, zIndex, portalContainer, className],
  )
  const show = useCallback<SnackbarHandler['show']>((message, options) => {
    snackbarHandlerRef.current?.show(message, options)
  }, [])
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
  regionRef,
}: {
  state: ToastState<SnackbarContent>
  position: SnackbarPosition
  offset: number
  dim: boolean
  zIndex: number
  portalContainer?: HTMLElement
  className?: string
  regionRef: RefObject<HTMLDivElement>
}) {
  const { regionProps } = useToastRegion({}, state, regionRef)
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
        onFocus={(event) => {
          regionProps.onFocus?.(event)

          // F6 で通知領域へ移動したとき、アクションがあれば直接フォーカスする
          if (event.target === event.currentTarget) {
            event.currentTarget
              .querySelector<HTMLElement>('.charcoal-button')
              ?.focus()
          }
        }}
        style={{
          zIndex,
          ...(effectivePosition === 'top'
            ? { top: offset }
            : { bottom: offset }),
        }}
      >
        {state.visibleToasts.map((toast) => (
          <SnackbarItem key={toast.key} toast={toast} state={state} dim={dim} />
        ))}
      </div>
    </Overlay>
  )
}

function SnackbarItem({
  toast,
  state,
  dim,
}: {
  toast: QueuedToast<SnackbarContent>
  state: ToastState<SnackbarContent>
  dim: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { toastProps, contentProps, titleProps } = useToast(
    { toast },
    state,
    ref,
  )
  const { message, button } = toast.content

  return (
    <div
      {...toastProps}
      ref={ref}
      className="charcoal-snackbar"
      data-dim={dim}
      data-with-button={button !== undefined}
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
        <SnackbarAction
          button={button}
          dim={dim}
          onClose={() => state.close(toast.key)}
        />
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
  const {
    hideSnackbarOnClick = true,
    onClick,
    variant,
    children: buttonChildren,
    ...buttonProps
  } = button

  function handleButtonClick(
    event: Parameters<NonNullable<ButtonProps<'button'>['onClick']>>[0],
  ) {
    onClick?.(event)
    if (hideSnackbarOnClick) {
      onClose()
    }
  }

  return (
    <PolymorphicButton
      {...buttonProps}
      size="S"
      variant={variant ?? (dim ? 'Navigation' : undefined)}
      aria-keyshortcuts="F6"
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
