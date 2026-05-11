import * as React from 'react'

import '@charcoal-ui/icons'
import '@charcoal-ui/icons/css/icon.css'
import { calcActualSize } from '@charcoal-ui/icons'
import type { IconSizing, PixivIcon, Props } from '@charcoal-ui/icons'

export interface OwnProps {
  unsafeNonGuidelineScale?: number
  unsafeNonGuidelineSize?: number
  className?: string
}

export interface IconProps
  extends OwnProps,
    React.PropsWithoutRef<
      Omit<
        Props,
        | 'class'
        | 'unsafe-non-guideline-scale'
        | 'unsafe-non-guideline-size'
        | 'css'
      >
    > {}

const Icon = React.forwardRef<PixivIcon, IconProps>(function IconInner(
  {
    name,
    scale,
    unsafeNonGuidelineScale,
    unsafeNonGuidelineSize,
    className,
    style: userStyle,
    ...rest
  },
  ref,
) {
  const actualSize = React.useMemo(
    // IconSizing の排他制約は IconProps の型レベルで保証されるため、内部では緩和する
    () =>
      calcActualSize({
        name,
        scale,
        unsafeNonGuidelineScale,
        unsafeNonGuidelineSize,
      } as { name: string } & IconSizing),
    [name, scale, unsafeNonGuidelineScale, unsafeNonGuidelineSize],
  )

  const style = React.useMemo(
    () =>
      ({
        ...userStyle,
        '--charcoal-icon-ssr-size': `${actualSize}px`,
      }) as React.CSSProperties,
    [actualSize, userStyle],
  )

  return (
    <pixiv-icon
      ref={ref}
      name={name}
      scale={scale}
      unsafe-non-guideline-scale={unsafeNonGuidelineScale}
      unsafe-non-guideline-size={unsafeNonGuidelineSize}
      style={style}
      class={`charcoal-icon ${className || ''}`.trim()}
      {...rest}
    />
  )
})

export default Icon
