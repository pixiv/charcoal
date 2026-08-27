import {
  getTokenV2TailwindClassMappings,
  type TokenV2TailwindClassMapping,
  type TokenV2Category,
  type TokenV2Utility,
} from '@charcoal-ui/tailwind-config'
import { parseArgs } from 'node:util'
import {
  formatMappings,
  type FigmaTokenV2TailwindClassMapping,
  type FigmaVariable,
  type OutputFormat,
} from './format'

const formats = ['json', 'markdown', 'table'] as const
const categories: TokenV2Category[] = [
  'color',
  'borderColor',
  'space',
  'radius',
  'text',
  'paragraphWidth',
  'borderWidth',
]
const utilities: TokenV2Utility[] = [
  'backgroundColor',
  'textColor',
  'borderColor',
  'fill',
  'stroke',
  'spacing',
  'margin',
  'gap',
  'width',
  'borderRadius',
  'borderWidth',
  'fontSize',
  'fontWeight',
]

const help = `Usage: charcoal-token-v2-classes [options]

Options:
  --format <json|markdown|table>     Output format (default: json)
  --category <category>              Filter by token category (repeatable)
  --utility <utility>                Filter class candidates (repeatable)
  --token <token-path>               Filter by exact token path; / is normalized to . (repeatable)
  --include-theme-value              Include values in theme entries
  --include-css-variable             Include CSS variable names
  --include-ambiguous-utilities      Include all recommended utility candidates
  --help                             Show this help`

function assertChoices<T extends string>(
  values: string[] | undefined,
  choices: readonly T[],
  option: string,
): asserts values is T[] | undefined {
  const invalid = values?.find((value) => !choices.includes(value as T))
  if (invalid !== undefined) {
    throw new TypeError(
      `Invalid --${option} value: ${invalid}. Expected one of: ${choices.join(', ')}`,
    )
  }
}

function getFigmaVariable(tokenPath: string): FigmaVariable {
  const [collection, ...path] = tokenPath.split('.')
  return { collection, name: path.join('/') }
}

function withFigmaVariables(
  mappings: TokenV2TailwindClassMapping[],
): FigmaTokenV2TailwindClassMapping[] {
  return mappings.map((mapping) => ({
    ...mapping,
    figmaVariables: mapping.sourceTokens.map(({ tokenPath }) =>
      getFigmaVariable(tokenPath),
    ),
  }))
}

type TokenQueryResolution =
  | { kind: 'resolved'; mappings: FigmaTokenV2TailwindClassMapping[] }
  | { kind: 'unresolved' }
  | { kind: 'ambiguous'; mappings: FigmaTokenV2TailwindClassMapping[] }

function resolveTokenQuery(
  tokenQuery: string,
  mappings: FigmaTokenV2TailwindClassMapping[],
): TokenQueryResolution {
  const canonicalTokenPath = tokenQuery.replaceAll('/', '.')
  const canonicalMatches = mappings.filter(
    ({ tokenPath, sourceTokens }) =>
      tokenPath === canonicalTokenPath ||
      sourceTokens.some(({ tokenPath }) => tokenPath === canonicalTokenPath),
  )
  if (canonicalMatches.length > 0) {
    return { kind: 'resolved', mappings: canonicalMatches }
  }

  const figmaVariableName = tokenQuery.replaceAll('.', '/')
  const figmaMatches = mappings.filter(({ figmaVariables }) =>
    figmaVariables.some(({ name }) => name === figmaVariableName),
  )
  if (figmaMatches.length === 0) return { kind: 'unresolved' }
  if (figmaMatches.length === 1) {
    return { kind: 'resolved', mappings: figmaMatches }
  }

  return { kind: 'ambiguous', mappings: figmaMatches }
}

function resolveTokenPaths(tokenQueries: string[] | undefined) {
  if (tokenQueries === undefined) return undefined

  const mappings = withFigmaVariables(getTokenV2TailwindClassMappings())
  const tokenPaths = new Set<string>()
  for (const tokenQuery of tokenQueries) {
    const resolution = resolveTokenQuery(tokenQuery, mappings)
    if (resolution.kind === 'ambiguous') {
      const candidates = resolution.mappings
        .flatMap(({ figmaVariables }) => figmaVariables)
        .filter(({ name }) => name === tokenQuery.replaceAll('.', '/'))
        .map(({ collection, name }) => `${collection}/${name}`)
        .join(', ')
      throw new TypeError(
        `Ambiguous Figma variable name: ${tokenQuery}. Specify one of: ${candidates}`,
      )
    }

    if (resolution.kind === 'resolved') {
      resolution.mappings.forEach(({ tokenPath }) => tokenPaths.add(tokenPath))
    }
  }

  return [...tokenPaths]
}

export function run(args: string[]) {
  const { values } = parseArgs({
    args,
    strict: true,
    options: {
      format: { type: 'string', default: 'json' },
      category: { type: 'string', multiple: true },
      utility: { type: 'string', multiple: true },
      token: { type: 'string', multiple: true },
      'include-theme-value': { type: 'boolean', default: false },
      'include-css-variable': { type: 'boolean', default: false },
      'include-ambiguous-utilities': { type: 'boolean', default: true },
      help: { type: 'boolean', default: false },
    },
  })

  if (values.help) return help

  assertChoices([values.format], formats, 'format')
  assertChoices(values.category, categories, 'category')
  assertChoices(values.utility, utilities, 'utility')

  const mappings = withFigmaVariables(
    getTokenV2TailwindClassMappings({
      categories: values.category,
      utilities: values.utility,
      tokens: resolveTokenPaths(values.token),
      includeThemeValue: values['include-theme-value'],
      includeCssVariable: values['include-css-variable'],
      includeAmbiguousUtilities: values['include-ambiguous-utilities'],
    }),
  )

  return formatMappings(mappings, values.format as OutputFormat)
}
