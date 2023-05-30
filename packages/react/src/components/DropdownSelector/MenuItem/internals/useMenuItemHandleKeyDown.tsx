import React, { useCallback, useContext } from 'react'
import { handleFocusByKeyBoard } from './handleFocusByKeyBoard'
import { MenuListContext } from '../../MenuList/MenuListContext'

/**
 * MenuListContextに含まれるvalue間で上下キーでfocusを移動できる
 * EnterキーでMenuListContextに値を設定する
 * 上記2つの処理を含む処理(handleKeyDown)と、Enterキーを押下した処理(setContextValue)を配列で返す
 * @param value
 * @returns
 */
export function useMenuItemHandleKeyDown(
  value?: string
): [(e: React.KeyboardEvent<HTMLDivElement>) => void, () => void] {
  const { setValue, root, values } = useContext(MenuListContext)
  const setContextValue = useCallback(() => {
    if (value !== undefined) setValue?.(value)
  }, [value, setValue])

  const hnadleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'Enter') {
        setContextValue()
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        // prevent scroll
        e.preventDefault()
        if (!values || value === undefined) return
        const index = values.indexOf(value)
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
    [setContextValue, value, root, values]
  )
  return [hnadleKeyDown, setContextValue]
}
