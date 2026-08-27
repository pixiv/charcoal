import { readFileSync } from 'node:fs'
import { getTokenV2TailwindClassMappings } from '@charcoal-ui/tailwind-config'
import { describe, expect, test } from 'vitest'
import { buildIndex, indexPath, writeIndex } from './generate.ts'
import { run } from './resolve.mjs'

describe('generate index', () => {
  test('index.json is regenerated from mapping API and theme JSON', () => {
    if (process.env.GENERATE_INDEX === '1') {
      writeIndex()
    }
    expect(JSON.parse(readFileSync(indexPath, 'utf8'))).toEqual(buildIndex())
  })

  test('icon.default recommends text-* and keeps fill/stroke as alsoValid', () => {
    const record = buildIndex().records.find(
      (item) => item.tokenPath === 'color.icon.default',
    )
    expect(record).toMatchObject({
      cssUsage: 'color: var(--charcoal-color-icon-default)',
      tailwind: {
        recommended: ['text-icon'],
        alsoValid: ['fill-icon', 'stroke-icon'],
      },
    })
    expect(record?.keys).toEqual(
      expect.arrayContaining(['text-icon', 'fill-icon', 'stroke-icon']),
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
