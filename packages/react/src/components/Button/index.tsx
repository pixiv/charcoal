import { forwardRef } from 'react'
import styled, { css } from 'styled-components'
import { unreachable } from '../../_lib'
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

const horizontalPaddingSmall = css`
  padding-right: 16px;
  padding-left: 16px;
`
const horizontalPaddingMedium = css`
  padding-right: 24px;
  padding-left: 24px;
`

const StyledButton = styled(Clickable)<StyledProps>`
  width: ${(p) => (p.$fullWidth ? 'stretch' : 'min-content')};
  display: inline-grid;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;

  // borderRadius['oval']
  border-radius: 999999px;

  // preserveHalfLeading
  font-size: 14px;
  line-height: 22px;
  font-weight: bold;

  ${(p) => (p.$size === 'M' ? horizontalPaddingMedium : horizontalPaddingSmall)}

  color: var(--charcoal-${(p) => variantToFont(p.$variant)});
  &:hover:not(:disabled):not([aria-disabled]),
  &:hover[aria-disabled='false'] {
    color: var(--charcoal-${(p) => variantToFont(p.$variant)}-hover);
  }
  &:active:not(:disabled):not([aria-disabled]),
  &:active[aria-disabled='false'] {
    color: var(--charcoal-${(p) => variantToFont(p.$variant)}-press);
  }
  background-color: var(--charcoal-${(p) => variantToBackground(p.$variant)});
  &:hover:not(:disabled):not([aria-disabled]),
  &:hover[aria-disabled='false'] {
    background-color: var(
      --charcoal-${(p) => variantToBackground(p.$variant)}-hover
    );
  }
  &:active:not(:disabled):not([aria-disabled]),
  &:active[aria-disabled='false'] {
    background-color: var(
      --charcoal-${(p) => variantToBackground(p.$variant)}-press
    );
  }

  &:not(:disabled):not([aria-disabled]):focus,
  &[aria-disabled='false']:focus,
  &:not(:disabled):not([aria-disabled]):active,
  &[aria-disabled='false]:active {
    outline: none;
    box-shadow: 0 0 0 4px rgba(0,150,250,0.32);
  }
  &:not(:disabled):not([aria-disabled]):focus:not(:focus-visible),
  &[aria-disabled='false']:focus:not(:focus-visible),
  &:not(:disabled):not([aria-disabled]):active:not(:focus-visible),
  &[aria-disabled='false]:active:not(
      :focus-visible
    ) {
    outline: none;
  }
  &:not(:disabled):not([aria-disabled]):focus-visible,
  &[aria-disabled='false']:focus-visible {
    outline: none;
    box-shadow: 0 0 0 4px rgba(0, 150, 250, 0.32);
  }
  transition: 0.2s color, 0.2s background-color, 0.2s border-color;

  &:disabled,
  &[aria-disabled]:not([aria-disabled='false']) {
    opacity: 0.32;
  }

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
