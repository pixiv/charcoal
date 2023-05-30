import React, { useRef } from 'react'
import styled from 'styled-components'
import { MenuListContext } from './MenuListContext'
import { getValuesRecursive } from './internals/getValuesRecursive'
import MenuItem from '../MenuItem'
import { Divider } from '../Divider'
import MenuGroup from '../MenuGroup'

type MenuListChild = React.ReactElement<
  typeof MenuItem | typeof MenuGroup | typeof Divider
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
 *
 * @param props
 * @returns
 */
export default function MenuList(props: MenuListProps) {
  const root = useRef(null)
  const values: string[] = []
  getValuesRecursive(props.children, values)

  return (
    <StyledUl ref={root}>
      <MenuListContext.Provider
        value={{
          value: props.value ?? '',
          root,
          values,
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
