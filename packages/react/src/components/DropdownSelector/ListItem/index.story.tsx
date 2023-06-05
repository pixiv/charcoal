import React, { useState } from 'react'
import { Story } from '../../../_lib/compat'
import Icon from '../../Icon'
import Switch from '../../Switch'
import ListItem, { ListItemProps } from '.'
import styled from 'styled-components'

export default {
  title: 'DropdownSelector/ListItem',
  component: ListItem,
}

const CustomLink = styled.a`
  color: red;
`

export const Basic: Story<ListItemProps> = () => {
  const [checked, setChecked] = useState(false)
  const handleCheck = () => {
    setChecked((v) => !v)
  }
  return (
    <>
      <ListItem>Item</ListItem>
      <ListItem>
        <Icon name="16/Add" /> Add
      </ListItem>
      <ListItem as="a" href="#">
        Normal Link
      </ListItem>
      <ListItem as={CustomLink} href="#">
        Custom Link
      </ListItem>
      <ListItem onClick={handleCheck}>
        Switch
        <div
          style={{
            marginLeft: 'auto',
          }}
        >
          <Switch
            label="hello"
            name="hello"
            onChange={handleCheck}
            checked={checked}
          />
        </div>
      </ListItem>
    </>
  )
}
