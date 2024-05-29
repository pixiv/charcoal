import { ReactNode, type JSX } from 'react';
import styled from 'styled-components'

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
      <ItemDiv {...rest}>{props.children}</ItemDiv>
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

  padding-right: 16px;
  padding-left: 16px;

  transition: background-color 0.2s;

  &:disabled,
  &[aria-disabled]:not([aria-disabled='false']) {
    opacity: 0.32;
    cursor: default;
  }

  :hover,
  :focus,
  :focus-within {
    &:not(disabled):not([aria-disabled='true']) {
      background-color: var(--charcoal-surface3);
    }
  }
`
