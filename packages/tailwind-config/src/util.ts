import { TailwindConfig } from 'tailwindcss/tailwind-config'
import { TailwindVersion, ThemeMap } from './types'

/**
 * the key "default" or "DEFAULT" has special meaning and dropped from class name
 *
 * @see https://tailwindcss.com/docs/upgrading-to-v2#update-default-theme-keys-to-default
 */
export function getDefaultKeyName(version: TailwindVersion) {
  switch (version) {
    case 'v3':
    case 'v2': {
      return 'DEFAULT'
    }

    case 'v1': {
      return 'default'
    }
  }
}

export function getVariantOption(
  version: TailwindVersion
): Partial<TailwindConfig> {
  switch (version) {
    case 'v3': {
      // v3 以上では variants は variantOrders に改名された
      // そしてこれは上書きをしたいモチベがない
      // https://v2.tailwindcss.com/docs/configuration#variant-order
      return {}
    }

    case 'v2':
    case 'v1': {
      return { variants: {} }
    }
  }
}

function setEquals<T>(a: Set<T>, b: Set<T>) {
  return a.size === b.size && Array.from(a).every((value) => b.has(value))
}

export function assertAllThemeHaveSameKeys(themeMap: ThemeMap): void {
  const defaultTheme = themeMap[':root']
  const expectedColorKeys = new Set(Object.keys(defaultTheme.color))
  const expectedEffectKeys = new Set(Object.keys(defaultTheme.effect))

  for (const [name, theme] of Object.entries(themeMap)) {
    const colorKeys = new Set(Object.keys(theme.color))
    const effectKeys = new Set(Object.keys(theme.effect))

    if (!setEquals(colorKeys, expectedColorKeys)) {
      throw new Error(`:root and ${name} does not have same colors.

Expected( :root ): ${JSON.stringify(Array.from(expectedColorKeys))}
Got: ${JSON.stringify(Array.from(colorKeys))}`)
    }

    if (!setEquals(effectKeys, expectedEffectKeys)) {
      throw new Error(`:root and ${name} does not have same effects.

Expected( :root ): ${JSON.stringify(Array.from(expectedEffectKeys))}
Got: ${JSON.stringify(Array.from(effectKeys))}`)
    }
  }
}

/**
 * @example
 * ```js
 * mapKeys({ a: 'aa', b: 'bb' }, (key) => key.toUpperCase()) // => { A: "aa", B: "bb" }
 * ````
 */
export function mapKeys<V, K extends string>(
  object: Record<string, V>,
  callback: (key: string) => K
) {
  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => [callback(key), value])
  ) as Record<K, V>
}

/**
 * @example
 * ```js
 * mapObject({ a: 'aa', b: 'bb', c: 'cc' }, (key, value) =>
 *   key === 'b' ? undefined : [key + '1', value.toUpperCase()]
 * ) // => { a1: "AA", c1: "CC" }
 * ```
 */
export function mapObject<
  SourceKey extends string,
  SourceValue,
  DestKey extends string,
  DestValue
>(
  source: Record<SourceKey, SourceValue>,
  callback: (
    key: SourceKey,
    value: SourceValue
  ) => [DestKey, DestValue] | null | undefined
) {
  return Object.fromEntries(
    Object.entries(source).flatMap(([key, value]) => {
      const entry = callback(key as SourceKey, value as SourceValue)
      if (entry) {
        return [entry]
      } else {
        return []
      }
    })
  ) as Record<DestKey, DestValue>
}

/**
 * @example
 * ```js
 * flatMapObject({ a: 'aa', b: 'bb' }, (key, value) => [
 *   [key + '1', value + '1'],
 *   [key + '2', value + '2'],
 * ]) // => { a1: "aa1", a2: "aa2", b1: "bb1", b2: "bb2" }
 * ```
 */
export function flatMapObject<
  SourceKey extends string,
  SourceValue,
  DestKey extends string,
  DestValue
>(
  source: Record<SourceKey, SourceValue>,
  callback: (key: SourceKey, value: SourceValue) => [DestKey, DestValue][]
) {
  return Object.fromEntries(
    Object.entries(source).flatMap(([key, value]) => {
      return callback(key as SourceKey, value as SourceValue)
    })
  ) as Record<DestKey, DestValue>
}

/**
 * @example
 * ```ts
 * filterObject(
 *   { a: 'aa', b: 'bb', c: 'cc' },
 *   (value): value is string => value !== 'bb'
 * ) // => { a: "aa", c: "cc" }
 * ```
 */
export function filterObject<Source, Dest extends Source>(
  source: Record<string, Source>,
  fn: (value: Source) => value is Dest
) {
  return mapObject(source, (key, value) => {
    if (fn(value) === true) {
      return [key, value]
    } else {
      return null
    }
  }) as Record<string, Dest>
}

export function camelToKebab(value: string) {
  return value
    .replace(/(?<small>[\da-z]|(?=[A-Z]))(?<capital>[A-Z])/gu, '$1-$2')
    .toLowerCase()
}
