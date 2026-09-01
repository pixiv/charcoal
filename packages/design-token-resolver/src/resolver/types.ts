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
  property?: string
}>

export type ResolutionDiagnostic = Readonly<{
  code: 'case_normalized' | 'tailwind_binding_not_found'
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

export type TailwindCandidate = Readonly<{
  property: string
  className: string
  themeKey: string
}>

type ResolutionResultBase = Readonly<{
  query: TokenQuery
  diagnostics: readonly ResolutionDiagnostic[]
}>

type ResolvedToken = Readonly<{
  canonicalPath: string
}>

export type TokenResolutionResult =
  | (ResolutionResultBase &
      Readonly<{
        status: 'resolved'
        token: ResolvedToken
        css: Readonly<{
          variable: string
          reference: string
        }>
        tailwind: Readonly<{
          candidates: readonly TailwindCandidate[]
        }>
      }>)
  | (ResolutionResultBase &
      Readonly<{
        status: 'ambiguous'
        candidates: readonly string[]
      }>)
  | (ResolutionResultBase &
      Readonly<{
        status: 'not_found'
      }>)
  | (ResolutionResultBase &
      Readonly<{
        status: 'unsupported_property' | 'incompatible_property'
        token: ResolvedToken
      }>)

export type SingleResolutionResponse = TokenResolutionResult &
  Readonly<{
    schemaVersion: 1
  }>

export type BatchResolutionResponse = Readonly<{
  schemaVersion: 1
  results: readonly TokenResolutionResult[]
}>
