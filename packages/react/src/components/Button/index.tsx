import './index.css'

import React, { ForwardedRef, ReactNode, forwardRef, useMemo } from 'react'

import { useClassNames } from '../../_lib/useClassNames'

type Variant = 'Primary' | 'Default' | 'Overlay' | 'Danger' | 'Navigation'

type Size = 'S' | 'M'

export type ButtonProps<T extends React.ElementType = 'button'> = {
  children?: ReactNode
  variant?: Variant
  size?: Size
  fullWidth?: boolean
  isActive?: boolean
  as?: T
} & Omit<React.ComponentPropsWithRef<T>, 'children'>

const Button = forwardRef(function Button<T extends React.ElementType>(
  {
    variant,
    fullWidth,
    size,
    className,
    as,
    isActive,
    ...props
  }: ButtonProps<T>,
  ref: ForwardedRef<HTMLButtonElement>
) {
  const Component = useMemo(() => as ?? 'button', [as])
  const classNames = useClassNames('charcoal-button', className)
  return (
    <Component
      {...props}
      className={classNames}
      data-variant={variant}
      data-size={size}
      data-full-width={fullWidth}
      data-active={isActive}
      ref={ref}
    />
  )
}) as <T extends React.ElementType = 'button'>(p: ButtonProps<T>) => JSX.Element
export default Button
