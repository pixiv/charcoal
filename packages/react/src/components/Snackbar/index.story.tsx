import { useEffect, type ReactNode } from 'react'
import { Meta, StoryObj } from '@storybook/react-vite'
import Button from '../Button'
import unstable_Snackbar, {
  useSnackbar as unstable_useSnackbar,
  type SnackbarProps as unstable_SnackbarProps,
} from '.'

const defaultOpen = !!process.env.TEST

type SnackbarStoryArgs = unstable_SnackbarProps & {
  message: ReactNode
  buttonChildren?: string
}

export default {
  title: 'react/unstable_Snackbar',
  component: unstable_Snackbar,
  parameters: {
    layout: 'centered',
    tokenVersion: 'v2',
  },
  args: {
    message: '保存しました',
  },
  argTypes: {
    position: {
      options: ['top', 'bottom'],
      control: { type: 'inline-radio' },
    },
    message: {
      control: 'text',
    },
    buttonChildren: {
      name: 'button.children',
      control: 'text',
    },
  },
  render: (args) => <SnackbarDemo {...args} />,
} as Meta<SnackbarStoryArgs>

function SnackbarDemo({
  message,
  buttonChildren,
  ...props
}: SnackbarStoryArgs) {
  const [snackbar, showSnackbar] = unstable_useSnackbar(props)
  const showOptions =
    buttonChildren === undefined || buttonChildren === ''
      ? undefined
      : { button: { children: buttonChildren } }

  useEffect(() => {
    if (!defaultOpen) {
      return
    }
    showSnackbar(
      message,
      buttonChildren === undefined || buttonChildren === ''
        ? { duration: 60_000 }
        : { duration: 60_000, button: { children: buttonChildren } },
    )
  }, [buttonChildren, message, showSnackbar])

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

export const WithButton: StoryObj<SnackbarStoryArgs> = {
  args: {
    message: '保存しました',
    buttonChildren: '取り消す',
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
            button: {
              children: '取り消す',
            },
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
    buttonChildren: '閉じる',
  },
}
