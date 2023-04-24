import React, { ReactNode, useContext } from 'react'
import styled from 'styled-components'
import { px } from '@charcoal-ui/utils'
import Icon from '../Icon'
import { theme } from '../../styled'
import { DropdownSelectorContext } from '.'
import { focusIfHTMLLIElement } from './utils/focusIfHTMLLIElement'

export type OptionItemProps = {
  children?: ReactNode
  value: string
}

export function OptionItem(props: OptionItemProps) {
  const { value, setValue } = useContext(DropdownSelectorContext)
  const isSelected = props.value === value
  const onSelect = () => {
    setValue(props.value)
  }
  return (
    <OptionRoot
      data-key={props.value}
      onMouseMove={(e) => {
        e.currentTarget.focus({ preventScroll: true })
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          onSelect()
        } else if (e.key === 'ArrowUp') {
          // prevent scroll
          e.preventDefault()
          const prev = e.currentTarget.previousElementSibling
          if (prev === null) {
            focusIfHTMLLIElement(e.currentTarget.parentElement?.lastChild)
          }
          focusIfHTMLLIElement(prev)
        } else if (e.key === 'ArrowDown') {
          // prevent scroll
          e.preventDefault()
          const next = e.currentTarget.nextElementSibling
          if (next === null) {
            focusIfHTMLLIElement(e.currentTarget.parentElement?.firstChild)
          }
          focusIfHTMLLIElement(next)
        } else if (e.key === ' ') {
          // prevent scroll
          e.preventDefault()
        }
      }}
      onClick={onSelect}
      tabIndex={-1}
    >
      {isSelected && <OptionCheckIcon name="16/Check" />}
      <OptionText isSelected={isSelected}>{props.children}</OptionText>
    </OptionRoot>
  )
}

const OptionRoot = styled.li`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => px(theme.spacing[4])};
  height: 40px;
  cursor: pointer;
  outline: none;

  ${theme((o) => [o.padding.horizontal(8)])}

  :focus {
    ${theme((o) => [o.bg.surface3])}
  }
`

const OptionCheckIcon = styled(Icon)`
  ${theme((o) => [o.font.text2])}
`

/**
 * アイコンがない時を考慮して20px（16pxのwidthと4pxのgap）の余白をとる
 */
const OptionText = styled.span<{ isSelected?: boolean }>`
  display: block;
  ${theme((o) => [o.typography(14), o.font.text2])}
  margin-left: ${({ isSelected }) => (isSelected === true ? 0 : 20)}px;
`
