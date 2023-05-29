import React, { useState } from 'react'
import { Story } from '../../../_lib/compat'
import MenuItem, { MenuItemProps } from '.'
import Icon from '../../Icon'
import Switch from '../../Switch'

export default {
  title: 'MenuItem',
  component: MenuItem,
}

export const Basic: Story<MenuItemProps> = () => {
  const [checked, setChecked] = useState(false)
  const handleCheck = () => {
    setChecked((v) => !v)
  }
  return (
    <>
      <MenuItem>Hoge</MenuItem>
      <MenuItem>
        <Icon name="16/Add" />
        <h1>Hello</h1>
      </MenuItem>
      <MenuItem onClick={handleCheck}>
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
      </MenuItem>
    </>
  )
}
