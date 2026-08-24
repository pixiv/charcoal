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
  buttonChildren?: string
  duration?: number
}

export default {
  title: 'react/unstable_Snackbar',
  component: unstable_Snackbar,
  parameters: {
    layout: 'centered',
    tokenVersion: 'v2',
    docs: {
      description: {
        component: `同時に表示できるスナックバーは1つのみです。表示中に別のスナックバーが発生した場合はキューに積み、前のスナックバーが消えてから表示します。

別々の \`useSnackbar\` を呼び出した場合は互いに独立するため、同時表示数は1件に制限されません。`,
      },
    },
  },
  args: {
    message: '保存しました',
    duration: 5000,
  },
  argTypes: {
    position: {
      options: ['top', 'bottom'],
      control: { type: 'inline-radio' },
    },
    message: {
      control: 'text',
    },
    duration: {
      control: { type: 'number', min: 0, step: 500 },
      description: '表示時間（ミリ秒）',
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
  duration,
  ...props
}: SnackbarStoryArgs) {
  const [snackbar, showSnackbar] = unstable_useSnackbar(props)
  const hasButton = buttonChildren !== undefined && buttonChildren !== ''
  const showOptions = {
    duration,
    ...(hasButton ? { button: { children: buttonChildren } } : {}),
  }

  useEffect(() => {
    if (!defaultOpen) {
      return
    }
    showSnackbar(message, {
      duration: 60_000,
      ...(hasButton ? { button: { children: buttonChildren } } : {}),
    })
  }, [buttonChildren, hasButton, message, showSnackbar])

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
