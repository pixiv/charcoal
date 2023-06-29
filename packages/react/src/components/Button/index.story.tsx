import { action } from '@storybook/addon-actions'
import { useRef } from 'react'
import { Story } from '../../_lib/compat'
import { ClickableElement } from '../Clickable'
import Button, { ButtonProps } from '.'

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
}

const DefaultStory = (args: ButtonProps) => (
  <Button {...args} onClick={action('click')}>
    Button
  </Button>
)

export const Default: Story<ButtonProps> = DefaultStory.bind({})

export const Primary: Story<ButtonProps> = DefaultStory.bind({})
Primary.args = {
  variant: 'Primary',
}

export const Navigation: Story<ButtonProps> = DefaultStory.bind({})
Navigation.args = {
  variant: 'Navigation',
}

export const Overlay: Story<ButtonProps> = DefaultStory.bind({})
Overlay.args = {
  variant: 'Overlay',
}

export const Danger: Story<ButtonProps> = DefaultStory.bind({})
Danger.args = {
  variant: 'Danger',
}

export const Small: Story<ButtonProps> = DefaultStory.bind({})
Small.args = {
  size: 'S',
}

export const Fixed: Story<ButtonProps> = DefaultStory.bind({})
Fixed.args = {
  fullWidth: true,
}

export const Disabled: Story<ButtonProps> = DefaultStory.bind({})
Disabled.args = {
  disabled: true,
}

export const Link: Story<ButtonProps> = DefaultStory.bind({})
Link.args = {
  to: '#',
}

const NihongoStory = (args: ButtonProps) => (
  <Button {...args} onClick={action('click')}>
    日本語だよ
  </Button>
)

export const Nihongo: Story<ButtonProps> = NihongoStory.bind({})

const FocusStory = (args: ButtonProps) => <FocusStoryInternal {...args} />
const FocusStoryInternal = (args: ButtonProps) => {
  const ref = useRef<ClickableElement>(null)
  const focus = () => ref.current?.focus()
  return (
    <Button {...args} onMouseOver={focus} ref={ref}>
      Mouse over to focus
    </Button>
  )
}

export const Focus: Story<ButtonProps> = FocusStory.bind({})

const LayoutExampleStory = (args: ButtonProps) => (
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
)

export const LayoutExample = LayoutExampleStory.bind({})
