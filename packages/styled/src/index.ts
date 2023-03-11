import { CSSObject, ThemedStyledInterface } from 'styled-components'
import { CharcoalAbstractTheme } from '@charcoal-ui/theme'
import { isPresent, noThemeProvider } from './util'
import { Context, Internal, __DO_NOT_USE_GET_INTERNAL__ } from './internals'
import createO from './builders'
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
 * `theme(o => [...])` の `theme` ユーティリティを構築する
 *
 * @param _styled styled-componnets の `styled` そのもの (型推論のために用いられる)
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
  /**
   * 本当は `type Builder = ReturnType<createO<T>>` みたいな型を作って、それを o の型にしたい。
   * が、styled がつくられた時点の TypeScript ではこういうジェネリクスの使い方ができなかった
   * なので代わりに特に意味のない `createO` の呼び出しをやっている
   */
  const type_O = createO<T>(
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-explicit-any
    {} as any,
    /** DO_NOTHING_IT_IS_JUST_CALLED_FOR_TYPE_INFERENCE = */ true
  )

  type Builder = typeof type_O

  // ランタイムの `theme(o => [...])` のインターフェースを構築する
  return function theme(
    // ユーザー定義
    specFn: (o: Builder) => Blank | Internal | (Blank | Internal)[]
  ): ThemeProp<T> {
    // styled-components のテンプレートに埋め込める関数
    return function interpolate({ theme }) {
      if (!isPresent(theme)) {
        // テーマが入っていない場合は復旧不可能なのでエラーにする
        throw noThemeProvider
      }

      /**
       * こう書いてはいけない
       *
       * ❌
       * ```ts
       * const o = createO(theme)
       * const declaration = spec(o)
       * ```
       *
       * `o` を一時変数に入れてしまうと型 `T` の具象化が行われるので関数合成で書く
       */
      const declaration = specFn(/** o = */ createO(theme))

      // ユーザー定義の配列を整形
      const specDescriptor = [
        ...(Array.isArray(declaration) ? declaration : [declaration]),
        transition(theme),
      ].filter(nonBlank)

      // 1パス目
      // 全ユーザー定義を舐めて相互に影響し合う定義をチェックし、その結果(コンテキスト)を取得
      const context = specDescriptor.reduce<Context>(
        (acc, v) => ({ ...acc, ...__DO_NOT_USE_GET_INTERNAL__(v).context }),
        {}
      )

      // 2パス目
      // コンテキストを見ながら最適化されたCSSを構築
      return specDescriptor.map((v) =>
        __DO_NOT_USE_GET_INTERNAL__(v).toCSS(context)
      )
    }
  }
}

export type ThemeProp<T> = ({
  theme,
}: {
  theme: T | undefined
}) => CSSObject | CSSObject[]
