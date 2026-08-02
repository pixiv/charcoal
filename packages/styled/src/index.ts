import type { CSSObject, DefaultTheme } from 'styled-components'
import type { CharcoalAbstractTheme, CharcoalTheme } from '@charcoal-ui/theme'
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
  makeSetThemeScriptCode,
  SetThemeScript,
} from '@charcoal-ui/react'
export { defineThemeVariables } from './util'
export { removeHalfLeadingCss } from './utils/typographyCss'

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
 * @param _styled - DEPRECATED: 実行時には元々使われていない引数。以前は
 *   styled-components の `styled` を渡すと `T` を型推論できたが、この推論は
 *   `ThemedStyledInterface` (全 HTML タグ × ThemedStyledFunction) の変性計算と
 *   インスタンス化を誘発し、呼び出し側リポジトリの型検査を極端に遅くするため
 *   現在は型レベルでも無視される。`T` は既定で `DefaultTheme`
 *   (module augmentation 済みの場合) に解決される
 *
 * @example
 *
 * import styled from 'styled-components'
 * const theme = createTheme(styled) // T = DefaultTheme (引数は無視される)
 *
 * @example
 *
 * const theme = createTheme<DefaultTheme>()
 */
export function createTheme<
  // DefaultTheme が CharcoalAbstractTheme を満たすように augment されていればそれを、
  // されていなければ charcoal 標準の CharcoalTheme を既定にする
  T extends CharcoalAbstractTheme = DefaultTheme extends CharcoalAbstractTheme
    ? DefaultTheme
    : CharcoalTheme,
>(_styled?: unknown) {
  type Builder = ReturnType<typeof createO<T>>

  // ランタイムの `theme(o => [...])` のインターフェースを構築する
  return function theme(
    specFn: (o: Builder) => ArrayOrSingle<Internal | Blank>,
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
          specFn(/** o = */ createO(theme)),
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
