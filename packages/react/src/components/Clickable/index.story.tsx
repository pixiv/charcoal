import { action } from '@storybook/addon-actions'
import Clickable from '.'

export default {
  title: 'Clickable',
  component: Clickable,
}

export const Button = () => (
  <Clickable onClick={action('click')}>button</Clickable>
)

export const Link = () => (
  <Clickable to="#" onClick={action('click')}>
    link
  </Clickable>
)
