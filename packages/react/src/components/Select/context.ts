import { createContext } from 'react'

type SelectGroupContext = {
  name: string
  selected: string[]
  disabled: boolean
  readonly: boolean
  hasError: boolean
  onChange: ({ value, selected }: { value: string; selected: boolean }) => void
}

export const SelectGroupContext = createContext<SelectGroupContext>({
  name: undefined as never,
  selected: [],
  disabled: false,
  readonly: false,
  hasError: false,
  onChange() {
    throw new Error(
      'Cannot find `onChange()` handler. Perhaps you forgot to wrap it with `<SelectGroup />` ?'
    )
  },
})
