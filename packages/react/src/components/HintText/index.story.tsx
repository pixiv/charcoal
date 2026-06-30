import { Meta, StoryObj } from '@storybook/react-vite'
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

export const TokenV2: StoryObj<typeof HintText> = {
  parameters: {
    tokenVersion: 'v2',
  },
  render: () => (
    <div style={{ display: 'grid', gap: 16, width: 320 }}>
      <HintText context="section">Section hint text</HintText>
      <HintText context="page">Page hint text</HintText>
    </div>
  ),
}
