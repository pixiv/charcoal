import '../layout.css'
import './index.css'

import { forwardRef, useImperativeHandle, useRef } from 'react'
import type { ReactNode } from 'react'
import { NotificationItem } from '../NotificationItem'
import { NotificationRegion } from '../NotificationRegion'
import { useNotificationQueue } from '../useNotificationQueue'
import type { NotificationProps, Position } from '../types'

export type SnackbarCloseReason =
  'timeout' | 'replaced' | 'action' | 'close' | 'unmounted'

export type ShowSnackbarOptions = {
  /**
   * Snackbar の右側に表示するアクション
   */
  action?: ReactNode
  /**
   * Snackbar が閉じるときに呼び出される
   */
  onClose?: (reason: SnackbarCloseReason) => void
}

export type SnackbarHandler = {
  show: (message: ReactNode, options?: ShowSnackbarOptions) => void
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
  action?: ReactNode
}

const Snackbar = forwardRef<SnackbarHandler, SnackbarProps>(function Snackbar(
  { position = 'bottom', dim = false, duration, order, ...regionProps },
  ref,
) {
  'use memo'

  const { state, itemRef, enqueue, close, onHoverStart, onHoverEnd } =
    useNotificationQueue<SnackbarContent, SnackbarCloseReason>('snackbar', {
      duration,
      order,
      timeoutReason: 'timeout',
      unmountedReason: 'unmounted',
    })

  function show(message: ReactNode, options: ShowSnackbarOptions = {}) {
    enqueue(
      {
        message,
        action: options.action,
      },
      options.onClose,
    )
  }

  useImperativeHandle(ref, () => ({ show }))

  // アクション付きの Snackbar は常に下部に表示される
  const hasAction = state.visibleToasts.some(
    (toast) => toast.content.action !== undefined,
  )
  const effectivePosition = hasAction ? 'bottom' : position

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
          data-with-action={toast.content.action !== undefined}
        >
          {toast.content.action !== undefined && (
            <SnackbarAction
              action={toast.content.action}
              onClick={() => close(toast.key, 'action')}
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
  function show(message: ReactNode, options?: ShowSnackbarOptions) {
    snackbarHandlerRef.current?.show(message, options)
  }
  return [element, show] as const
}

function SnackbarAction({
  action,
  onClick,
}: {
  action: ReactNode
  onClick: () => void
}) {
  return <div onClick={onClick}>{action}</div>
}
