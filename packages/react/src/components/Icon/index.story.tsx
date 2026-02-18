import Icon from '.'
import { KNOWN_ICON_FILES } from '@charcoal-ui/icons'
import { Meta, StoryObj } from '@storybook/react-webpack5'

export default {
  title: 'react/Icon',
  component: Icon,
  argTypes: {
    name: {
      control: {
        type: 'select',
        options: KNOWN_ICON_FILES,
      },
    },
    scale: {
      control: {
        type: 'select',
        options: [1, 2, 3],
      },
    },
  },
  args: {
    name: KNOWN_ICON_FILES[0],
    scale: 1,
  },
} as Meta<typeof Icon>

export const Default: StoryObj<typeof Icon> = {
  render: () => <Icon name={KNOWN_ICON_FILES[0]} scale={1} />,
}

export const FixedSize: StoryObj<typeof Icon> = {
  render: () => (
    <Icon name={KNOWN_ICON_FILES[0]} unsafeNonGuidelineFixedSize={8} />
  ),
}
