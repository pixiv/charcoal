import Checkbox from '.'
import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

export default {
  title: 'Checkbox',
  component: Checkbox,
} as Meta<typeof Checkbox>

export const Default: StoryObj<typeof Checkbox> = {
  render: function Render(args) {
    return <Checkbox {...args} />
  },
  argTypes: {
    children: {
      type: 'string',
    },
  },
}

export const Label: StoryObj<typeof Checkbox> = {
  render: function Render() {
    const [checked, setChecked] = useState(false)
    return (
      <Checkbox checked={checked} onChange={setChecked}>
        Accelerate creativity.
      </Checkbox>
    )
  },
}

export const Disabled: StoryObj<typeof Checkbox> = {
  render: function Render() {
    const [checked, setChecked] = useState(false)
    return (
      <Checkbox checked={checked} onChange={setChecked} disabled>
        Accelerate creativity.
      </Checkbox>
    )
  },
}

export const Invalid: StoryObj<typeof Checkbox> = {
  render: function Render() {
    const [checked, setChecked] = useState(false)
    return (
      <Checkbox checked={checked} onChange={setChecked} invalid>
        Accelerate creativity.
      </Checkbox>
    )
  },
}
