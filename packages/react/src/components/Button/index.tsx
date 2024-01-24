import { ForwardedRef, ReactNode } from 'react'
import { CustomJSXElement } from '../DropdownSelector/ListItem'
import { forwardRef } from 'react'
import { variantToFont } from './lib/variantToFont'
import { variantToBackground } from './lib/variantToBackground'
import { StyledButton } from './StyledButton'

export type Variant =
  | 'Primary'
  | 'Default'
  | 'Overlay'
  | 'Danger'
  | 'Navigation'

export type Size = 'S' | 'M'

export type ButtonProps<T extends CustomJSXElement = 'button'> = {
  children?: ReactNode
  variant?: Variant
  size?: Size
  fullWidth?: boolean
  as?: T
} & Omit<React.ComponentPropsWithRef<T>, 'children'>

const Button = forwardRef(function Button<
  T extends CustomJSXElement = 'button'
>(
  {
    variant = 'Default',
    fullWidth = false,
    size = 'M',
    as,
    ...props
  }: ButtonProps<T>,
  ref: ForwardedRef<HTMLButtonElement>
) {
  return (
    <StyledButton
      {...props}
      $background={variantToBackground(variant)}
      $color={variantToFont(variant)}
      $size={size}
      $fullWidth={fullWidth}
      ref={ref}
    ></StyledButton>
  )
}) as <T extends CustomJSXElement = 'button'>(p: ButtonProps<T>) => JSX.Element

export default Button
