import { createContext } from 'react'

type MultiSelectGroupContext = {
  name: string
  selected: string[]
  disabled: boolean
  readonly: boolean
  hasError: boolean
  onChange: ({ value, selected }: { value: string; selected: boolean }) => void
}

export const MultiSelectGroupContext = createContext<MultiSelectGroupContext>({
  name: undefined as never,
  selected: [],
  disabled: false,
  readonly: false,
  hasError: false,
  onChange() {
    throw new Error(
      'Cannot find `onChange()` handler. Perhaps you forgot to wrap it with `<MultiSelectGroup />` ?'
    )
  },
})
