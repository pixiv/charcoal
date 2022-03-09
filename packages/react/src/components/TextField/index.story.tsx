import { action } from '@storybook/addon-actions'
import React from 'react'
import { css } from 'styled-components'
import { Story } from '../../_lib/compat'
import Clickable from '../Clickable'
import TextField, {
  MultiLineTextFieldProps,
  SingleLineTextFieldProps,
  TextFieldProps,
} from '.'
import { px } from '@charcoal-ui/utils'

export default {
  title: 'TextField',
  component: TextField,
  argTypes: {},
  args: {
    showLabel: false,
    label: 'Label',
    assistiveText: '',
    disabled: false,
    required: false,
    invalid: false,
  },
}

const Template: Story<Partial<TextFieldProps>> = (args) => (
  <div
    css={css`
      display: grid;
      gap: ${({ theme }) => px(theme.spacing[24])};
    `}
  >
    <TextField
      label="Label"
      requiredText="*必須"
      subLabel={
        <Clickable to="#" onClick={action('click')}>
          Text Link
        </Clickable>
      }
      placeholder="Single Line"
      onChange={action('change')}
      {...(args as Partial<SingleLineTextFieldProps>)}
      multiline={false}
    />
    <TextField
      label="Label"
      requiredText="*必須"
      subLabel={
        <Clickable to="#" onClick={action('click')}>
          Text Link
        </Clickable>
      }
      placeholder="Multi Line"
      onChange={action('change')}
      {...(args as Partial<MultiLineTextFieldProps>)}
      multiline
    />
  </div>
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

export const HasAffix: Story<Partial<SingleLineTextFieldProps>> = (args) => (
  <TextField label="Label" placeholder="path/to/your/file" {...args} />
)
HasAffix.args = {
  showCount: true,
  maxLength: 200,
  prefix: '/home/john/',
  suffix: '.png',
}

export const AutoHeight: Story<Partial<MultiLineTextFieldProps>> = (args) => (
  <TextField label="Label" placeholder="Multi Line" {...args} multiline />
)
AutoHeight.args = {
  autoHeight: true,
}
