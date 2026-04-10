import CheckboxInput from '.'
import { Meta, StoryObj } from '@storybook/react-vite'
import { type CSSProperties, useState } from 'react'

export default {
  title: 'react/internals/CheckboxInput',
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
        style={{ padding: 8, backgroundColor: 'var(--charcoal-background2)' }}
      >
        <CheckboxInput checked={checked} onChange={setChecked} rounded />
      </div>
    )
  },
}

export const TokenOverride: StoryObj<typeof CheckboxInput> = {
  render: function Render() {
    const [checked, setChecked] = useState(false)
    return (
      <CheckboxInput
        checked={checked}
        onChange={setChecked}
        style={
          {
            '--charcoal-checkbox-control-border-color': 'var(--charcoal-link1)',
            '--charcoal-checkbox-control-background-checked':
              'var(--charcoal-warning)',
            '--charcoal-checkbox-control-background-checked-hover':
              'var(--charcoal-warning)',
            '--charcoal-checkbox-control-background-checked-press':
              'var(--charcoal-warning)',
            '--charcoal-checkbox-control-focus-ring-color':
              'rgba(255, 175, 15, 0.32)',
          } as CSSProperties
        }
      />
    )
  },
}
