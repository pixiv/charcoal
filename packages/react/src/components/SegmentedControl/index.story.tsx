import SegmentedControl from '.'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'react/SegmentedControl',
  component: SegmentedControl,
} as Meta<typeof SegmentedControl>

export const StringSegments: StoryObj<typeof SegmentedControl> = {
  args: {
    name: 'test',
    data: ['option1', 'option2', 'option3'],
    disabled: false,
    readonly: false,
    required: false,
  },
}

export const ObjectSegments: StoryObj<typeof SegmentedControl> = {
  args: {
    name: 'test',
    data: [
      { label: '選択肢1', value: 'option1' },
      { label: '選択肢2', value: 'option2' },
      { label: '選択肢3', value: 'option3' },
      { label: '選択肢4', value: 'option4', disabled: true },
    ],
    disabled: false,
    readonly: false,
    required: false,
  },
}
