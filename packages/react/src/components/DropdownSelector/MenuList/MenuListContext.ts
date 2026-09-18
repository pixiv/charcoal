import { RefObject, createContext } from 'react'
import { MenuItemDescriptor } from './internals/getValuesRecursive'

type MenuListContextType = {
  root?: RefObject<HTMLUListElement | null>
  value?: string
  propsArray?: MenuItemDescriptor[]
  setValue: (v: string) => void
  setNoSelection?: () => void
}

export const MenuListContext = createContext<MenuListContextType>({
  root: undefined,
  value: '',
  propsArray: [],
  setValue: (_v: string) => {
    // empty
  },
  setNoSelection: undefined,
})
