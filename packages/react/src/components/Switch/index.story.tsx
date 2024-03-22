import { useState } from 'react'
import Switch from '.'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof Switch>

export const Default: StoryObj<typeof Switch> = {
  render: function Render(args) {
    const [checked, setChecked] = useState(false)
    return (
      <div>
        <Switch
          {...args}
          name="name"
          onChange={(v) => {
            setChecked(v)
          }}
          checked={args.checked ?? checked}
        />
      </div>
    )
  },
}

export const Checked: StoryObj<typeof Switch> = {
  render: function Render() {
    const [checked, setChecked] = useState(true)
    return (
      <div>
        <Switch
          name="name"
          label="checked"
          onChange={(v) => {
            setChecked(v)
          }}
          checked={checked}
        />
      </div>
    )
  },
}

export const Labelled: StoryObj<typeof Switch> = {
  render: function Render() {
    const [checked, setChecked] = useState(false)
    return (
      <div>
        <Switch name="labeled" checked={checked} onChange={setChecked}>
          Label
        </Switch>
      </div>
    )
  },
}

export const Disabled: StoryObj<typeof Switch> = {
  render: function Render() {
    const [checked, setChecked] = useState(false)
    return (
      <div>
        <Switch
          name="disabled"
          checked={checked}
          onChange={setChecked}
          disabled
        >
          Label
        </Switch>
      </div>
    )
  },
}
