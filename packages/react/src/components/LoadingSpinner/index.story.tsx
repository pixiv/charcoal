import { Meta, StoryObj } from '@storybook/react'
import LoadingSpinner from '.'

export default {
  title: 'LoadingSpinner',
  component: LoadingSpinner,
  args: {
    size: 48,
    padding: 16,
    transparent: false,
    className: 'basic',
  },
} as Meta<typeof LoadingSpinner>

export const Default: StoryObj<typeof LoadingSpinner> = {}
