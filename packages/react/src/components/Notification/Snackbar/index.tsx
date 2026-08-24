import '../layout.css'
import './index.css'

import { forwardRef, useImperativeHandle, useRef } from 'react'
import type { ElementType, ReactNode } from 'react'
import { NotificationItem } from '../NotificationItem'
import { NotificationRegion } from '../NotificationRegion'
import { useNotificationQueue } from '../useNotificationQueue'
import type { NotificationProps, Position } from '../types'
import Button, { type ButtonProps } from '../../Button'

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

export type SnackbarProps = Omit<NotificationProps, 'position'> & {
  /**
   * Snackbar の表示位置。ボタン付きの場合は `bottom` に固定される
   * @default 'bottom'
   */
  position?: Position
  /**
   * 暗い背景色
   * @default false
   */
  dim?: boolean
}

type SnackbarContent = {
  message: ReactNode
  button?: SnackbarButtonContent
}

type SnackbarButtonContent = Omit<SnackbarButtonOption, 'component'> & {
  component?: ElementType
}

const Snackbar = forwardRef<SnackbarHandler, SnackbarProps>(function Snackbar(
  { position = 'bottom', dim = false, ...regionProps },
  ref,
) {
  'use memo'

  const { state, itemRef, enqueue, onHoverStart, onHoverEnd, clearHover } =
    useNotificationQueue<SnackbarContent>('snackbar')

  function show<T extends ElementType = 'button'>(
    message: ReactNode,
    options: SnackbarShowOptions<T> = {},
  ) {
    enqueue(
      {
        message,
        button: options.button as SnackbarButtonContent | undefined,
      },
      options.duration,
    )
  }

  useImperativeHandle(ref, () => ({ show }))

  // ボタン付きの Snackbar は常に下部に表示される
  const hasButton = state.visibleToasts.some(
    (toast) => toast.content.button !== undefined,
  )
  const effectivePosition = hasButton ? 'bottom' : position

  return (
    <NotificationRegion
      name="snackbar"
      state={state}
      position={effectivePosition}
      {...regionProps}
    >
      {state.visibleToasts.map((toast) => (
        <NotificationItem
          key={toast.key}
          name="snackbar"
          toast={toast}
          state={state}
          itemRef={itemRef}
          onHoverStart={onHoverStart}
          onHoverEnd={onHoverEnd}
          data-dim={dim}
          data-with-button={toast.content.button !== undefined}
        >
          {toast.content.button !== undefined && (
            <SnackbarAction
              button={toast.content.button}
              dim={dim}
              onClose={() => {
                clearHover()
                state.close(toast.key)
              }}
            />
          )}
        </NotificationItem>
      ))}
    </NotificationRegion>
  )
})

export default Snackbar

export function useSnackbar(props: SnackbarProps = {}) {
  'use memo'

  const snackbarHandlerRef = useRef<SnackbarHandler>(null)
  const element = <Snackbar ref={snackbarHandlerRef} {...props} />
  function show<T extends ElementType = 'button'>(
    message: ReactNode,
    options?: SnackbarShowOptions<T>,
  ) {
    snackbarHandlerRef.current?.show(message, options)
  }
  return [element, show] as const
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
