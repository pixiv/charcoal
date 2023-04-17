import { useState } from 'react'
import { DropdownSelector, OptionItem } from '@charcoal-ui/react'

export const ExampleDropdownSelector = () => {
  const [selected, setSelected] = useState<string>('50')

  return (
    <div style={{ width: '300px' }}>
      <p>selected: {selected}</p>
      <DropdownSelector
        label="dropdown-selector"
        onChange={(value) => setSelected(value)}
        value={selected}
      >
        {[...Array(100)].map((_, i) => {
          return (
            <OptionItem key={i} value={i.toString()}>
              option{i.toString()}
            </OptionItem>
          )
        })}
      </DropdownSelector>
    </div>
  )
}
