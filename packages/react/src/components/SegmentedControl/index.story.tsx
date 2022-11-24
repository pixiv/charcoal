import { action } from '@storybook/addon-actions'
import React from 'react'
import SegmentedControl, { SegmentedControlProps } from '.'
import { Story } from '../../_lib/compat'

export default {
  title: 'SegmentedControl',
  component: SegmentedControl,
}

export const StringSegments: Story<SegmentedControlProps> = (props) => {
  return <SegmentedControl {...props} onChange={action('change')} />
}

StringSegments.args = {
  data: ['option1', 'option2', 'option3'],
  disabled: false,
  readonly: false,
  required: false,
}

export const ObjectSegments: Story<SegmentedControlProps> = (props) => {
  return <SegmentedControl {...props} onChange={action('change')} />
}

ObjectSegments.args = {
  data: [
    { label: '選択肢1', value: 'option1' },
    { label: '選択肢2', value: 'option2' },
    { label: '選択肢3', value: 'option3' },
    { label: '選択肢4', value: 'option4', disabled: true },
  ],
  disabled: false,
  readonly: false,
  required: false,
}
