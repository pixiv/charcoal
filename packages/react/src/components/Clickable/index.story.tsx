import { action } from '@storybook/addon-actions'
import Clickable from '.'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'react/Clickable',
  component: Clickable,
} as Meta<typeof Clickable>

export const Button: StoryObj = {
  render: () => <Clickable onClick={action('click')}>button</Clickable>,
}

export const Link: StoryObj = {
  render: () => (
    <Clickable to="#" onClick={action('click')}>
      link
    </Clickable>
  ),
}
