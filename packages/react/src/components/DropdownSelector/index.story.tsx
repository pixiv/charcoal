import React, { useState } from 'react'
import DropdownSelector, { DropdownSelectorProps } from '.'
import { Story } from '../../_lib/compat'
import { OptionItem } from './OptionItem'

export default {
  title: 'DropdownSelector',
  component: DropdownSelector,
}

type Props = Omit<
  DropdownSelectorProps,
  'subLabel' | 'children' | 'onOpenChange'
>

const baseProps: DropdownSelectorProps = {
  label: 'Label',
  value: '',
  placeholder: "placeholder",
  onChange: () => {
    //
  },
}

export const Playground: Story<Props> = (props: DropdownSelectorProps) => {
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
            <OptionItem key={i} value={i.toString()}>
              {i}
            </OptionItem>
          )
        })}
      </DropdownSelector>
    </div>
  )
}

Playground.args = { ...baseProps }

export const Basic: Story<Props> = (props: DropdownSelectorProps) => {
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
        <OptionItem value={'10'}>Apple</OptionItem>
        <OptionItem value={'20'}>Banana</OptionItem>
        <OptionItem value={'30'}>Orange</OptionItem>
      </DropdownSelector>
    </div>
  )
}

Basic.args = { ...baseProps }

export const CustomChildren: Story<Props> = (props: DropdownSelectorProps) => {
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
        <OptionItem value={'10'}>
          <div
            style={{
              color: 'pink',
              fontWeight: 'bold',
            }}
          >
            Apple
          </div>
        </OptionItem>
        <OptionItem value={'20'}>
          <div
            style={{
              color: 'yellowgreen',
              fontStyle: 'italic',
            }}
          >
            Banana
          </div>
        </OptionItem>
        <OptionItem value={'30'}>
          <div
            style={{
              color: 'orange',
              fontSize: '24px',
            }}
          >
            Orange
          </div>
        </OptionItem>
      </DropdownSelector>
    </div>
  )
}

CustomChildren.args = { ...baseProps }
