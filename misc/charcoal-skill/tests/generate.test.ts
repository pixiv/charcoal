import { readdirSync, readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { getTokenV2TailwindClassMappings } from '@charcoal-ui/tailwind-config'
import { describe, expect, test } from 'vitest'
import {
  aliasReverseMap,
  buildIndex,
  indexPath,
  writeIndex,
} from '../generate.ts'
import { run } from '../../../skills/charcoal/scripts/resolve.mjs'

describe('generate index', () => {
  test('index.json is regenerated from mapping API and theme JSON', () => {
    if (process.env.GENERATE_INDEX === '1') {
      writeIndex()
    }
    expect(JSON.parse(readFileSync(indexPath, 'utf8'))).toEqual(buildIndex())
  })
})

describe('recommended class reverse lookup', () => {
  test('every mapping recommended class resolves back to its token', () => {
    const mappings = getTokenV2TailwindClassMappings({
      includeCssVariable: true,
    })

    for (const mapping of mappings) {
      for (const { className } of mapping.classCandidates) {
        const result = JSON.parse(run(['resolve', className]).stdout)
        expect(result.ok, className).toBe(true)
        expect(result.figma, className).toBe(
          mapping.tokenPath.replaceAll('.', '/'),
        )
      }
    }
  })
})

describe('primitive semantic recommendations by theme', () => {
  const fixtureDir = path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    '../fixtures/theme-recommendations',
  )

  test.each(
    readdirSync(fixtureDir)
      .filter((name) => name.endsWith('.json'))
      .sort(),
  )('%s merges light/dark aliases into sorted unique themes', (fixtureName) => {
    const fixture = JSON.parse(
      readFileSync(path.join(fixtureDir, fixtureName), 'utf8'),
    )
    const recommendations = aliasReverseMap({
      light: fixture.light,
      dark: fixture.dark,
    })

    expect(Object.fromEntries(recommendations)).toEqual(fixture.expected)
  })
})
