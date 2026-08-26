import { existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, test } from 'vitest'
import { dumpPackageFold, sources } from './sources.mjs'

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../../../..',
)

describe('lookup data sources', () => {
  test('conversion sources exist as files, not copied logic', () => {
    for (const relative of [
      sources.mappingApi,
      sources.themeEntries,
      sources.cssTokenObject,
      sources.semanticThemeJson,
      sources.primitiveThemeJson,
      sources.dumpPackage,
    ]) {
      expect(existsSync(path.join(repoRoot, relative)), relative).toBe(true)
    }
  })

  test('Agent entry lives outside packages/', () => {
    expect(sources.agentEntry.startsWith('skills/charcoal/')).toBe(true)
    expect(dumpPackageFold.publish).toBe(false)
  })
})
