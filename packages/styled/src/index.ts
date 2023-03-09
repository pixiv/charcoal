import { CSSObject, ThemedStyledInterface } from 'styled-components'
import {
  factory,
  modifiedFactory,
  constFactory,
  modifiedArgumentedFactory,
} from './builders/lib'
import { CharcoalAbstractTheme } from '@charcoal-ui/theme'
import { objectAssign, objectKeys, isPresent, noThemeProvider } from './util'
import { dur } from '@charcoal-ui/utils'
import {
  Context,
  Internal,
  internal,
  TRANSITION_DURATION,
  __DO_NOT_USE_GET_INTERNAL__,
} from './builders/internal'
import colors from './builders/colors'
import typography from './builders/typography'
import {
  createSpacingCss,
  spacingDirections,
  spacingProperties,
} from './builders/spacing'
import { createOutlineColorCss, outlineType } from './builders/outline'
import { createBorderCss, borderDirections } from './builders/border'
import {
  createFixedColumnCss,
  createFixedPxCss,
  createFixedRelativeCss,
  fixedProperties,
} from './builders/size'
import { createBorderRadiusCss } from './builders/borderRadius'
import { createElementEffectCss } from './builders/elementEffect'
export { type Modified, type ModifiedArgumented } from './builders/lib'
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

/**
 * `theme(o => [...])` の `o` の部分を構築する
 *
 * @param theme テーマオブジェクト
 * @param isPhantom 型推論のためだけに使う場合にランタイムコストをゼロにするフラグ
 */
function builder<T extends CharcoalAbstractTheme>(
  theme: {
    // factoryの第二引数に入れ込むものだけ明示的に型変数を展開しておくことで型の具象化を遅延する
    color: T['color']
    gradientColor: T['gradientColor']
    border: T['border']
    outline: T['outline']
  } & Omit<T, 'color' | 'gradientColor' | 'border' | 'outline'>,
  isPhantom = false
) {
  if (isPhantom) {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return {} as never
  }

  // スペーシング
  const spacingCss = createSpacingCss(theme)
  const spacingObject = factory({}, spacingProperties, (spacingProperty) =>
    modifiedArgumentedFactory(
      spacingDirections,
      (modifiers) => spacingCss(spacingProperty, modifiers),
      {} as keyof T['spacing'] | 'auto' // 推論のためのメタタイプ
    )
  )

  // 大きさ
  const fixedPxCss = createFixedPxCss(theme)
  const fixedColumnCss = createFixedColumnCss(theme)
  const fixedRelativeCss = createFixedRelativeCss(theme)
  const fixedObject = factory({}, fixedProperties, (property) =>
    constFactory(
      {},
      {
        px: (size: keyof T['spacing'] | 'auto') => fixedPxCss(property, size),
        column: (span: number) => fixedColumnCss(property, span),
        auto: fixedRelativeCss(property, 'auto'),
        full: fixedRelativeCss(property, '100%'),
      }
    )
  )

  // 要素へのエフェクト (etc: 透過)
  const elementEffectCss = createElementEffectCss(theme)
  const elementEffectObject = modifiedFactory(
    objectKeys(theme.elementEffect),
    (modifiers) => elementEffectCss(modifiers)
  )

  // ボーダー
  const borderCss = createBorderCss(theme)
  const borderObject = constFactory(
    {},
    {
      border: factory({}, objectKeys(theme.border), (variant) =>
        modifiedFactory(borderDirections, (modifiers) =>
          borderCss(variant, modifiers)
        )
      ),
    }
  )

  // 角丸
  const borderRadiusCss = createBorderRadiusCss(theme)
  const borderRadiusObject = constFactory(
    {},
    {
      borderRadius: (radius: keyof T['borderRadius']) =>
        borderRadiusCss(radius),
    }
  )

  // アウトライン
  const outlineCss = createOutlineColorCss(theme)
  const outlineObject = constFactory(
    {},
    {
      outline: factory({}, objectKeys(theme.outline), (variant) =>
        modifiedFactory(outlineType, (modifiers) =>
          outlineCss(variant, modifiers)
        )
      ),
    }
  )

  return objectAssign(
    colors(theme),
    typography(theme),
    spacingObject,
    fixedObject,
    elementEffectObject,
    borderObject,
    borderRadiusObject,
    outlineObject
  )
}

const commonSpec = (_theme: unknown): Internal => {
  const duration = dur(TRANSITION_DURATION)
  const transition = (property: string[]) => ({
    transition: property.map((v) => `${duration} ${v}`).join(', '),
  })
  return internal(
    ({
      colorTransition = false,
      backgroundColorTransition = false,
      boxShadowTransition = false,
    }) =>
      transition(
        [
          colorTransition ? 'color' : null,
          backgroundColorTransition ? 'background-color' : null,
          boxShadowTransition ? 'box-shadow' : null,
        ].filter(isPresent)
      )
  )
}

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
      if (!isPresent(theme)) {
        // テーマが入っていない場合は復旧不可能なのでエラーにする
        throw noThemeProvider
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
      const context = specDescriptor.reduce<Context>(
        (acc, v) => ({ ...acc, ...__DO_NOT_USE_GET_INTERNAL__(v).context }),
        {}
      )
      // 2パス目
      // コンテキストを見ながら最適化されたCSSを構築
      return specDescriptor.map((v) =>
        __DO_NOT_USE_GET_INTERNAL__(v).operation(context)
      )
    }
}

export type ThemeProp<T> = ({
  theme,
}: {
  theme: T | undefined
}) => CSSObject | CSSObject[]
