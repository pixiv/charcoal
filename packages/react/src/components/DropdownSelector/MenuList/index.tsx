import './index.css'

import { useMemo, useRef } from 'react'
import warning from 'warning'
import { MenuListContext } from './MenuListContext'
import { getValuesRecursive } from './internals/getValuesRecursive'
import MenuItem from '../MenuItem'
import { Divider } from '../Divider'
import MenuItemGroup from '../MenuItemGroup'

type MenuListChild = React.ReactElement<
  typeof MenuItem | typeof MenuItemGroup | typeof Divider
>

export type MenuListChildren = MenuListChild | MenuListChild[]

export type MenuListProps = {
  children: MenuListChildren
  value?: string
  onChange?: (v: string) => void
  onNoSelection?: () => void
}

export default function MenuList(props: MenuListProps) {
  const root = useRef(null)
  const propsArray = useMemo(
    () => getValuesRecursive(props.children),
    [props.children],
  )

  if (process.env.NODE_ENV !== 'production') {
    const noSelectionItems = propsArray.filter((item) => item.noSelection)
    warning(
      noSelectionItems.length <= 1,
      '`noSelection` can only be specified on one DropdownMenuItem.',
    )
    warning(
      propsArray.every(
        (item) =>
          item.noSelection || item.value === undefined || item.value !== '',
      ),
      'An empty string `value` is not supported. Use `noSelection` instead.',
    )
    warning(
      noSelectionItems.every((item) => item.value === undefined),
      '`noSelection` and `value` cannot be used together.',
    )
  }

  return (
    <ul className="charcoal-menu-list" ref={root}>
      <MenuListContext.Provider
        value={{
          value: props.value ?? '',
          root,
          propsArray,
          setValue: (v) => {
            props.onChange?.(v)
          },
          setNoSelection: props.onNoSelection,
        }}
      >
        {props.children}
      </MenuListContext.Provider>
    </ul>
  )
}
