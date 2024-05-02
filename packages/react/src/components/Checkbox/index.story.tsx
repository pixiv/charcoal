import Checkbox from '.'
import { Meta, StoryObj } from '@storybook/react'
import { useCallback, useState } from 'react'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Checkbox',
  component: Checkbox,
} as Meta<typeof Checkbox>

export const Default: StoryObj<typeof Checkbox> = {
  render: function Render(props) {
    const [checked, setChecked] = useState(props.checked)
    const handleChange = useCallback((isSelected: boolean) => {
      setChecked(isSelected)
      action('change')(isSelected)
    }, [])

    return (
      <Checkbox
        {...props}
        checked={checked ?? props.checked}
        onBlur={action('blur')}
        onClick={action('click')}
        onChange={handleChange}
        onFocus={action('focus')}
      />
    )
  },
}

export const Label: StoryObj<typeof Checkbox> = {
  render: () => {
    return <Checkbox>Accelerate creativity.</Checkbox>
  },
}

export const Checked: StoryObj<typeof Checkbox> = {
  render: () => {
    return <Checkbox checked>Accelerate creativity.</Checkbox>
  },
}

export const Disabled: StoryObj<typeof Checkbox> = {
  render: () => {
    return <Checkbox disabled>Accelerate creativity.</Checkbox>
  },
}

export const ReadOnly: StoryObj<typeof Checkbox> = {
  render: () => {
    return (
      <Checkbox name="labelled" readOnly>
        Accelerate creativity.
      </Checkbox>
    )
  },
}

export const Invalid: StoryObj<typeof Checkbox> = {
  render: () => {
    return (
      <Checkbox name="labelled" invalid>
        Accelerate creativity.
      </Checkbox>
    )
  },
}
