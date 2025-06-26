import { Meta, StoryObj } from '@storybook/react'
import HintText from '.'

export default {
  title: 'react/HintText',
  component: HintText,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: { type: 'string' },
    context: {
      control: {
        type: 'select',
        options: ['page', 'section'],
      },
    },
  },
} as Meta<typeof HintText>

export const Default: StoryObj<typeof HintText> = {
  args: {
    children: 'HintText',
    context: 'section',
  },
  render: (props) => <HintText {...props} />,
}

export const NarrowWidth: StoryObj<typeof HintText> = {
  args: {
    children: 'LongLongLongLongLongLongLongLongLongText',
    context: 'section',
  },
  render: (props) => (
    <div style={{ width: 200 }}>
      <HintText {...props} />
    </div>
  ),
}
