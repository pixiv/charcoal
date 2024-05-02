import '@charcoal-ui/icons'
import IconButton, { IconButtonProps } from '.'
import { Meta, StoryObj } from '@storybook/react'
import { useRef } from 'react'

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
  render: function Render(props) {
    const { size } = props
    const icon = {
      XS: '16/Remove' as const,
      S: '24/Close' as const,
      M: '24/Close' as const,
    }[size ?? 'M']
    const ref = useRef<HTMLAnchorElement>(null)

    return <IconButton title="close" {...props} icon={icon} ref={ref} />
  },
} as Meta<IconButtonProps<'button'>>

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
