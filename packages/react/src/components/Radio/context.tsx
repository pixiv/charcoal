import { createContext, useContext } from 'react'
import { RadioGroupState } from 'react-stately'
import type { ReactNode, FC } from 'react'

const Context = createContext<RadioGroupState | null>(null)

type Props = {
  children?: ReactNode
  value: RadioGroupState
}
export const RadioGroupProvider: FC<Props> = ({ children, value }) => {
  return <Context.Provider value={value}>{children}</Context.Provider>
}

export const useRadioGroupContext = (): RadioGroupState => {
  const context = useContext(Context)
  if (context === null) {
    throw new Error('Perhaps you forgot to wrap with <RadioGroup>')
  }

  return context
}
