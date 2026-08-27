import {
  buildTokenV2ThemeEntries,
  type TokenV2ThemeEntry,
} from './tokenV2Theme'

export type TokenV2Category =
  | 'color'
  | 'borderColor'
  | 'space'
  | 'radius'
  | 'text'
  | 'paragraphWidth'
  | 'borderWidth'

export type TokenV2Utility =
  | 'backgroundColor'
  | 'textColor'
  | 'borderColor'
  | 'fill'
  | 'stroke'
  | 'spacing'
  | 'margin'
  | 'gap'
  | 'width'
  | 'borderRadius'
  | 'borderWidth'
  | 'fontSize'
  | 'fontWeight'

export type TokenV2CssProperty =
  | 'background-color'
  | 'color'
  | 'border-color'
  | 'fill'
  | 'stroke'
  | 'padding'
  | 'margin'
  | 'gap'
  | 'width'
  | 'border-radius'
  | 'border-width'
  | 'font-size'
  | 'font-weight'
  | 'line-height'

export type TokenV2TailwindClassCandidate = {
  className: string
  utility: TokenV2Utility
  cssProperties: TokenV2CssProperty[]
}

export type TokenV2SourceToken = {
  tokenPath: string
  cssVariable?: string
}

export type TokenV2TailwindClassMapping = {
  tokenPath: string
  cssVariable?: string
  sourceTokens: TokenV2SourceToken[]
  themeEntries: {
    themePath: string
    themeValue?: string | [string, Record<string, string>]
  }[]
  classCandidates: TokenV2TailwindClassCandidate[]
  category: TokenV2Category
  source: 'token-v2'
  mappingKind: 'recommended'
}

export type GetTokenV2TailwindClassMappingsOptions = {
  categories?: TokenV2Category[]
  utilities?: TokenV2Utility[]
  tokens?: string[]
  includeThemeValue?: boolean
  includeCssVariable?: boolean
  includeAmbiguousUtilities?: boolean
}

type ColorSemantic = 'background' | 'container' | 'text' | 'icon' | 'border'

const candidateDefinitions: Record<
  ColorSemantic,
  { utility: TokenV2Utility; cssProperties: TokenV2CssProperty[] }[]
> = {
  background: [
    { utility: 'backgroundColor', cssProperties: ['background-color'] },
  ],
  container: [
    { utility: 'backgroundColor', cssProperties: ['background-color'] },
  ],
  text: [{ utility: 'textColor', cssProperties: ['color'] }],
  icon: [
    { utility: 'textColor', cssProperties: ['color'] },
    { utility: 'fill', cssProperties: ['fill'] },
    { utility: 'stroke', cssProperties: ['stroke'] },
  ],
  border: [{ utility: 'borderColor', cssProperties: ['border-color'] }],
}

const classPrefixes: Record<TokenV2Utility, string> = {
  backgroundColor: 'bg',
  textColor: 'text',
  borderColor: 'border',
  fill: 'fill',
  stroke: 'stroke',
  spacing: 'p',
  margin: 'm',
  gap: 'gap',
  width: 'w',
  borderRadius: 'rounded',
  borderWidth: 'border',
  fontSize: 'text',
  fontWeight: 'font',
}

function withoutDefault(path: string[]) {
  return path.at(-1) === 'default' ? path.slice(0, -1) : path
}

function getClassKey(tokenPath: string, semantic: ColorSemantic) {
  if (semantic === 'border') {
    const path = withoutDefault(tokenPath.split('.').slice(2))
    return ['ch', ...path].join('-')
  }

  return withoutDefault(tokenPath.split('.').slice(1)).join('-')
}

function getColorClassCandidates(
  tokenPath: string,
  utilities: TokenV2Utility[] | undefined,
  includeAmbiguousUtilities: boolean,
) {
  const semantic = tokenPath.split('.')[1] as ColorSemantic
  const definitions = candidateDefinitions[semantic]
  const candidates = includeAmbiguousUtilities
    ? definitions
    : definitions.slice(0, 1)
  const classKey = getClassKey(tokenPath, semantic)

  return candidates
    .filter(({ utility }) => utilities?.includes(utility) ?? true)
    .map(({ utility, cssProperties }) => ({
      className: `${classPrefixes[utility]}-${classKey}`,
      utility,
      cssProperties,
    }))
}

