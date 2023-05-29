import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../../styled'
import { CustomJSXElement } from '..'

export function ItemDivCustom<T extends CustomJSXElement>(
  props: {
    as?: React.ElementType
    children?: React.ReactNode
  } & Omit<React.ComponentProps<T>, 'children'>
) {
  const { as, children, ...rest } = props
  if (typeof as === 'string') {
    return React.createElement(as, rest, children)
  }

  return (
    <ItemDiv as={as} {...rest}>
      {children}
    </ItemDiv>
  )
}

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
