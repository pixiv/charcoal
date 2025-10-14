import './index.css'

import MenuItem, { MenuItemProps } from '../MenuItem'
import { MenuListContext } from '../MenuList/MenuListContext'
import { useContext } from 'react'
import Icon from '../../../components/Icon'

export type DropdownMenuItemProps = Omit<MenuItemProps, 'as'>

/**
 * DropdownSelectorの選択肢として使うMenuItem
 */
export default function DropdownMenuItem(props: DropdownMenuItemProps) {
  const { value: ctxValue } = useContext(MenuListContext)
  const isSelected = props.value === ctxValue
  const { children, ...rest } = props

  return (
    <MenuItem {...rest} aria-selected={isSelected}>
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
        {props.children}
      </span>
    </MenuItem>
  )
}
