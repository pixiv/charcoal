import type {
  TokenV2CssVariables,
  TokenV2TailwindBinding,
  TokenV2TailwindThemeKey,
  TokenV2TokenTree,
} from './types'

type LeafEntry = { path: string[]; value: string }

function leafEntries(tree: TokenV2TokenTree, path: string[] = []): LeafEntry[] {
  return Object.entries(tree).flatMap(([key, value]) => {
    const nextPath = [...path, key]
    return typeof value === 'string'
      ? [{ path: nextPath, value }]
      : leafEntries(value, nextPath)
  })
}

function modifier(path: string[]) {
  const parts = path.at(-1) === 'default' ? path.slice(0, -1) : path
  return parts.join('-')
}

function bindingsFor(
  tree: TokenV2TokenTree,
  canonicalPrefix: string[],
  themeKey: TokenV2TailwindThemeKey,
  modifierForPath: (path: string[]) => string = modifier,
): TokenV2TailwindBinding[] {
  return leafEntries(tree).map(({ path, value }) => ({
    canonicalPath: [...canonicalPrefix, ...path].join('/'),
    themeKey,
    modifier: modifierForPath(path),
    value,
  }))
}

export function assertUniqueTokenV2TailwindBindings(
  bindings: readonly TokenV2TailwindBinding[],
) {
  const seen = new Set<string>()
  for (const binding of bindings) {
    const key = `${binding.themeKey}:${binding.modifier}`
    if (seen.has(key)) {
      throw new Error(`Duplicate Tailwind token binding: ${key}`)
    }
    seen.add(key)
  }
}

export function createTokenV2TailwindBindings(
  tokens: TokenV2CssVariables,
): TokenV2TailwindBinding[] {
  const colorBindings = bindingsFor(tokens.color, ['color'], 'colors')
  const borderColorBindings = bindingsFor(
    tokens.color.border as TokenV2TokenTree,
    ['color', 'border'],
    'borderColor',
<<<<<<< HEAD
    (path) => ['ch', modifier(path)].filter(Boolean).join('-'),
=======
    (path) => ['ch', ...path.filter((part) => part !== 'default')].join('-'),
>>>>>>> 4a9d3401b (refactor(tailwind-config): extract token v2 bindings)
  )
  const borderWidthBindings = bindingsFor(
    tokens['border-width'],
    ['border-width'],
    'borderWidth',
<<<<<<< HEAD
    (path) => ['width-ch', modifier(path)].filter(Boolean).join('-'),
  )
  const borderRadiusBindings = bindingsFor(
    tokens.radius,
    ['radius'],
    'borderRadius',
  )
=======
    (path) => ['width-ch', ...path.filter((part) => part !== 'default')].join('-'),
  )
  const borderRadiusBindings = bindingsFor(tokens.radius, ['radius'], 'borderRadius')
>>>>>>> 4a9d3401b (refactor(tailwind-config): extract token v2 bindings)
  const fontWeightBindings = bindingsFor(
    tokens.text['font-weight'],
    ['text', 'font-weight'],
    'fontWeight',
<<<<<<< HEAD
    (path) => ['ch', modifier(path)].filter(Boolean).join('-'),
=======
    (path) => ['ch', ...path].join('-'),
>>>>>>> 4a9d3401b (refactor(tailwind-config): extract token v2 bindings)
  )
  const spaceBindings = leafEntries(tokens.space).flatMap(({ path, value }) => {
    const spaceModifier = modifier(
      /^(gap|padding)$/u.test(path[0]) ? path.slice(1) : path,
    )
    const canonicalPath = ['space', ...path].join('/')
    return (['spacing', 'gap'] as const).map((themeKey) => ({
      canonicalPath,
      themeKey,
      modifier: spaceModifier,
      value,
    }))
  })
  const widthBindings = bindingsFor(
    tokens['paragraph-width'],
    ['paragraph-width'],
    'width',
  )
  const fontSizeBindings = leafEntries(tokens.text['font-size']).map(
    ({ path, value }) => {
      const lineHeight = path.reduce<unknown>(
        (current, key) => (current as TokenV2TokenTree)[key],
        tokens.text['line-height'],
      )
      if (typeof lineHeight !== 'string') {
<<<<<<< HEAD
        throw new Error(
          `Missing line-height token for text/font-size/${path.join('/')}`,
        )
=======
        throw new Error(`Missing line-height token for text/font-size/${path.join('/')}`)
>>>>>>> 4a9d3401b (refactor(tailwind-config): extract token v2 bindings)
      }
      return {
        canonicalPath: ['text', 'font-size', ...path].join('/'),
        themeKey: 'fontSize' as const,
        modifier: modifier(path),
        value: [value, { lineHeight }] as [string, { lineHeight: string }],
      }
    },
  )

  const bindings = [
    ...colorBindings,
    ...borderColorBindings,
    ...borderWidthBindings,
    ...borderRadiusBindings,
    ...fontSizeBindings,
    ...fontWeightBindings,
    ...spaceBindings,
    ...widthBindings,
  ]
  assertUniqueTokenV2TailwindBindings(bindings)
  return bindings
}
