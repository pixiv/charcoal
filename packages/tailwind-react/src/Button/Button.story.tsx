import { Button } from './Button'

import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'tailwind-react/Button',
  component: Button,
  args: {
    children: 'Button',
  },
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
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  parameters: {
    controls: {
      exclude: /as/,
    },
  },
} satisfies Meta<typeof Button>

export default meta

export const Basic: StoryObj<typeof meta> = {
  args: { variant: 'Default' },
}
export const Primary: StoryObj<typeof meta> = {
  args: { variant: 'Primary' },
}
export const Overlay: StoryObj<typeof meta> = {
  args: { variant: 'Overlay' },
}
export const Danger: StoryObj<typeof meta> = {
  args: { variant: 'Danger' },
}
export const Navigation: StoryObj<typeof meta> = {
  args: { variant: 'Navigation' },
}
