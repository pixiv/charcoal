import { readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, test } from 'vitest'
import { help } from './scripts/resolve.mjs'

const root = path.dirname(fileURLToPath(import.meta.url))

function read(relative) {
  return readFileSync(path.join(root, relative), 'utf8')
}

describe('charcoal skill docs', () => {
  const skill = read('SKILL.md')

  test('SKILL.md documents the resolve commands from help', () => {
    for (const command of [
      'node scripts/resolve.mjs resolve <query>',
      'node scripts/resolve.mjs search <intent>',
      'node scripts/resolve.mjs family <token>',
    ]) {
      expect(skill).toContain(command)
      expect(help).toContain(command)
    }
  })

  test('linked markdown files exist and do not embed token tables', () => {
    const linked = [...skill.matchAll(/\(([^)]+\.md)\)/g)].map(
      ([, href]) => href,
    )
    expect(linked.length).toBeGreaterThan(0)
    for (const href of linked) {
      const body = read(href)
      expect(body.length).toBeGreaterThan(0)
      expect(body).not.toMatch(/\|[^|\n]*--charcoal-[^|\n]*\|/)
    }
  })
})
