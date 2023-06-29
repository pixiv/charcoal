import { useState } from 'react'
import DropdownSelector, { DropdownSelectorProps } from '.'
import { Story } from '../../_lib/compat'
import { Divider } from './Divider'
import MenuItemGroup from './MenuItemGroup'
import DropdownMenuItem from './DropdownMenuItem'

export default {
  title: 'DropdownSelector',
  component: DropdownSelector,
}

const baseProps: DropdownSelectorProps = {
  label: 'Label',
  value: '',
  placeholder: 'placeholder',
  onChange: () => {
    //
  },
  children: <DropdownMenuItem value="item" />,
}

export const Playground: Story<DropdownSelectorProps> = (
  props: DropdownSelectorProps
) => {
  const [selected, setSelected] = useState('50')
  return (
    <div style={{ width: 288 }}>
      <DropdownSelector
        {...props}
        onChange={(value) => {
          setSelected(value)
        }}
        value={selected}
        label="label"
      >
        {[...(Array(100) as undefined[])].map((_, i) => {
          return (
            <DropdownMenuItem key={i} value={i.toString()}>
              {i}
            </DropdownMenuItem>
          )
        })}
      </DropdownSelector>
    </div>
  )
}

Playground.args = { ...baseProps }

export const Basic: Story<DropdownSelectorProps> = (
  props: DropdownSelectorProps
) => {
  const [selected, setSelected] = useState('')
  return (
    <div style={{ width: 288 }}>
      <DropdownSelector
        {...props}
        onChange={(value) => {
          setSelected(value)
        }}
        value={selected}
        label="label"
      >
        <DropdownMenuItem value={'10'}>Apple</DropdownMenuItem>
        <DropdownMenuItem value={'20'}>Banana</DropdownMenuItem>
        <DropdownMenuItem value={'30'}>Orange</DropdownMenuItem>
      </DropdownSelector>
    </div>
  )
}

Basic.args = { ...baseProps }

export const CustomChildren: Story<DropdownSelectorProps> = (
  props: DropdownSelectorProps
) => {
  const [selected, setSelected] = useState('10')
  return (
    <div style={{ width: 288 }}>
      <DropdownSelector
        {...props}
        onChange={(value) => {
          setSelected(value)
        }}
        value={selected}
        label="label"
      >
        <DropdownMenuItem value={'10'}>
          <div
            style={{
              color: 'pink',
              fontWeight: 'bold',
            }}
          >
            Apple
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem value={'20'}>
          <div
            style={{
              color: 'yellowgreen',
              fontStyle: 'italic',
            }}
          >
            Banana
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem value={'30'}>
          <div
            style={{
              color: 'orange',
              fontSize: '24px',
            }}
          >
            Orange
          </div>
        </DropdownMenuItem>
      </DropdownSelector>
    </div>
  )
}

CustomChildren.args = { ...baseProps }

export const SectionList: Story<DropdownSelectorProps> = (
  props: DropdownSelectorProps
) => {
  const [selected, setSelected] = useState('10')
  return (
    <div style={{ width: 288 }}>
      <DropdownSelector
        {...props}
        onChange={(value) => {
          setSelected(value)
        }}
        value={selected}
        label="label"
      >
        <MenuItemGroup text="fruits">
          <DropdownMenuItem value={'10'}>Apple</DropdownMenuItem>
          <DropdownMenuItem value={'20'}>Banana</DropdownMenuItem>
          <DropdownMenuItem value={'30'}>Orange</DropdownMenuItem>
        </MenuItemGroup>
        <Divider />
        <MenuItemGroup text="vehicle">
          <DropdownMenuItem value={'40'}>bicycle</DropdownMenuItem>
          <DropdownMenuItem value={'50'}>car</DropdownMenuItem>
          <DropdownMenuItem value={'60'}>train</DropdownMenuItem>
        </MenuItemGroup>
      </DropdownSelector>
    </div>
  )
}
SectionList.args = { ...baseProps }
