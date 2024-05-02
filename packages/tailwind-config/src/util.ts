import type { TailwindConfig } from 'tailwindcss/tailwind-config'
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

export function camelToKebab(value: string) {
  return value
    .replace(/(?<small>[\da-z]|(?=[A-Z]))(?<capital>[A-Z])/gu, '$1-$2')
    .toLowerCase()
}
