import { Meta, StoryObj } from '@storybook/react-webpack5'
import TextEllipsis from '.'

export default {
  title: 'react/TextEllipsis',
  component: TextEllipsis,
  parameters: {
    layout: 'centered',
  },
  render(args) {
    return (
      <div style={{ width: 200 }}>
        <TextEllipsis {...args} />
      </div>
    )
  },
} satisfies Meta<typeof TextEllipsis>

export const Default: StoryObj<typeof TextEllipsis> = {
  args: {
    lineHeight: 24,
    lineLimit: 1,
    children:
      'これは非常に長いテキストです。1行で収まらない場合に省略記号（...）で表示が切り詰められます。ホバーすると全文がツールチップで表示されます。',
  },
}

export const SingleLine: StoryObj<typeof TextEllipsis> = {
  args: {
    lineHeight: 24,
    lineLimit: 1,
    children:
      'Single line ellipsis. This long text will be truncated with an ellipsis at the end.',
  },
}

export const MultiLine: StoryObj<typeof TextEllipsis> = {
  args: {
    lineHeight: 24,
    lineLimit: 2,
    children:
      '複数行の省略表示です。lineLimit で指定した行数まで表示し、それ以降は...で省略されます。',
  },
}

export const CustomTitle: StoryObj<typeof TextEllipsis> = {
  args: {
    lineHeight: 24,
    lineLimit: 1,
    title: 'カスタムのツールチップ文言',
    children: 'title を渡すとツールチップはその文言になります。',
  },
}

export const EmptyTitle: StoryObj<typeof TextEllipsis> = {
  args: {
    lineHeight: 24,
    lineLimit: 1,
    title: '',
    children:
      'title="" を渡すとツールチップは表示されません。ホバーしても何も出ません。',
  },
}

const narrowRender = (args: React.ComponentProps<typeof TextEllipsis>) => (
  <div style={{ width: 80 }} lang="en">
    <TextEllipsis {...args} />
  </div>
)

export const HyphensAuto: StoryObj<typeof TextEllipsis> = {
  args: {
    lineHeight: 24,
    lineLimit: 2,
    hyphens: 'auto',
    children: 'internationalization',
  },
  render: narrowRender,
}

export const HyphensManual: StoryObj<typeof TextEllipsis> = {
  args: {
    lineHeight: 24,
    lineLimit: 2,
    hyphens: 'manual',
    children: 'inter\u00ADnational\u00ADization',
  },
  render: narrowRender,
}

export const HyphensNone: StoryObj<typeof TextEllipsis> = {
  args: {
    lineHeight: 24,
    lineLimit: 2,
    hyphens: 'none',
    children: 'internationalization',
  },
  render: narrowRender,
}

export const LineHeightInherit: StoryObj<typeof TextEllipsis> = {
  args: {
    lineLimit: 2,
    children: 'lineHeight を指定しない場合、親の line-height を継承します。',
  },
  render: (args) => (
    <div style={{ lineHeight: 1.8, width: 200 }}>
      <TextEllipsis {...args} />
    </div>
  ),
}

export const ShowTooltipFalse: StoryObj<typeof TextEllipsis> = {
  args: {
    lineHeight: 24,
    lineLimit: 1,
    showTooltip: false,
    children:
      'showTooltip=false の場合、ホバーしてもツールチップは表示されません。',
  },
}
