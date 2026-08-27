import { mkdtempSync, rmSync, symlinkSync } from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { afterEach, describe, expect, test } from 'vitest'

const skillRoot = path.dirname(fileURLToPath(import.meta.url))
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

afterEach(() => {
  for (const directory of temporaryDirectories.splice(0)) {
    rmSync(directory, { recursive: true, force: true })
  }
})

describe('Phase 0 subprocess baseline', () => {
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

  test.fails(
    'the documented repo-relative command does not resolve from an external CWD',
    () => {
      const result = invoke(
        temporaryDirectory(),
        'skills/charcoal/scripts/resolve.mjs',
        'resolve',
        'color/container/primary/default',
      )

      expect(jsonResult(result)).toMatchObject({
        figma: 'color/container/primary/default',
      })
    },
  )

  test.fails(
    'a symlink launch should execute the CLI and write its JSON result',
    () => {
      const directory = temporaryDirectory()
      const symlink = path.join(directory, 'resolve.mjs')
      symlinkSync(script, symlink)

      expect(
        jsonResult(
          invoke(
            directory,
            symlink,
            'resolve',
            'color/container/primary/default',
          ),
        ),
      ).toMatchObject({
        figma: 'color/container/primary/default',
      })
    },
  )

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
