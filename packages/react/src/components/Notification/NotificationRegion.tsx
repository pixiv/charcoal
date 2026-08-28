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
  headerOffset = 0,
  zIndex = DEFAULT_Z_INDEX,
  portalContainer,
  className,
  children,
}: {
  name: NotificationName
  state: ToastState<TContent>
  position: Position
  offset?: number
  headerOffset?: number
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
  const classNames = useClassNames('charcoal-notification-region', className)

  if (state.visibleToasts.length === 0) {
    return null
  }

  return (
    <Overlay disableFocusManagement portalContainer={portalContainer}>
      <div
        {...regionProps}
        ref={regionRef}
        className={classNames}
        style={
          {
            zIndex,
            [`--charcoal-${name}-offset`]: `${offset}px`,
            justifyContent: position === 'top' ? 'flex-start' : 'flex-end',
          } as CSSProperties
        }
      >
        <div
          style={{
            height: `calc(${headerOffset}px + env(safe-area-inset-top, 0px) + max(var(--charcoal-${name}-offset), ${DEFAULT_OFFSET}px))`,
          }}
        />
        <div data-position={position} className={`charcoal-${name}-region`}>
          {children}
        </div>
      </div>
    </Overlay>
  )
}
