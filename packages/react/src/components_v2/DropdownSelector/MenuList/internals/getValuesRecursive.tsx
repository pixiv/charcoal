import * as React from 'react'
import MenuItem from '../../MenuItem'
import { MenuListChildren } from '..'
import MenuItemGroup from '../../MenuItemGroup'
import { DropdownMenuItemProps } from '../../DropdownMenuItem'

/**
 * valueというpropsを持つ子要素の値を再起的に探索して配列にする
 *
 * @param children
 * @param value
 * @param values
 * @returns
 */
export function getValuesRecursive(children: MenuListChildren) {
  const childArray = React.Children.toArray(children)
  const propsArray: DropdownMenuItemProps[] = []
  for (let i = 0; i < childArray.length; i++) {
    const child = childArray[i]
    if (React.isValidElement(child)) {
      const props = child.props as {
        value?: string
        disabled?: boolean
        children?: React.ReactElement<typeof MenuItem | typeof MenuItemGroup>[]
      }
      if ('value' in props && typeof props.value === 'string') {
        propsArray.push({
          disabled: props.disabled,
          value: props.value,
        })
      }
      if ('children' in props && props.children) {
        propsArray.push(...getValuesRecursive(props.children))
      }
    }
  }
  return propsArray
}
