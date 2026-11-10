import { useCallback, useContext } from 'react'
import { handleFocusByKeyBoard } from './handleFocusByKeyBoard'
import { MenuListContext } from '../../MenuList/MenuListContext'

/**
 * MenuListContextに登録された項目間で上下キーでfocusを移動できる
 * EnterキーでMenuListContextに値を設定する
 * 上記2つの処理を含む処理(handleKeyDown)と、Enterキーを押下した処理(setContextValue)を配列で返す
 * @param value 選択したときに設定する値（空文字は未選択状態）
 * @param disabled Enterキーでの選択を無効にするかどうか
 */
export function useMenuItemHandleKeyDown(
  value?: string,
  disabled?: boolean,
): [(e: React.KeyboardEvent<HTMLElement>) => void, () => void] {
  const { setValue, root, getItems } = useContext(MenuListContext)
  const setContextValue = useCallback(() => {
    if (value !== undefined) setValue(value)
  }, [value, setValue])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLElement>) => {
      if (e.key === 'Enter') {
        // 無効項目にプログラムからfocusされた場合も、Enterで選択させない。
        if (!disabled) setContextValue()
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        const isForward = e.key === 'ArrowDown'
        // prevent scroll
        e.preventDefault()
        // 従来のvalue配列のfilterでは空文字やvalueなしの項目が除外されるため、
        // 各MenuItemがrefで登録した要素を使う。getItemsはグループ内も含め
        // DOM順に返すので、通常の項目の移動順を保ちつつvalueなしの項目も移動できる。
        const options = getItems()
        if (options.length === 0) return
        // valueではなくイベント元の要素で位置を特定し、valueなしの項目も区別する。
        let index = options.findIndex(
          (item) => item.element === e.currentTarget,
        )
        if (index === -1) return

        // 従来どおり末尾・先頭で折り返し、無効項目を飛ばす。
        // 最大1周で探索を終え、全項目が無効でも無限ループしない。
        for (let n = 0; n < options.length; n++) {
          index = isForward
            ? (index + 1) % options.length
            : (index - 1 + options.length) % options.length
          const { element: next, disabled: nextDisabled } = options[index]

          if (next instanceof HTMLElement) {
            // DOMのaria-disabledを読み直す代わりに、refと一緒に登録されたpropsで判断する。
            if (nextDisabled) {
              continue
            }
            // 要素の取得方法だけを変え、focusとメニュー内のスクロール調整は従来どおり行う。
            next.focus({ preventScroll: true })
            if (root?.current?.parentElement) {
              handleFocusByKeyBoard(next, root.current.parentElement)
            }
            break
          }
        }
      }
    },
    [disabled, setContextValue, getItems, root],
  )
  return [handleKeyDown, setContextValue]
}
