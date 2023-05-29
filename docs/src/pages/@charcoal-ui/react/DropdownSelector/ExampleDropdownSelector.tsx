import { useState } from 'react'
import { DropdownSelector, DropdownMenuItem } from '@charcoal-ui/react'

export const ExampleDropdownSelector = () => {
  const [selected, setSelected] = useState<string>('50')

  return (
    <div style={{ width: '300px' }}>
      <p>selected: {selected}</p>
      <DropdownSelector
        label="dropdown-selector"
        onChange={(value: string) => setSelected(value)}
        value={selected}
      >
        {[...Array(100)].map((_, i) => {
          return (
            <DropdownMenuItem key={i} value={i.toString()}>
              option{i.toString()}
            </DropdownMenuItem>
          )
        })}
      </DropdownSelector>
    </div>
  )
}
