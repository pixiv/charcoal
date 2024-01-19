import { action } from '@storybook/addon-actions'
import Checkbox from '.'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Checkbox',
  component: Checkbox,
} as Meta<typeof Checkbox>

export const Labelled: StoryObj<typeof Checkbox> = {
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
        <div style={{ marginBottom: '1em' }}>
          <Checkbox
            {...props}
            name="labelled"
            label="label"
            onBlur={action('blur')}
            onClick={action('click')}
            onChange={action('change')}
            onFocus={action('focus')}
          >
            同意する
          </Checkbox>
        </div>

        <div>
          <Checkbox
            {...props}
            name="labelled"
            label="label"
            onBlur={action('blur')}
            onClick={action('click')}
            onChange={action('change')}
            onFocus={action('focus')}
          >
            <span style={{ width: 200, display: 'block' }}>
              同意する同意する同意する同意する同意する同意する同意する同意する同意する同意する同意する同意する同意する
            </span>
          </Checkbox>
        </div>
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
