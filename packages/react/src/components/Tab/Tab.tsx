import React, { FC, useRef } from 'react'
import { useTab } from '@react-aria/tabs'
import { TabListState } from 'react-stately'
import { Node } from '@react-types/shared'
import { Empty } from './index'
import styled from 'styled-components'
import { theme } from '../../styled'
import { disabledSelector } from '@charcoal-ui/utils'

export type TabProps = {
  readonly size?: 'S' | 'M'
  readonly item: Node<Empty>
  readonly state: TabListState<Empty>
}
export const Tab: FC<TabProps> = ({ size, item, state }) => {
  const { key, rendered } = item
  const ref = useRef<HTMLDivElement>(null)
  const { tabProps, isSelected, isDisabled } = useTab({ key }, state, ref)

  return (
    <TabRoot
      {...tabProps}
      size={size}
      ref={ref}
      aria-selected={isSelected}
      aria-disabled={isDisabled}
    >
      <Text size={size}>{rendered}</Text>
    </TabRoot>
  )
}

const TabRoot = styled.div<Pick<TabProps, 'size'>>`
  position: relative;
  box-sizing: border-box;
  cursor: pointer;
  padding-top: 12px; /* figma 上で 12px だった */
  padding-bottom: 12px; /* figma 上で 12px だった */

  ${({ size }) =>
    theme((o) => [
      o.font.text1,
      o.outline.default.focus,
      o.borderRadius(4),
      o.padding.horizontal(size === 'S' ? 16 : 24),
    ])}

  &:hover {
    ${theme((o) => [o.font.text2])}
  }
  ${disabledSelector} {
    cursor: default;
    ${theme((o) => [o.font.text3])}
  }

  &[aria-selected='true'] {
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: ${({ size }) => (size === 'S' ? 2 : 4)}px;
      background: ${({ theme }) => theme.color.brand};
    }
  }
`

const Text = styled.span<Pick<TabProps, 'size'>>`
  display: block;
  ${({ size }) =>
    theme((o) => [
      o.typography(size === 'S' ? 14 : 16).preserveHalfLeading.bold,
    ])}
`
