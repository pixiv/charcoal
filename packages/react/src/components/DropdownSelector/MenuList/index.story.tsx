import { action } from '@storybook/addon-actions'
import MenuList from '.'
import MenuItem from '../MenuItem'
import MenuItemGroup from '../MenuItemGroup'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'react/internals/MenuList',
  component: MenuList,
} as Meta<typeof MenuList>

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

export const Basic: StoryObj<typeof MenuList> = {
  render: () => {
    return (
      <>
        <MenuList onChange={action('onChange')}>{makeList(10)}</MenuList>
      </>
    )
  },
}

export const Disabled: StoryObj<typeof MenuList> = {
  render: () => {
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
  },
}

export const Group: StoryObj<typeof MenuList> = {
  render: () => {
    return (
      <MenuList onChange={action('onChange')} value="1">
        <MenuItemGroup text="Section1">{makeList(5)}</MenuItemGroup>
        <MenuItemGroup text="Section2">{makeList(5, 5)}</MenuItemGroup>
      </MenuList>
    )
  },
}
