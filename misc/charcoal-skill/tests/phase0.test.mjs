import { cpSync, mkdtempSync, rmSync, symlinkSync } from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { afterEach, describe, expect, test } from 'vitest'

const skillRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../../../skills/charcoal',
)
const script = path.join(skillRoot, 'scripts', 'resolve.mjs')
const temporaryDirectories = []

function temporaryDirectory() {
  const directory = mkdtempSync(path.join(tmpdir(), 'charcoal-phase0-'))
  temporaryDirectories.push(directory)
  return directory
}

function invoke(cwd, scriptPath, ...args) {
  return spawnSync(process.execPath, [scriptPath, ...args], {
    cwd,
    encoding: 'utf8',
  })
}

function jsonResult(result) {
  expect(result.status).toBe(0)
  expect(result.stderr).toBe('')
  return JSON.parse(result.stdout)
}

function expectPrimaryResult(result) {
  expect(jsonResult(result)).toMatchObject({
    figma: 'color/container/primary/default',
    css: '--charcoal-color-container-primary-default',
  })
}

afterEach(() => {
  for (const directory of temporaryDirectories.splice(0)) {
    rmSync(directory, { recursive: true, force: true })
  }
})

describe('CLI path portability', () => {
  test('an external CWD and absolute script path work, proving data is not CWD-relative', () => {
    const externalCwd = temporaryDirectory()

    expect(
      jsonResult(
        invoke(
          externalCwd,
          script,
          'resolve',
          'color/container/primary/default',
        ),
      ),
    ).toMatchObject({
      ok: true,
      figma: 'color/container/primary/default',
      css: '--charcoal-color-container-primary-default',
    })
  })

  test('pins the representative successful CLI results', () => {
    const cwd = temporaryDirectory()

    expect(
      jsonResult(
        invoke(cwd, script, 'resolve', 'color/container/primary/default'),
      ),
    ).toMatchObject({
      ok: true,
      figma: 'color/container/primary/default',
      tailwind: { recommended: ['bg-container-primary'] },
    })
    expect(
      jsonResult(
        invoke(cwd, script, 'resolve', '--charcoal-color-text-default'),
      ),
    ).toMatchObject({
      ok: true,
      figma: 'color/text/default',
      css: '--charcoal-color-text-default',
    })
    const japaneseSearch = jsonResult(
      invoke(cwd, script, 'search', 'プライマリボタンの背景'),
    )
    expect(japaneseSearch.ok).toBe(true)
    expect(japaneseSearch.results[0]).toMatchObject({
      figma: 'color/container/primary/default',
      css: '--charcoal-color-container-primary-default',
    })
    expect(
      jsonResult(
        invoke(cwd, script, 'family', 'color/container/primary/default'),
      ),
    ).toMatchObject({
      ok: true,
      figma: 'color/container/primary/default',
      members: {
        default: { css: '--charcoal-color-container-primary-default' },
        hover: { css: '--charcoal-color-container-primary-hover' },
        press: { css: '--charcoal-color-container-primary-press' },
      },
    })
  })

  test('the documented skill-root-relative command works', () => {
    expectPrimaryResult(
      invoke(
        skillRoot,
        'scripts/resolve.mjs',
        'resolve',
        'color/container/primary/default',
      ),
    )
  })

  test('a direct symlink to the CLI executes and writes JSON', () => {
    const directory = temporaryDirectory()
    const symlink = path.join(directory, 'resolve.mjs')
    symlinkSync(script, symlink)

    expectPrimaryResult(
      invoke(directory, symlink, 'resolve', 'color/container/primary/default'),
    )
  })

  test('a symlinked Skill directory resolves bundled data and imports', () => {
    const directory = temporaryDirectory()
    const linkedSkill = path.join(directory, 'charcoal')
    symlinkSync(skillRoot, linkedSkill)

    expectPrimaryResult(
      invoke(
        directory,
        path.join(linkedSkill, 'scripts', 'resolve.mjs'),
        'resolve',
        'color/container/primary/default',
      ),
    )
  })

  test('a symlinked Skill parent directory resolves bundled data and imports', () => {
    const directory = temporaryDirectory()
    const linkedParent = path.join(directory, 'skills')
    symlinkSync(path.dirname(skillRoot), linkedParent)

    expectPrimaryResult(
      invoke(
        directory,
        path.join(linkedParent, 'charcoal', 'scripts', 'resolve.mjs'),
        'resolve',
        'color/container/primary/default',
      ),
    )
  })

  test('an independently copied Skill directory needs no repository context', () => {
    const directory = temporaryDirectory()
    const copiedSkill = path.join(directory, 'copied-charcoal')
    cpSync(skillRoot, copiedSkill, { recursive: true })

    expectPrimaryResult(
      invoke(
        temporaryDirectory(),
        path.join(copiedSkill, 'scripts', 'resolve.mjs'),
        'resolve',
        'color/container/primary/default',
      ),
    )
  })

  test('a Skill path containing spaces executes', () => {
    const directory = temporaryDirectory()
    const copiedSkill = path.join(directory, 'charcoal skill with spaces')
    cpSync(skillRoot, copiedSkill, { recursive: true })

    expectPrimaryResult(
      invoke(
        temporaryDirectory(),
        path.join(copiedSkill, 'scripts', 'resolve.mjs'),
        'resolve',
        'color/container/primary/default',
      ),
    )
  })

  test('importing resolve.mjs does not execute the CLI', () => {
    const result = spawnSync(
      process.execPath,
      ['--input-type=module', '--eval', `import ${JSON.stringify(script)}`],
      { cwd: temporaryDirectory(), encoding: 'utf8' },
    )

    expect(result.status).toBe(0)
    expect(result.stdout).toBe('')
    expect(result.stderr).toBe('')
  })

  test.fails(
    'English primary-button search should rank the same first result as Japanese',
    () => {
      const result = jsonResult(
        invoke(
          temporaryDirectory(),
          script,
          'search',
          'primary button background',
        ),
      )

      expect(result.results[0]).toMatchObject({
        figma: 'color/container/primary/default',
      })
    },
  )
})
