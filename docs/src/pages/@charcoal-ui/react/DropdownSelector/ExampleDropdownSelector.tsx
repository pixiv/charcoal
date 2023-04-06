import { useState } from 'react'
import { DropdownSelector, DropdownSelectorOption } from '@charcoal-ui/react'

export const ExampleDropdownSelector = () => {
  const [selected, setSelected] = useState<string>('option1')
  const options: DropdownSelectorOption[] = [...Array(100)].map((_, i) => {
    return {
      id: `option${i + 1}`,
      label: `option${i + 1}`,
    }
  })
  return (
    <div style={{ width: '300px' }}>
      <p>selected: {selected}</p>
      <DropdownSelector
        label="dropdown-selector"
        onChange={(k) => setSelected(k.id)}
        value={selected}
        options={options}
      ></DropdownSelector>
    </div>
  )
}
