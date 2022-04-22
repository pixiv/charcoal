import React from 'react'
import '@charcoal-ui/icons'
import type { KnownIconType, PixivIcon, Props } from '@charcoal-ui/icons'

export interface OwnProps {
  name: keyof KnownIconType
  scale?: 1 | 2 | 3
  unsafeNonGuidelineScale?: number
  className?: string
}

export type IconProps = OwnProps &
  Omit<Props, 'class' | 'unsafe-non-guideline-scale'>

const Icon = React.forwardRef<PixivIcon, IconProps>(function IconInner(
  { name, scale, unsafeNonGuidelineScale, className, ...rest },
  ref
) {
  return (
    <pixiv-icon
      ref={ref}
      name={name}
      scale={scale}
      unsafe-non-guideline-scale={unsafeNonGuidelineScale}
      class={className}
      {...rest}
    />
  )
})

export default Icon
