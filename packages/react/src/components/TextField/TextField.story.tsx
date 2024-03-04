import styled from 'styled-components'
import Clickable from '../Clickable'
import TextField from '.'
import { px } from '@charcoal-ui/utils'
import IconButton from '../IconButton'
import { useCallback, useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'TextField',
  component: TextField,
  argTypes: {},
  args: {
    showLabel: false,
    assistiveText: '',
    disabled: false,
    required: false,
    invalid: false,
    label: 'Label',
    requiredText: '*必須',
    subLabel: <Clickable>Text Link</Clickable>,
    placeholder: 'TextField',
  },
  render: function Render(args) {
    return (
      <Container>
        <TextField {...args} />
      </Container>
    )
  },
} as Meta<typeof TextField>

const Container = styled.div`
  display: grid;
  gap: ${({ theme }) => px(theme.spacing[24])};
`

export const Default = {}

export const Number: StoryObj<typeof TextField> = {
  render: function Render(args) {
    const [count, setCount] = useState(0)
    return (
      <Container>
        <TextField
          {...args}
          type="number"
          value={count.toString()}
          onChange={(value) => setCount(parseInt(value))}
          onWheel={(e) => {
            e.currentTarget.blur()
            e.stopPropagation()
          }}
        />
      </Container>
    )
  },
}

export const HasLabel = {
  args: {
    showLabel: true,
    assistiveText: 'Assistive text',
    required: true,
  },
}

export const HasCount = {
  args: {
    showCount: true,
    maxLength: 100,
  },
}

export const HasAffix: StoryObj<typeof TextField> = {
  args: {
    showCount: true,
    maxLength: 200,
    prefix: '/home/john/',
    suffix: '.png',
  },
}

const PrefixIconWrap = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.text3};
`

export const PrefixIcon: StoryObj<typeof TextField> = {
  render: function Render(args) {
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
  },
}
