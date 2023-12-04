import { forwardRef } from 'react'
import styled from 'styled-components'
import { theme } from '../../styled'
import Clickable, { ClickableElement, ClickableProps } from '../Clickable'
import type { KnownIconType } from '@charcoal-ui/icons'

type Variant = 'Default' | 'Overlay'
type Size = 'XS' | 'S' | 'M'

interface StyledProps {
  readonly variant?: Variant
  readonly size?: Size
  readonly icon: keyof KnownIconType
}

export type IconButtonProps = StyledProps & ClickableProps

const IconButton = forwardRef<ClickableElement, IconButtonProps>(
  function IconButtonInner(
    { variant = 'Default', size = 'M', icon, ...rest }: IconButtonProps,
    ref
  ) {
    validateIconSize(size, icon)
    return (
      <StyledIconButton {...rest} ref={ref} $size={size} $variant={variant}>
        <pixiv-icon name={icon} />
      </StyledIconButton>
    )
  }
)

export default IconButton

type StyledIconButtonProps = Required<{
  [key in keyof Pick<
    StyledProps,
    'size' | 'variant'
  > as `$${key}`]: StyledProps[key]
}>

const StyledIconButton = styled(Clickable).attrs<
  StyledIconButtonProps,
  ReturnType<typeof styledProps>
>(styledProps)<StyledIconButtonProps>`
  user-select: none;

  width: ${(p) => p.$width}px;
  height: ${(p) => p.$height}px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ $font, $background }) =>
    theme((o) => [
      o.font[$font],
      o.bg[$background].hover.press,
      o.disabled,
      o.borderRadius('oval'),
      o.outline.default.focus,
    ])}
`

function styledProps({ $size, $variant }: StyledIconButtonProps) {
  return {
    ...variantToProps($variant),
    ...sizeToProps($size),
  }
}

function variantToProps(variant: Variant) {
  switch (variant) {
    case 'Default':
      return { $font: 'text3', $background: 'transparent' } as const
    case 'Overlay':
      return { $font: 'text5', $background: 'surface4' } as const
  }
}

function sizeToProps(size: Size) {
  switch (size) {
    case 'XS':
      return {
        $width: 20,
        $height: 20,
      }
    case 'S':
      return {
        $width: 32,
        $height: 32,
      }
    case 'M':
      return {
        $width: 40,
        $height: 40,
      }
  }
}

/**
 * validates matches of size and icon
 */
function validateIconSize(size: Size, icon: keyof KnownIconType) {
  let requiredIconSize: string
  switch (size) {
    case 'XS':
      requiredIconSize = '16'
      break
    case 'S':
    case 'M':
      requiredIconSize = '24'
      break
  }
  // アイコン名は サイズ/名前
  const result = /^\d*/u.exec(icon)
  if (result == null) {
    throw new Error('Invalid icon name')
  }
  const [iconSize] = result
  if (iconSize !== requiredIconSize) {
    // eslint-disable-next-line no-console
    console.warn(
      `IconButton with size "${size}" expect icon size "${requiredIconSize}, but got "${iconSize}"`
    )
  }
}
