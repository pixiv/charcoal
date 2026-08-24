import { useRef, type CSSProperties, type ReactNode } from 'react'
import { Overlay } from 'react-aria/Overlay'
import { useToastRegion } from 'react-aria/useToast'
import type { ToastState } from 'react-stately/useToastState'
import { useClassNames } from '../../_lib/useClassNames'
import type { NotificationName, Position } from './types'

const DEFAULT_OFFSET = 16
const DEFAULT_Z_INDEX = 20

export function NotificationRegion<TContent>({
  name,
  state,
  position,
  offset = DEFAULT_OFFSET,
  zIndex = DEFAULT_Z_INDEX,
  portalContainer,
  className,
  children,
}: {
  name: NotificationName
  state: ToastState<TContent>
  position: Position
  offset?: number
  zIndex?: number
  portalContainer?: HTMLElement
  className?: string
  children: ReactNode
}) {
  const regionRef = useRef<HTMLDivElement>(null)
  const pausedByFocusRef = useRef(false)
  const timerState: ToastState<TContent> = {
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
  const classNames = useClassNames(
    'charcoal-notification-region',
    `charcoal-${name}-region`,
    className,
  )

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
        style={
          {
            zIndex,
            [`--charcoal-${name}-offset`]: `${offset}px`,
          } as CSSProperties
        }
      >
        {children}
      </div>
    </Overlay>
  )
}
