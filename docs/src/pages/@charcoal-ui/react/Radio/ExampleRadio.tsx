import { Radio, RadioGroup } from '@charcoal-ui/react'
import { useState } from 'react'
import styled from 'styled-components'

export const ExampleRadio = () => {
  const [value, setValue] = useState<string>()
  return (
    <div>
      <p>value: {value}</p>
      <StyledRadioGroup
        label="radio"
        name="radio"
        onChange={setValue}
        value={value}
      >
        <Radio value="value1">value1</Radio>
        <Radio value="value2">value2</Radio>
        <Radio value="value3">value3</Radio>
      </StyledRadioGroup>
    </div>
  )
}

export const StyledRadioGroup = styled(RadioGroup)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`
