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
      $background={variantToBackground(variant)}
      $color={variantToFont(variant)}
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

type StyledButtonProps = Omit<StyledProps, '$variant'> & {
  $background: ReturnType<typeof variantToBackground>
  $color: ReturnType<typeof variantToFont>
}
const StyledButton = styled(Clickable)<StyledButtonProps>`
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

  color: var(--charcoal-${(p) => p.$color});
  background-color: var(--charcoal-${(p) => p.$background});
  transition: 0.2s color, 0.2s background-color, 0.2s box-shadow;

  &:not(:disabled):not([aria-disabled]),
  &[aria-disabled='false'] {
    &:active,
    &:focus,
    &:focus-visible {
      outline: none;
      box-shadow: 0 0 0 4px rgba(0, 150, 250, 0.32);
    }

    &:hover {
      color: var(--charcoal-${(p) => p.$color}-hover);
      background-color: var(--charcoal-${(p) => p.$background}-hover);
    }
    &:active {
      color: var(--charcoal-${(p) => p.$color}-press);
      background-color: var(--charcoal-${(p) => p.$background}-press);
    }
  }

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
