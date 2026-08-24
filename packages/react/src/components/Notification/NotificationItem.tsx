import type { HTMLAttributes, ReactNode, RefObject } from 'react'
import { useToast } from 'react-aria/useToast'
import type { QueuedToast, ToastState } from 'react-stately/useToastState'
import type { NotificationName } from './types'

export function NotificationItem<TContent extends { message: ReactNode }>({
  name,
  toast,
  state,
  itemRef,
  onHoverStart,
  onHoverEnd,
  children,
  ...rootProps
}: {
  name: NotificationName
  toast: QueuedToast<TContent>
  state: ToastState<TContent>
  itemRef: RefObject<HTMLDivElement>
  onHoverStart: () => void
  onHoverEnd: () => void
  children?: ReactNode
} & Omit<HTMLAttributes<HTMLDivElement>, 'itemRef'>) {
  const { toastProps, contentProps, titleProps } = useToast(
    { toast },
    state,
    itemRef,
  )

  return (
    <div
      {...toastProps}
      {...rootProps}
      ref={itemRef}
      className={`charcoal-notification charcoal-${name}`}
      onPointerEnter={onHoverStart}
      onPointerLeave={onHoverEnd}
    >
      <div
        {...contentProps}
        role="status"
        className="charcoal-notification-content"
      >
        <div {...titleProps} className="charcoal-notification-label">
          {toast.content.message}
        </div>
      </div>
      {children}
    </div>
  )
}
