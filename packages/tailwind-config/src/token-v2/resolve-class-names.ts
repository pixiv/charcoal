import type { TokenV2TailwindThemeKey } from './types'

const utilityDefinitions = [
  { themeKey: 'colors', property: 'color', prefix: 'text' },
  { themeKey: 'colors', property: 'background-color', prefix: 'bg' },
  { themeKey: 'colors', property: 'fill', prefix: 'fill' },
  { themeKey: 'colors', property: 'stroke', prefix: 'stroke' },
  { themeKey: 'borderColor', property: 'border-color', prefix: 'border' },
  {
    themeKey: 'borderColor',
    property: 'border-top-color',
    prefix: 'border-t',
  },
  {
    themeKey: 'borderColor',
    property: 'border-right-color',
    prefix: 'border-r',
  },
  {
    themeKey: 'borderColor',
    property: 'border-bottom-color',
    prefix: 'border-b',
  },
  {
    themeKey: 'borderColor',
    property: 'border-left-color',
    prefix: 'border-l',
  },
  { themeKey: 'borderWidth', property: 'border-width', prefix: 'border' },
  {
    themeKey: 'borderWidth',
    property: 'border-top-width',
    prefix: 'border-t',
  },
  {
    themeKey: 'borderWidth',
    property: 'border-right-width',
    prefix: 'border-r',
  },
  {
    themeKey: 'borderWidth',
    property: 'border-bottom-width',
    prefix: 'border-b',
  },
  {
    themeKey: 'borderWidth',
    property: 'border-left-width',
    prefix: 'border-l',
  },
  { themeKey: 'borderRadius', property: 'border-radius', prefix: 'rounded' },
  {
    themeKey: 'borderRadius',
    property: 'border-top-left-radius',
    prefix: 'rounded-tl',
  },
  {
    themeKey: 'borderRadius',
    property: 'border-top-right-radius',
    prefix: 'rounded-tr',
  },
  {
    themeKey: 'borderRadius',
    property: 'border-bottom-right-radius',
    prefix: 'rounded-br',
  },
  {
    themeKey: 'borderRadius',
    property: 'border-bottom-left-radius',
    prefix: 'rounded-bl',
  },
  { themeKey: 'fontSize', property: 'font-size', prefix: 'text' },
  { themeKey: 'fontWeight', property: 'font-weight', prefix: 'font' },
  { themeKey: 'spacing', property: 'margin', prefix: 'm' },
  { themeKey: 'spacing', property: 'margin-top', prefix: 'mt' },
  { themeKey: 'spacing', property: 'margin-right', prefix: 'mr' },
  { themeKey: 'spacing', property: 'margin-bottom', prefix: 'mb' },
  { themeKey: 'spacing', property: 'margin-left', prefix: 'ml' },
  { themeKey: 'spacing', property: 'padding', prefix: 'p' },
  { themeKey: 'spacing', property: 'padding-top', prefix: 'pt' },
  { themeKey: 'spacing', property: 'padding-right', prefix: 'pr' },
  { themeKey: 'spacing', property: 'padding-bottom', prefix: 'pb' },
  { themeKey: 'spacing', property: 'padding-left', prefix: 'pl' },
  { themeKey: 'spacing', property: 'inset', prefix: 'inset' },
  { themeKey: 'spacing', property: 'top', prefix: 'top' },
  { themeKey: 'spacing', property: 'right', prefix: 'right' },
  { themeKey: 'spacing', property: 'bottom', prefix: 'bottom' },
  { themeKey: 'spacing', property: 'left', prefix: 'left' },
  { themeKey: 'spacing', property: 'min-width', prefix: 'min-w' },
  { themeKey: 'spacing', property: 'max-width', prefix: 'max-w' },
  { themeKey: 'spacing', property: 'height', prefix: 'h' },
  { themeKey: 'spacing', property: 'min-height', prefix: 'min-h' },
  { themeKey: 'spacing', property: 'max-height', prefix: 'max-h' },
  { themeKey: 'gap', property: 'gap', prefix: 'gap' },
  { themeKey: 'gap', property: 'row-gap', prefix: 'gap-y' },
  { themeKey: 'gap', property: 'column-gap', prefix: 'gap-x' },
  { themeKey: 'width', property: 'width', prefix: 'w' },
] as const satisfies readonly {
  themeKey: TokenV2TailwindThemeKey
  property: string
  prefix: string
}[]

export type SupportedTokenV2CSSProperty =
  (typeof utilityDefinitions)[number]['property']

export type TokenV2ClassCandidate = Readonly<{
  property: SupportedTokenV2CSSProperty
  className: string
  themeKey: TokenV2TailwindThemeKey
}>

const supportedProperties = new Set<string>(
  utilityDefinitions.map(({ property }) => property),
)

const utilityDefinitionsByThemeKey = new Map<
  TokenV2TailwindThemeKey,
  readonly (typeof utilityDefinitions)[number][]
>()
for (const definition of utilityDefinitions) {
  const definitions = utilityDefinitionsByThemeKey.get(definition.themeKey) ?? []
  utilityDefinitionsByThemeKey.set(definition.themeKey, [
    ...definitions,
    definition,
  ])
}

export function isSupportedTokenV2CSSProperty(
  property: string,
): property is SupportedTokenV2CSSProperty {
  return supportedProperties.has(property)
}

export function resolveTokenV2ClassCandidates(input: {
  themeKey: TokenV2TailwindThemeKey
  modifier: string
  property?: string
}): readonly TokenV2ClassCandidate[] {
  const definitions = utilityDefinitionsByThemeKey.get(input.themeKey) ?? []
  return definitions
    .filter(
      (definition) =>
        input.property === undefined || definition.property === input.property,
    )
    .map(({ property, prefix, themeKey }) => ({
      property,
      className: `${prefix}-${input.modifier}`,
      themeKey,
    }))
}
