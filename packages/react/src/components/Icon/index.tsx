import React, { useEffect } from 'react'
import type { KnownIconType, PixivIcon, Props } from '@charcoal-ui/icons'

export interface OwnProps {
  name: keyof KnownIconType
  scale?: 1 | 2 | 3
  unsafeNonGuidelineScale?: number
  className?: string
}

export type IconProps = OwnProps &
  Omit<Props, 'class' | 'unsafe-non-guideline-scale'>

let imported = false

const Icon = React.forwardRef<PixivIcon, IconProps>(function IconInner(
  { name, scale, unsafeNonGuidelineScale, className, ...rest },
  ref
) {
  // ブラウザ内で、グローバルに 1 回のみ import
  // lit-html は node.js 内で import できない
  useEffect(() => {
    if (!imported) {
      void import('@charcoal-ui/icons').then(() => {
        imported = true
      })
    }
  }, [])

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
