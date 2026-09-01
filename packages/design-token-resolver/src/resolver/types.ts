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

export type TokenQuery = Readonly<{
  name: string
  collection?: string
}>

export type ResolutionDiagnostic = Readonly<{
  code: 'case_normalized'
}>

export type NameResolution =
  | Readonly<{
      status: 'resolved'
      entry: AppliedTokenEntry
      diagnostics: readonly ResolutionDiagnostic[]
    }>
  | Readonly<{
      status: 'ambiguous'
      candidates: readonly AppliedTokenEntry[]
      diagnostics: readonly ResolutionDiagnostic[]
    }>
  | Readonly<{
      status: 'not_found'
      diagnostics: readonly ResolutionDiagnostic[]
    }>
