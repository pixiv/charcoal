import React from 'react'
import { unreachable } from '../../foundation/utils'
import IconBase from './Base'

export enum WedgeDirection {
  Up = 'up',
  Down = 'down',
  Left = 'left',
  Right = 'right',
}

// eslint-disable-next-line max-len
const path = `M8.08579 16.5858C7.30474 17.3668 7.30474 18.6332 8.08579 19.4142C8.86684 20.1953 10.1332 20.1953 10.9142 19.4142L18.3284 12L10.9142 4.58579C10.1332 3.80474 8.86684 3.80474 8.08579 4.58579C7.30474 5.36684 7.30474 6.63317 8.08579 7.41421L12.6716 12L8.08579 16.5858Z`
const size = 24

interface Props {
  direction: WedgeDirection
}

export default function NextIcon({ direction }: Props) {
  const transform = directionToTransform(direction)
  return (
    <IconBase
      viewBoxSize={size}
      size={size}
      currentColor
      path={path}
      transform={transform}
    />
  )
}

function directionToTransform(direction: WedgeDirection) {
  // "5 4" is the center point of the "0 0 10 8" viewBox
  switch (direction) {
    case WedgeDirection.Up:
      return 'rotate(270 12 12)'
    case WedgeDirection.Down:
      return 'rotate(90 12 12)'
    case WedgeDirection.Left:
      return 'rotate(180 12 12)'
    case WedgeDirection.Right:
      return undefined
    default:
      return unreachable(direction)
  }
}
