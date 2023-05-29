import React, { useCallback, useContext } from 'react'
import { handleFocusByKeyBoard } from './internals/handleFocusByKeyBoard'
import { MenuListContext } from '../MenuList/MenuListContext'
import ListItem, { CustomJSXElement, ListItemProps } from '../ListItem'

export type MenuItemProps<T extends CustomJSXElement = never> = {
  value?: string
  disabled?: boolean
} & ListItemProps<T>

export default function MenuItem<T extends CustomJSXElement>(
  props: ListItemProps<T>
) {
  const { setValue, root, values } = useContext(MenuListContext)
  const onSelect = useCallback(() => {
    if (props.value !== undefined) setValue?.(props.value)
  }, [props.value, setValue])
  const { children, as, ...rest } = props

  const hnadleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'Enter') {
        onSelect()
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        // prevent scroll
        e.preventDefault()
        if (!values || props.value === undefined) return
        const index = values.indexOf(props.value)
        if (index === -1) return

        const focusValue =
          e.key === 'ArrowUp'
            ? // prev or last
              index - 1 < 0
              ? values[values.length - 1]
              : values[index - 1]
            : // next or first
            index + 1 >= values.length
            ? values[0]
            : values[index + 1]

        const next = root?.current?.querySelector(`[data-key='${focusValue}']`)

        if (next instanceof HTMLElement) {
          next.focus({ preventScroll: true })
          if (root?.current?.parentElement) {
            handleFocusByKeyBoard(next, root.current.parentElement)
          }
        }
      }
    },
    [onSelect, props.value, root, values]
  )

  return (
    <ListItem
      {...rest}
      as={as as CustomJSXElement}
      data-key={props.value}
      onKeyDown={hnadleKeyDown}
      onClick={props.disabled === true ? undefined : onSelect}
      tabIndex={-1}
      aria-disabled={props.disabled}
    >
      {props.children}
    </ListItem>
  )
}
