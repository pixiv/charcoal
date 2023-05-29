import React, { useState } from 'react'
import { Story } from '../../../_lib/compat'
import Icon from '../../Icon'
import Switch from '../../Switch'
import ListItem, { ListItemProps } from '.'

export default {
  title: 'ListItem',
  component: ListItem,
}

export const Basic: Story<ListItemProps> = () => {
  const [checked, setChecked] = useState(false)
  const handleCheck = () => {
    setChecked((v) => !v)
  }
  return (
    <>
      <ListItem>Hoge</ListItem>
      <ListItem>
        <Icon name="16/Add" />
        Add
      </ListItem>
      <ListItem>
        <Icon name="16/Add" />
        <h1>Hello</h1>
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
