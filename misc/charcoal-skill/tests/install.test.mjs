import { execFileSync, spawnSync } from 'node:child_process'
import {
  cpSync,
  lstatSync,
  mkdtempSync,
  mkdirSync,
  renameSync,
  rmSync,
  symlinkSync,
  writeFileSync,
} from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { afterEach, describe, expect, test } from 'vitest'

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../../..',
)
const skillRoot = path.join(repoRoot, 'skills', 'charcoal')
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
const temporaryDirectories = []

function temporaryDirectory() {
  const directory = mkdtempSync(path.join(tmpdir(), 'charcoal-install-'))
  temporaryDirectories.push(directory)
  return directory
}

function git(directory, ...args) {
  return execFileSync('git', args, { cwd: directory, encoding: 'utf8' })
}

function installedFiles(directory) {
  return execFileSync('find', ['.', '-type', 'f'], {
    cwd: directory,
    encoding: 'utf8',
  })
    .trim()
    .split('\n')
    .filter(Boolean)
    .map((file) => file.replace(/^\.\//u, ''))
}

function invoke(cwd, script, ...args) {
  return spawnSync(process.execPath, [script, ...args], {
    cwd,
    encoding: 'utf8',
  })
}

function jsonResult(result) {
  expect(result.status).toBe(0)
  expect(result.stderr).toBe('')
  expect(result.stdout).not.toBe('')
  return JSON.parse(result.stdout)
}

function expectMinimumContracts(consumer, installedSkill) {
  expect(
    jsonResult(
      invoke(
        consumer,
        path.join(installedSkill, 'scripts', 'resolve.mjs'),
        'resolve',
        'color/container/primary/default',
      ),
    ),
  ).toMatchObject({
    ok: true,
    figma: 'color/container/primary/default',
    css: '--charcoal-color-container-primary-default',
  })

  const search = jsonResult(
    invoke(
      consumer,
      path.join(installedSkill, 'scripts', 'resolve.mjs'),
      'search',
      'プライマリボタンの背景',
    ),
  )
  expect(search).toMatchObject({ ok: true })
  expect(search.results[0]).toMatchObject({
    figma: 'color/container/primary/default',
    css: '--charcoal-color-container-primary-default',
  })

  expect(
    jsonResult(
      invoke(
        consumer,
        path.join(installedSkill, 'scripts', 'resolve.mjs'),
        'family',
        'color/container/primary/default',
      ),
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
}

afterEach(() => {
  for (const directory of temporaryDirectories.splice(0)) {
    rmSync(directory, { recursive: true, force: true })
  }
})

describe('Codex copy install', () => {
  test('installs a self-contained runtime-only Skill into an isolated consumer', () => {
    const directory = temporaryDirectory()
    const source = path.join(directory, 'source')
    const consumer = path.join(directory, 'consumer')
    const unavailableSource = path.join(directory, 'source-unavailable')

    const sourceSkill = path.join(source, 'skills', 'charcoal')
    for (const file of runtimeFiles) {
      const destination = path.join(sourceSkill, file)
      mkdirSync(path.dirname(destination), { recursive: true })
      cpSync(path.join(skillRoot, file), destination)
    }
    git(source, 'init')
    git(source, 'add', '.')
    git(
      source,
      '-c',
      'user.name=Charcoal Skill Test',
      '-c',
      'user.email=charcoal-skill-test@example.invalid',
      'commit',
      '-m',
      'add charcoal skill',
    )

    mkdirSync(consumer)
    git(consumer, 'init')
    writeFileSync(
      path.join(consumer, 'package.json'),
      '{"name":"charcoal-install-consumer","private":true}\n',
    )
    // Make the consumer's pnpm invocation use this repository's pinned CLI.
    symlinkSync(
      path.join(repoRoot, 'node_modules'),
      path.join(consumer, 'node_modules'),
    )

    const install = spawnSync(
      'pnpm',
      [
        'exec',
        'skills',
        'add',
        source,
        '--skill',
        'charcoal',
        '--agent',
        'codex',
        '--copy',
        '--yes',
      ],
      { cwd: consumer, encoding: 'utf8' },
    )
    expect(
      install.status,
      `skills add failed:\nstdout:\n${install.stdout}\nstderr:\n${install.stderr}`,
    ).toBe(0)

    const installedSkill = path.join(consumer, '.agents', 'skills', 'charcoal')
    expect(path.join(installedSkill, 'SKILL.md')).toSatisfy((file) => {
      try {
        return lstatSync(file).isFile()
      } catch {
        return false
      }
    })
    expect(lstatSync(installedSkill).isSymbolicLink()).toBe(false)
    expect(lstatSync(installedSkill).isDirectory()).toBe(true)
    expect(new Set(installedFiles(installedSkill))).toEqual(runtimeFiles)

    // The install must remain runnable after its local source disappears.
    renameSync(source, unavailableSource)
    expectMinimumContracts(consumer, installedSkill)
  })
})
