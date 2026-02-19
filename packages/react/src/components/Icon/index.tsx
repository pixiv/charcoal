import * as React from 'react'
import './index.css'
import '@charcoal-ui/icons'
import {
  calcActualIconSize,
  type PixivIcon,
  type Props,
} from '@charcoal-ui/icons'

export interface OwnProps {
  unsafeNonGuidelineScale?: number
  unsafeNonGuidelineFixedSize?: number
  className?: string
}

export interface IconProps
  extends OwnProps,
    React.PropsWithoutRef<
      Omit<Props, 'class' | 'unsafe-non-guideline-scale' | 'css'>
    > {}

const Icon = React.forwardRef<PixivIcon, IconProps>(function IconInner(
  {
    name,
    scale,
    unsafeNonGuidelineScale,
    unsafeNonGuidelineFixedSize,
    className,
    ...rest
  },
  ref,
) {
  const actualSize = React.useMemo(() => {
    return calcActualIconSize(
      name,
      scale,
      unsafeNonGuidelineScale,
      unsafeNonGuidelineFixedSize,
    )
  }, [name, scale, unsafeNonGuidelineScale, unsafeNonGuidelineFixedSize])

  return (
    <pixiv-icon
      ref={ref}
      name={name}
      unsafe-non-guideline-fixed-size={actualSize}
      class={`charcoal-icon-component ${className || ''}`.trim()}
      style={{ '--size': `${actualSize}px` }}
      {...rest}
    />
  )
})

export default Icon
