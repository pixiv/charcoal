import React from 'react'
import '@charcoal-ui/icons'
import type { KnownIconType, PixivIcon } from '@charcoal-ui/icons'

export interface IconProps {
  name: keyof KnownIconType
  scale?: 1 | 2 | 3
  unsafeNonGuidelineScale?: number
  className?: string
}

const Icon = React.forwardRef<PixivIcon, IconProps>(function IconInner(
  { name, scale, unsafeNonGuidelineScale, className },
  ref
) {
  return (
    <pixiv-icon
      ref={ref}
      name={name}
      scale={scale}
      unsafe-non-guideline-scale={unsafeNonGuidelineScale}
      class={className}
    />
  )
})

export default Icon
