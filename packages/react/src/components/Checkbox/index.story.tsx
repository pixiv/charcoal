import Checkbox from '.'
import { Meta, StoryObj } from '@storybook/react'
import { useCallback, useState } from 'react'

export default {
  title: 'Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof Checkbox>

export const Default: StoryObj<typeof Checkbox> = {
  render: (props) => {
    const [checked, setChecked] = useState(props.checked)
    const handleChange = useCallback((isSelected: boolean) => {
      setChecked(isSelected)
    }, [])

    return (
      <Checkbox
        {...props}
        checked={checked ?? props.checked}
        name="default"
        label="label"
        onChange={handleChange}
      />
    )
  },
}

export const Label: StoryObj<typeof Checkbox> = {
  render: () => {
    return <Checkbox name="checkbox">Checkbox</Checkbox>
  },
}

export const Checked: StoryObj<typeof Checkbox> = {
  render: () => {
    return (
      <Checkbox name="checked" checked>
        Checked
      </Checkbox>
    )
  },
}

export const Disabled: StoryObj<typeof Checkbox> = {
  render: () => {
    return (
      <Checkbox name="disabled" disabled>
        Disabled
      </Checkbox>
    )
  },
}

export const ReadOnly: StoryObj<typeof Checkbox> = {
  render: () => {
    return (
      <Checkbox name="readonly" readonly>
        ReadOnly
      </Checkbox>
    )
  },
}

export const Invalid: StoryObj<typeof Checkbox> = {
  render: () => {
    return (
      <Checkbox name="invalid" invalid>
        Invalid
      </Checkbox>
    )
  },
}
