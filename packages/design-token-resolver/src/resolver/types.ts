export type AppliedTokenEntry = Readonly<{
  canonicalPath: string
  figmaName: string
  cssVariable: string
  cssReference: string
}>

export type AppliedTokenIndex = Readonly<{
  entries: readonly AppliedTokenEntry[]
  byCanonicalPath: ReadonlyMap<string, readonly AppliedTokenEntry[]>
  byFigmaName: ReadonlyMap<string, readonly AppliedTokenEntry[]>
}>
