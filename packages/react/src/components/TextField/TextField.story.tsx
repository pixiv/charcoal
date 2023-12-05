import styled from 'styled-components'
import { Story } from '../../_lib/compat'
import Clickable from '../Clickable'
import TextField, { TextFieldProps } from '.'
import { px } from '@charcoal-ui/utils'
import IconButton from '../IconButton'
import { useCallback, useState } from 'react'

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
      subLabel={<Clickable>Text Link</Clickable>}
      placeholder="TextField"
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

export const HasAffix: Story<Partial<TextFieldProps>> = (args) => (
  <TextField label="Label" placeholder="path/to/your/file" {...args} />
)
HasAffix.args = {
  showCount: true,
  maxLength: 200,
  prefix: '/home/john/',
  suffix: '.png',
}

export const PrefixIcon: Story<Partial<TextFieldProps>> = (args) => {
  const [value, setValue] = useState('')
  const handleChange = useCallback((value: string) => {
    setValue(value)
  }, [])
  const handleClear = useCallback(() => {
    setValue('')
  }, [])
  return (
    <TextField
      {...args}
      label="Label"
      placeholder="作品を検索"
      value={value}
      onChange={handleChange}
      prefix={
        <PrefixIconWrap>
          <pixiv-icon name="16/Search" />
        </PrefixIconWrap>
      }
      suffix={
        <IconButton
          variant="Overlay"
          icon={'16/Remove'}
          size="XS"
          onClick={handleClear}
        />
      }
    />
  )
}

const PrefixIconWrap = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.text3};
`
