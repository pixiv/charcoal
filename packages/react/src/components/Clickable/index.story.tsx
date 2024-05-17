import { action } from '@storybook/addon-actions'
import Clickable from '.'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Clickable',
  component: Clickable,
} as Meta<typeof Clickable>

export const Button: StoryObj = {
  render: () => <Clickable onClick={action('click')}>button</Clickable>,
}

export const Link: StoryObj = {
  render: () => (
    <Clickable as="a" href="#" onClick={action('click')}>
      link
    </Clickable>
  ),
}
