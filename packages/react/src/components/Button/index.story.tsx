import { useRef } from 'react'
import { ClickableElement } from '../Clickable'
import Button from '.'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Button',
  component: Button,
} as Meta<typeof Button>

export const Default: StoryObj<typeof Button> = {
  render: (args) => <Button {...args}>Button</Button>,
}

export const Primary: StoryObj<typeof Button> = {
  render: () => <Button variant="Primary">Primary</Button>,
}

export const Navigation: StoryObj<typeof Button> = {
  render: () => <Button variant="Navigation">Navigation</Button>,
}

export const Overlay: StoryObj<typeof Button> = {
  render: () => <Button variant="Overlay">Overlay</Button>,
}

export const Danger: StoryObj<typeof Button> = {
  render: () => <Button variant="Danger">Danger</Button>,
}

export const Small: StoryObj<typeof Button> = {
  render: () => <Button size="S">Small</Button>,
}

export const FullWidth: StoryObj<typeof Button> = {
  render: () => <Button fullWidth>Full width</Button>,
}

export const Disabled: StoryObj<typeof Button> = {
  render: () => <Button disabled>Disabled</Button>,
}

export const Active: StoryObj<typeof Button> = {
  args: {
    isActive: true,
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
