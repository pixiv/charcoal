import SegmentedControl from '.'
import { Meta, StoryObj } from '@storybook/react-webpack5'

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
    widthUniform: false,
    fullWidth: false,
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
    widthUniform: false,
    fullWidth: false,
  },
}

export const RandomLengthSegments: StoryObj<typeof SegmentedControl> = {
  args: {
    name: 'test',
    data: [
      { label: 'なが〜〜い選択肢', value: 'option1' },
      { label: '選', value: 'option2' },
      { label: '選択肢', value: 'option3' },
    ],
    disabled: false,
    readonly: false,
    required: false,
    widthUniform: false,
    fullWidth: false,
  },
}

export const UniformWidthSegments: StoryObj<typeof SegmentedControl> = {
  args: {
    name: 'test',
    data: [
      { label: 'なが〜〜い選択肢', value: 'option1' },
      { label: '選', value: 'option2' },
      { label: '選択肢', value: 'option3' },
    ],
    disabled: false,
    readonly: false,
    required: false,
    widthUniform: true,
    fullWidth: false,
  },
}

export const UniformWidthSegmentsWhenShortLabel: StoryObj<
  typeof SegmentedControl
> = {
  args: {
    name: 'test',
    data: [
      { label: '選', value: 'option1' },
      { label: '択', value: 'option2' },
      { label: '肢', value: 'option3' },
    ],
    disabled: false,
    readonly: false,
    required: false,
    widthUniform: true,
    fullWidth: false,
  },
}

export const FullWidthSegments: StoryObj<typeof SegmentedControl> = {
  args: {
    name: 'test',
    data: [
      { label: '選択肢1', value: 'option1' },
      { label: '選択肢2', value: 'option2' },
      { label: '選択肢3', value: 'option3' },
    ],
    disabled: false,
    readonly: false,
    required: false,
    widthUniform: false,
    fullWidth: true,
  },
}

export const UniformWidthAndFullWidthSegments: StoryObj<
  typeof SegmentedControl
> = {
  args: {
    name: 'test',
    data: [
      { label: 'なが〜〜い選択肢', value: 'option1' },
      { label: '選', value: 'option2' },
      { label: '選択肢', value: 'option3' },
    ],
    disabled: false,
    readonly: false,
    required: false,
    widthUniform: true,
    fullWidth: true,
  },
}
