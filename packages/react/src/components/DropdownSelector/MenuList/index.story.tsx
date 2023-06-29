import { action } from '@storybook/addon-actions'
import { Story } from '../../../_lib/compat'
import MenuList, { MenuListProps } from '.'
import MenuItem from '../MenuItem'
import MenuItemGroup from '../MenuItemGroup'

export default {
  title: 'DropdownSelector/MenuList',
  component: MenuList,
}

function makeList(n: number, offset = 0) {
  return [...(Array(n) as undefined[])].map((_, i) => {
    const v = i + offset
    return (
      <MenuItem key={v} value={v.toString()}>
        Menu {v}
      </MenuItem>
    )
  })
}

export const Basic: Story<MenuListProps> = () => {
  return (
    <>
      <MenuList onChange={action('onChange')}>{makeList(10)}</MenuList>
    </>
  )
}

export const Disabled: Story<MenuListProps> = () => {
  return (
    <>
      <MenuList onChange={action('onChange')}>
        <MenuItem value="1">MenuItem</MenuItem>
        <MenuItem value="2" disabled>
          Disabled MenuItem
        </MenuItem>
      </MenuList>
    </>
  )
}

export const Group: Story<MenuListProps> = () => {
  return (
    <MenuList onChange={action('onChange')} value="1">
      <MenuItemGroup text="Section1">{makeList(5)}</MenuItemGroup>
      <MenuItemGroup text="Section2">{makeList(5, 5)}</MenuItemGroup>
    </MenuList>
  )
}
