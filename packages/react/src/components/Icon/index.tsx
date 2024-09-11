import * as React from 'react'

import type { PixivIcon, Props } from '@charcoal-ui/icons'

import '@charcoal-ui/icons'

export interface OwnProps {
  unsafeNonGuidelineScale?: number
  className?: string
}

export interface IconProps
  extends OwnProps,
    React.PropsWithoutRef<
      Omit<Props, 'class' | 'unsafe-non-guideline-scale' | 'css'>
    > {}

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
