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
  /**
   * The component used for element.
   * @type T extends React.ElementType = 'button'
   */
  as?: T
  /**
   * The as property of the component specified by the Button component's as attribute.
   */
  componentAs?: React.ComponentPropsWithRef<T>['as']
} & Omit<React.ComponentPropsWithRef<T>, 'children' | 'as'>

const Button = forwardRef(function Button<T extends React.ElementType>(
  {
    variant,
    fullWidth,
    size,
    className,
    as,
    isActive,
    componentAs,
    ...props
  }: ButtonProps<T>,
  ref: ForwardedRef<HTMLButtonElement>
) {
  const Component = useMemo(() => as ?? 'button', [as])
  const classNames = useClassNames('charcoal-button', className)
  return (
    <Component
      {...props}
      as={componentAs}
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
