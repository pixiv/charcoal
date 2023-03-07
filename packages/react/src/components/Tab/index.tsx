import React, { forwardRef, Key, memo, useMemo, useRef } from 'react'
import { useTabList, AriaTabListProps } from '@react-aria/tabs'
import { Item, useTabListState } from 'react-stately'
import type { ItemElement, AriaLabelingProps } from '@react-types/shared'
import styled from 'styled-components'
import { Tab, TabProps } from './Tab'
import { TabPanel } from './TabPanel'

export interface Empty {}
export type TabsProps = AriaLabelingProps &
  Pick<TabProps, 'size'> & {
    readonly disabled?: boolean
    readonly gap?: number
    readonly value?: Key
    readonly defaultValue?: Key
    readonly onChange?: (value: Key) => void
    readonly children: ItemElement<Empty>[]
  }

const Tabs = forwardRef<HTMLDivElement, TabsProps>(function TagInner(
  { gap, size, disabled, value, defaultValue, onChange, children, ...props },
  ref
) {
  const tabRef = useRef<HTMLDivElement>(null)
  const ariaTabListProps = useMemo<AriaTabListProps<Empty>>(
    () => ({
      children,
      selectedKey: value,
      defaultSelectedKey: defaultValue,
      onSelectionChange: onChange,
      isDisabled: disabled,
      ...props
    }),
    [children, defaultValue, disabled, onChange, props, value]
  )
  const state = useTabListState(ariaTabListProps)
  const { tabListProps } = useTabList(ariaTabListProps, state, tabRef)

  return (
    <div ref={ref}>
      <TabNav {...tabListProps} ref={tabRef} gap={gap}>
        {Array.from(state.collection).map((item) => (
          <Tab key={item.key} item={item} state={state} size={size} />
        ))}
      </TabNav>
      {/* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */}
      <TabPanel key={state.selectedItem?.key} state={state} />
    </div>
  )
})

export default memo(Tabs)
export const TabItem = Item

const TabNav = styled.div<Pick<TabsProps, 'gap'>>`
  display: flex;
  gap: ${({ gap }) => gap}px;
`
