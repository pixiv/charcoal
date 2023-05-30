import styled from 'styled-components'
import MenuItem, { MenuItemProps } from './MenuItem'
import { MenuListContext } from './MenuList/MenuListContext'
import React, { useContext } from 'react'
import { theme } from '../../styled'
import Icon from '../Icon'

export type DropdownMenuItemProps = Omit<MenuItemProps<'div'>, 'as'>

/**
 * DropdownSelectorの選択肢として使うMenuItem
 * 
 * @param props
 * @returns
 */
export default function DropdownMenuItem(props: DropdownMenuItemProps) {
  const { value: ctxValue } = useContext(MenuListContext)
  const isSelected = props.value === ctxValue
  const { children, ...rest } = props

  return (
    <MenuItem {...rest}>
      {isSelected && <Text2ColorIcon name="16/Check" />}
      <StyledSpan isSelected={isSelected}>{props.children}</StyledSpan>
    </MenuItem>
  )
}

/**
 * アイコンがない時を考慮して20px（16pxのwidthと4pxのgap）の余白をとる
 */
const StyledSpan = styled.span<{ isSelected?: boolean }>`
  ${theme((o) => [o.typography(14), o.font.text2])};
  display: flex;
  align-items: center;
  width: 100%;
  margin-left: ${({ isSelected }) => (isSelected === true ? 0 : 20)}px;
`

const Text2ColorIcon = styled(Icon)`
  ${theme((o) => [o.font.text2])}
  padding-right: 4px;
`
