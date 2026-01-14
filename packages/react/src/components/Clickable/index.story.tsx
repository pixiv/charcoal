import { action } from 'storybook/actions'
import Clickable from '.'
import { Meta, StoryObj } from '@storybook/react-webpack5'

export default {
  title: 'react/Clickable',
  component: Clickable,
} as Meta<typeof Clickable>

export const Button: StoryObj = {
  render: () => <Clickable onClick={action('click')}>button</Clickable>,
}

export const Link: StoryObj = {
  render: () => (
    <Clickable component="a" href="#" onClick={action('click')}>
      link
    </Clickable>
  ),
}
