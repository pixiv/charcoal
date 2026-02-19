import './index.css'

import MenuItem, { MenuItemProps } from '../MenuItem'
import { MenuListContext } from '../MenuList/MenuListContext'
import { ReactNode, useContext } from 'react'
import Icon from '../../Icon'

export type DropdownMenuItemProps = Omit<MenuItemProps, 'as'> & {
  secondary?: ReactNode
}

/**
 * DropdownSelectorの選択肢として使うMenuItem
 */
export default function DropdownMenuItem(props: DropdownMenuItemProps) {
  const { value: ctxValue } = useContext(MenuListContext)
  const isSelected = props.value === ctxValue
  const { children, secondary, ...rest } = props

  return (
    <MenuItem {...rest} aria-selected={isSelected}>
      <div>
        <div className="charcoal-dropdown-selector-menu-item-container">
          {isSelected && (
            <Icon
              className="charcoal-dropdown-selector-menu-item-icon"
              name="16/Check"
            />
          )}
          <span
            className="charcoal-dropdown-selector-menu-item"
            data-selected={isSelected}
          >
            {children}
          </span>
        </div>
        {secondary && (
          <span className="charcoal-dropdown-selector-menu-secondary">
            {secondary}
          </span>
        )}
      </div>
    </MenuItem>
  )
}
