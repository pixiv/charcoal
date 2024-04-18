import { forwardRef, useImperativeHandle, useRef, memo, useMemo } from 'react'
import { useProgressBar } from '@react-aria/progress'
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
    const { progressBarProps } = useProgressBar(
      useMemo(() => ({ isIndeterminate: true }), [])
    )
    const className = useClassNames('charcoal-loading-spinner', props.className)

    return (
      <div
        {...progressBarProps}
        style={{
          '--charcoal-loading-spinner-size': `${size}px`,
          '--charcoal-loading-spinner-padding': `${padding}px`,
        }}
        data-transparent={transparent}
        className={className}
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
