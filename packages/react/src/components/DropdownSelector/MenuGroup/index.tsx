import React from 'react'
import styled from 'styled-components'
import MenuItem from '../MenuItem'
import { Divider } from '../Divider'

type MenuGroupChild = React.ReactElement<typeof MenuItem | typeof Divider>

export type MenuGroupProps = {
  text: string
  children: MenuGroupChild | MenuGroupChild[]
}

export default function MenuGroup(props: MenuGroupProps) {
  return (
    <StyledLi role="presentation">
      <TextSpan>{props.text}</TextSpan>
      <StyledUl role="group">{props.children}</StyledUl>
    </StyledLi>
  )
}

const TextSpan = styled.span`
  display: block;
  color: ${({ theme }) => theme.color.text3};
  font-size: 12px;
  font-weight: bold;
  padding: 12px 0 8px 16px;
`

const StyledUl = styled.ul`
  padding-left: 0;
  margin: 0;
  box-sizing: border-box;
  list-style: none;
  overflow: hidden;
`

const StyledLi = styled.li`
  display: block;
`
