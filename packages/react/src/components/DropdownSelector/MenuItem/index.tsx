import { ElementType, ForwardedRef, forwardRef, ForwardRefExoticComponent, JSX, RefAttributes } from 'react'
import ListItem, { ListItemProps } from '../ListItem'
import { useMenuItemHandleKeyDown } from './internals/useMenuItemHandleKeyDown'

export type MenuItemProps<T extends React.ElementType = 'li'> = {
  value?: string
  disabled?: boolean
} & ListItemProps<T>

/**
 * 上下キーでフォーカス移動でき、エンターキーで選択できるリストの項目
 * 基本的に`<MenuList>`, `<MenuGroup>`と合わせて使用する
 */
const MenuItem: ForwardRefExoticComponent<Omit<MenuItemProps<ElementType<any, keyof JSX.IntrinsicElements>>, "ref"> & RefAttributes<HTMLLIElement>> = forwardRef(function MenuItem<
  T extends React.ElementType = 'li'
>(
  { className, value, disabled, ...props }: MenuItemProps<T>,
  ref: ForwardedRef<HTMLLIElement>
) {
  const [handleKeyDown, setContextValue] = useMenuItemHandleKeyDown(value)
  return (
    <ListItem
      {...props}
      ref={ref}
      data-key={value}
      onKeyDown={handleKeyDown}
      onClick={disabled === true ? undefined : setContextValue}
      tabIndex={-1}
      aria-disabled={disabled}
      role="option"
    >
      {props.children}
    </ListItem>
  )
})
export default MenuItem
