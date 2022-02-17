import { transparentize } from 'polished'
import React, { useImperativeHandle, useRef } from 'react'
import styled, { keyframes } from 'styled-components'

export default function Spinner({
  size = 48,
  padding = 16,
  transparent = false,
}) {
  return (
    <SpinnerRoot size={size} padding={padding} transparent={transparent}>
      <SpinnerIcon />
    </SpinnerRoot>
  )
}

const SpinnerRoot = styled.div.attrs({ role: 'progressbar' })<{
  size: number
  padding: number
  transparent: boolean
}>`
  margin: auto;
  padding: ${(props) => props.padding}px;
  border-radius: 8px;
  font-size: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-color: ${({ theme, transparent }) =>
    transparent
      ? 'transparent'
      : transparentize(0.32, theme.color.background1)};
  color: ${({ theme }) => theme.color.text4};
`

const scaleout = keyframes`
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
  animation: ${scaleout} 1s both ease-out;
  animation-iteration-count: ${(p) => (p.once ? 1 : 'infinite')};

  &[data-reset-animation] {
    animation: none;
  }
`

interface Props {
  once?: boolean
}

export interface SpinnerIconHandler {
  restart(): void
}

export const SpinnerIcon = React.forwardRef<SpinnerIconHandler, Props>(
  function SpinnerIcon({ once = false }, ref) {
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
