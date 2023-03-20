import React, { useRef } from 'react'
import styled, { css } from 'styled-components'
import { ListState } from 'react-stately'
import { useOption } from '@react-aria/listbox'
import { mergeProps } from '@react-aria/utils'
import { useFocusRing } from '@react-aria/focus'
import { px } from '@charcoal-ui/utils'
import Icon from '../Icon'
import { theme } from '../../styled'
import { Node } from '@react-types/shared'

type OptionProps<T> = {
  item: Node<T>
  state: ListState<T>
}

export function Option<T>({ item, state }: OptionProps<T>) {
  const ref = useRef<HTMLLIElement>(null)

  const { optionProps, isSelected } = useOption(item, state, ref)
  const { focusProps } = useFocusRing()

  return (
    <OptionRoot {...mergeProps(optionProps, focusProps)} ref={ref}>
      <OptionCheckIcon name="16/Check" isSelected={isSelected} />
      <OptionText>{item.rendered}</OptionText>
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

  &:focus {
    ${theme((o) => [o.bg.surface3])}
  }
`

const OptionCheckIcon = styled(Icon)<{ isSelected: boolean }>`
  visibility: hidden;
  ${theme((o) => [o.font.text2])}

  ${({ isSelected }) =>
    isSelected &&
    css`
      visibility: visible;
    `}
`

const OptionText = styled.span`
  display: block;
  ${theme((o) => [o.typography(14), o.font.text2])}
`
