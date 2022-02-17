import React from 'react'
import styled from 'styled-components'

import { unreachable } from '../../foundation/utils'

export enum WedgeDirection {
  Up = 'up',
  Down = 'down',
  Left = 'left',
  Right = 'right',
}

interface Props {
  size?: number | string
  direction: WedgeDirection
}

export default function WedgeIcon({ size, direction }: Props) {
  return (
    // NOTE: directionToTransform depends on the value of viewBox
    <svg viewBox="0 0 10 8" width={size} height={size}>
      <StyledPolyline
        strokeWidth="2"
        points="1,2 5,6 9,2"
        transform={directionToTransform(direction)}
      />
    </svg>
  )
}
WedgeIcon.defaultProps = {
  size: 16,
  white: false,
  lightGray: false,
}

function directionToTransform(direction: WedgeDirection) {
  // "5 4" is the center point of the "0 0 10 8" viewBox
  switch (direction) {
    case WedgeDirection.Up:
      return 'rotate(180 5 4)'
    case WedgeDirection.Down:
      return undefined
    case WedgeDirection.Left:
      return 'rotate(90 5 4)'
    case WedgeDirection.Right:
      return 'rotate(-90 5 4)'
    default:
      return unreachable(direction)
  }
}

const StyledPolyline = styled.polyline`
  fill: none;
  stroke-linejoin: round;
  stroke-linecap: round;
  stroke: currentColor;
`
