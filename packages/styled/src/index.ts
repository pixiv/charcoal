import { CSSObject, styled } from 'styled-components'
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

type Blank = null | undefined | false

const nonBlank = <T>(value: T): value is T extends Blank ? never : T =>
  isPresent(value) && (value as unknown) !== false

/**
 * @deprecated
 * 実行時のパフォーマンスが低い問題があります。
 * ref. https://github.com/pixiv/charcoal/pull/377
 *
 * styled-components の theming 方法を推奨します。
 * ref. https://styled-components.com/docs/advanced#theming
 *
 * `theme(o => [...])` の `theme` ユーティリティを構築する
 *
 * @param _styled - DEPRECATED: styled-components の `styled` そのものを渡すとそれを元に型推論ができる。が、型引数を渡す方が型推論が高速になりやすい
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
export function createTheme<T extends CharcoalAbstractTheme>(_?: unknown) {
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

export { focusVisibleFocusRingCss } from './styles/focusVisibleFocusRingCss'
export { disabledCss } from './styles/disabledCss'
export { assertiveRingCss } from './styles/assertiveRingCss'
export type { CharcoalThemeUtils } from './utils/CharcoalStyledTheme'
export { addThemeUtils } from './utils/addThemeUtils'

const a = styled.div`
  ${({ theme }) => [theme.border.default]}
`
