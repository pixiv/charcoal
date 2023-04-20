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

type Blank = null | undefined | false

const nonBlank = <T>(value: T): value is T extends Blank ? never : T =>
  isPresent(value) && (value as unknown) !== false

/**
 * `theme(o => [...])` の `theme` ユーティリティを構築する
 *
 * @param _styled - DEPRECATED: styled-componnets の `styled` そのものを渡すとそれを元に型推論ができる。が、型引数を渡す方が型推論が高速になりやすい
 * @param experimental___CACHE_MODE - キャッシュモードを有効にする。有効になっていた場合、同じ specFn に対してはキャッシュ済の CSSObject を返す
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
export function createTheme<
  T extends CharcoalAbstractTheme,
  EnableCache extends boolean = false
>(
  _styled?: ThemedStyledInterface<T>,
  experimental___CACHE_MODE = false as EnableCache
) {
  type Builder = ReturnType<typeof createO<T>>
  type SpecFunction = (o: Builder) => ArrayOrSingle<Internal | Blank>

  type ThemeFunction = EnableCache extends true
    ? (specFn: SpecFunction, cacheKeys: unknown[]) => ThemeProp<T>
    : (specFn: SpecFunction) => ThemeProp<T>

  /**
   * theme(...) に渡している関数の参照が全く同じで、中で使用している cacheKeys が同じならキャッシュできるはず
   */
  const caches = new WeakMap<
    SpecFunction,
    {
      cacheKeys: unknown[]
      theme: T
      css: CSSObject | CSSObject[]
    }
  >()

  /**
   * ランタイムの `theme(o => [...])` のインターフェースを構築する
   *
   * @param {SpecFunction} specFn - o を引数に受け取る関数。スタイリングの定義
   * @param {unknown[]} cacheKeys - 依存の値を配列で渡す（ useMemo の deps とか、react-query の keys とかと同じ ）。これは createTheme で experimental___CACHE_MODE を渡したときは必須。
   *
   * cacheKeys の中の値が1つでも変わったら、theme(o => ...) の関数を再評価する（ 変更がなければキャッシュが使われる ）
   *
   * @example
   * ```ts
   * // メソッドチェーンを書く
   * theme(o => o.bg.background1.hover, [])
   *
   * // 配列もかける
   * theme(o => [o.bg.background1.hover, o.font.text1], [])
   *
   * // 条件分岐があるときは cacheKeys を書く
   * theme(o => [
   *   o.bg.background1.hover,
   *   condition ? o.font.text1 : o.font.text2
   * ], [condition])
   * ```
   */
  const theme = (
    specFn: SpecFunction,
    cacheKeys: unknown[] = []
  ): ThemeProp<T> => {
    // styled-components のテンプレートに埋め込める関数
    return function interpolate({ theme }) {
      if (!isPresent(theme)) {
        // テーマが入っていない場合は復旧不可能なのでエラーにする
        throw noThemeProvider
      }

      if (experimental___CACHE_MODE) {
        const cachedResult = caches.get(specFn)

        if (
          cachedResult &&
          objectsAre(cachedResult.cacheKeys, cacheKeys) &&
          Object.is(cachedResult.theme, theme)
        ) {
          return cachedResult.css
        }
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

      const css = toCSSObjects(internals)
      caches.set(specFn, { css, theme, cacheKeys })

      return css
    }
  }

  return theme as ThemeFunction
}

/**
 * 配列のすべての要素が同一値であるかを判定する
 *
 * `theme(o => [], [...])` の deps が変化していないことを判定するのに使う
 *
 * React の useEffect の第2引数とやりたいことは同じなので、`Object.is()` で比較する
 */
function objectsAre(previous: unknown[], current: unknown[]) {
  if (current.length === 0 || previous.length === 0) {
    return true
  }

  const changed = previous.some((dep, index) => !Object.is(dep, current[index]))
  if (!changed) {
    return true
  }

  return false
}

export type ThemeProp<T> = ({
  theme,
}: {
  theme: T | undefined
}) => CSSObject | CSSObject[]
