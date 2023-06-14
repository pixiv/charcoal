import { action } from '@storybook/addon-actions'
import React from 'react'
import styled from 'styled-components'
import { Story } from '../../_lib/compat'
import Clickable from '../Clickable'
import TextArea, { TextAreaProps } from '.'
import { px } from '@charcoal-ui/utils'

export default {
  title: 'TextArea',
  component: TextArea,
  argTypes: {},
  args: {
    showLabel: false,
    label: 'Label',
    assistiveText: '',
    disabled: false,
    required: false,
    invalid: false,
    autoFocus: false,
  },
}

const Container = styled.div`
  display: grid;
  gap: ${({ theme }) => px(theme.spacing[24])};
`

const Template: Story<Partial<TextAreaProps>> = (args) => (
  <Container>
    <TextArea
      label="Label"
      requiredText="*必須"
      subLabel={
        <Clickable onClick={action('label-click')}>Text Link</Clickable>
      }
      placeholder="Text Area"
      {...args}
    />
  </Container>
)

export const Default = Template.bind({})

export const HasLabel = Template.bind({})
HasLabel.args = {
  showLabel: true,
  assistiveText: 'Assistive text',
  required: true,
}

export const HasCount = Template.bind({})
HasCount.args = {
  showCount: true,
  maxLength: 100,
}

export const AutoHeight: Story<Partial<TextAreaProps>> = (args) => (
  <TextArea label="Label" placeholder="TextArea" {...args} />
)
AutoHeight.args = {
  autoHeight: true,
}
