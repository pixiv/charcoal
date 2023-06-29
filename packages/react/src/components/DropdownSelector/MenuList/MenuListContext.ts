import { RefObject, createContext } from 'react'

type MenuListContextType = {
  root?: RefObject<HTMLUListElement>
  value?: string
  values?: string[]
  setValue: (v: string) => void
}

export const MenuListContext = createContext<MenuListContextType>({
  root: undefined,
  value: '',
  values: [],
  setValue: (_v: string) => {
    // empty
  },
})
