import { useState } from 'react'
import Switch from '.'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Switch',
  component: Switch,
  args: {
    name: 'name',
    label: 'label',
  },
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof Switch>

export const Basic: StoryObj<typeof Switch> = {
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
  render: function Render(args) {
    const [checked, setChecked] = useState(true)
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

export const Labelled: StoryObj<typeof Switch> = {
  render: function Render(args) {
    const [checked, setChecked] = useState(false)
    return (
      <div>
        <Switch
          {...args}
          checked={args.checked ?? checked}
          onChange={setChecked}
        >
          Label
        </Switch>
      </div>
    )
  },
}

export const Disabled: StoryObj<typeof Switch> = {
  render: function Render(args) {
    const [checked, setChecked] = useState(false)
    return (
      <div>
        <Switch
          {...args}
          checked={args.checked ?? checked}
          onChange={setChecked}
          disabled
        >
          Label
        </Switch>
      </div>
    )
  },
}
