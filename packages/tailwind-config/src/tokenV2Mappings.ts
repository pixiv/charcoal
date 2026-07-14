import { buildTokenV2ThemeEntries } from './tokenV2Theme'

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

export type TokenV2TailwindClassMapping = {
  tokenPath: string
  cssVariable?: string
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
  spacing: '',
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

function getClassCandidates(
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

/**
 * Returns recommended Tailwind class mappings for Charcoal token v2.
 *
 * This API name and output shape are intended to be stable, but mapping
 * contents may change while token v2 Tailwind preset support is exposed
 * through unstableTokenV2.
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
    if (!entry.tokenPath.startsWith('color.')) continue

    const entries = groupedEntries.get(entry.tokenPath) ?? []
    entries.push(entry)
    groupedEntries.set(entry.tokenPath, entries)
  }

  return Array.from(groupedEntries, ([tokenPath, entries]) => {
    const { category, cssVariable } = entries[0]

    return {
      tokenPath,
      ...(includeCssVariable ? { cssVariable } : {}),
      themeEntries: entries.map(({ themePath, themeValue }) => ({
        themePath,
        ...(includeThemeValue ? { themeValue } : {}),
      })),
      classCandidates: getClassCandidates(
        tokenPath,
        utilities,
        includeAmbiguousUtilities,
      ),
      category,
      source: 'token-v2' as const,
      mappingKind: 'recommended' as const,
    }
  }).filter(
    ({ tokenPath, category }) =>
      (tokens?.includes(tokenPath) ?? true) &&
      (categories?.includes(category) ?? true),
  )
}
