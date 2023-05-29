import React from 'react'
import MenuItem from '../../MenuItem'
import { MenuListChildren } from '..'
import MenuGroup from '../../MenuGroup'

/**
 * valueというpropsを持つ子要素の値を再起的に探索して配列にする
 *
 * @param children
 * @param value
 * @param values
 * @returns
 */
export function getValuesRecursive(
  children: MenuListChildren,
  values: string[] = []
) {
  const childArray = React.Children.toArray(children)
  for (let i = 0; i < childArray.length; i++) {
    const child = childArray[i]
    if (React.isValidElement(child)) {
      const props = child.props as {
        value?: never
        children?: React.ReactElement<typeof MenuItem | typeof MenuGroup>[]
      }
      if ('value' in props && typeof props.value === 'string') {
        const childValue = props.value
        values.push(childValue)
      }
      if ('children' in props && props.children) {
        getValuesRecursive(props.children, values)
      }
    }
  }
}
