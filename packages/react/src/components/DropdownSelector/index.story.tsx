import React, { useState } from 'react'
import DropdownSelector, { DropdownSelectorProps } from '.'
import { Story } from '../../_lib/compat'

export default {
  title: 'DropdownSelector',
  component: DropdownSelector,
}

type Props = Omit<
  DropdownSelectorProps,
  'subLabel' | 'children' | 'onOpenChange'
>
export const Default: Story<Props> = (props: DropdownSelectorProps) => {
  const [selected, setSelected] = useState('50')
  return (
    <div style={{ width: 288 }}>
      <DropdownSelector
        {...props}
        onChange={(o) => setSelected(o.id)}
        value={selected}
        label="label"
        options={[...(Array(100) as undefined[])].map((_, i) => {
          return {
            id: `${i}`,
            label: `label${i}`,
          }
        })}
      ></DropdownSelector>
    </div>
  )
}

Default.args = {
  label: 'Label',
  options: [],
  value: '',
  onChange: () => {
    //
  },
}
