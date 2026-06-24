import { ForwardedRef, forwardRef, useRef } from 'react'
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
const MenuItem = forwardRef(function MenuItem<
  T extends React.ElementType = 'li',
>(
  { className: _, value, disabled, ...props }: MenuItemProps<T>,
  ref: ForwardedRef<HTMLLIElement>,
) {
  const [handleKeyDown, setContextValue] = useMenuItemHandleKeyDown(value)
  const penHandledRef = useRef(false)
  const pointerStartRef = useRef<{ x: number; y: number } | null>(null)
  return (
    // @ts-expect-error TODO: fix mismatch between MenuItemProps and ListItemProps
    <ListItem
      {...props}
      ref={ref}
      data-key={value}
      onKeyDown={handleKeyDown}
      onPointerDown={(e: React.PointerEvent<HTMLLIElement>) => {
        if (e.pointerType === 'pen') {
          pointerStartRef.current = { x: e.clientX, y: e.clientY }
        }
      }}
      onPointerUp={(e: React.PointerEvent<HTMLLIElement>) => {
        if (e.pointerType !== 'pen' || disabled === true) return
        const start = pointerStartRef.current
        if (!start) return
        const dx = Math.abs(e.clientX - start.x)
        const dy = Math.abs(e.clientY - start.y)
        if (dx > 8 || dy > 8) return
        penHandledRef.current = true
        setContextValue()
      }}
      onClick={() => {
        if (penHandledRef.current) {
          penHandledRef.current = false
          return
        }
        if (disabled === true) return
        setContextValue()
      }}
      tabIndex={-1}
      aria-disabled={disabled}
      role="option"
    >
      {props.children}
    </ListItem>
  )
})
export default MenuItem
