import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { ItemDivCustom } from './internals/ItemDivCustom'

export type CustomJSXElement =
  | keyof JSX.IntrinsicElements
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  | React.JSXElementConstructor<any>

export type ListItemProps<T extends CustomJSXElement = 'div'> = {
  children?: ReactNode
  as?: T
} & Omit<React.ComponentProps<T>, 'children'>

/**
 * リストのある要素を示すコンポーネント
 *
 * asを用いて拡張することができる
 * @example
 * ```
 * <ListItem as="a" href="#">Link</ListItem>
 * <ListItem as={NextLink} href="#">NextLink</ListItem>
 * ```
 */
export default function ListItem<T extends CustomJSXElement = 'div'>(
  props: ListItemProps<T>
) {
  const { children, ...rest } = props
  return (
    <StyledLi role="option">
      <ItemDivCustom {...rest} as={props.as}>
        {props.children}
      </ItemDivCustom>
    </StyledLi>
  )
}

const StyledLi = styled.li`
  list-style: none;
`
