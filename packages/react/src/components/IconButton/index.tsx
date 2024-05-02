import React, { ForwardedRef, forwardRef } from 'react'
import { useClassNames } from '../../_lib/useClassNames'
import Button, { ButtonProps } from '../Button'
import type { KnownIconType } from '@charcoal-ui/icons'

import './index.css'

type Variant = 'Default' | 'Overlay'
type Size = 'XS' | 'S' | 'M'

interface StyledProps {
  readonly variant?: Variant
  readonly size?: Size
  readonly icon: keyof KnownIconType
  readonly isActive?: boolean
}

export type IconButtonProps<T extends React.ElementType = 'button'> =
  StyledProps & ButtonProps<T>

const IconButton = forwardRef(function IconButtonInner<
  T extends React.ElementType
>(
  {
    variant = 'Default',
    size = 'M',
    icon,
    isActive = false,
    ...rest
  }: IconButtonProps<T>,
  ref: ForwardedRef<HTMLButtonElement>
) {
  validateIconSize(size, icon)

  const className = useClassNames('charcoal-icon-button', rest.className)

  return (
    <Button
      {...rest}
      ref={ref}
      className={className}
      data-size={size}
      data-active={isActive}
      data-variant={variant}
    >
      <pixiv-icon name={icon} />
    </Button>
  )
}) as <T extends React.ElementType = 'button'>(
  p: IconButtonProps<T>
) => JSX.Element

export default IconButton

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
