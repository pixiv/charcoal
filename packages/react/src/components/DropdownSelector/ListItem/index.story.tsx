import React, { useState } from 'react'
import Icon from '../../Icon'
import Switch from '../../Switch'
import ListItem from '.'
import { Meta, StoryObj } from '@storybook/react-webpack5'

export default {
  title: 'react/internals/ListItem',
  component: ListItem,
} as Meta<typeof ListItem>

const CustomLink = (props: Omit<React.ComponentProps<'a'>, 'style'>) => {
  return (
    <a
      style={{
        color: 'red',
      }}
      {...props}
    />
  )
}

const BasicRender = () => {
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

export const Basic: StoryObj<typeof ListItem> = {
  render: BasicRender,
}
