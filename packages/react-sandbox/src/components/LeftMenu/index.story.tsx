import { Meta, StoryObj } from '@storybook/react'
import LeftMenu from '.'

export default {
  title: 'react-sandbox/LeftMenu',
  component: LeftMenu,
} satisfies Meta<typeof LeftMenu>

const links = [
  { text: 'text1', to: '', id: '1' },
  { text: 'text2', to: '', id: '2' },
  { text: 'text3', to: '', id: '3' },
]
export const Default: StoryObj<typeof LeftMenu> = {
  render: (props) => {
    return (
      <LeftMenu {...props} links={links} active="1">
        children
      </LeftMenu>
    )
  },
}
