import './index.css'

import MenuItem from '../MenuItem'
import { Divider } from '../Divider'
import { JSX } from 'react/jsx-runtime'

type MenuItemGroupChild = React.ReactElement<typeof MenuItem | typeof Divider>

export type MenuItemGroupProps = {
  text: string
  children: MenuItemGroupChild | MenuItemGroupChild[]
}

export default function MenuItemGroup(props: MenuItemGroupProps): JSX.Element {
  return (
    <li className="charcoal-menu-item-group" role="presentation">
      <span>{props.text}</span>
      <ul role="group">{props.children}</ul>
    </li>
  )
}
