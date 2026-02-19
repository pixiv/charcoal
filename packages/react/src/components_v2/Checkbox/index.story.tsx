import Checkbox from '.'
import { Meta, StoryObj } from '@storybook/react'
import { useCallback, useState } from 'react'

export default {
  title: 'react/v2/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof Checkbox>

export const Default: StoryObj<typeof Checkbox> = {
  argTypes: {
    checked: { type: 'boolean' },
    children: { type: 'string' },
    disabled: { type: 'boolean' },
    invalid: { type: 'boolean' },
    readOnly: { type: 'boolean' },
  },
  render: function Render(props) {
    const [checked, setChecked] = useState(props.checked)
    const handleChange = useCallback((isSelected: boolean) => {
      setChecked(isSelected)
    }, [])

    return (
      <Checkbox
        {...props}
        checked={props.checked ?? checked}
        onChange={handleChange}
      />
    )
  },
}

export const Label: StoryObj<typeof Checkbox> = {
  render: () => {
    return <Checkbox>Checkbox</Checkbox>
  },
}

export const Checked: StoryObj<typeof Checkbox> = {
  render: () => {
    return <Checkbox checked>Checked</Checkbox>
  },
}

export const Disabled: StoryObj<typeof Checkbox> = {
  render: () => {
    return <Checkbox disabled>Disabled</Checkbox>
  },
}

export const ReadOnly: StoryObj<typeof Checkbox> = {
  render: () => {
    return (
      <Checkbox checked name="labelled" readOnly>
        ReadOnly
      </Checkbox>
    )
  },
}

export const Invalid: StoryObj<typeof Checkbox> = {
  render: () => {
    return (
      <Checkbox name="labelled" invalid>
        Invalid
      </Checkbox>
    )
  },
}
