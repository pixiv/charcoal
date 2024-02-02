import { useRef } from 'react'
import { ClickableElement } from '../Clickable'
import Button, { ButtonProps } from '.'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'inline-radio',
        options: ['Primary', 'Default', 'Overlay', 'Danger', 'Navigation'],
      },
    },
    size: {
      control: {
        type: 'inline-radio',
        options: ['S', 'M'],
      },
    },
  },
  render: (args) => <Button {...args}>Button</Button>,
} as Meta<typeof Button>

export const Default: StoryObj<typeof Button> = {}

export const Primary: StoryObj<typeof Button> = {
  args: {
    variant: 'Primary',
  },
}

export const Navigation: StoryObj<typeof Button> = {
  args: {
    variant: 'Navigation',
  },
}

export const Overlay: StoryObj<typeof Button> = {
  args: {
    variant: 'Overlay',
  },
}

export const Danger: StoryObj<typeof Button> = {
  args: {
    variant: 'Danger',
  },
}

export const Small: StoryObj<typeof Button> = {
  args: {
    size: 'S',
  },
}

export const Fixed: StoryObj<typeof Button> = {
  args: {
    fullWidth: true,
  },
}

export const Disabled: StoryObj<typeof Button> = {
  args: {
    disabled: true,
  },
}

export const Active: StoryObj<typeof Button> = {
  args: {
    active: true,
  },
}

export const Link: StoryObj<typeof Button> = {
  args: {
    to: '#',
  },
}

export const Nihongo: StoryObj<typeof Button> = {
  render: (args) => <Button {...args}>日本語だよ</Button>,
}

export const Focus: StoryObj<typeof Button> = {
  render: function Render(args) {
    const ref = useRef<ClickableElement>(null)
    const focus = () => ref.current?.focus()
    return (
      <Button {...args} onMouseOver={focus} ref={ref}>
        Mouse over to focus
      </Button>
    )
  },
}

export const LayoutExample: StoryObj<typeof Button> = {
  render: (args: ButtonProps) => (
    <div
      css={`
        display: grid;
        gap: 24px;
      `}
    >
      <div
        css={`
          display: grid;
          grid: auto / auto-flow min-content;
          gap: 8px;
        `}
      >
        <Button {...args}>Grid</Button>
        <Button {...args} variant="Navigation">
          Layout
        </Button>
        <Button {...args} variant="Danger">
          Sample
        </Button>
      </div>
      <div
        css={`
          display: grid;
          grid: auto-flow auto / 392px;
          gap: 8px;
        `}
      >
        <Button {...args} variant="Primary" fullWidth>
          Submit
        </Button>
        <Button {...args} variant="Default" fullWidth>
          Cancel
        </Button>
      </div>
      <div
        css={`
          display: flex;

          & > * + * {
            margin-left: 8px;
          }
        `}
      >
        <Button {...args}>Flex</Button>
        <Button {...args} variant="Navigation">
          Layout
        </Button>
        <Button {...args} variant="Danger">
          Sample
        </Button>
      </div>
      <div
        css={`
          display: flex;
          flex-direction: column;
          width: 392px;

          & > * + * {
            margin-top: 8px;
          }
        `}
      >
        <Button {...args} variant="Primary" fullWidth>
          Submit
        </Button>
        <Button {...args} variant="Default" fullWidth>
          Cancel
        </Button>
      </div>
      <div
        css={`
          display: flex;
          flex-direction: column;
          width: 392px;

          & > * + * {
            margin-top: 8px;
          }
        `}
      >
        <Button {...args} variant="Primary" fullWidth>
          すべて見る
        </Button>
        <Button {...args} variant="Default">
          作品を投稿
        </Button>
      </div>
    </div>
  ),
}
