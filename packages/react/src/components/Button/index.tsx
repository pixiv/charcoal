import { forwardRef } from 'react'
import styled from 'styled-components'
import { unreachable } from '../../_lib'
import { theme } from '../../styled'
import Clickable, { ClickableElement, ClickableProps } from '../Clickable'

type Variant = 'Primary' | 'Default' | 'Overlay' | 'Danger' | 'Navigation'
type Size = 'S' | 'M'

interface StyledProps {
  $variant: Variant
  $fullWidth: boolean
  $size: Size
}

export type ButtonProps = Partial<{
  variant: Variant
  size: Size
  fullWidth: boolean
}> &
  ClickableProps

const Button = forwardRef<ClickableElement, ButtonProps>(function Button(
  {
    children,
    variant = 'Default',
    size = 'M',
    fullWidth: fixed = false,
    disabled = false,
    ...rest
  },
  ref
) {
  return (
    <StyledButton
      {...rest}
      disabled={disabled}
      $variant={variant}
      $size={size}
      $fullWidth={fixed}
      ref={ref}
    >
      {children}
    </StyledButton>
  )
})
export default Button

const StyledButton = styled(Clickable)<StyledProps>`
  width: ${(p) => (p.$fullWidth ? 'stretch' : 'min-content')};
  display: inline-grid;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;

  ${(p) =>
    theme((o) => [
      o.font[variantToFont(p.$variant)].hover.press,
      o.bg[variantToBackground(p.$variant)].hover.press,
      o.typography(14).bold.preserveHalfLeading,
      o.padding.horizontal(p.$size === 'M' ? 24 : 16),
      o.disabled,
      o.borderRadius('oval'),
      o.outline.default.focus,
    ])}

  /* よく考えたらheight=32って定義が存在しないな... */
  height: ${(p) => (p.$size === 'M' ? 40 : 32)}px;
`

function variantToBackground(variant: Variant) {
  switch (variant) {
    case 'Overlay':
      return 'surface4'
    case 'Default':
      return 'surface3'
    case 'Primary':
      return 'brand'
    case 'Navigation':
      return 'surface6'
    case 'Danger':
      return 'assertive'
    default:
      return unreachable(variant)
  }
}

function variantToFont(variant: Variant) {
  switch (variant) {
    case 'Overlay':
      return 'text5'
    case 'Default':
      return 'text2'
    case 'Primary':
      return 'text5'
    case 'Navigation':
      return 'text5'
    case 'Danger':
      return 'text5'
    default:
      return unreachable(variant)
  }
}
