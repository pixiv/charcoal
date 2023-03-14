import { Key } from '@charcoal-ui/theme'
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
export const defineProperties = <
  TSource,
  TMember extends readonly Key[],
  TValue
>(
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
 * const o = defineMethods({}, ['red', 'blue'],
 *   (color, alpha: number) => hex(color, alpha)
 * )
 *
 * console.log(o.red(0.5)) //=> #ff000077
 */
export const defineMethods = <
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
 * 配列で指定したモディファイア(プロパティ)をチェーン可能な再帰オブジェクトを動的に生やす
 *
 * @param modifiers オブジェクトに生やすモディファイヤ一覧
 * @param source 指定されたモディファイヤの一覧から値を生成する関数
 *
 * @example
 *
 * const o = definePropertyChains(['red', 'blue'],
 *   modifiers => modifiers.map(color => hex(color)).join(',')
 * )
 *
 * console.log(o.red.blue) => #f00,#00f
 */
export const definePropertyChains = <TSource, T extends Key>(
  modifiers: readonly T[],
  source: (applied: readonly T[]) => TSource
) =>
  (function definePropertiesRecursively(
    applied: readonly T[]
  ): PropertyChain<TSource, T> {
    const notApplied = modifiers.filter((v) => !applied.includes(v))
    return defineProperties(source(applied), notApplied, (modifier) =>
      notApplied.length === 0
        ? unreachable()
        : definePropertiesRecursively([...applied, modifier])
    )
  })([])

export type PropertyChain<TSource, TModifiers extends Key> = TSource & {
  readonly [key in TModifiers]: PropertyChain<TSource, Exclude<TModifiers, key>>
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
 * const o = defineMethodChains(['red', 'blue'],
 *   modifiers => modifiers.map(([color, alpha]) => hex(color, alpha)).join(',')
 * , {} as [number])
 *
 * console.log(o.red(0.5).blue(1)) => #ff000077,#0000ffff
 */
export const defineMethodChains = <
  TSource,
  T extends string,
  TArguments extends unknown[]
>(
  modifiers: readonly T[],
  source: (applied: readonly [T, ...TArguments][]) => TSource,
  ..._inferPhantom: TArguments
) =>
  (function defineMethodsRecursively(
    applied: readonly [T, ...TArguments][]
  ): MethodChain<TSource, T, TArguments> {
    const notApplied = modifiers.filter(
      (v) => !applied.map(([w]) => w).includes(v)
    )
    return defineMethods(
      source(applied),
      notApplied,
      (modifier, ...args: TArguments) =>
        notApplied.length === 0
          ? unreachable()
          : defineMethodsRecursively([...applied, [modifier, ...args]])
    )
  })([])

export type MethodChain<
  TSource,
  TModifiers extends string,
  TArguments extends unknown[]
> = TSource & {
  readonly [key in TModifiers]: (
    ...args: TArguments
  ) => MethodChain<TSource, Exclude<TModifiers, key>, TArguments>
}
