import { normalizeQueryName } from './normalize-query'
import type {
  AppliedTokenEntry,
  AppliedTokenIndex,
  NameResolution,
  TokenQuery,
} from './types'

function collectionOf(entry: AppliedTokenEntry): string {
  return entry.canonicalPath.split('/')[0] ?? ''
}

function filterByCollection(
  entries: readonly AppliedTokenEntry[],
  collection: string | undefined,
): readonly AppliedTokenEntry[] {
  return collection === undefined
    ? entries
    : entries.filter((entry) => collectionOf(entry) === collection)
}

function completeResolution(
  candidates: readonly AppliedTokenEntry[],
  caseNormalized: boolean,
): NameResolution {
  const diagnostics = caseNormalized
    ? [{ code: 'case_normalized' } as const]
    : []

  if (candidates.length === 0) {
    return { status: 'not_found', diagnostics }
  }
  if (candidates.length === 1) {
    const [entry] = candidates
    if (entry === undefined) {
      throw new Error('A single token candidate was expected.')
    }
    return { status: 'resolved', entry, diagnostics }
  }
  return { status: 'ambiguous', candidates, diagnostics }
}

export function resolveTokenName(
  index: AppliedTokenIndex,
  query: TokenQuery,
): NameResolution {
  const normalized = normalizeQueryName(query.name)
  const [firstSegment] = normalized.segments
  if (firstSegment === undefined) {
    throw new Error('Normalized token name must contain a path segment.')
  }
  const collections = new Set(index.entries.map(collectionOf))
  const hasCollection = [...collections].some(
    (collection) => collection.toLowerCase() === firstSegment.toLowerCase(),
  )
  const exactCandidates = filterByCollection(
    hasCollection
      ? (index.byCanonicalPath.get(normalized.name) ?? [])
      : (index.byFigmaName.get(normalized.name) ?? []),
    query.collection,
  )

  if (exactCandidates.length > 0) {
    return completeResolution(exactCandidates, false)
  }

  const caseInsensitiveCandidates = filterByCollection(
    index.entries.filter(
      (entry) =>
        (hasCollection
          ? entry.canonicalPath
          : entry.figmaName
        ).toLowerCase() === normalized.name.toLowerCase(),
    ),
    query.collection,
  )

  return completeResolution(
    caseInsensitiveCandidates,
    caseInsensitiveCandidates.length === 1,
  )
}
