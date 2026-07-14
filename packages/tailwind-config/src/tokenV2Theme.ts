import light from '@charcoal-ui/theme/tokens/css-variables.json' with { type: 'json' }
import type { Config } from 'tailwindcss'
import {
  flattenKey as flattenKeys,
  flattenKeyWithoutDefault,
  mapDefaultKey as mapDefaultKeys,
} from './util'

export type TokenV2ThemeEntry = {
  tokenPath: string
  cssVariable: string
  sourceTokens: {
    tokenPath: string
    cssVariable: string
  }[]
  themePath: string
  themeValue: string | [string, Record<string, string>]
  category:
    | 'color'
    | 'borderColor'
    | 'space'
    | 'radius'
    | 'text'
    | 'paragraphWidth'
    | 'borderWidth'
}

type TokenV2Theme = NonNullable<Omit<Config, 'content'>['theme']>

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value)

const tokenPathsByValue = new Map<string, string>()

function collectTokenPaths(value: unknown, path: string[] = []): void {
  if (typeof value === 'string') {
    tokenPathsByValue.set(value, path.join('.'))
    return
  }

  if (!isRecord(value)) return

  for (const [key, child] of Object.entries(value)) {
    collectTokenPaths(child, [...path, key])
  }
}

collectTokenPaths(light)

function getCssVariable(value: string) {
  const match = /^var\((--[^)]+)\)$/u.exec(value)

  if (match === null) {
    throw new Error(`Expected a CSS variable token value, got: ${value}`)
  }

  return { reference: value, name: match[1] }
}

function getSourceTokens(themeValue: TokenV2ThemeEntry['themeValue']) {
  const values = Array.isArray(themeValue)
    ? [themeValue[0], ...Object.values(themeValue[1])]
    : [themeValue]

  return values.map((value) => {
    const cssVariable = getCssVariable(value)
    const tokenPath = tokenPathsByValue.get(cssVariable.reference)

    if (tokenPath === undefined) {
      throw new Error(`Token path not found for ${cssVariable.reference}`)
    }

    return { tokenPath, cssVariable: cssVariable.name }
  })
}

function getCategory(tokenPath: string): TokenV2ThemeEntry['category'] {
  if (tokenPath.startsWith('color.border.')) return 'borderColor'
  if (tokenPath.startsWith('color.')) return 'color'
  if (tokenPath.startsWith('space.')) return 'space'
  if (tokenPath.startsWith('radius.')) return 'radius'
  if (tokenPath.startsWith('text.')) return 'text'
  if (tokenPath.startsWith('paragraph-width.')) return 'paragraphWidth'
  if (tokenPath.startsWith('border-width.')) return 'borderWidth'

  throw new Error(`Unknown token v2 category: ${tokenPath}`)
}

function flattenThemeEntries(
  value: unknown,
  path: string[],
): TokenV2ThemeEntry[] {
  if (typeof value === 'string' || Array.isArray(value)) {
    const themeValue = value as TokenV2ThemeEntry['themeValue']
    const sourceTokens = getSourceTokens(themeValue)
    const [sourceToken] = sourceTokens

    return [
      {
        tokenPath: sourceToken.tokenPath,
        cssVariable: sourceToken.cssVariable,
        sourceTokens,
        themePath: path.join('.'),
        themeValue,
        category: getCategory(sourceToken.tokenPath),
      },
    ]
  }

  if (!isRecord(value)) return []

  return Object.entries(value).flatMap(([key, child]) =>
    flattenThemeEntries(child, [...path, key]),
  )
}

function createTokenV2Theme(): TokenV2Theme {
  const fontSize = Object.fromEntries(
    Object.entries(light.text['font-size']).flatMap(([key, value]) => {
      if (typeof value === 'string') {
        return [
          [
            key,
            [
              value,
              // @ts-expect-error key is shared by font-size and line-height
              { lineHeight: light.text['line-height'][key] },
            ],
          ],
        ]
      }

      return Object.entries(value as Record<string, string>).map(
        ([childKey, childValue]) => [
          [key, childKey].join('-'),
          [
            childValue,
            // @ts-expect-error key is shared by font-size and line-height
            { lineHeight: light.text['line-height'][key][childKey] },
          ],
        ],
      )
    }),
  ) as TokenV2Theme['fontSize']

  const spacing = flattenKeys(light.space, (key) => !/(gap|padding)/u.test(key))
  const colors = mapDefaultKeys(light.color)

  return {
    borderWidth: flattenKeyWithoutDefault({
      'width-ch': flattenKeys(light['border-width']),
    }),
    borderRadius: light.radius,
    borderColor: flattenKeyWithoutDefault({ ch: flattenKeys(colors.border) }),
    colors,
    fontSize,
    fontWeight: flattenKeys({ ch: light.text['font-weight'] }),
    spacing,
    gap: spacing,
    width: light['paragraph-width'],
  }
}

export function buildTokenV2ThemeEntries(): TokenV2ThemeEntry[] {
  return Object.entries(createTokenV2Theme()).flatMap(([key, value]) =>
    flattenThemeEntries(value, [key]),
  )
}

export function createTokenV2ThemeFromEntries(
  entries: TokenV2ThemeEntry[],
): TokenV2Theme {
  const theme: Record<string, unknown> = {}

  for (const entry of entries) {
    const path = entry.themePath.split('.')
    const leaf = path.pop()
    let target = theme

    for (const key of path) {
      const child = target[key]
      if (!isRecord(child)) target[key] = {}
      target = target[key] as Record<string, unknown>
    }

    if (leaf !== undefined) target[leaf] = entry.themeValue
  }

  return theme as TokenV2Theme
}
