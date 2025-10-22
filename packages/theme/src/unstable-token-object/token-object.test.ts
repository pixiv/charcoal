import { createCSSTokenObject, createTokenObject } from '.'
import { toTokenObject } from './to-token-object'
import { createReferenceTokenResolver } from './reference-token'
import lightToken from '../json/pixiv-light.json'
import darkToken from '../json/pixiv-dark.json'
import baseToken from '../json/base.json'
import deepmerge from 'deepmerge'
import { Tokens } from './types'
import { readFile } from 'fs/promises'
import { join } from 'node:path'
import { parse } from 'css'

const isObject = (value: unknown): value is Record<string, unknown> => {
  if (value instanceof RegExp) return false
  if (value instanceof Date) return false
  if (value instanceof Error) return false

  return typeof value === 'object' && value !== null
}

describe.each([
  ['light theme', lightToken],
  ['dark theme', darkToken],
] as const)('createTokenObject test: %s', (description, token) => {
  const theme = createTokenObject(token, baseToken)
  const keys = Object.keys(token)
  // 結局実装で使ってるコードで検証してるので意味ないかも
  // とはいえほぼこの実装になると思うどうしよう
  const templateResolver = createReferenceTokenResolver(token, baseToken)

  // スナップショット
  it('should match snapshot', () => {
    expect(theme).toMatchSnapshot()
  })

  describe.each(keys)(`[${description}] Category: %s`, (category) => {
    const _category = category as keyof typeof token
    const tokens = token[_category]

    it.each(Object.keys(tokens))(
      `[${description}] ${category} should have %s`,
      (key) => {
        const splitted = key.split('/')
        const tokenValue: { value: string } = tokens[key as keyof typeof tokens]

        expect(theme).toHaveProperty(
          [_category, ...splitted],
          templateResolver(tokenValue.value),
        )
      },
    )
  })
})

describe.each([
  ['light theme', lightToken, '../unstable-css/_variables_light.css'],
  ['dark theme', darkToken, '../unstable-css/_variables_dark.css'],
] as const)(
  'createCSSTokenObject test: %s',
  async (description, token, cssFilePath) => {
    const theme = createCSSTokenObject(token, (value) => `charcoal-${value}`)
    const keys = Object.keys(token)
    const css = await readFile(join(import.meta.dirname, cssFilePath), 'utf-8')

    // スナップショット
    it('should match snapshot', () => {
      expect(theme).toMatchSnapshot()
    })

    const cssVariables = new Map<string, string>()
    for (const rule of parse(css).stylesheet?.rules ?? []) {
      if (rule.type !== 'rule') continue

      for (const declaration of rule.declarations ?? []) {
        if (
          declaration.type !== 'declaration' ||
          declaration.property?.startsWith('--charcoal') !== true
        )
          continue
        cssVariables.set(declaration.property, declaration.value ?? '')
      }
    }

    describe.each(keys)(`[${description}] Category: %s`, (category) => {
      const _category = category as keyof typeof token
      const tokens = token[_category]

      it.each(Object.keys(tokens))(
        `[${description}] ${category} should have %s`,
        (key) => {
          const splitted = key.split('/')

          expect(theme).toHaveProperty(
            [_category, ...splitted],
            expect.any(String),
          )
          const variable = splitted.reduce(
            (acc, key) => {
              if (typeof acc === 'string') return acc

              const next = acc[key]
              if (typeof next === 'string') return next

              return isObject(next) ? next : acc
            },
            theme[_category] as Record<string, unknown> | string,
          )

          expect(
            Array.from(cssVariables.keys()).map((x) => `var(${x})`),
          ).toContain(variable)
        },
      )
    })
  },
)

describe('toTokenObject test', () => {
  const tokens: Tokens = {
    'color/background/default': { value: '#ffffff' },
    'color/background/secondary': { value: '#f2f2f2' },
    'space/target/xs': { value: '4px' },
    'space/target/md': { value: '8px' },
  }

  it('should create a nested object from token paths', () => {
    const result = toTokenObject(tokens)

    expect(result).toEqual({
      color: {
        background: {
          default: tokens['color/background/default'].value,
          secondary: tokens['color/background/secondary'].value,
        },
      },
      space: {
        target: {
          xs: tokens['space/target/xs'].value,
          md: tokens['space/target/md'].value,
        },
      },
    })
  })

  it('should handle merging of token paths with deepmerge', () => {
    const additionalTokens: Tokens = {
      'color/background/default': { value: '#000000' },
      'space/target/lg': { value: '16px' },
    }

    const mergedResult = deepmerge(
      toTokenObject(tokens),
      toTokenObject(additionalTokens),
    )

    expect(mergedResult).toEqual({
      color: {
        background: {
          default: additionalTokens['color/background/default'].value,
          secondary: '#f2f2f2',
        },
      },
      space: {
        target: {
          xs: '4px',
          md: '8px',
          lg: additionalTokens['space/target/lg'].value,
        },
      },
    })
  })

  it('should return an empty object for empty tokens', () => {
    const result = toTokenObject({})
    expect(result).toEqual({})
  })
})
