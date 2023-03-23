import { useState } from 'react'
import { DropdownSelector, DropdownSelectorItem } from '@charcoal-ui/react'

export const ExampleDropdownSelector = () => {
  const [selected, setSelected] = useState<string>('option1')
  return (
    <div>
      <p>selected: {selected}</p>
      <DropdownSelector
        label="dropdown-selector"
        onChange={(k) => setSelected(k.toString())}
        value={selected}
      >
        <DropdownSelectorItem key={'option1'}>Option1</DropdownSelectorItem>
        <DropdownSelectorItem key={'option2'}>Option2</DropdownSelectorItem>
        <DropdownSelectorItem key={'option3'}>Option3</DropdownSelectorItem>
      </DropdownSelector>
    </div>
  )
}
