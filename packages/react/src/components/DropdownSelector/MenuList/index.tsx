import './index.css'

import { useCallback, useEffect, useMemo, useRef } from 'react'
import warning from 'warning'
import { MenuListContext, RegisteredMenuItem } from './MenuListContext'
import { getValuesRecursive } from './internals/getValuesRecursive'
import MenuItem from '../MenuItem'
import { Divider } from '../Divider'
import MenuItemGroup from '../MenuItemGroup'

type MenuListChild = React.ReactElement<
  typeof MenuItem | typeof MenuItemGroup | typeof Divider
>

export type MenuListChildren = MenuListChild | MenuListChild[]

export type MenuListProps = {
  children: MenuListChildren
  value?: string
  onChange?: (v: string) => void
  onNoSelection?: () => void
  autoFocus?: boolean
}

export default function MenuList(props: MenuListProps) {
  const root = useRef(null)
  const items = useRef(new Map<HTMLElement, RegisteredMenuItem>())
  const registerItem = useCallback((item: RegisteredMenuItem) => {
    items.current.set(item.element, item)
    return () => {
      items.current.delete(item.element)
    }
  }, [])
  const getItems = useCallback(
    () =>
      Array.from(items.current.values()).sort((a, b) =>
        a.element.compareDocumentPosition(b.element) &
        Node.DOCUMENT_POSITION_FOLLOWING
          ? -1
          : 1,
      ),
    [],
  )

  useEffect(() => {
    if (!props.autoFocus) return
    const enabledItems = getItems().filter((item) => !item.disabled)
    const selectedItem = enabledItems.find((item) =>
      props.value === ''
        ? item.noSelection === true
        : item.noSelection !== true && item.value === props.value,
    )
    if (selectedItem) {
      // windowのスクロールを維持したまま選択肢をPopoverの中心に表示する
      const { scrollX, scrollY } = window
      selectedItem.element.focus()
      window.scrollTo(scrollX, scrollY)
    } else {
      enabledItems[0]?.element.focus()
    }
  }, [props.autoFocus, props.value, getItems])

  const propsArray = useMemo(
    () => getValuesRecursive(props.children),
    [props.children],
  )

  if (process.env.NODE_ENV !== 'production') {
    const noSelectionItems = propsArray.filter((item) => item.noSelection)
    warning(
      noSelectionItems.length <= 1,
      '`noSelection` can only be specified on one DropdownMenuItem.',
    )
    warning(
      propsArray.every(
        (item) =>
          item.noSelection || item.value === undefined || item.value !== '',
      ),
      'An empty string `value` is not supported. Use `noSelection` instead.',
    )
    warning(
      noSelectionItems.every((item) => item.value === undefined),
      '`noSelection` and `value` cannot be used together.',
    )
  }

  return (
    <ul className="charcoal-menu-list" ref={root}>
      <MenuListContext.Provider
        value={{
          value: props.value ?? '',
          root,
          registerItem,
          getItems,
          setValue: (v) => {
            props.onChange?.(v)
          },
          setNoSelection: props.onNoSelection,
        }}
      >
        {props.children}
      </MenuListContext.Provider>
    </ul>
  )
}
