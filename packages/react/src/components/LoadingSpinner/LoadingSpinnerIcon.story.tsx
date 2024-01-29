import { Meta, StoryObj } from '@storybook/react'
import { LoadingSpinnerIcon } from '.'

export default {
  title: 'LoadingSpinnerIcon',
  component: LoadingSpinnerIcon,
  args: {
    once: false,
  },
} as Meta<typeof LoadingSpinnerIcon>

export const Icon: StoryObj<typeof LoadingSpinnerIcon> = {}
