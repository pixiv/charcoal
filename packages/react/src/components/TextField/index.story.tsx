import { action } from '@storybook/addon-actions'
import React from 'react'
import styled from 'styled-components'
import { Story } from '../../_lib/compat'
import Clickable from '../Clickable'
import TextField, {
  MultiLineTextFieldProps,
  SingleLineTextFieldProps,
  TextFieldProps,
} from '.'
import { px } from '@charcoal-ui/utils'
import IconButton from '../IconButton'

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

const Container = styled.div`
  display: grid;
  gap: ${({ theme }) => px(theme.spacing[24])};
`

const Template: Story<Partial<TextFieldProps>> = (args) => (
  <Container>
    <TextField
      label="Label"
      requiredText="*必須"
      subLabel={
        <Clickable onClick={action('label-click')}>Text Link</Clickable>
      }
      placeholder="Single Line"
      {...(args as Partial<SingleLineTextFieldProps>)}
      multiline={false}
    />
    <TextField
      label="Label"
      requiredText="*必須"
      subLabel={
        <Clickable onClick={action('label-click')}>Text Link</Clickable>
      }
      placeholder="Multi Line"
      {...(args as Partial<MultiLineTextFieldProps>)}
      multiline
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

export const PrefixIcon: Story<Partial<SingleLineTextFieldProps>> = (args) => (
  <TextField
    label="Label"
    placeholder="Icon prefix"
    prefix={
      <PrefixIconWrap>
        <pixiv-icon name="16/Search" />
      </PrefixIconWrap>
    }
    suffix={<IconButton variant="Overlay" icon={'16/Remove'} size="XS" />}
    {...args}
  />
)

const PrefixIconWrap = styled.div`
  color: ${({ theme }) => theme.color.text3};
  margin-top: 2px;
  margin-right: 4px;
`
