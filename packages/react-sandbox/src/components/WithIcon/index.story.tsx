import { Meta, StoryObj } from '@storybook/react-vite'
import WithIcon from '.'

export default {
  title: 'react-sandbox/WithIcon',
  component: WithIcon,
  argTypes: {
    prefix: {
      type: 'boolean',
    },
    fit: {
      type: 'boolean',
    },
    width: {
      type: 'number',
    },
    fixed: {
      type: 'boolean',
    },
  },
} satisfies Meta<typeof WithIcon>

export const Default: StoryObj<typeof WithIcon> = {
  render: (props) => {
    return (
      <WithIcon {...props} icon={<pixiv-icon name="16/Like" />}>
        children
      </WithIcon>
    )
  },
}
