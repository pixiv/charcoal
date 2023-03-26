import Tabs, { TabsProps, TabItem } from '.'
import { Story } from '../../_lib/compat'
import React from 'react'
import { action } from '@storybook/addon-actions'
import styled from 'styled-components'
import { theme } from '../../styled'

export default {
  title: 'Tab',
  component: Tabs,
  argTypes: {
    value: {
      type: 'string',
    },
    defaultValue: {
      type: 'string',
    },
  },
}

export const Default: Story<Omit<TabsProps, 'children'>> = (props) => {
  return (
    <TabRoot>
      <Tabs aria-label="tabs" onChange={action('change')} {...props}>
        <TabItem key="tab:1" title="tab1">
          <TabContent>tab1</TabContent>
        </TabItem>
        <TabItem key="tab:2" title="tab2">
          <TabContent>tab2</TabContent>
        </TabItem>
        <TabItem key="tab:3" title="tab3">
          <TabContent>tab3</TabContent>
        </TabItem>
        <TabItem key="tab:4" title="tab4">
          <TabContent>tab4</TabContent>
        </TabItem>
      </Tabs>
    </TabRoot>
  )
}

export const Medium: Story<Omit<TabsProps, 'children'>> = (props) => {
  return (
    <TabRoot>
      <Tabs aria-label="tabs" onChange={action('change')} {...props} size="M">
        <TabItem key="tab:1" title="tab1">
          <TabContent>content1</TabContent>
        </TabItem>
        <TabItem key="tab:2" title="tab2">
          <TabContent>content2</TabContent>
        </TabItem>
        <TabItem key="tab:3" title="tab3">
          <TabContent>content3</TabContent>
        </TabItem>
        <TabItem key="tab:4" title="tab4">
          <TabContent>content4</TabContent>
        </TabItem>
      </Tabs>
    </TabRoot>
  )
}

export const Small: Story<Omit<TabsProps, 'children'>> = (props) => {
  return (
    <TabRoot>
      <Tabs aria-label="tabs" onChange={action('change')} {...props} size="S">
        <TabItem key="tab:1" title="tab1">
          <TabContent>content1</TabContent>
        </TabItem>
        <TabItem key="tab:2" title="tab2">
          <TabContent>content2</TabContent>
        </TabItem>
        <TabItem key="tab:3" title="tab3">
          <TabContent>content3</TabContent>
        </TabItem>
        <TabItem key="tab:4" title="tab4">
          <TabContent>content4</TabContent>
        </TabItem>
      </Tabs>
    </TabRoot>
  )
}

export const Disabled: Story<Omit<TabsProps, 'children'>> = (props) => {
  return (
    <TabRoot>
      <Tabs aria-label="tabs" onChange={action('change')} {...props} disabled>
        <TabItem key="tab:1" title="tab1">
          <TabContent>content1</TabContent>
        </TabItem>
        <TabItem key="tab:2" title="tab2">
          <TabContent>content2</TabContent>
        </TabItem>
        <TabItem key="tab:3" title="tab3">
          <TabContent>content3</TabContent>
        </TabItem>
        <TabItem key="tab:4" title="tab4">
          <TabContent>content4</TabContent>
        </TabItem>
      </Tabs>
    </TabRoot>
  )
}

const TabRoot = styled.div`
  ${theme((o) => [o.bg.surface9])}
`
const TabContent = styled.div`
  ${theme((o) => [o.font.text1])}
`
