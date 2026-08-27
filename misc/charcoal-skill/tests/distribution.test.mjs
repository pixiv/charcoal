import { execFileSync } from 'node:child_process'
import { readdirSync, readFileSync } from 'node:fs'
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
  'scripts/cli-output.schema.json',
  'scripts/lookup/normalize.mjs',
  'scripts/lookup/query.mjs',
  'scripts/lookup/search.mjs',
  'scripts/lookup/types.d.ts',
  'scripts/lookup/validate.mjs',
])

const monorepoOnlyPattern =
  /@charcoal-ui\/|generate\.ts|misc\/charcoal-skill|sources\.mjs/u

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

function collectFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name)
    return entry.isDirectory() ? collectFiles(fullPath) : [fullPath]
  })
}

describe('charcoal skill distribution tree', () => {
  test('contains only runtime files', () => {
    expect(new Set(trackedRuntimeFiles())).toEqual(runtimeFiles)
  })

  test('runtime does not reference monorepo-only code', () => {
    const scriptsDir = path.join(repoRoot, 'skills/charcoal/scripts')
    const hits = collectFiles(scriptsDir).flatMap((file) =>
      monorepoOnlyPattern.test(readFileSync(file, 'utf8'))
        ? [path.relative(repoRoot, file)]
        : [],
    )
    expect(hits).toEqual([])
  })
})
