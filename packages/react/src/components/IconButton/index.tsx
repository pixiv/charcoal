import { forwardRef } from 'react'
import Clickable, { ClickableElement, ClickableProps } from '../Clickable'
import type { KnownIconType } from '@charcoal-ui/icons'
import { useClassNames } from '../../_lib/useClassNames'

import './index.css'

type Variant = 'Default' | 'Overlay'
type Size = 'XS' | 'S' | 'M'

interface StyledProps {
  readonly variant?: Variant
  readonly size?: Size
  readonly icon: keyof KnownIconType
  readonly isActive?: boolean
}

export type IconButtonProps = StyledProps & ClickableProps

const IconButton = forwardRef<ClickableElement, IconButtonProps>(
  function IconButtonInner(
    {
      variant = 'Default',
      size = 'M',
      icon,
      isActive = false,
      ...rest
    }: IconButtonProps,
    ref
  ) {
    validateIconSize(size, icon)

    const className = useClassNames('charcoal-icon-button', rest.className)

    return (
      <Clickable
        {...rest}
        ref={ref}
        className={className}
        data-size={size}
        data-active={isActive}
        data-variant={variant}
      >
        <pixiv-icon name={icon} />
      </Clickable>
    )
  }
)

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
