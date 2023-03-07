import React, { FC, useRef } from 'react'
import { useTabPanel, AriaTabPanelProps } from '@react-aria/tabs'
import { TabListState } from 'react-stately'
import { Empty } from './index'

type TabPanelProps = AriaTabPanelProps & {
  state: TabListState<Empty>
}
export const TabPanel: FC<TabPanelProps> = ({ state, ...props }) => {
  const ref = useRef<HTMLDivElement>(null)
  const { tabPanelProps } = useTabPanel(props, state, ref)

  return (
    <div {...tabPanelProps} ref={ref}>
      {/* react-stately の selectedItem は undefined になることがあるが型としてそれを表現できてないため optional chaining を使用している。 */}
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unnecessary-condition */}
      {state.selectedItem?.props.children}
    </div>
  )
}
