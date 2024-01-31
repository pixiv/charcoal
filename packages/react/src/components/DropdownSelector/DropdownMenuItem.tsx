import styled from 'styled-components'
import MenuItem, { MenuItemProps } from './MenuItem'
import { MenuListContext } from './MenuList/MenuListContext'
import { useContext } from 'react'
import Icon from '../Icon'

export type DropdownMenuItemProps = Omit<MenuItemProps<'div'>, 'as'>

/**
 * DropdownSelectorの選択肢として使うMenuItem
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
  font-size: 14px;
  line-height: 22px;
  color: var(--charcoal-text2);
  padding: 9px 0;

  display: flex;
  align-items: center;
  width: 100%;
  margin-left: ${({ isSelected }) => (isSelected === true ? 0 : 20)}px;
`

const Text2ColorIcon = styled(Icon)`
  color: var(--charcoal-text2);
  padding-right: 4px;
`
