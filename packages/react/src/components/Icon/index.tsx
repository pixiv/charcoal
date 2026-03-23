import * as React from 'react'

import '@charcoal-ui/icons'
import { calcActualSize } from '@charcoal-ui/icons'
import type { IconSizing, PixivIcon, Props } from '@charcoal-ui/icons'

export type OwnProps = IconSizing & {
  className?: string
}

export type IconProps = OwnProps &
  React.PropsWithoutRef<
    Omit<
      Props,
      | 'class'
      | 'scale'
      | 'unsafe-non-guideline-scale'
      | 'css'
    >
  >

const Icon = React.forwardRef<PixivIcon, IconProps>(function IconInner(
  { name, scale, unsafeNonGuidelineScale, unsafeNonGuidelineSize, className, style: userStyle, ...rest },
  ref,
) {
  const actualSize = React.useMemo(
    // IconSizing の排他制約は IconProps の型レベルで保証されるため、内部では緩和する
    () => calcActualSize({ name, scale, unsafeNonGuidelineScale, unsafeNonGuidelineSize } as { name: string } & IconSizing),
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
      data-charcoal-icon-size={actualSize}
      style={style}
      class={`charcoal-icon ${className || ''}`.trim()}
      {...rest}
    />
  )
})

export default Icon
