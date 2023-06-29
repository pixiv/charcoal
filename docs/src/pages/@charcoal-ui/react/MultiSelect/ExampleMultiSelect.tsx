import { useState } from 'react'
import { MultiSelect, MultiSelectGroup } from '@charcoal-ui/react'
import styled from 'styled-components'

export const ExampleMultiSelect = () => {
  const [selectedValues, setSelectedValues] = useState<string[]>([])
  return (
    <div>
      <p>selected: [{selectedValues.join(', ')}]</p>
      <StyledMultiSelectGroup
        label="multi-select-1"
        name="multi-select-1"
        onChange={setSelectedValues}
        selected={selectedValues}
      >
        <MultiSelect value="value1">value1</MultiSelect>
        <MultiSelect value="value2">value2</MultiSelect>
        <MultiSelect value="value3">value3</MultiSelect>
      </StyledMultiSelectGroup>
    </div>
  )
}

export const StyledMultiSelectGroup = styled(MultiSelectGroup)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`
