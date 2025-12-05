import { Meta, StoryObj } from '@storybook/react-vite'
import LoadingSpinner from '.'

export default {
  title: 'react/LoadingSpinner',
  component: LoadingSpinner,
  tags: ['skip-test'],
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof LoadingSpinner>

export const Default: StoryObj<typeof LoadingSpinner> = {
  render: (props) => <LoadingSpinner {...props} />,
}

export const Transparent: StoryObj<typeof LoadingSpinner> = {
  render: () => <LoadingSpinner transparent />,
}

export const Size: StoryObj<typeof LoadingSpinner> = {
  render: () => <LoadingSpinner size={128} />,
}

export const Padding: StoryObj<typeof LoadingSpinner> = {
  render: () => <LoadingSpinner padding={24} />,
}
