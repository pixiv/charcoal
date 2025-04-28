import { Context, RefObject, createContext } from 'react'
import { DropdownMenuItemProps } from '../DropdownMenuItem'

type MenuListContextType = {
  root?: RefObject<HTMLUListElement | null>
  value?: string
  propsArray?: DropdownMenuItemProps[]
  setValue: (v: string) => void
}

export const MenuListContext: Context<MenuListContextType> = createContext<MenuListContextType>({
  root: undefined,
  value: '',
  propsArray: [],
  setValue: (_v: string) => {
    // empty
  },
})
