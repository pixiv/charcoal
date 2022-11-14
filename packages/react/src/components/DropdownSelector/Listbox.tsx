import React, { memo, useRef } from 'react'
import styled, { css } from 'styled-components'
import { ListProps, ListState } from 'react-stately'
import { useListBox, useOption } from '@react-aria/listbox'
import { mergeProps } from '@react-aria/utils'
import { useFocusRing } from '@react-aria/focus'
import { px } from '@charcoal-ui/utils'
import Icon from '../Icon'
import { theme } from '../../styled'

import type { Node } from '@react-types/shared'

type Props<T> = Omit<ListProps<T>, 'children'> & {
  state: ListState<T>
}

const Listbox = <T,>({ state, ...props }: Props<T>) => {
  const ref = useRef<HTMLUListElement>(null)

  const { listBoxProps } = useListBox(props, state, ref)

  return (
    <ListboxRoot ref={ref} {...listBoxProps}>
      {[...state.collection].map((item) => (
        <Option key={item.key} item={item} state={state} />
      ))}
    </ListboxRoot>
  )
}
export default memo(Listbox)

const ListboxRoot = styled.ul`
  padding-left: 0;
  margin: 0;
  box-sizing: border-box;
  list-style: none;

  ${theme((o) => [
    o.bg.background1,
    o.border.default,
    o.borderRadius(8),
    o.outline.default.focus,
  ])}
`

type OptionProps<T> = {
  item: Node<T>
  state: ListState<T>
}

const Option = <T,>({ item, state }: OptionProps<T>) => {
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
  box-sizing: border-box;
  ${theme((o) => [o.padding.horizontal(16)])}

  &:focus {
    ${theme((o) => [o.bg.surface3])}
  }
`
const OptionCheckIcon = styled(Icon)<{ isSelected: boolean }>`
  visibility: hidden;

  ${({ isSelected }) =>
    isSelected &&
    css`
      visibility: visible;
    `}
`
const OptionText = styled.span`
  display: block;
  ${theme((o) => [o.typography(14)])}
`
