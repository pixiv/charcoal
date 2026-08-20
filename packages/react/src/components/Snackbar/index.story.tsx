import { useEffect } from 'react'
import { Meta, StoryObj } from '@storybook/react-vite'
import Button from '../Button'
import Snackbar, {
  useSnackbar,
  type SnackbarProps,
  type SnackbarShowOptions,
} from '.'

const defaultOpen = !!process.env.TEST

export default {
  title: 'react/Snackbar',
  component: Snackbar,
  parameters: {
    layout: 'centered',
    tokenVersion: 'v2',
  },
  argTypes: {
    position: {
      options: ['top', 'bottom'],
      control: { type: 'inline-radio' },
    },
  },
} as Meta<typeof Snackbar>

function SnackbarDemo({
  message,
  showOptions,
  ...props
}: SnackbarProps & {
  message: string
  showOptions?: SnackbarShowOptions
}) {
  const [snackbar, showSnackbar] = useSnackbar(props)

  useEffect(() => {
    if (defaultOpen) {
      showSnackbar(message, { duration: 60_000, ...showOptions })
    }
  }, [message, showOptions, showSnackbar])

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

export const Default: StoryObj<typeof Snackbar> = {
  render: (args) => <SnackbarDemo {...args} message="保存しました" />,
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `import { Button, useSnackbar } from '@charcoal-ui/react'

export function Example() {
  const [snackbar, showSnackbar] = useSnackbar()

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

export const LongMessage: StoryObj<typeof Snackbar> = {
  render: (args) => (
    <SnackbarDemo
      {...args}
      message="保存した内容はすべての端末に同期され、あとから設定画面で変更できます"
    />
  ),
}

export const WithButton: StoryObj<typeof Snackbar> = {
  render: (args) => (
    <SnackbarDemo
      {...args}
      message="保存しました"
      showOptions={{
        button: { children: '取り消す' },
      }}
    />
  ),
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `import { Button, useSnackbar } from '@charcoal-ui/react'

export function Example() {
  const [snackbar, showSnackbar] = useSnackbar()

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

export const Bottom: StoryObj<typeof Snackbar> = {
  args: {
    position: 'bottom',
    offset: 12,
  },
  render: (args) => <SnackbarDemo {...args} message="下部に表示します" />,
}

export const Dim: StoryObj<typeof Snackbar> = {
  args: {
    dim: true,
  },
  render: (args) => (
    <SnackbarDemo
      {...args}
      message="Dim の Snackbar"
      showOptions={{
        button: { children: '閉じる' },
      }}
    />
  ),
}
