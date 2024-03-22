import '@charcoal-ui/icons'
import IconButton from '.'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'IconButton',
  component: IconButton,
} as Meta<typeof IconButton>

export const Default: StoryObj<typeof IconButton> = {
  args: {
    icon: '16/Add',
  },
  render: (props) => {
    const title = props.icon.split('/').at(1)?.toLocaleLowerCase()

    return <IconButton title={title} {...props} />
  },
}

export const IsActive: StoryObj<typeof IconButton> = {
  render: () => {
    return <IconButton icon="16/Add" isActive />
  },
}

export const Overlay: StoryObj<typeof IconButton> = {
  render: () => {
    return <IconButton icon="16/Add" variant="Overlay" />
  },
}
