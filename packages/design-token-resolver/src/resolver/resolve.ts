import { _resolveTokenV2ClassNames } from '@charcoal-ui/tailwind-config/token-v2'
import { appliedTokenIndex } from './applied-token-index'
import { resolveTokenName } from './resolve-name'
import type {
  AppliedTokenEntry,
  BatchResolutionResponse,
  ResolutionDiagnostic,
  SingleResolutionResponse,
  TailwindCandidate,
  TokenQuery,
  TokenResolutionResult,
} from './types'

function token(entry: AppliedTokenEntry) {
  return { canonicalPath: entry.canonicalPath }
}

function resolvedResult(
  query: TokenQuery,
  entry: AppliedTokenEntry,
  candidates: readonly TailwindCandidate[],
  diagnostics: readonly ResolutionDiagnostic[],
): TokenResolutionResult {
  return {
    query,
    status: 'resolved',
    token: token(entry),
    css: { variable: entry.cssVariable, reference: entry.cssReference },
    tailwind: { candidates },
    diagnostics,
  }
}

function resolveUniqueToken(
  query: TokenQuery,
  entry: AppliedTokenEntry,
  diagnostics: readonly ResolutionDiagnostic[],
): TokenResolutionResult {
  if (query.property === undefined) {
    return resolvedResult(query, entry, [], diagnostics)
  }

  const tailwind = _resolveTokenV2ClassNames({
    canonicalPath: entry.canonicalPath,
    property: query.property,
  })

  if (tailwind.status === 'resolved') {
    return resolvedResult(query, entry, tailwind.candidates, diagnostics)
  }
  if (tailwind.status === 'binding_not_found') {
    return resolvedResult(
      query,
      entry,
      [],
      [...diagnostics, { code: 'tailwind_binding_not_found' }],
    )
  }

  return {
    query,
    status: tailwind.status,
    token: token(entry),
    diagnostics,
  }
}

function propertyCompatibleEntries(
  entries: readonly AppliedTokenEntry[],
  property: string,
): readonly AppliedTokenEntry[] {
  return entries.filter(
    (entry) =>
      _resolveTokenV2ClassNames({
        canonicalPath: entry.canonicalPath,
        property,
      }).status === 'resolved',
  )
}

export function resolveToken(query: TokenQuery): TokenResolutionResult {
  const nameResolution = resolveTokenName(appliedTokenIndex, query)

  if (nameResolution.status === 'not_found') {
    return {
      query,
      status: 'not_found',
      diagnostics: nameResolution.diagnostics,
    }
  }

  if (nameResolution.status === 'resolved') {
    return resolveUniqueToken(
      query,
      nameResolution.entry,
      nameResolution.diagnostics,
    )
  }

  const compatibleEntries =
    query.property === undefined
      ? nameResolution.candidates
      : propertyCompatibleEntries(nameResolution.candidates, query.property)
  const candidates =
    compatibleEntries.length === 0
      ? nameResolution.candidates
      : compatibleEntries

  if (compatibleEntries.length === 1) {
    const [entry] = compatibleEntries
    if (entry === undefined) {
      throw new Error('A single compatible token entry was expected.')
    }
    return resolveUniqueToken(query, entry, nameResolution.diagnostics)
  }

  return {
    query,
    status: 'ambiguous',
    candidates: candidates.map((entry) => entry.canonicalPath),
    diagnostics: nameResolution.diagnostics,
  }
}

export function resolveSingleQuery(
  query: TokenQuery,
): SingleResolutionResponse {
  return { schemaVersion: 1, ...resolveToken(query) }
}

export function resolveBatchQueries(
  queries: readonly TokenQuery[],
): BatchResolutionResponse {
  return { schemaVersion: 1, results: queries.map(resolveToken) }
}
