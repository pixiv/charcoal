import { action } from '@storybook/addon-actions'
import Checkbox from '.'
import { Story } from '../../_lib/compat'

export default {
  title: 'Checkbox',
  component: Checkbox,
}

type Props = {
  checked: boolean
  defaultChecked: boolean
  disabled: boolean
  readonly: boolean
}

export const Labelled: Story<Props> = (props) => {
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
}

Labelled.args = {
  checked: false,
  defaultChecked: false,
  disabled: false,
  readonly: false,
}

export const Unlabelled: Story<Props> = (props) => {
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
}

Unlabelled.args = {
  checked: false,
  defaultChecked: false,
  disabled: false,
  readonly: false,
}
