import { createContext, useContext } from 'react'
import * as React from 'react'
import { RadioGroupState } from 'react-stately'

const RadioContext = createContext<RadioGroupState | null>(null)

type RadioProviderProps = React.PropsWithChildren<{
  value: RadioGroupState
}>
export const RadioProvider: React.FC<RadioProviderProps> = ({
  value,
  children,
}) => {
  return <RadioContext.Provider value={value}>{children}</RadioContext.Provider>
}
export const useRadioContext = () => {
  const state = useContext(RadioContext)

  if (state === null)
    throw new Error('`<RadioProvider>` is not likely mounted.')

  return state
}
