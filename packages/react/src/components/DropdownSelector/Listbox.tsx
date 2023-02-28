import React, { memo, useRef, Fragment, useMemo } from 'react'
import styled from 'styled-components'
import { ListProps, ListState } from 'react-stately'
import { useListBox } from '@react-aria/listbox'
import { theme } from '../../styled'

import { ListBoxSection } from './ListBoxSection'
import { Divider } from './Divider'
import { Option } from './Option'

export type ListMode = 'default' | 'separator'
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
          {node.type === 'section' ? (
            <ListBoxSection section={node} state={state} />
          ) : (
            <Option item={node} state={state} mode={mode} />
          )}
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
  overflow: hidden;

  ${theme((o) => [
    o.bg.background1,
    o.border.default,
    o.borderRadius(8),
    o.outline.default.focus,
  ])}
`
