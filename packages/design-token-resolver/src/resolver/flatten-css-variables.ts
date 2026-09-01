import type { AppliedTokenEntry, AppliedTokenIndex } from './types'

type CssVariableTree = { readonly [key: string]: string | CssVariableTree }

const cssVariableReferencePattern = /^var\((--[^)]+)\)$/

function flattenTree(
  tree: CssVariableTree,
  path: readonly string[] = [],
): AppliedTokenEntry[] {
  return Object.entries(tree).flatMap(([key, value]) => {
    const nextPath = [...path, key]

    if (typeof value !== 'string') {
      return flattenTree(value, nextPath)
    }

    const match = cssVariableReferencePattern.exec(value)
    if (match === null) {
      return []
    }

    const [collection, ...figmaPath] = nextPath
    if (collection === undefined || figmaPath.length === 0) {
      return []
    }

    return [
      {
        canonicalPath: nextPath.join('/'),
        figmaName: figmaPath.join('/'),
        cssVariable: match[1],
        cssReference: value,
      },
    ]
  })
}

function createLookup(
  entries: readonly AppliedTokenEntry[],
  key: (entry: AppliedTokenEntry) => string,
): ReadonlyMap<string, readonly AppliedTokenEntry[]> {
  const lookup = new Map<string, AppliedTokenEntry[]>()

  for (const entry of entries) {
    const entriesForKey = lookup.get(key(entry))
    if (entriesForKey === undefined) {
      lookup.set(key(entry), [entry])
    } else {
      entriesForKey.push(entry)
    }
  }

  return lookup
}

export function createAppliedTokenIndex(tree: CssVariableTree): AppliedTokenIndex {
  const entries = flattenTree(tree)

  return {
    entries,
    byCanonicalPath: createLookup(entries, (entry) => entry.canonicalPath),
    byFigmaName: createLookup(entries, (entry) => entry.figmaName),
  }
}
