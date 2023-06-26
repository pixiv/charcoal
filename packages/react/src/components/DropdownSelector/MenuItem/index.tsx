import ListItem, { CustomJSXElement, ListItemProps } from '../ListItem'
import { useMenuItemHandleKeyDown } from './internals/useMenuItemHandleKeyDown'

export type MenuItemProps<T extends CustomJSXElement = never> = {
  value?: string
  disabled?: boolean
} & ListItemProps<T>

/**
 * 上下キーでフォーカス移動でき、エンターキーで選択できるリストの項目
 * 基本的に`<MenuList>`, `<MenuGroup>`と合わせて使用する
 */
export default function MenuItem<T extends CustomJSXElement>(
  props: MenuItemProps<T>
) {
  const { children, as, ...rest } = props
  const [handleKeyDown, setContextValue] = useMenuItemHandleKeyDown(props.value)
  return (
    <ListItem
      {...rest}
      as={as as CustomJSXElement}
      data-key={props.value}
      onKeyDown={handleKeyDown}
      onClick={props.disabled === true ? undefined : setContextValue}
      tabIndex={-1}
      aria-disabled={props.disabled}
    >
      {props.children}
    </ListItem>
  )
}
