import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { theme } from '../../../styled'
import { CustomJSXElement } from '../../../types/CustomJSXElement'

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
      <ItemDiv {...rest}>
        {props.children}
      </ItemDiv>
    </StyledLi>
  )
}

const StyledLi = styled.li`
  list-style: none;
`

const ItemDiv = styled.div`
  display: flex;
  align-items: center;
  min-height: 40px;
  cursor: pointer;
  outline: none;

  ${theme((o) => [o.padding.horizontal(16), o.disabled])}

  &[aria-disabled="true"] {
    cursor: default;
  }

  :hover,
  :focus,
  :focus-within {
    ${theme((o) => [o.bg.surface3])}
  }
`
