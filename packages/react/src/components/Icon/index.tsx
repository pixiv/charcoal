import * as React from 'react'
import './index.css'

import '@charcoal-ui/icons'
import type { PixivIcon, Props } from '@charcoal-ui/icons'

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
  // <pixiv-icon> の forceResizedSize の実装を模倣したもの
  const forceResizedSize = React.useMemo(() => {
    if (!unsafeNonGuidelineScale) {
      return
    }

    const [size] = (name as string).split('/')
    switch (size) {
      case 'Inline': {
        return 16 * unsafeNonGuidelineScale
      }

      default: {
        return Number(size) * unsafeNonGuidelineScale
      }
    }
  }, [name, unsafeNonGuidelineScale])

  // <pixiv-icon> の scaledSize の実装を模倣したもの
  const scaledSize = React.useMemo(() => {
    const [size] = (name as string).split('/')
    const numericScale = Number(scale ?? '1')
    switch (size) {
      case 'Inline': {
        return numericScale === 2 ? 32 : 16
      }
      case '24': {
        return 24 * numericScale
      }
      default: {
        return Number(size)
      }
    }
  }, [name, scale])

  const style: React.CSSProperties = React.useMemo(
    () => ({
      '--size': `${unsafeNonGuidelineFixedSize ?? forceResizedSize ?? scaledSize}px`,
    }),
    [forceResizedSize, scaledSize, unsafeNonGuidelineFixedSize],
  )

  return (
    <pixiv-icon
      ref={ref}
      name={name}
      scale={scale}
      unsafe-non-guideline-scale={unsafeNonGuidelineScale}
      style={style}
      class={`charcoal-icon ${className || ''}`.trim()}
      {...rest}
    />
  )
})

export default Icon
