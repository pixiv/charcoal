import { RefObject, createContext } from 'react'
import { MenuItemDescriptor } from './internals/getValuesRecursive'

export type RegisteredMenuItem = MenuItemDescriptor & {
  element: HTMLElement
}

type MenuListContextType = {
  root?: RefObject<HTMLUListElement | null>
  value?: string
  registerItem?: (item: RegisteredMenuItem) => () => void
  getItems: () => RegisteredMenuItem[]
  setValue: (v: string) => void
}

export const MenuListContext = createContext<MenuListContextType>({
  root: undefined,
  value: '',
  getItems: () => [],
  setValue: (_v: string) => {
    // empty
  },
})
