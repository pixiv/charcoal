export type Tailwind = {
  key: string
  recommended: string[]
  alsoValid: string[]
}

export type IndexRecord = {
  layer: 'semantic' | 'primitive'
  tokenPath: string
  figma: string
  css: string
  category?: string
  group?: string
  kind?: string
  cssUsage?: string
  tailwind?: Tailwind
  mapping?: {
    tokenPath: string
    classCandidates: unknown[]
  }
  familyKey?: string
  state?: string
  recommendedSemantic?: { figma: string; reason?: string }[]
  notes?: string[]
  keys: string[]
}

export type TokenIndex = {
  source: {
    mappingPackageVersion: string
    mappingHash: string
  }
  records: IndexRecord[]
}
