import '../layout.css'
import './index.css'

import { forwardRef, type HTMLAttributes, type ReactNode } from 'react'
import { useClassNames } from '../../../_lib/useClassNames'
import { NotificationItem } from '../NotificationItem'
import { NotificationRegion } from '../NotificationRegion'
import { useNotificationQueue } from '../useNotificationQueue'
import type { NotificationProps, Position } from '../types'

export type SnackbarCloseReason =
  'timeout' | 'replaced' | 'action' | 'close' | 'unmounted'

export type ShowSnackbarOptions = {
  action?: ReactNode
  onClose?: (reason: SnackbarCloseReason) => void
}

type SnackbarBaseProps = {
  message: ReactNode
  action?: ReactNode
  dim?: boolean
} & Omit<HTMLAttributes<HTMLDivElement>, 'children'>

export type SnackbarProps = Omit<SnackbarBaseProps, 'action'> & {
  /** Snackbar の右側に表示するアクション */
  action: NonNullable<ReactNode>
}

export type UseSnackbarProps = Omit<NotificationProps, 'position'> & {
  position?: Position
  dim?: boolean
}

type SnackbarContent = {
  message: ReactNode
  action?: ReactNode
}

const Snackbar = forwardRef<HTMLDivElement, SnackbarProps>(
  function Snackbar(props, ref) {
    return <SnackbarBase {...props} ref={ref} />
  },
)

export default Snackbar

export function useSnackbar(props: UseSnackbarProps = {}) {
  'use memo'

  const {
    position = 'bottom',
    dim = false,
    duration,
    order,
    ...regionProps
  } = props
  const { state, itemRef, enqueue, close, onHoverStart, onHoverEnd } =
    useNotificationQueue<SnackbarContent, SnackbarCloseReason>('snackbar', {
      duration,
      order,
      timeoutReason: 'timeout',
      unmountedReason: 'unmounted',
    })

  function show(message: ReactNode, options: ShowSnackbarOptions = {}) {
    enqueue({ message, action: options.action }, options.onClose)
  }

  const hasAction = state.visibleToasts.some(
    (toast) => toast.content.action !== undefined,
  )
  const effectivePosition = hasAction ? 'bottom' : position
  const element = (
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
            <div onClick={() => close(toast.key, 'action')}>
              <SnackbarAction action={toast.content.action} />
            </div>
          )}
        </NotificationItem>
      ))}
    </NotificationRegion>
  )

  return [element, show] as const
}

const SnackbarBase = forwardRef<HTMLDivElement, SnackbarBaseProps>(
  function SnackbarBase(
    { message, action, dim = false, className, ...rootProps },
    ref,
  ) {
    const classNames = useClassNames(
      'charcoal-notification',
      'charcoal-snackbar',
      className,
    )

    return (
      <div
        {...rootProps}
        ref={ref}
        className={classNames}
        data-dim={dim}
        data-with-action={action !== undefined}
      >
        <div role="status" className="charcoal-notification-content">
          <div className="charcoal-notification-label">{message}</div>
        </div>
        {action !== undefined && <SnackbarAction action={action} />}
      </div>
    )
  },
)

function SnackbarAction({ action }: { action: ReactNode }) {
  return <div>{action}</div>
}
