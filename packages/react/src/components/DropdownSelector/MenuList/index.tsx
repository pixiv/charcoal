import './index.css'

import { useMemo, useRef } from 'react'
import { MenuListContext } from './MenuListContext'
import { getValuesRecursive } from './internals/getValuesRecursive'
import MenuItem from '../MenuItem'
import { Divider } from '../Divider'
import MenuItemGroup from '../MenuItemGroup'
import { JSX } from 'react/jsx-runtime'

type MenuListChild = React.ReactElement<
  typeof MenuItem | typeof MenuItemGroup | typeof Divider
>

export type MenuListChildren = MenuListChild | MenuListChild[]

export type MenuListProps = {
  children: MenuListChildren
  value?: string
  onChange?: (v: string) => void
}

export default function MenuList(props: MenuListProps): JSX.Element {
  const root = useRef(null)
  const propsArray = useMemo(
    () => getValuesRecursive(props.children),
    [props.children]
  )

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
        }}
      >
        {props.children}
      </MenuListContext.Provider>
    </ul>
  )
}
