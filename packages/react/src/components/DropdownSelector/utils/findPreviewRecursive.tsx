import React, { ReactNode } from 'react'

/**
 * DropdownSelectorの選択中の要素をレンダリングするため、
 * 選択中のMenuItemを再帰的に探索しReactNodeを返す。
 *
 * @param children
 * @param value
 * @param values
 * @returns
 */
export function findPreviewRecursive(
  children: ReactNode,
  value: string
): ReactNode | undefined {
  const childArray = React.Children.toArray(children)
  for (let i = 0; i < childArray.length; i++) {
    const child = childArray[i]
    if (React.isValidElement(child)) {
      if ('value' in child.props) {
        const childValue = (child.props as { value: string }).value
        if (childValue === value && 'children' in child.props) {
          const children = (child.props as { children: ReactNode }).children
          return children
        }
      }
      if ('children' in child.props) {
        const children = findPreviewRecursive(
          (child.props as { children: ReactNode }).children,
          value
        )
        if (children !== undefined) {
          return children
        }
      }
    }
  }
}
