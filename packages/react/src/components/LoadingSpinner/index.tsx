import { forwardRef, useImperativeHandle, useRef, memo } from 'react'
import { useClassNames } from '../../_lib/useClassNames'

import './index.css'

export type LoadingSpinnerProps = {
  readonly size?: number
  readonly padding?: number
  readonly transparent?: boolean
  readonly className?: string
}

const LoadingSpinner = forwardRef<HTMLDivElement, LoadingSpinnerProps>(
  function LoadingSpinnerInner(
    { size = 48, padding = 16, transparent = false, ...props },
    ref
  ) {
    const classNames = useClassNames(
      'charcoal-loading-spinner',
      props.className
    )

    return (
      <div
        role="progressbar"
        style={{
          '--ch-loading-spinner-size': `${size}px`,
          '--ch-loading-spinner-padding': `${padding}px`,
        }}
        data-transparent={transparent}
        className={classNames}
        ref={ref}
      >
        <LoadingSpinnerIcon />
      </div>
    )
  }
)

export default memo(LoadingSpinner)

type Props = {
  once?: boolean
}

export interface LoadingSpinnerIconHandler {
  restart(): void
}

export const LoadingSpinnerIcon = forwardRef<LoadingSpinnerIconHandler, Props>(
  function LoadingSpinnerIcon({ once = false }, ref) {
    const iconRef = useRef<HTMLDivElement>(null)

    useImperativeHandle(ref, () => ({
      restart: () => {
        if (!iconRef.current) {
          return
        }
        iconRef.current.dataset.resetAnimation = 'true'
        // Force reflow hack!
        void iconRef.current.offsetWidth
        delete iconRef.current.dataset.resetAnimation
      },
    }))

    return (
      <div
        role="presentation"
        ref={iconRef}
        data-once={once}
        className="charcoal-loading-spinner-icon"
      />
    )
  }
)
