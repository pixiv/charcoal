import Tabs, { TabsProps, TabItem } from '.'
import { Story } from '../../_lib/compat'
import React from 'react'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Tab',
  component: Tabs,
  argTypes: {
    value: {
      type: 'string'
    },
    defaultValue: {
      type: 'string'
    }
  }
}

export const Default: Story<Omit<TabsProps, 'children'>> = (props) => {
  return (
    <Tabs aria-label="tabs" onChange={action('change')} {...props}>
      <TabItem key="tab:1">tab1</TabItem>
      <TabItem key="tab:2">tab2</TabItem>
      <TabItem key="tab:3">tab3</TabItem>
      <TabItem key="tab:4">tab4</TabItem>
    </Tabs>
  )
}

Default.args = {
  disabled: false,
  size: 'M'
}
