import { CharcoalAbstractTheme } from '@charcoal-ui/theme'
import { CSSObject } from 'styled-components'
import createO from './builders/o'
import transition from './builders/transition'
import { Internal, toCSSObjects } from './internals'
import { ThemeMap } from './TokenInjector'
import { ArrayOrSingle, isPresent, wrapArray } from './util'

type Blank = null | undefined | false

const nonBlank = <T>(value: T): value is T extends Blank ? never : T =>
  isPresent(value) && (value as unknown) !== false

export function CANARY__createTheme<T extends CharcoalAbstractTheme>(
  themeMap: ThemeMap<T>
) {
  type Builder = ReturnType<typeof createO<T>>
  type SpecFunction = (o: Builder) => ArrayOrSingle<Internal | Blank>

  const defaultTheme = themeMap[':root']
  if (!isPresent(defaultTheme)) {
    throw new Error(':root does not exist')
  }

  const theme = (specFn: SpecFunction): ArrayOrSingle<CSSObject> => {
    const internals = [
      // ユーザーが定義したルール
      ...wrapArray(
        /**
         * こう書いてはいけない
         *
         * ❌
         * ```ts
         * const o = createO(theme)
         * const declaration = spec(o)
         * ```
         *
         * `o` を一時変数に入れてしまうと型 `T` の具象化が行われるので関数内に書く
         */
        specFn(/** o = */ createO(defaultTheme))
      ),

      // 必ず挿入される共通のルール
      transition(defaultTheme),
    ].filter(nonBlank)

    const css = toCSSObjects(internals)

    return css
  }

  return theme
}
