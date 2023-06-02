import React, { ReactNode, Ref } from 'react'
import styled from 'styled-components'
import { unreachable } from '../../_lib'
import { theme } from '../../styled'
import { Spacing, ThemeColor } from '@charcoal-ui/theme'

type Variant = 'Primary' | 'Default' | 'Overlay' | 'Danger' | 'Navigation'
type Size = 'S' | 'M'

type CustomJSXElement =
  | keyof JSX.IntrinsicElements
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  | React.JSXElementConstructor<any>

export type ButtonProps<T extends CustomJSXElement = 'button'> = {
  /**
   * ボタンのスタイル
   */
  variant?: Variant
  /**
   * ボタンのサイズ
   */
  size?: Size
  /**
   * 幅を最大まで広げて描画
   */
  fullWidth?: boolean
  as?: T
  children?: ReactNode
} & Omit<React.ComponentProps<T>, 'children'>

function Button<T extends CustomJSXElement>(
  {
    children,
    variant = 'Default',
    size = 'M',
    fullWidth = false,
    ...rest
  }: ButtonProps<T>,
  ref: Ref<HTMLButtonElement>
) {
  const colors = variantToProps(variant)
  return (
    <StyledButton
      {...rest}
      $height={size === 'M' ? 40 : 32}
      $padding={size === 'M' ? 24 : 16}
      $font={colors.font}
      $background={colors.background}
      $fullWidth={fullWidth}
      ref={ref}
    >
      {children}
    </StyledButton>
  )
}
const ForwardedComponent = React.forwardRef<HTMLButtonElement, ButtonProps>(
  Button
) as typeof Button

export default ForwardedComponent

type StyledButtonProps = {
  $fullWidth: boolean
  $height: number
  $font: keyof ThemeColor
  $background: keyof ThemeColor
  $padding: keyof Spacing
}

const StyledButton = styled.button<StyledButtonProps>`
  appearance: none;
  background: transparent;
  padding: 0;
  border-style: none;
  outline: none;
  color: inherit;
  text-rendering: inherit;
  letter-spacing: inherit;
  word-spacing: inherit;

  &:focus {
    outline: none;
  }

  /* Change the font styles in all browsers. */
  font: inherit;

  /* Remove the margin in Firefox and Safari. */
  margin: 0;

  /* Show the overflow in Edge. */
  overflow: visible;

  /* Remove the inheritance of text transform in Firefox. */
  text-transform: none;

  /* Remove the inner border and padding in Firefox. */
  &::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  width: ${(p) => (p.$fullWidth ? 'stretch' : 'min-content')};
  display: inline-grid;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;

  ${(p) =>
    theme((o) => [
      o.font[p.$font].hover.press,
      o.bg[p.$background].hover.press,
      o.typography(14).bold.preserveHalfLeading,
      o.padding.horizontal(p.$padding),
      o.disabled,
      o.borderRadius('oval'),
      o.outline.default.focus,
    ])}

  height: ${(p) => p.$height}px;
`

function variantToProps(variant: Variant) {
  switch (variant) {
    case 'Overlay':
      return { font: 'text5', background: 'surface4' } as const
    case 'Default':
      return { font: 'text2', background: 'surface3' } as const
    case 'Primary':
      return { font: 'text5', background: 'brand' } as const
    case 'Navigation':
      return { font: 'text5', background: 'surface6' } as const
    case 'Danger':
      return { font: 'text5', background: 'assertive' } as const
    default:
      return unreachable(variant)
  }
}
