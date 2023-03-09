import { EffectType, Key } from '@charcoal-ui/theme'
import { disabledSelector, notDisabledSelector } from '@charcoal-ui/utils'
import { CSSObject } from 'styled-components'
import { unreachable } from '../util'

/**
 * 配列で指定したプロパティを動的に生やす
 *
 * @param source 拡張するオブジェクト
 * @param member オブジェクトに生やすプロパティ一覧
 * @param chain プロパティに格納される値を生成する関数
 *
 * @example
 *
 * const o = factory({}, ['red', 'blue'],
 *   color => hex(color)
 * )
 *
 * console.log(o.red) //=> #ff0000
 */
export const factory = <TSource, TMember extends readonly Key[], TValue>(
  source: TSource,
  member: TMember,
  chain: (key: TMember[number]) => TValue
) =>
  Object.defineProperties(
    source,
    Object.fromEntries(
      member.map((key) => [
        key,
        { get: () => chain(key), enumerable: true, configurable: true },
      ])
    )
  ) as TSource & { readonly [key in TMember[number]]: TValue }

/**
 * 配列で指定した名前のメソッドを動的に生やす
 *
 * @param source 拡張するオブジェクト
 * @param member オブジェクトに生やすメソッド名一覧
 * @param chain メソッドの戻り値になる値を生成する関数
 *
 * @example
 *
 * const o = argumentedFactory({}, ['red', 'blue'],
 *   (color, alpha: number) => hex(color, alpha)
 * )
 *
 * console.log(o.red(0.5)) //=> #ff000077
 */
export const argumentedFactory = <
  TSource,
  TMember extends readonly string[],
  TValue,
  TArguments extends unknown[]
>(
  source: TSource,
  member: TMember,
  chain: (key: TMember[number], ...args: TArguments) => TValue
) =>
  Object.defineProperties(
    source,
    Object.fromEntries(
      member.map((key) => [
        key,
        {
          value: (...args: TArguments) => chain(key, ...args),
          enumerable: true,
          configurable: true,
        },
      ])
    )
  ) as TSource & {
    readonly [key in TMember[number]]: (...args: TArguments) => TValue
  }

/**
 * オブジェクトで指定したプロパティ名と値を動的に生やす
 *
 * @param source 拡張するオブジェクト
 * @param def オブジェクトに生やす定義(プロパティ名と値)
 *
 * @example
 *
 * const o = constFactory({}, {
 *   red: '#f00',
 *   blue: '#00f',
 * })
 *
 * console.log(o.red) //=> #f00
 */
export const constFactory = <TSource, TDef extends { [key: string]: unknown }>(
  source: TSource,
  def: TDef
) =>
  factory(source, Object.keys(def), (key) => def[key]) as TSource &
    Readonly<TDef>

/**
 * 配列で指定したモディファイア(プロパティ)をチェーン可能な再帰オブジェクトを動的に生やす
 *
 * @param modifiers オブジェクトに生やすモディファイヤ一覧
 * @param source 指定されたモディファイヤの一覧から値を生成する関数
 *
 * @example
 *
 * const o = modifiedArgumentedFactory(['red', 'blue'],
 *   modifiers => modifiers.map(color => hex(color)).join(',')
 * )
 *
 * console.log(o.red.blue) => #f00,#00f
 */
export const modifiedFactory = <TSource, T extends Key>(
  modifiers: readonly T[],
  source: (applied: readonly T[]) => TSource
) =>
  (function recursiveModifiedFactory(
    applied: readonly T[]
  ): Modified<TSource, T> {
    const notApplied = modifiers.filter((v) => !applied.includes(v))
    return factory(source(applied), notApplied, (modifier) =>
      notApplied.length === 0
        ? unreachable()
        : recursiveModifiedFactory([...applied, modifier])
    )
  })([])

export type Modified<TSource, TModifiers extends Key> = TSource & {
  readonly [key in TModifiers]: Modified<TSource, Exclude<TModifiers, key>>
}

/**
 * 配列で指定したモディファイア(メソッド)をチェーン可能な再帰オブジェクトを動的に生やす
 *
 * @param modifiers オブジェクトに生やすモディファイヤ一覧
 * @param source 指定されたモディファイヤの一覧から値を生成する関数
 * @param _inferPhantom 関数形式のモディファイヤの引数型を推論するためのメタタイプ(引数の個数に合わせてタプルで指定する)
 *
 * @example
 *
 * const o = modifiedArgumentedFactory(['red', 'blue'],
 *   modifiers => modifiers.map(([color, alpha]) => hex(color, alpha)).join(',')
 * , {} as [number])
 *
 * console.log(o.red(0.5).blue(1)) => #ff000077,#0000ffff
 */
export const modifiedArgumentedFactory = <
  TSource,
  T extends string,
  TArguments extends unknown[]
>(
  modifiers: readonly T[],
  source: (applied: readonly [T, ...TArguments][]) => TSource,
  ..._inferPhantom: TArguments
) =>
  (function recursiveModifiedFactory(
    applied: readonly [T, ...TArguments][]
  ): ModifiedArgumented<TSource, T, TArguments> {
    const notApplied = modifiers.filter(
      (v) => !applied.map(([w]) => w).includes(v)
    )
    return argumentedFactory(
      source(applied),
      notApplied,
      (modifier, ...args: TArguments) =>
        notApplied.length === 0
          ? unreachable()
          : recursiveModifiedFactory([...applied, [modifier, ...args]])
    )
  })([])

export type ModifiedArgumented<
  TSource,
  TModifiers extends string,
  TArguments extends unknown[]
> = TSource & {
  readonly [key in TModifiers]: (
    ...args: TArguments
  ) => ModifiedArgumented<TSource, Exclude<TModifiers, key>, TArguments>
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

export function isSupportedEffect(effect: Key): effect is EffectType {
  return ['hover', 'press', 'disabled'].includes(effect as string)
}
