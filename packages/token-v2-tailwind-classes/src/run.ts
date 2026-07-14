import {
  getTokenV2TailwindClassMappings,
  type TokenV2Category,
  type TokenV2Utility,
} from '@charcoal-ui/tailwind-config'
import { parseArgs } from 'node:util'
import { formatMappings, type OutputFormat } from './format'

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

function normalizeTokenPath(tokenPath: string) {
  return tokenPath.replaceAll('/', '.')
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

  const mappings = getTokenV2TailwindClassMappings({
    categories: values.category,
    utilities: values.utility,
    tokens: values.token?.map(normalizeTokenPath),
    includeThemeValue: values['include-theme-value'],
    includeCssVariable: values['include-css-variable'],
    includeAmbiguousUtilities: values['include-ambiguous-utilities'],
  })

  return formatMappings(mappings, values.format as OutputFormat)
}
