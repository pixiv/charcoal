import React, { memo, useRef, Fragment, useMemo } from 'react'
import styled, { css } from 'styled-components'
import { ListProps, ListState } from 'react-stately'
import { useListBox, useOption } from '@react-aria/listbox'
import { mergeProps } from '@react-aria/utils'
import { useFocusRing } from '@react-aria/focus'
import { px } from '@charcoal-ui/utils'
import Icon from '../Icon'
import { theme } from '../../styled'

import type { Node } from '@react-types/shared'

type ListMode = 'default' | 'separator'
export type ListboxProps<T> = Omit<ListProps<T>, 'children'> & {
  state: ListState<T>
  mode?: ListMode
}

const Listbox = <T,>({
  state,
  mode = 'default',
  ...props
}: ListboxProps<T>) => {
  const ref = useRef<HTMLUListElement>(null)

  const { listBoxProps } = useListBox(props, state, ref)
  const collection = useMemo(
    () =>
      [...state.collection].map((node, index, self) => ({
        node,
        first: index === 0,
        last: index === self.length - 1,
      })),
    [state.collection]
  )

  return (
    <ListboxRoot ref={ref} {...listBoxProps}>
      {collection.map(({ node, last }) => (
        <Fragment key={node.key}>
          <Option item={node} state={state} mode={mode} />
          {!last && mode === 'separator' && <Divider />}
        </Fragment>
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

const Divider = styled.div.attrs({ role: 'separator' })`
  display: flex;
  ${theme((o) => [o.padding.horizontal(8)])}

  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background: #00000014;
  }
`

type OptionProps<T> = {
  item: Node<T>
  state: ListState<T>
  mode?: ListMode
}

const Option = <T,>({ item, state, mode }: OptionProps<T>) => {
  const ref = useRef<HTMLLIElement>(null)

  const { optionProps, isSelected } = useOption(item, state, ref)
  const { focusProps } = useFocusRing()

  return (
    <OptionRoot {...mergeProps(optionProps, focusProps)} ref={ref} mode={mode}>
      <OptionCheckIcon name="16/Check" isSelected={isSelected} />
      <OptionText>{item.rendered}</OptionText>
    </OptionRoot>
  )
}

const OptionRoot = styled.li<{ mode?: ListMode }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => px(theme.spacing[4])};
  height: 40px;
  cursor: pointer;
  outline: none;

  ${({ mode }) =>
    theme((o) => [
      o.padding.horizontal(8),
      mode === 'separator' && o.padding.vertical(4),
    ])}

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
  ${theme((o) => [o.typography(14), o.font.text2])}
`
