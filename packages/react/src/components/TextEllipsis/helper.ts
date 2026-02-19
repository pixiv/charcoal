// https://github.com/fernandopasik/react-children-utilities/blob/971d8a0324e6183734d8d1af9a65dbad18ab3d00/src/lib/onlyText.ts

import { Children, isValidElement, ReactElement, ReactNode } from 'react'

export const getFinalTitle = (
  showTooltip: boolean,
  title?: string,
  children?: ReactNode,
): string | undefined => {
  // 1. 表示フラグが false なら即終了
  if (!showTooltip) {
    return undefined
  }

  // 2. タイトルの候補を取得
  const resolvedTitle = title ?? onlyText(children)

  // 3. resolvedTitle が falsy (undefined, null, "") なら終了
  if (!resolvedTitle) {
    return undefined
  }

  // 4. 有効な文字列のみを返す
  return resolvedTitle
}

const hasChildren = (
  element: ReactNode,
): element is ReactElement<{ children: ReactNode[] }> =>
  isValidElement<{ children?: ReactNode[] }>(element) &&
  Boolean(element.props.children)

export const childToString = (
  child?: number | string | boolean | {} | null,
): string => {
  if (
    typeof child === 'undefined' ||
    child === null ||
    typeof child === 'boolean'
  ) {
    return ''
  }

  if (JSON.stringify(child) === '{}') {
    return ''
  }

  return (child as string | number).toString()
}

export const onlyText = (children: ReactNode): string => {
  if (!Array.isArray(children) && !isValidElement(children)) {
    return childToString(children)
  }

  return Children.toArray(children).reduce(
    (text: string, child: ReactNode): string => {
      let newText = ''

      if (isValidElement(child) && hasChildren(child)) {
        newText = onlyText(child.props.children)
      } else if (isValidElement(child) && !hasChildren(child)) {
        newText = ''
      } else {
        newText = childToString(child)
      }

      return text.concat(newText)
    },
    '',
  )
}
