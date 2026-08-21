import { useEffect, type ReactNode } from 'react'
import { Meta, StoryObj } from '@storybook/react-vite'
import Button from '../Button'
import unstable_Toast, {
  useToast as unstable_useToast,
  type ToastProps as unstable_ToastProps,
  type ToastShowOptions as unstable_ToastShowOptions,
} from '.'

const defaultOpen = !!process.env.TEST

type ToastStoryArgs = unstable_ToastProps & {
  message: ReactNode
  duration?: number
  variant: unstable_ToastShowOptions['variant']
}

export default {
  title: 'react/unstable_Toast',
  component: unstable_Toast,
  parameters: {
    layout: 'centered',
    tokenVersion: 'v2',
    docs: {
      description: {
        component: `同時に表示できるトーストは1つのみです。表示中に別のトーストが発生した場合はキューに積み、前のトーストが消えてから表示します。

別々の \`useToast\` を呼び出した場合は互いに独立するため、同時表示数は1件に制限されません。`,
      },
    },
  },
  args: {
    message: '保存しました',
    duration: 5000,
    variant: 'success',
  },
  argTypes: {
    position: {
      options: ['top', 'bottom'],
      control: { type: 'inline-radio' },
    },
    variant: {
      options: ['success', 'error'],
      control: { type: 'inline-radio' },
    },
    message: {
      control: 'text',
    },
    duration: {
      control: { type: 'number', min: 0, step: 500 },
      description: '表示時間（ミリ秒）',
    },
  },
  render: (args) => <ToastDemo {...args} />,
} as Meta<ToastStoryArgs>

function ToastDemo({ message, duration, variant, ...props }: ToastStoryArgs) {
  const [toast, showToast] = unstable_useToast(props)
  const showOptions = {
    duration,
    variant,
  }

  useEffect(() => {
    if (!defaultOpen) {
      return
    }
    showToast(message, {
      duration: 60_000,
      variant,
    })
  }, [message, showToast, variant])

  return (
    <>
      {toast}
      <Button
        onClick={() => {
          showToast(message, showOptions)
        }}
      >
        show
      </Button>
    </>
  )
}

export const Default: StoryObj<ToastStoryArgs> = {
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `import { Button, unstable_useToast } from '@charcoal-ui/react'

export function Example() {
  const [toast, showToast] = unstable_useToast()

  return (
    <>
      {toast}
      <Button
        onClick={() => showToast('保存しました', { variant: 'success' })}
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

export const Error: StoryObj<ToastStoryArgs> = {
  args: {
    variant: 'error',
    message: '保存に失敗しました',
  },
}

export const LongMessage: StoryObj<ToastStoryArgs> = {
  args: {
    message:
      '保存した内容はすべての端末に同期され、あとから設定画面で変更できます。長いメッセージは2行を超えると省略されます',
  },
}

export const WithLineBreak: StoryObj<ToastStoryArgs> = {
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

export const Bottom: StoryObj<ToastStoryArgs> = {
  args: {
    position: 'bottom',
    message: '下部に表示します',
  },
}
