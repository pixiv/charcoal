import * as React from 'react'

import '@charcoal-ui/icons'
// tmp fix for https://github.com/rolldown/tsdown/pull/981
import '../../../../icons/css/icon.css'
import { calcActualSize } from '@charcoal-ui/icons'
import type { IconSizing, PixivIcon, Props } from '@charcoal-ui/icons'

export interface OwnProps {
  /**
   * @deprecated `fixedSize` を利用してください。
   * `attr()` の数値解釈サポートが限定的なため、リセット CSS だけではレイアウトシフトが防げません。
   */
  unsafeNonGuidelineScale?: number
  /**
   * 固定 px サイズで描画します。ガイドライン外のサイズを利用する場合に推奨される指定方法で、
   * 他のサイズ指定 (`scale` / `unsafeNonGuidelineScale`) よりも常に優先されます。
   *
   * `<Icon>` は同じ値を `--charcoal-icon-size` インライン CSS 変数として自動付与するため、
   * Web Component の hydrate 前後でレイアウトシフトは発生しません。
   */
  fixedSize?: number
  className?: string
}

export interface IconProps
  extends OwnProps,
    React.PropsWithoutRef<
      Omit<Props, 'class' | 'unsafe-non-guideline-scale' | 'fixed-size' | 'css'>
    > {}

const Icon = React.forwardRef<PixivIcon, IconProps>(function IconInner(
  {
    name,
    scale,
    unsafeNonGuidelineScale,
    fixedSize,
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
        fixedSize,
      } as { name: string } & IconSizing),
    [name, scale, unsafeNonGuidelineScale, fixedSize],
  )

  const style = React.useMemo(
    () =>
      ({
        ...userStyle,
        '--charcoal-icon-size': `${actualSize}px`,
      }) as React.CSSProperties,
    [actualSize, userStyle],
  )

  return (
    <pixiv-icon
      ref={ref}
      name={name}
      scale={scale}
      unsafe-non-guideline-scale={unsafeNonGuidelineScale}
      fixed-size={fixedSize}
      style={style}
      class={`charcoal-icon ${className || ''}`.trim()}
      {...rest}
    />
  )
})

export default Icon
