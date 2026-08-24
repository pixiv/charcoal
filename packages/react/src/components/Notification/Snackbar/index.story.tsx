import { useEffect, type ReactNode } from 'react'
import { Meta, StoryObj } from '@storybook/react-vite'
import Button from '../../Button'
import unstable_Snackbar, {
  useSnackbar as unstable_useSnackbar,
  type SnackbarProps as unstable_SnackbarProps,
} from '.'

const defaultOpen = !!process.env.TEST

type SnackbarStoryArgs = unstable_SnackbarProps & {
  message: ReactNode
  actionChildren?: string
}

export default {
  title: 'react/unstable_Snackbar',
  component: unstable_Snackbar,
  parameters: {
    layout: 'centered',
    tokenVersion: 'v2',
    controls: {
      sort: 'requiredFirst',
    },
    docs: {
      description: {
        component: `同時に表示できるスナックバーは1つのみです。表示中に別のスナックバーが発生した場合は、\`order\` に応じてキューに積むか、表示中のスナックバーを置き換えます。

別々の \`useSnackbar\` を呼び出した場合は互いに独立するため、同時表示数は1件に制限されません。`,
      },
    },
  },
  args: {
    message: '保存しました',
    order: 'queue',
  },
  argTypes: {
    position: {
      options: ['top', 'bottom'],
      control: { type: 'inline-radio' },
      table: { category: 'Hook' },
    },
    offset: {
      control: { type: 'number', min: 0, step: 1 },
      table: { category: 'Hook' },
    },
    duration: {
      control: { type: 'number', min: 0, step: 500 },
      description: '表示時間（ミリ秒）',
      table: { category: 'Hook' },
    },
    order: {
      options: ['queue', 'replace'],
      control: { type: 'inline-radio' },
      table: { category: 'Hook' },
    },
    dim: {
      control: 'boolean',
      table: { category: 'Hook' },
    },
    zIndex: {
      control: { type: 'number', min: 0, step: 1 },
      table: { category: 'Hook' },
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
  const showOptions = {
    ...(hasAction ? { action: <Button>{actionChildren}</Button> } : {}),
  }

  useEffect(() => {
    if (!defaultOpen) {
      return
    }
    showSnackbar(message, {
      ...(hasAction ? { action: <Button>{actionChildren}</Button> } : {}),
    })
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
