import {
  boolean,
  button,
  number,
  text,
  withKnobs,
} from '@storybook/addon-knobs'
import React, { useRef } from 'react'
import Loading, { LoadingIcon, LoadingIconHandler } from '.'

export default {
  title: 'Sandbox/Loading',
  component: Loading,
  decorators: [withKnobs],
}

export function Basic() {
  const size = number('size', 48)
  const padding = number('padding', 16)
  const transparent = boolean('transparent', false)

  return <Loading size={size} padding={padding} transparent={transparent} />
}

export function Icon() {
  return <IconComponent />
}

function IconComponent() {
  const size = number('size', 12)
  const color = text('color', '#B1CC29')
  const once = boolean('once', false)
  button('restart', () => ref.current?.restart())

  const ref = useRef<LoadingIconHandler>(null)

  return (
    <div
      css={`
        font-size: ${size}px;
        color: ${color};
      `}
    >
      <LoadingIcon once={once} ref={ref} />
    </div>
  )
}
