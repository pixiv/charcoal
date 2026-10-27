import '../layout.css'
import './index.css'

import { forwardRef, useImperativeHandle, useRef } from 'react'
import type { ReactNode } from 'react'
import { NotificationItem } from '../NotificationItem'
import { NotificationRegion } from '../NotificationRegion'
import { useNotificationQueue } from '../useNotificationQueue'
import type { NotificationProps, Position } from '../types'

export type ToastType = 'success' | 'error'

export type ShowToastOptions = {
  type: ToastType
}

export type ToastHandler = {
  show: (message: ReactNode, options: ShowToastOptions) => void
}

export type ToastProps = Omit<NotificationProps, 'position'> & {
  /**
   * Toast の表示位置
   * @default 'top'
   */
  position?: Position
}

type ToastContent = {
  message: ReactNode
  type: ToastType
}

const Toast = forwardRef<ToastHandler, ToastProps>(function Toast(
  { position = 'top', duration, order, ...regionProps },
  ref,
) {
  'use memo'

  const { state, itemRef, enqueue, onHoverStart, onHoverEnd } =
    useNotificationQueue<ToastContent>('toast', { duration, order })

  function show(message: ReactNode, options: ShowToastOptions) {
    enqueue({
      message,
      type: options.type,
    })
  }

  useImperativeHandle(ref, () => ({ show }))

  return (
    <NotificationRegion
      name="toast"
      state={state}
      position={position}
      {...regionProps}
    >
      {state.visibleToasts.map((toast) => (
        <NotificationItem
          key={toast.key}
          name="toast"
          toast={toast}
          state={state}
          itemRef={itemRef}
          onHoverStart={onHoverStart}
          onHoverEnd={onHoverEnd}
          data-type={toast.content.type}
        />
      ))}
    </NotificationRegion>
  )
})

export default Toast

export function useToast(props: ToastProps = {}) {
  'use memo'

  const toastHandlerRef = useRef<ToastHandler>(null)
  const element = <Toast ref={toastHandlerRef} {...props} />
  function show(message: ReactNode, options: ShowToastOptions) {
    toastHandlerRef.current?.show(message, options)
  }
  return [element, show] as const
}
