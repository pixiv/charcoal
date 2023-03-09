import { CharcoalAbstractTheme } from '@charcoal-ui/theme'
import { CSSObject, ThemedStyledInterface } from 'styled-components'

import { builder } from './builder'
import { commonSpec } from './builders/common'
import { Context } from './context'
import {
  Internal,
  __DO_NOT_USE_GET_INTERNAL__ as getInternal,
} from './internal'
import { Blank, nonBlank } from './util'

export type ThemeProp<T> = ({
  theme,
}: {
  theme: T | undefined
}) => CSSObject | CSSObject[]

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
  // `theme(o => [...])` の `o` の部分の型推論のためだけに使う意味のない変数
  // Tを型変数のまま渡してcreateThemeが呼ばれるまで型の具象化が行われないようにする
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-explicit-any
  const _phantomBuilder = builder<T>({} as any, true)
  // ランタイムの `theme(o => [...])` のインターフェースを構築する
  return (
      // ユーザー定義
      spec: (
        o: typeof _phantomBuilder
      ) => Blank | Internal | (Blank | Internal)[]
    ): ThemeProp<T> =>
    ({ theme }) => {
      if (theme == null) {
        // テーマが入っていない場合は復旧不可能なのでエラーにする
        throw new Error(
          '`theme` is invalid. `<ThemeProvider>` is not likely mounted.'
        )
      }
      // styled-componentsのランタイムから受け取ったthemeオブジェクトをbuilderに食わせて`o`をつくる
      // さらに、ユーザー定義にbuilderが構築した`o`を食わせる
      // (`o`を一時変数に入れてしまうと型Tの具象化が行われるので関数合成を優先する)
      const rawSpecDescriptor = spec(builder(theme))
      // ユーザー定義の配列を整形
      const specDescriptor = [
        ...(Array.isArray(rawSpecDescriptor)
          ? rawSpecDescriptor
          : [rawSpecDescriptor]),
        commonSpec(theme),
      ].filter(nonBlank)

      // 1パス目
      // 全ユーザー定義を舐めて相互に影響し合う定義をチェックし、その結果(コンテキスト)を取得
      const context = specDescriptor.reduce(
        (acc, v) => ({ ...acc, ...getInternal(v).context }),
        {} as Context
      )
      // 2パス目
      // コンテキストを見ながら最適化されたCSSを構築
      return specDescriptor.map((v) => getInternal(v).operation(context))
    }
}
