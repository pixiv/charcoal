import { Meta, StoryObj } from '@storybook/react-vite'
import SwitchCheckbox from '.'

export default {
  title: 'react-sandbox/SwitchCheckbox',
  component: SwitchCheckbox,
} satisfies Meta<typeof SwitchCheckbox>

export const Default: StoryObj<typeof SwitchCheckbox> = {
  render: (props) => {
    return <SwitchCheckbox {...props}>children</SwitchCheckbox>
  },
}
