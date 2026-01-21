import * as React from 'react'

export interface RadioGroupContext {
  name: string
  selected?: string
  disabled: boolean
  readonly: boolean
  invalid: boolean
  onChange: (next: string) => void
}

export const RadioGroupContext = React.createContext<RadioGroupContext>({
  name: undefined as never,
  selected: undefined,
  disabled: false,
  readonly: false,
  invalid: false,
  onChange() {
    throw new Error(
      'Cannot find onChange() handler. Perhaps you forgot to wrap with <RadioGroup> ?'
    )
  },
})
