import '../layout.css'
import './index.css'

import { forwardRef, useImperativeHandle, useRef } from 'react'
import type { ReactNode } from 'react'
import { NotificationItem } from '../NotificationItem'
import { NotificationRegion } from '../NotificationRegion'
import { useNotificationQueue } from '../useNotificationQueue'
import type { NotificationProps, Position } from '../types'

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

export type ToastProps = Omit<NotificationProps, 'position'> & {
  /**
   * Toast の表示位置
   * @default 'top'
   */
  position?: Position
}

type ToastContent = {
  message: ReactNode
  variant: ToastVariant
}

const Toast = forwardRef<ToastHandler, ToastProps>(function Toast(
  { position = 'top', ...regionProps },
  ref,
) {
  'use memo'

  const { state, itemRef, enqueue, onHoverStart, onHoverEnd } =
    useNotificationQueue<ToastContent>('toast')

  function show(message: ReactNode, options: ToastShowOptions) {
    enqueue(
      {
        message,
        variant: options.variant,
      },
      options.duration,
    )
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
          data-variant={toast.content.variant}
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
  function show(message: ReactNode, options: ToastShowOptions) {
    toastHandlerRef.current?.show(message, options)
  }
  return [element, show] as const
}
