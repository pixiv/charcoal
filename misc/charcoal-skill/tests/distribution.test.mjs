import { execFileSync, spawnSync } from 'node:child_process'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, test } from 'vitest'

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../../..',
)

const runtimeFiles = new Set([
  'SKILL.md',
  'data/index.json',
  'references/css.md',
  'references/figma.md',
  'references/tailwind.md',
  'rules/styling.md',
  'scripts/resolve.mjs',
  'scripts/resolve.schema.json',
  'scripts/lookup/normalize.mjs',
  'scripts/lookup/query.mjs',
  'scripts/lookup/search.mjs',
  'scripts/lookup/types.d.ts',
  'scripts/lookup/validate.mjs',
])

function trackedRuntimeFiles() {
  return execFileSync('git', ['ls-files', '--', 'skills/charcoal'], {
    cwd: repoRoot,
    encoding: 'utf8',
  })
    .trim()
    .split('\n')
    .filter(Boolean)
    .map((file) => file.replace(/^skills\/charcoal\//u, ''))
}

describe('charcoal skill distribution tree', () => {
  test('contains only runtime files', () => {
    expect(new Set(trackedRuntimeFiles())).toEqual(runtimeFiles)
  })

  test('runtime does not reference monorepo-only code', () => {
    const result = spawnSync(
      'rg',
      [
        '-n',
        "@charcoal-ui/|generate\\.ts|misc/charcoal-skill|sources\\.mjs",
        'skills/charcoal/scripts',
      ],
      { cwd: repoRoot, encoding: 'utf8' },
    )
    expect(result.status).toBe(1)
    expect(result.stdout).toBe('')
  })
})
