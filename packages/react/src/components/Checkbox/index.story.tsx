import { action } from '@storybook/addon-actions'
import Checkbox from '.'
import { Meta, StoryObj } from '@storybook/react'
import { useCallback, useState } from 'react'

export default {
  title: 'Checkbox',
  component: Checkbox,
} as Meta<typeof Checkbox>

export const Default: StoryObj<typeof Checkbox> = {
  args: {
    checked: false,
    defaultChecked: false,
    disabled: false,
    readonly: false,
    invalid: false,
  },
  render: (props) => {
    const [checked, setChecked] = useState(props.checked)
    const handleChange = useCallback((isSelected: boolean) => {
      setChecked(isSelected)
      action('change')(isSelected)
    }, [])

    return (
      <div>
        <Checkbox
          {...props}
          checked={checked ?? props.checked}
          name="labelled"
          label="label"
          onBlur={action('blur')}
          onClick={action('click')}
          onChange={handleChange}
          onFocus={action('focus')}
        >
          <span style={{ userSelect: 'none' }}>同意する</span>
        </Checkbox>
      </div>
    )
  },
}

export const Invalid: StoryObj<typeof Checkbox> = {
  args: {
    checked: false,
    defaultChecked: false,
    disabled: false,
    readonly: false,
  },
  render: (props) => {
    return (
      <Checkbox
        {...props}
        name="labelled"
        label="label"
        invalid
        onBlur={action('blur')}
        onClick={action('click')}
        onChange={action('change')}
        onFocus={action('focus')}
      >
        同意する
      </Checkbox>
    )
  },
}

export const Unlabelled: StoryObj<typeof Checkbox> = {
  args: {
    checked: false,
    defaultChecked: false,
    disabled: false,
    readonly: false,
    invalid: false,
  },
  render: (props) => {
    return (
      <div>
        <Checkbox
          {...props}
          name="unlabelled"
          label="label"
          onBlur={action('blur')}
          onClick={action('click')}
          onChange={action('change')}
          onFocus={action('focus')}
        />
      </div>
    )
  },
}
