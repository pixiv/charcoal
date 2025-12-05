import type { StoryObj, Meta } from '@storybook/react-vite'
import { colors } from '.'
import { TextBgColor } from './TextBgColor'

const meta: Meta<typeof TextBgColor> = {
  title: 'tailwind-config/Colors/Text bg color',
  component: TextBgColor,
  argTypes: {
    textColorClass: {
      options: Object.keys(colors).map((color) => `text-${color}`),
      control: { type: 'select' },
    },
    bgColorClass: {
      options: Object.keys(colors).map((color) => `bg-${color}`),
      control: { type: 'select' },
    },
  },
}
export default meta

type Story = StoryObj<typeof TextBgColor>

export const Playground: Story = {
  args: {
    textColorClass: 'text-text1',
    bgColorClass: 'bg-background1',
  },
  render: ({ bgColorClass, textColorClass }) => (
    <TextBgColor bgColorClass={bgColorClass} textColorClass={textColorClass} />
  ),
}
