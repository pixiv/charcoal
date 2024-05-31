import { useCallback, useContext } from 'react'
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
): [(e: React.KeyboardEvent<HTMLElement>) => void, () => void] {
  const { setValue, root, propsArray } = useContext(MenuListContext)
  const setContextValue = useCallback(() => {
    if (value !== undefined) setValue(value)
  }, [value, setValue])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLElement>) => {
      if (e.key === 'Enter') {
        setContextValue()
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        const isForward = e.key === 'ArrowDown'
        // prevent scroll
        e.preventDefault()
        if (!propsArray || value === undefined) return
        const values = propsArray
          .map((props) => props.value)
          .filter((v) => v) as string[]
        let index = values.indexOf(value)
        if (index === -1) return

        for (let n = 0; n < values.length; n++) {
          const focusValue = isForward
            ? // prev or last
              index + 1 >= values.length
              ? values[0]
              : values[index + 1]
            : // next or first
            index - 1 < 0
            ? values[values.length - 1]
            : values[index - 1]
          const next = root?.current?.querySelector(
            `[data-key='${focusValue}']`
          )

          if (next instanceof HTMLElement) {
            if (next.ariaDisabled === 'true') {
              index += isForward ? 1 : -1
              continue
            }
            next.focus({ preventScroll: true })
            if (root?.current?.parentElement) {
              handleFocusByKeyBoard(next, root.current.parentElement)
            }
            break
          }
        }
      }
    },
    [setContextValue, propsArray, value, root]
  )
  return [handleKeyDown, setContextValue]
}
