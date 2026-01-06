import Clickable from '../Clickable'
import TextField from '.'
import { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react-webpack5'

export default {
  title: 'react/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof TextField>

export const Default: StoryObj<typeof TextField> = {
  args: {
    showLabel: false,
    assistiveText: '',
    disabled: false,
    required: false,
    invalid: false,
    readOnly: false,
    label: 'Label',
    requiredText: '*必須',
    subLabel: <Clickable>Text Link</Clickable>,
    placeholder: 'TextField',
  },
  render(args) {
    return <TextField {...args} />
  },
}

export const Label: StoryObj<typeof TextField> = {
  render() {
    return <TextField showLabel label="Label" />
  },
}

export const Placeholder: StoryObj<typeof TextField> = {
  render() {
    return <TextField label="Label" placeholder="Placeholder" />
  },
}

export const RequiredText: StoryObj<typeof TextField> = {
  render() {
    return <TextField label="Label" showLabel required requiredText="*必須" />
  },
}

export const AssistiveText: StoryObj<typeof TextField> = {
  render() {
    return <TextField label="Label" assistiveText="説明が入ります" />
  },
}

export const SubLabel: StoryObj<typeof TextField> = {
  render() {
    return (
      <TextField label="Label" subLabel={<Clickable>Text Link</Clickable>} />
    )
  },
}

export const ShowCount = {
  render() {
    return <TextField label="Label" showCount maxLength={100} />
  },
}

export const Disabled: StoryObj<typeof TextField> = {
  render() {
    return <TextField label="Label" disabled />
  },
}

export const Invalid: StoryObj<typeof TextField> = {
  render() {
    return <TextField label="Label" invalid assistiveText="エラーメッセージ" />
  },
}

export const ReadOnly: StoryObj<typeof TextField> = {
  render() {
    return <TextField label="Label" readOnly value="読み取り専用" />
  },
}

export const Affix: StoryObj<typeof TextField> = {
  render() {
    return <TextField label="Label" prefix="/home/john/" suffix=".png" />
  },
}

export const Prefix: StoryObj<typeof TextField> = {
  render() {
    return (
      <TextField
        label="Label"
        prefix={
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              color: 'var(--charcoal-text3)',
            }}
          >
            <pixiv-icon name="16/Search" />
          </div>
        }
      />
    )
  },
}

export const Number: StoryObj<typeof TextField> = {
  render: function Render(args) {
    const [count, setCount] = useState(0)
    return (
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
    )
  },
}
