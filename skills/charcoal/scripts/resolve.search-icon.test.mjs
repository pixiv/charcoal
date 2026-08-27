import { readFileSync } from 'node:fs'
import { describe, expect, test } from 'vitest'
import { listIconClassNames } from '../../../packages/tailwind-config/src/icons.ts'
import { assertIconResult, assertIconSearchResult } from './lookup/icon.mjs'
import { run } from './resolve.mjs'

const repoRoot = new URL('../../../', import.meta.url)
const reactV1Path = new URL('packages/icons/src/react/v1/index.tsx', repoRoot)
const reactV2Path = new URL('packages/icons/src/react/v2/index.tsx', repoRoot)
const cssV1Path = new URL('packages/icons/css/v1/index.css', repoRoot)
const cssV2Path = new URL('packages/icons/css/v2/index.css', repoRoot)

const REACT_EXPORT_RE = /^export \{\s*(\w+)\s*\} from /gm
const CSS_CLASS_RE = /^\.(charcoal-icon-v[12]-[^\s{]+)/gm

const LEFTOVER_REACT_EXPORTS = new Set([
  'IconLayerMask',
  'IconLayerMaskSolid',
  'IconPencilText',
  'IconPencilTextSolid',
])

function parseSearchStdout(result) {
  expect(result.stderr).toBe('')
  expect(result.exitCode).toBe(0)
  const parsed = JSON.parse(result.stdout)
  assertIconSearchResult(parsed)
  return parsed
}

function parseIconStdout(result) {
  expect(result.stderr).toBe('')
  expect(result.exitCode).toBe(0)
  const parsed = JSON.parse(result.stdout)
  assertIconResult(parsed)
  return parsed
}

function parseReactExportNames(source) {
  return [...source.matchAll(REACT_EXPORT_RE)].map((match) => match[1] ?? '')
}

function parseCssClassNames(source) {
  return [...source.matchAll(CSS_CLASS_RE)].map((match) => match[1] ?? '')
}

describe('search-icon CLI contract', () => {
  test('usage errors go to stderr and exit 1', () => {
    expect(run(['search-icon'])).toMatchObject({
      exitCode: 1,
      stdout: '',
    })
    expect(run(['search-icon']).stderr).toContain(
      'Missing query for search-icon.',
    )
  })

  test('help includes search-icon without replacing token search', () => {
    const result = run(['--help'])
    expect(result.exitCode).toBe(0)
    expect(result.stdout).toContain(
      'node skills/charcoal/scripts/resolve.mjs search-icon <intent>',
    )
    expect(result.stdout).toContain(
      'node skills/charcoal/scripts/resolve.mjs search <intent>',
    )
  })

  test('search-icon x returns multiple name hits and does not pick one', () => {
    const result = parseSearchStdout(run(['search-icon', 'x']))
    expect(result).toMatchObject({
      query: 'x',
      ok: true,
      kind: 'icon-search',
    })
    expect(result.kind).not.toBe('icon')
    expect(Array.isArray(result.results)).toBe(true)
    expect(result.results.length).toBeGreaterThanOrEqual(2)
    expect(result.results.length).toBeLessThanOrEqual(24)
    expect(
      result.results.some(
        (item) =>
          item.file === '20/regular/x' ||
          item.reactIcons === 'IconX20' ||
          item.name === 'x',
      ),
    ).toBe(true)
  })

  test('search-icon 閉じる does not map to close or x', () => {
    const result = parseSearchStdout(run(['search-icon', '閉じる']))
    expect(result).toMatchObject({
      query: '閉じる',
      ok: true,
      kind: 'icon-search',
    })
    expect(result.results.every((item) => item.name.includes('閉じる'))).toBe(
      true,
    )
    expect(
      result.results.some(
        (item) =>
          item.name === 'x' ||
          item.name === 'close' ||
          item.file.includes('/x') ||
          item.file.includes('/close'),
      ),
    ).toBe(false)
  })

  test('search-icon heroicons is an empty hit list, not a miss', () => {
    const result = parseSearchStdout(run(['search-icon', 'heroicons']))
    expect(result).toEqual({
      query: 'heroicons',
      ok: true,
      kind: 'icon-search',
      results: [],
    })
  })

  test('search-icon hex is a structured miss and exits 0', () => {
    const result = parseSearchStdout(run(['search-icon', '#0096FA']))
    expect(result).toEqual({
      query: '#0096FA',
      ok: false,
      reason: 'hex',
      message: 'hex はグリフ検索ではない。アイコン名を icon に渡せ。',
      candidates: [],
    })
  })
})

describe('icon CLI reverse lookup', () => {
  test('every v2 tailwind className reverse-looks-up via icon', () => {
    const classNames = listIconClassNames({ v2: true }).map(
      (item) => item.className,
    )
    expect(classNames.length).toBeGreaterThan(0)
    for (const className of classNames) {
      const result = parseIconStdout(run(['icon', className]))
      expect(result.ok, className).toBe(true)
      expect(result.surfaces.tailwind.className, className).toBe(className)
    }
  })

  test('every v1 tailwind className reverse-looks-up via icon', () => {
    const classNames = listIconClassNames({ v2: false }).map(
      (item) => item.className,
    )
    expect(classNames.length).toBeGreaterThan(0)
    for (const className of classNames) {
      const result = parseIconStdout(run(['icon', className]))
      expect(result.ok, className).toBe(true)
      expect(result.surfaces.tailwind.className, className).toBe(className)
    }
  })

  test('every v2 react barrel export reverse-looks-up via icon', () => {
    const names = parseReactExportNames(readFileSync(reactV2Path, 'utf8'))
    expect(names.length).toBeGreaterThan(0)
    for (const component of names) {
      const result = parseIconStdout(run(['icon', component]))
      expect(result.ok, component).toBe(true)
      if (LEFTOVER_REACT_EXPORTS.has(component)) {
        expect(result.file, component).toEqual(expect.any(String))
        continue
      }
      expect(result.surfaces.reactIcons.component, component).toBe(component)
    }
  })

  test('every v1 react barrel export reverse-looks-up via icon', () => {
    const names = parseReactExportNames(readFileSync(reactV1Path, 'utf8'))
    expect(names.length).toBeGreaterThan(0)
    for (const component of names) {
      const result = parseIconStdout(run(['icon', component]))
      expect(result.ok, component).toBe(true)
      if (LEFTOVER_REACT_EXPORTS.has(component)) {
        expect(result.file, component).toEqual(expect.any(String))
        continue
      }
      expect(result.surfaces.reactIcons.component, component).toBe(component)
    }
  })

  test('leftover react exports hit via keys without matching canonical component', () => {
    for (const component of LEFTOVER_REACT_EXPORTS) {
      const result = parseIconStdout(run(['icon', component]))
      expect(result.ok, component).toBe(true)
      expect(result.file, component).toEqual(expect.any(String))
      expect(result.surfaces.reactIcons.component, component).not.toBe(
        component,
      )
    }
  })

  test('every generated CSS selector reverse-looks-up via icon', () => {
    const classNames = [
      ...parseCssClassNames(readFileSync(cssV1Path, 'utf8')),
      ...parseCssClassNames(readFileSync(cssV2Path, 'utf8')),
    ]
    expect(classNames.length).toBeGreaterThan(0)
    for (const className of classNames) {
      const dotted = `.${className}`
      for (const query of [className, dotted]) {
        const result = parseIconStdout(run(['icon', query]))
        expect(result.ok, query).toBe(true)
        expect(result.surfaces.css.className, query).toBe(className)
      }
    }
  })
})
