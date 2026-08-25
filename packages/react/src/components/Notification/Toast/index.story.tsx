import { useEffect, type ReactNode } from 'react'
import { Meta, StoryObj } from '@storybook/react-vite'
import Button from '../../Button'
import unstable_Toast, {
  useToast as unstable_useToast,
  type ToastProps as unstable_ToastProps,
  type ShowToastOptions as unstable_ShowToastOptions,
} from '.'

const defaultOpen = !!process.env.TEST

type ToastStoryArgs = unstable_ToastProps & {
  message: ReactNode
  type: unstable_ShowToastOptions['type']
}

export default {
  title: 'react/Toast',
  component: unstable_Toast,
  parameters: {
    layout: 'centered',
    tokenVersion: 'v2',
    controls: {
      sort: 'requiredFirst',
    },
    docs: {
      description: {
        component: `同時に表示できるトーストは1つのみです。表示中に別のトーストが発生した場合は、\`order\` に応じてキューに積むか、表示中のトーストを置き換えます。

別々の \`useToast\` を呼び出した場合は互いに独立するため、同時表示数は1件に制限されません。`,
      },
    },
  },
  args: {
    message: '保存しました',
    position: 'top',
    offset: 16,
    duration: 5000,
    order: 'queue',
    zIndex: 20,
    type: 'success',
  },
  argTypes: {
    position: {
      options: ['top', 'bottom'],
      control: { type: 'inline-radio' },
      table: { category: 'Hook', defaultValue: { summary: "'top'" } },
    },
    offset: {
      control: { type: 'number', min: 0, step: 1 },
      table: { category: 'Hook', defaultValue: { summary: '16' } },
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
    type: {
      options: ['success', 'error'],
      control: { type: 'inline-radio' },
      table: { category: 'Show' },
    },
    message: {
      control: 'text',
      table: { category: 'Show' },
    },
  },
  render: (args) => <ToastDemo {...args} />,
} as Meta<ToastStoryArgs>

function ToastDemo({ message, type, ...props }: ToastStoryArgs) {
  const [toast, showToast] = unstable_useToast(props)
  const showOptions = {
    type,
  }

  useEffect(() => {
    if (!defaultOpen) {
      return
    }
    showToast(message, {
      type,
    })
  }, [message, showToast, type])

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
        onClick={() => showToast('保存しました', { type: 'success' })}
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
    type: 'error',
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
