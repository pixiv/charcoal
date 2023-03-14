import {
  applyEffect,
  customPropertyToken,
  disabledSelector,
  filterObject,
  flatMapObject,
  notDisabledSelector,
} from '@charcoal-ui/utils'
import { CharcoalAbstractTheme, EffectType, Key } from '@charcoal-ui/theme'
import { CSSObject } from 'styled-components'

/**
 * Function used to assert a given code path is unreachable
 */
export function unreachable(): never
/**
 * Function used to assert a given code path is unreachable.
 * Very useful for ensuring switches are exhaustive:
 *
 * ```ts
 * switch (a.type) {
 *   case Types.A:
 *   case Types.B:
 *     break
 *   default:
 *     unreachable(a) // will cause a build error if there was
 *                    // a Types.C that was not checked
 * }
 * ```
 *
 * @param value Value to be asserted as unreachable
 */
// NOTE: Uses separate overloads, _not_ `value?: never`, to not allow `undefined` to be passed
// eslint-disable-next-line @typescript-eslint/unified-signatures
export function unreachable(value: never): never
export function unreachable(value?: never): never {
  throw new Error(
    arguments.length === 0
      ? 'unreachable'
      : `unreachable (${JSON.stringify(value)})`
  )
}

/**
 * Check whether a value is non-null and non-undefined
 *
 * @param value nullable
 */
export const isPresent = <T>(value: T): value is NonNullable<T> => value != null

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Head<U> = U extends [infer T, ...any[]] ? T : never

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Tail<U> = U extends [any, any, ...any[]]
  ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ((...args: U) => any) extends (head: any, ...args: infer T) => any
    ? T
    : never
  : never
// Buggy at ts@4.0.0-dev20200506
// type Tail<U> = U extends [any, ...infer T] ? T : never

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type RecursiveObjectAssign<T, S extends any[]> = {
  0: T & Head<S>
  1: RecursiveObjectAssign<T & Head<S>, Tail<S>>
}[Tail<S> extends never ? 0 : 1]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ObjectAssign<T extends any[]> = RecursiveObjectAssign<
  Record<string, unknown>,
  T
>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function objectAssign<T extends any[]>(...sources: T) {
  return Object.assign({}, ...sources) as ObjectAssign<T>
}

/**
 * Object.keys の返り値の型を厳しめにしてくれるやつ。
 *
 * ジェネリクスは基本的に明示して使うことを推奨。
 *
 * このライブラリでは Theme オブジェクトのジェネリクスを引き回すケースが多く、
 * ジェネリクスを省略するといつのまにか keys の返り値が `string | number | symbol` になりがちなので
 *
 * @param obj - キーを取りたいオブジェクト。ジェネリクスを省略したとき `never[]` のような使えない型が返って欲しい
 */
export function keyof<
  // このジェネリクスは必須（書かないと返り値が `never[]` になる ）
  T extends Record<never, any>,
  // このジェネリクスは書かなくて良い、obj の内容から推論される（ T と矛盾してはいけない ）
  _ extends T = T
>(obj: _) {
  return Object.keys(obj) as unknown as (keyof T & string)[]
}

export interface ReadonlyArrayConstructor {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  isArray(value: any): value is readonly any[]
}

export function extractNonNullKeys<V, K extends keyof V>(obj: {
  [key in K]: V[key]
}) {
  return Object.entries(obj)
    .filter(([_, v]) => v !== null)
    .map(([k]) => k) as { [key in K]: V[key] extends null ? never : key }[K][]
}

/**
 * 配列じゃなかったら配列にする
 */
export function wrapArray<T>(value: ArrayOrSingle<T>): T[] {
  return Array.isArray(value) ? value : [value]
}

export type ArrayOrSingle<T> = T | T[]

export const noThemeProvider = new Error(
  '`theme` is invalid. `<ThemeProvider>` is not likely mounted.'
)

type NonNullableCSSObject = Record<keyof CSSObject, string | number>

/**
 * 子孫要素で使われるカラーテーマの CSS Variables を上書きする
 *
 * @params colorParams - 上書きしたい色の定義（ `theme.color` の一部だけ書けば良い ）
 * @params effectParams - effect の定義を上書きしたい場合は渡す（必須ではない）
 *
 * @example
 * ```tsx
 * const LocalTheme = styled.div`
 *   ${defineThemeVariables({ text1: '#ff0000' })}
 *   // `text1` is now defined as red
 *   ${theme((o) => [o.font.text1])}
 * `
 * ```
 */
export function defineThemeVariables(
  colorParams: Partial<CharcoalAbstractTheme['color']>,
  effectParams?: Partial<CharcoalAbstractTheme['effect']>
) {
  return function toCssObject(props: {
    theme?: Pick<CharcoalAbstractTheme, 'effect'>
  }): NonNullableCSSObject {
    if (!isPresent(props.theme)) {
      throw noThemeProvider
    }

    const colors = filterObject(colorParams, isPresent)

    // flatMapObject の中で毎回 Object.entries を呼ぶのは無駄なので外で呼ぶ
    const effects = Object.entries({
      ...props.theme.effect,
      ...effectParams,
    })

    return flatMapObject(colors, (colorKey, color) => [
      [customPropertyToken(colorKey), color],

      ...effects.map<[string, string]>(([effectKey, effect]) => [
        customPropertyToken(colorKey, [effectKey]),
        applyEffect(color, [effect]),
      ]),
    ])
  }
}

export function isSupportedEffect(effect: Key): effect is EffectType {
  return ['hover', 'press', 'disabled'].includes(effect as string)
}

export const variable = (value: string) => `var(${value})`

export function onEffectPseudo(effect: EffectType, css: CSSObject) {
  return effect === 'hover'
    ? { '&:hover': { [notDisabledSelector]: css } }
    : effect === 'press'
    ? { '&:active': { [notDisabledSelector]: css } }
    : // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    effect === 'disabled'
    ? { [disabledSelector]: css }
    : unreachable(effect)
}
