import { forwardRef, useImperativeHandle, useRef, memo } from 'react'
import styled, { keyframes } from 'styled-components'

export type LoadingSpinnerProps = {
  readonly size?: number
  readonly padding?: number
  readonly transparent?: boolean
  readonly className?: string
}

const LoadingSpinner = forwardRef<HTMLDivElement, LoadingSpinnerProps>(
  function LoadingSpinnerInner(
    { size = 48, padding = 16, transparent = false, className },
    ref
  ) {
    return (
      <LoadingSpinnerRoot
        size={size}
        padding={padding}
        transparent={transparent}
        className={className}
        ref={ref}
      >
        <LoadingSpinnerIcon />
      </LoadingSpinnerRoot>
    )
  }
)

export default memo(LoadingSpinner)

const LoadingSpinnerRoot = styled.div.attrs({ role: 'progressbar' })<{
  size: number
  padding: number
  transparent: boolean
}>`
  box-sizing: content-box;
  margin: auto;
  padding: ${(props) => props.padding}px;
  border-radius: 8px;
  font-size: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  opacity: 0.84;
  color: var(--charcoal-text4);
  background-color: ${({ transparent }) =>
    `var(--charcoal-${transparent ? 'transparent' : 'background1'})`};
`

const scaleOut = keyframes`
  from {
    transform: scale(0);
    opacity: 1;
  }

  to {
    transform: scale(1);
    opacity: 0;
  }
`

const Icon = styled.div.attrs({ role: 'presentation' })<{ once: boolean }>`
  width: 1em;
  height: 1em;
  border-radius: 1em;
  background-color: currentColor;
  animation: ${scaleOut} 1s both ease-out;
  animation-iteration-count: ${(p) => (p.once ? 1 : 'infinite')};

  &[data-reset-animation] {
    animation: none;
  }
`

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

    return <Icon ref={iconRef} once={once} />
  }
)
