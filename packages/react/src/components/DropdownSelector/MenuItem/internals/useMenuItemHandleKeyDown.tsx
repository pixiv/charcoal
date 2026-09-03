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
  value?: string,
  noSelection?: boolean,
  disabled?: boolean,
): [(e: React.KeyboardEvent<HTMLElement>) => void, () => void] {
  const { setValue, setNoSelection, root, propsArray } =
    useContext(MenuListContext)
  const setContextValue = useCallback(() => {
    if (noSelection) setNoSelection?.()
    else if (value !== undefined) setValue(value)
  }, [noSelection, setNoSelection, value, setValue])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLElement>) => {
      if (e.key === 'Enter') {
        if (!disabled) setContextValue()
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        const isForward = e.key === 'ArrowDown'
        // prevent scroll
        e.preventDefault()
        if (!propsArray) return
        const options = Array.from(
          root?.current?.querySelectorAll<HTMLElement>('[role="option"]') ?? [],
        )
        if (options.length === 0) return
        let index = options.indexOf(e.currentTarget)
        if (index === -1) return

        for (let n = 0; n < options.length; n++) {
          index = isForward
            ? (index + 1) % options.length
            : (index - 1 + options.length) % options.length
          const next = options[index]

          if (next instanceof HTMLElement) {
            if (next.ariaDisabled === 'true') {
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
    [disabled, setContextValue, propsArray, root],
  )
  return [handleKeyDown, setContextValue]
}
