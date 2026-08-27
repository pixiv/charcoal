import { readFileSync } from 'node:fs'
import { describe, expect, test } from 'vitest'
import { buildIndex, indexPath, writeIndex } from '../generate.ts'

describe('generate index', () => {
  test('index.json is regenerated from mapping API and theme JSON', () => {
    if (process.env.GENERATE_INDEX === '1') {
      writeIndex()
    }
    expect(JSON.parse(readFileSync(indexPath, 'utf8'))).toEqual(buildIndex())
  })
})
