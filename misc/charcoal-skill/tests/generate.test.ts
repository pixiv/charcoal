import { readdirSync, readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { getTokenV2TailwindClassMappings } from '../../../packages/tailwind-config/src/tokenV2Mappings'
import { describe, expect, test } from 'vitest'
import {
  aliasReverseMap,
  buildIndex,
  canonicalJson,
  canonicalMappingPayload,
  indexPath,
  type JsonValue,
  sha256,
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

  test('canonical hashes ignore object key order but preserve meaningful array order', () => {
    const differentKeyOrder = {
      nested: { z: 'last', a: 'first' },
      values: ['first', 'second'],
    }
    const equivalent = {
      values: ['first', 'second'],
      nested: { a: 'first', z: 'last' },
    }
    const differentArrayOrder = {
      nested: { a: 'first', z: 'last' },
      values: ['second', 'first'],
    }

    expect(canonicalJson(differentKeyOrder)).toBe(canonicalJson(equivalent))
    expect(sha256(differentKeyOrder)).toBe(sha256(equivalent))
    expect(sha256(differentArrayOrder)).not.toBe(sha256(equivalent))
    expect(canonicalJson({ '\u{10000}': 2, '\uE000': 1 })).toBe('{"":1,"𐀀":2}')
    expect(sha256(equivalent)).toMatch(/^sha256:[0-9a-f]{64}$/u)
  })

  test('mapping payload sorts records, candidates, and source tokens', () => {
    const first = [
      {
        tokenPath: 'z',
        cssVariable: '--z',
        classCandidates: [
          { className: 'z-last', cssProperties: ['z', 'a'], utility: 'z' },
          { className: 'z-first', cssProperties: ['a', 'z'], utility: 'z' },
        ],
        sourceTokens: [{ tokenPath: 'z.second' }, { tokenPath: 'z.first' }],
      },
      {
        tokenPath: 'a',
        cssVariable: '--a',
        classCandidates: [],
        sourceTokens: [],
      },
    ]
    const second = [
      {
        sourceTokens: [],
        classCandidates: [],
        tokenPath: 'a',
        cssVariable: '--a',
      },
      {
        sourceTokens: [{ tokenPath: 'z.first' }, { tokenPath: 'z.second' }],
        classCandidates: [
          { utility: 'z', cssProperties: ['a', 'z'], className: 'z-first' },
          { utility: 'z', cssProperties: ['z', 'a'], className: 'z-last' },
        ],
        cssVariable: '--z',
        tokenPath: 'z',
      },
    ]

    expect(
      sha256(
        canonicalMappingPayload(
          first as unknown as ReturnType<
            typeof getTokenV2TailwindClassMappings
          >,
        ) as unknown as JsonValue,
      ),
    ).toBe(
      sha256(
        canonicalMappingPayload(
          second as unknown as ReturnType<
            typeof getTokenV2TailwindClassMappings
          >,
        ) as unknown as JsonValue,
      ),
    )
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
