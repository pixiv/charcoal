import { CSSObject, ThemedStyledInterface } from 'styled-components'
import { CharcoalAbstractTheme } from '@charcoal-ui/theme'
import { ArrayOrSingle, isPresent, noThemeProvider, wrapArray } from './util'
import { Internal, toCSSObjects } from './internals'
import createO from './builders/o'
import transition from './builders/transition'
export { default as TokenInjector } from './TokenInjector'
export {
  getThemeSync,
  themeSetter,
  themeSelector,
  prefersColorScheme,
  useTheme,
  useThemeSetter,
  useLocalStorage,
  useMedia,
} from './helper'
export { defineThemeVariables } from './util'
export * from './SetThemeScript'
export * from "./new_builders/createTheme2"

type Blank = null | undefined | false

const nonBlank = <T>(value: T): value is T extends Blank ? never : T =>
  isPresent(value) && (value as unknown) !== false

/**
 * `theme(o => [...])` の `theme` ユーティリティを構築する
 *
 * @param _styled - DEPRECATED: styled-componnets の `styled` そのものを渡すとそれを元に型推論ができる。が、型引数を渡す方が型推論が高速になりやすい
 *
 * @example
 *
 * import styled from 'styled-components'
 * const theme = createTheme(styled)
 *
 * @example
 *
 * const theme = createTheme<DefaultTheme>()
 */
export function createTheme<T extends CharcoalAbstractTheme>(
  _styled?: ThemedStyledInterface<T>
) {
  type Builder = ReturnType<typeof createO<T>>

  // ランタイムの `theme(o => [...])` のインターフェースを構築する
  return function theme(
    specFn: (o: Builder) => ArrayOrSingle<Internal | Blank>
  ): ThemeProp<T> {
    // styled-components のテンプレートに埋め込める関数
    return function interpolate({ theme }) {
      if (!isPresent(theme)) {
        // テーマが入っていない場合は復旧不可能なのでエラーにする
        throw noThemeProvider
      }

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
          specFn(/** o = */ createO(theme))
        ),

        // 必ず挿入される共通のルール
        transition(theme),
      ].filter(nonBlank)

      return toCSSObjects(internals)
    }
  }
}

export type ThemeProp<T> = ({
  theme,
}: {
  theme: T | undefined
}) => CSSObject | CSSObject[]
