import '@charcoal-ui/icons'
import IconButton from '.'
import type { KnownIconType } from '@charcoal-ui/icons'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'IconButton',
  component: IconButton,
  argTypes: {
    variant: {
      control: {
        type: 'inline-radio',
        options: ['Default', 'Overlay'],
      },
    },
    size: {
      control: {
        type: 'inline-radio',
        options: ['M', 'S', 'XS'],
      },
    },
    isActive: {
      control: {
        type: 'boolean',
      },
    },
  },
  render: (props) => {
    const { size } = props
    const icon: keyof KnownIconType = {
      XS: '16/Remove' as const,
      S: '24/Close' as const,
      M: '24/Close' as const,
    }[size ?? 'M']
    return <IconButton title="close" {...props} icon={icon} />
  },
} as Meta<typeof IconButton>

export const DefaultM: StoryObj<typeof IconButton> = {
  args: {
    variant: 'Default',
    size: 'M',
  },
}

export const IsActive: StoryObj<typeof IconButton> = {
  args: {
    isActive: true,
  },
}

export const OverlayM: StoryObj<typeof IconButton> = {
  args: {
    variant: 'Overlay',
    size: 'M',
  },
}
