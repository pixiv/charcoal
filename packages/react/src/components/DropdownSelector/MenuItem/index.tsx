import {
  ForwardedRef,
  forwardRef,
  useCallback,
  useContext,
  useMemo,
  useRef,
} from 'react'
import { mergeRefs } from '../../../_lib'
import { MenuListContext } from '../MenuList/MenuListContext'
import ListItem, { ListItemProps } from '../ListItem'
import { useMenuItemHandleKeyDown } from './internals/useMenuItemHandleKeyDown'

export type MenuItemProps<T extends React.ElementType = 'li'> = {
  value?: string
  /** Selects the DropdownSelector's unselected state. */
  noSelection?: boolean
  disabled?: boolean
} & ListItemProps<T>

/**
 * 上下キーでフォーカス移動でき、エンターキーで選択できるリストの項目
 * 基本的に`<MenuList>`, `<MenuGroup>`と合わせて使用する
 */
const MenuItem = forwardRef(function MenuItem<
  T extends React.ElementType = 'li',
>(
  { className: _, value, noSelection, disabled, ...props }: MenuItemProps<T>,
  ref: ForwardedRef<HTMLLIElement>,
) {
  const { registerItem } = useContext(MenuListContext)
  const unregisterRef = useRef<(() => void) | undefined>(undefined)
  const registerRef = useCallback(
    (element: HTMLLIElement | null) => {
      unregisterRef.current?.()
      unregisterRef.current = element
        ? registerItem?.({ element, value, noSelection, disabled })
        : undefined
    },
    [registerItem, value, noSelection, disabled],
  )
  const itemRef = useMemo(() => mergeRefs(ref, registerRef), [ref, registerRef])
  const [handleKeyDown, setContextValue] = useMenuItemHandleKeyDown(
    value,
    noSelection,
    disabled,
  )
  const penHandledRef = useRef(false)
  const pointerStartRef = useRef<{ x: number; y: number } | null>(null)

  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLLIElement>) => {
      if (e.pointerType === 'pen') {
        pointerStartRef.current = { x: e.clientX, y: e.clientY }
      }
    },
    [],
  )

  const handlePointerUp = useCallback(
    (e: React.PointerEvent<HTMLLIElement>) => {
      if (e.pointerType !== 'pen' || disabled === true) return
      const start = pointerStartRef.current
      if (!start) return
      const dx = Math.abs(e.clientX - start.x)
      const dy = Math.abs(e.clientY - start.y)
      // タップとドラッグを区別するための許容量
      if (dx > 8 || dy > 8) return
      penHandledRef.current = true
      setContextValue()
    },
    [disabled, setContextValue],
  )

  const handleClick = useCallback(() => {
    if (penHandledRef.current) {
      penHandledRef.current = false
      return
    }
    if (disabled === true) return
    setContextValue()
  }, [disabled, setContextValue])

  return (
    // @ts-expect-error TODO: fix mismatch between MenuItemProps and ListItemProps
    <ListItem
      {...props}
      ref={itemRef}
      data-key={value}
      data-no-selection={noSelection || undefined}
      onKeyDown={handleKeyDown}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onClick={handleClick}
      tabIndex={-1}
      aria-disabled={disabled}
      role="option"
    >
      {props.children}
    </ListItem>
  )
})
export default MenuItem
