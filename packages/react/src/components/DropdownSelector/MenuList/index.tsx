import { useMemo, useRef } from 'react'
import styled from 'styled-components'
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
}

/**
 * 上下キーでフォーカス移動でき、エンターキーで選択できるリストの項目
 * 基本的に`<MenuItem>`, `<MenuGroup>`と合わせて使用する
 */
export default function MenuList(props: MenuListProps) {
  const root = useRef(null)
  const propsArray = useMemo(
    () => getValuesRecursive(props.children),
    [props.children]
  )

  return (
    <StyledUl ref={root}>
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
    </StyledUl>
  )
}

const StyledUl = styled.ul`
  padding: 0;
  margin: 0;
`
