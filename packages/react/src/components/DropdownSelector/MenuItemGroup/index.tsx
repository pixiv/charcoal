import './index.css'

import MenuItem from '../MenuItem'
import { Divider } from '../Divider'

type MenuItemGroupChild = React.ReactElement<typeof MenuItem | typeof Divider>

export type MenuItemGroupProps = {
  text: string
  children: MenuItemGroupChild | MenuItemGroupChild[]
}

export default function MenuItemGroup(props: MenuItemGroupProps) {
  return (
    <li className="charcoal-menu-item-group" role="presentation">
      <span>{props.text}</span>
      <ul role="group">{props.children}</ul>
    </li>
  )
}
