import { forwardRef } from 'react'
import { ClickableElement, ClickableProps } from '../Clickable'
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

export type ButtonProps = Partial<{
  variant: Variant
  size: Size
  fullWidth: boolean
  isActive: boolean
}> &
  ClickableProps

const Button = forwardRef<ClickableElement, ButtonProps>(function Button(
  {
    children,
    variant = 'Default',
    size = 'M',
    fullWidth: fixed = false,
    disabled = false,
    isActive = false,
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
      $isActive={isActive}
      ref={ref}
    >
      {children}
    </StyledButton>
  )
})

export default Button
