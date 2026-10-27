import { useEffect, type ReactNode } from 'react'
import { Meta, StoryObj } from '@storybook/react-vite'
import Button from '../../Button'
import { useSnackbar as unstable_useSnackbar } from '.'

const defaultOpen = !!process.env.TEST

type SnackbarStoryArgs = NonNullable<
  Parameters<typeof unstable_useSnackbar>[0]
> & {
  message: ReactNode
  actionChildren?: string
}

export default {
  title: 'react/Snackbar',
  component: SnackbarDemo,
  parameters: {
    layout: 'centered',
    tokenVersion: 'v2',
    controls: {
      sort: 'requiredFirst',
    },
    docs: {
      description: {
        component: `\`unstable_useSnackbar\` を使用すると、表示時間やキューを含む表示制御を利用できます。同時に表示できるスナックバーは1つのみです。表示中に別のスナックバーが発生した場合は、\`order\` に応じてキューに積むか、表示中のスナックバーを置き換えます。

別々の \`unstable_useSnackbar\` を呼び出した場合は互いに独立するため、同時表示数は1件に制限されません。

\`UnstableSnackbar\` は表示専用のコンポーネントです。表示状態や表示時間を制御する機構を持たず、アクションの指定を必須とします。表示の切り替えは利用側で制御してください。`,
      },
    },
  },
  args: {
    message: '保存しました',
    position: 'bottom',
    duration: 5000,
    order: 'queue',
    dim: false,
    zIndex: 20,
  },
  argTypes: {
    position: {
      options: ['top', 'bottom'],
      control: { type: 'inline-radio' },
      table: { category: 'Hook', defaultValue: { summary: "'bottom'" } },
    },
    offset: {
      control: { type: 'number', min: 0, step: 1 },
      table: { category: 'Hook', defaultValue: { summary: '16' } },
    },
    headerOffset: {
      control: { type: 'number', min: 0, step: 1 },
      table: { category: 'Hook', defaultValue: { summary: '0' } },
    },
    duration: {
      control: { type: 'number', min: 0, step: 500 },
      description: '表示時間（ミリ秒）',
      table: { category: 'Hook', defaultValue: { summary: '5000' } },
    },
    order: {
      options: ['queue', 'replace'],
      control: { type: 'inline-radio' },
      table: { category: 'Hook', defaultValue: { summary: "'queue'" } },
    },
    dim: {
      control: 'boolean',
      table: { category: 'Hook', defaultValue: { summary: 'false' } },
    },
    zIndex: {
      control: { type: 'number', min: 0, step: 1 },
      table: { category: 'Hook', defaultValue: { summary: '20' } },
    },
    className: {
      control: 'text',
      table: { category: 'Hook' },
    },
    portalContainer: {
      control: false,
      table: { category: 'Hook' },
    },
    css: {
      table: { disable: true },
    },
    message: {
      control: 'text',
      table: { category: 'Show' },
    },
    actionChildren: {
      name: 'action',
      control: 'text',
      table: { category: 'Show' },
    },
  },
  render: (args) => <SnackbarDemo {...args} />,
} as Meta<SnackbarStoryArgs>

function SnackbarDemo({
  message,
  actionChildren,
  ...props
}: SnackbarStoryArgs) {
  const [snackbar, showSnackbar] = unstable_useSnackbar(props)
  const hasAction = actionChildren !== undefined && actionChildren !== ''
  const showOptions = hasAction
    ? { action: <Button>{actionChildren}</Button> }
    : undefined

  useEffect(() => {
    if (!defaultOpen) {
      return
    }
    showSnackbar(
      message,
      hasAction ? { action: <Button>{actionChildren}</Button> } : undefined,
    )
  }, [actionChildren, hasAction, message, showSnackbar])

  return (
    <>
      {snackbar}
      <Button
        onClick={() => {
          showSnackbar(message, showOptions)
        }}
      >
        show
      </Button>
    </>
  )
}

export const Default: StoryObj<SnackbarStoryArgs> = {
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `import { Button, unstable_useSnackbar } from '@charcoal-ui/react'

export function Example() {
  const [snackbar, showSnackbar] = unstable_useSnackbar()

  return (
    <>
      {snackbar}
      <Button onClick={() => showSnackbar('保存しました')}>
        保存
      </Button>
    </>
  )
}`,
      },
    },
  },
}

export const LongMessage: StoryObj<SnackbarStoryArgs> = {
  args: {
    message:
      '保存した内容はすべての端末に同期され、あとから設定画面で変更できます。長いメッセージは2行を超えると省略されます',
  },
}

export const WithLineBreak: StoryObj<SnackbarStoryArgs> = {
  args: {
    message: (
      <>
        保存に失敗しました
        <br />
        通信環境を確認してください
      </>
    ),
  },
}

export const WithAction: StoryObj<SnackbarStoryArgs> = {
  args: {
    message: '保存しました',
    actionChildren: '取り消す',
  },
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `import { Button, unstable_useSnackbar } from '@charcoal-ui/react'

export function Example() {
  const [snackbar, showSnackbar] = unstable_useSnackbar()

  return (
    <>
      {snackbar}
      <Button
        onClick={() =>
          showSnackbar('保存しました', {
            action: <Button>取り消す</Button>,
          })
        }
      >
        保存
      </Button>
    </>
  )
}`,
      },
    },
  },
}

export const Top: StoryObj<SnackbarStoryArgs> = {
  args: {
    position: 'top',
    message: '上部に表示します',
  },
}

export const Dim: StoryObj<SnackbarStoryArgs> = {
  args: {
    dim: true,
    message: 'Dim の Snackbar',
    actionChildren: '閉じる',
  },
}
