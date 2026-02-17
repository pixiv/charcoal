import { Meta, StoryObj } from '@storybook/react-webpack5'
import { TextEllipsis } from '.'

export default {
  title: 'react-sandbox/TextEllipsis',
  component: TextEllipsis,
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof TextEllipsis>

export const Default: StoryObj<typeof TextEllipsis> = {
  args: {
    lineHeight: 24,
    lineLimit: 1,
    children:
      'これは非常に長いテキストです。1行で収まらない場合に省略記号（...）で表示が切り詰められます。ホバーすると全文がツールチップで表示されます。',
  },
  render: (args) => (
    <div style={{ width: 200 }}>
      <TextEllipsis {...args} />
    </div>
  ),
}

export const SingleLine: StoryObj<typeof TextEllipsis> = {
  args: {
    lineHeight: 24,
    lineLimit: 1,
    children:
      'Single line ellipsis. This long text will be truncated with an ellipsis at the end.',
  },
  render: (args) => (
    <div style={{ width: 240 }}>
      <TextEllipsis {...args} />
    </div>
  ),
}

export const MultiLine: StoryObj<typeof TextEllipsis> = {
  args: {
    lineHeight: 24,
    lineLimit: 2,
    children:
      '複数行の省略表示です。lineLimit で指定した行数まで表示し、それ以降は...で省略されます。',
  },
  render: (args) => (
    <div style={{ width: 200 }}>
      <TextEllipsis {...args} />
    </div>
  ),
}

export const CustomTitle: StoryObj<typeof TextEllipsis> = {
  args: {
    lineHeight: 24,
    lineLimit: 1,
    title: 'カスタムのツールチップ文言',
    children: 'title を渡すとツールチップはその文言になります。',
  },
  render: (args) => (
    <div style={{ width: 200 }}>
      <TextEllipsis
        lineHeight={args.lineHeight}
        lineLimit={args.lineLimit}
        title={args.title}
      >
        {args.children}
      </TextEllipsis>
    </div>
  ),
}

export const EmptyTitle: StoryObj<typeof TextEllipsis> = {
  args: {
    lineHeight: 24,
    lineLimit: 1,
    title: '',
    children:
      'title="" を渡すとツールチップは表示されません。ホバーしても何も出ません。',
  },
  render: (args) => (
    <div style={{ width: 200 }}>
      <TextEllipsis
        lineHeight={args.lineHeight}
        lineLimit={args.lineLimit}
        title={args.title}
      >
        {args.children}
      </TextEllipsis>
    </div>
  ),
}
