import type { Config } from 'tailwindcss'
import { assertUniqueTokenV2TailwindBindings } from './definition'
import type { TokenV2TailwindBinding, TokenV2TailwindThemeKey } from './types'

type Theme = NonNullable<Config['theme']>
type ThemeValue = TokenV2TailwindBinding['value']

const themeKeys: readonly TokenV2TailwindThemeKey[] = [
  'colors',
  'borderColor',
  'borderWidth',
  'borderRadius',
  'fontSize',
  'fontWeight',
  'spacing',
  'gap',
  'width',
]

function createColors(bindings: readonly TokenV2TailwindBinding[]) {
  const colors: Record<string, unknown> = {}
  for (const binding of bindings) {
    const path = binding.canonicalPath.split('/').slice(1)
    const key = path.pop()
    if (key === undefined) continue

    const target = path.reduce<Record<string, unknown>>((current, segment) => {
      const existing = current[segment]
      if (typeof existing !== 'object' || existing === null) {
        current[segment] = {}
      }
      return current[segment] as Record<string, unknown>
    }, colors)
    target[key === 'default' ? 'DEFAULT' : key] = binding.value
  }
  return colors
}

export function createTokenV2TailwindTheme(
  bindings: readonly TokenV2TailwindBinding[],
): Theme {
  assertUniqueTokenV2TailwindBindings(bindings)

  const byThemeKey = new Map<TokenV2TailwindThemeKey, TokenV2TailwindBinding[]>()
  for (const themeKey of themeKeys) byThemeKey.set(themeKey, [])
  for (const binding of bindings) byThemeKey.get(binding.themeKey)?.push(binding)

  const theme: Partial<Record<TokenV2TailwindThemeKey, unknown>> = {}
  for (const themeKey of themeKeys) {
    const entries = byThemeKey.get(themeKey) ?? []
    theme[themeKey] =
      themeKey === 'colors'
        ? createColors(entries)
        : Object.fromEntries(
            entries.map(({ modifier, value }): [string, ThemeValue] => [
              modifier,
              value,
            ]),
          )
  }
  return theme as Theme
}
