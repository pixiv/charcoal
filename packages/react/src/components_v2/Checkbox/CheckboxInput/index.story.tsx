import CheckboxInput from '.'
import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

export default {
  title: 'react/v2/internals/CheckboxInput',
  component: CheckboxInput,
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof CheckboxInput>

export const Default: StoryObj<typeof CheckboxInput> = {
  render: function Render(args) {
    return <CheckboxInput {...args} />
  },
}

export const Checked: StoryObj<typeof CheckboxInput> = {
  render: function Render() {
    const [checked, setChecked] = useState(true)
    return <CheckboxInput checked={checked} onChange={setChecked} />
  },
}

export const Disabled: StoryObj<typeof CheckboxInput> = {
  render: function Render() {
    const [checked, setChecked] = useState(false)
    return <CheckboxInput checked={checked} onChange={setChecked} disabled />
  },
}

export const Invalid: StoryObj<typeof CheckboxInput> = {
  render: function Render() {
    const [checked, setChecked] = useState(false)
    return <CheckboxInput checked={checked} onChange={setChecked} invalid />
  },
}

export const Rounded: StoryObj<typeof CheckboxInput> = {
  render: function Render() {
    const [checked, setChecked] = useState(false)
    return (
      <div
        style={{
          padding: 8,
          backgroundColor: 'var(--charcoal-color-background-secondary)',
        }}
      >
        <CheckboxInput checked={checked} onChange={setChecked} rounded />
      </div>
    )
  },
}
