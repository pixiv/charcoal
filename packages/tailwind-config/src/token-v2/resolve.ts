import light from '@charcoal-ui/theme/tokens/css-variables.json' with { type: 'json' }
import { createTokenV2TailwindBindings } from './definition'
import {
  isSupportedTokenV2CSSProperty,
  resolveTokenV2ClassCandidates,
} from './resolve-class-names'
import type {
  SupportedTokenV2CSSProperty,
  TokenV2ClassCandidate,
} from './resolve-class-names'
import type { TokenV2CssVariables } from './types'

type ResolveTokenV2ClassNamesResult =
  | Readonly<{
      status: 'resolved'
      candidates: readonly TokenV2ClassCandidate[]
    }>
  | Readonly<{
      status: 'binding_not_found'
    }>
  | Readonly<{
      status: 'unsupported_property'
      property: string
    }>
  | Readonly<{
      status: 'incompatible_property'
      property: SupportedTokenV2CSSProperty
    }>

const bindings = createTokenV2TailwindBindings(light as TokenV2CssVariables)

/**
 * @remarks Charcoal package間連携専用。外部利用はサポートしない。
 */
export function _resolveTokenV2ClassNames(input: {
  canonicalPath: string
  property?: string
}): ResolveTokenV2ClassNamesResult {
  const matchingBindings = bindings.filter(
    (binding) => binding.canonicalPath === input.canonicalPath,
  )

  if (matchingBindings.length === 0) {
    return { status: 'binding_not_found' }
  }

  if (
    input.property !== undefined &&
    !isSupportedTokenV2CSSProperty(input.property)
  ) {
    return { status: 'unsupported_property', property: input.property }
  }

  const candidates = matchingBindings.flatMap(({ themeKey, modifier }) =>
    resolveTokenV2ClassCandidates({
      themeKey,
      modifier,
      property: input.property,
    }).map((candidate) => ({ ...candidate })),
  )

  if (candidates.length === 0 && input.property !== undefined) {
    return { status: 'incompatible_property', property: input.property }
  }

  return { status: 'resolved', candidates }
}
