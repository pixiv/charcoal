import { action } from '@storybook/addon-actions'
import React, { useState } from 'react'
import { Story } from '../../_lib/compat'
import Switch from '.'

export default {
  title: 'Switch',
  component: Switch,
}

interface Props {
  checked: boolean
  disabled: boolean
}

export const Playground: Story<Props> = (props: Props) => {
  const [checked, setChecked] = useState(false)
  return (
    <div>
      <Switch
        {...props}
        name="name"
        onChange={(v) => {
          setChecked(v)
          action('onChange')
        }}
        checked={checked}
      >
        選択する
      </Switch>
    </div>
  )
}

export const Labelled: Story<Props> = (props: Props) => (
  <div>
    <Switch {...props} name="name" onChange={action('onChange')}>
      選択する
    </Switch>
  </div>
)

Labelled.args = {
  checked: false,
  disabled: false,
}

export const Unlabelled: Story<Props> = (props: Props) => (
  <div>
    <Switch
      {...props}
      name="name"
      label="label"
      onChange={action('onChange')}
    />
  </div>
)

Unlabelled.args = {
  checked: false,
  disabled: false,
}
