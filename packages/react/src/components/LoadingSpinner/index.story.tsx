import {
  boolean,
  button,
  number,
  text,
  withKnobs,
} from '@storybook/addon-knobs'
import React, { useRef } from 'react'
import LoadingSpinner, {
  LoadingSpinnerIcon,
  LoadingSpinnerIconHandler,
} from '.'

export default {
  title: 'LoadingSpinner',
  component: LoadingSpinner,
  decorators: [withKnobs],
}

export function Basic() {
  const size = number('size', 48)
  const padding = number('padding', 16)
  const transparent = boolean('transparent', false)
  const className = text('className', 'basic')

  return (
    <LoadingSpinner
      size={size}
      padding={padding}
      transparent={transparent}
      className={className}
    />
  )
}

export function Icon() {
  return <IconComponent />
}

function IconComponent() {
  const size = number('size', 12)
  const color = text('color', '#B1CC29')
  const once = boolean('once', false)
  button('restart', () => ref.current?.restart())

  const ref = useRef<LoadingSpinnerIconHandler>(null)

  return (
    <div
      css={`
        font-size: ${size}px;
        color: ${color};
      `}
    >
      <LoadingSpinnerIcon once={once} ref={ref} />
    </div>
  )
}