const themePathCandidateDefinitions: {
  prefix: string
  candidates: {
    utility: TokenV2Utility
    cssProperties: TokenV2CssProperty[]
  }[]
}[] = [
  {
    prefix: 'fontSize.',
    candidates: [
      {
        utility: 'fontSize',
        cssProperties: ['font-size', 'line-height'],
      },
    ],
  },
  {
    prefix: 'spacing.',
    candidates: [
      { utility: 'spacing', cssProperties: ['padding'] },
      { utility: 'margin', cssProperties: ['margin'] },
      { utility: 'gap', cssProperties: ['gap'] },
    ],
  },
  {
    prefix: 'borderRadius.',
    candidates: [{ utility: 'borderRadius', cssProperties: ['border-radius'] }],
  },
  {
    prefix: 'fontWeight.',
    candidates: [{ utility: 'fontWeight', cssProperties: ['font-weight'] }],
  },
  {
    prefix: 'borderWidth.',
    candidates: [{ utility: 'borderWidth', cssProperties: ['border-width'] }],
  },
  {
    prefix: 'width.',
    candidates: [{ utility: 'width', cssProperties: ['width'] }],
  },
]

function getThemePathClassCandidates(
  entry: TokenV2ThemeEntry,
  utilities: TokenV2Utility[] | undefined,
  includeAmbiguousUtilities: boolean,
) {
  const definition = themePathCandidateDefinitions.find(({ prefix }) =>
    entry.themePath.startsWith(prefix),
  )
  if (definition === undefined) return undefined

  const candidates = includeAmbiguousUtilities
    ? definition.candidates
    : definition.candidates.slice(0, 1)
  const classKey = entry.themePath.slice(definition.prefix.length)

  return candidates
    .filter(({ utility }) => utilities?.includes(utility) ?? true)
    .map(({ utility, cssProperties }) => ({
      className: `${classPrefixes[utility]}-${classKey}`,
      utility,
      cssProperties,
    }))
}

function pickMappingEntry(entries: TokenV2ThemeEntry[]) {
  const entry =
    entries.find((item) => !item.themePath.startsWith('gap.')) ?? entries[0]
  if (entry === undefined) {
    throw new Error('Expected at least one token v2 theme entry')
  }
  return entry
}

function getClassCandidates(
  entry: TokenV2ThemeEntry,
  utilities: TokenV2Utility[] | undefined,
  includeAmbiguousUtilities: boolean,
) {
  const themePathCandidates = getThemePathClassCandidates(
    entry,
    utilities,
    includeAmbiguousUtilities,
  )
  if (themePathCandidates !== undefined) return themePathCandidates

  return getColorClassCandidates(
    entry.tokenPath,
    utilities,
    includeAmbiguousUtilities,
  )
}

/**
 * Returns recommended Tailwind class mappings for Charcoal token v2.
 *
 * This is for Charcoal-managed skill generation. It is not a public API,
 * so application code should not import it.
 *
 * Mapping contents may change while token v2 Tailwind preset support is
 * exposed through unstableTokenV2.
 */
export function getTokenV2TailwindClassMappings(
  options: GetTokenV2TailwindClassMappingsOptions = {},
): TokenV2TailwindClassMapping[] {
  const {
    categories,
    utilities,
    tokens,
    includeThemeValue = false,
    includeCssVariable = false,
    includeAmbiguousUtilities = true,
  } = options
  const groupedEntries = new Map<
    string,
    ReturnType<typeof buildTokenV2ThemeEntries>
  >()

  for (const entry of buildTokenV2ThemeEntries()) {
    const isColor = entry.tokenPath.startsWith('color.')
    const isMappedThemePath = themePathCandidateDefinitions.some(({ prefix }) =>
      entry.themePath.startsWith(prefix),
    )
    const isGapCompanion = entry.themePath.startsWith('gap.')
    if (!isColor && !isMappedThemePath && !isGapCompanion) continue

    const entries = groupedEntries.get(entry.tokenPath) ?? []
    entries.push(entry)
    groupedEntries.set(entry.tokenPath, entries)
  }

  return Array.from(groupedEntries, ([tokenPath, entries]) => {
    const entry = pickMappingEntry(entries)
    const { category, cssVariable, sourceTokens } = entry

    return {
      tokenPath,
      ...(includeCssVariable ? { cssVariable } : {}),
      sourceTokens: sourceTokens.map((sourceToken) => ({
        tokenPath: sourceToken.tokenPath,
        ...(includeCssVariable ? { cssVariable: sourceToken.cssVariable } : {}),
      })),
      themeEntries: entries.map(({ themePath, themeValue }) => ({
        themePath,
        ...(includeThemeValue ? { themeValue } : {}),
      })),
      classCandidates: getClassCandidates(
        entry,
        utilities,
        includeAmbiguousUtilities,
      ),
      category,
      source: 'token-v2' as const,
      mappingKind: 'recommended' as const,
    }
  }).filter(
    ({ tokenPath, sourceTokens, category }) =>
      (tokens?.some(
        (token) =>
          token === tokenPath ||
          sourceTokens.some(({ tokenPath }) => tokenPath === token),
      ) ??
        true) &&
      (categories?.includes(category) ?? true),
  )
}
