import { readFileSync } from 'node:fs'
import { describe, expect, test } from 'vitest'
import { listIconClassNames } from '../../../packages/tailwind-config/src/icons.ts'
import {
  buildIconIndex,
  iconsIndexPath,
  writeIconIndex,
} from './generate-icons.ts'

const repoRoot = new URL('../../../', import.meta.url)
const reactV1Path = new URL('packages/icons/src/react/v1/index.tsx', repoRoot)
const reactV2Path = new URL('packages/icons/src/react/v2/index.tsx', repoRoot)
const cssV1Path = new URL('packages/icons/css/v1/index.css', repoRoot)
const cssV2Path = new URL('packages/icons/css/v2/index.css', repoRoot)

const REACT_EXPORT_RE = /^export \{\s*(\w+)\s*\} from /gm
const CSS_CLASS_RE = /^\.(charcoal-icon-v[12]-[^\s{]+)/gm

function parseReactExportNames(source: string) {
  return [...source.matchAll(REACT_EXPORT_RE)].map((match) => match[1] ?? '')
}

function parseCssClassNames(source: string) {
  return [...source.matchAll(CSS_CLASS_RE)].map((match) => match[1] ?? '')
}

function recordByFile(file: string) {
  const record = buildIconIndex().records.find((item) => item.file === file)
  expect(record, file).toBeDefined()
  return record
}

describe('generate icon index', () => {
  test('icons.json is regenerated from icon-files, TW, CSS, and React barrels', () => {
    if (process.env.GENERATE_ICONS_INDEX === '1') {
      writeIconIndex()
    }
    expect(JSON.parse(readFileSync(iconsIndexPath, 'utf8'))).toEqual(
      buildIconIndex(),
    )
  })

  test('24/regular/add.circle is v2 regular', () => {
    expect(recordByFile('24/regular/add.circle')).toMatchObject({
      generation: 'v2',
      name: 'add.circle',
      size: '24',
      theme: 'regular',
      figma: {
        component: 'add.circle',
        variant: 'Size=24, Theme=Regular',
      },
      surfaces: {
        reactIcons: {
          import: '@charcoal-ui/icons/react/v2',
          component: 'IconAddCircle',
        },
        tailwind: {
          className: 'icon-v2-add-circle',
          flag: 'iconsV2',
        },
        css: {
          className: 'charcoal-icon-v2-add-circle',
          import: '@charcoal-ui/icons/css/v2/index.css',
        },
        reactIcon: null,
        pixivIcon: null,
      },
    })
  })

  test('24/solid/add.circle is v2 solid', () => {
    expect(recordByFile('24/solid/add.circle')).toMatchObject({
      generation: 'v2',
      theme: 'solid',
      surfaces: {
        reactIcons: { component: 'IconAddCircleSolid' },
        tailwind: { className: 'icon-v2-add-circle-solid' },
      },
    })
  })

  test('16/Add is v1', () => {
    expect(recordByFile('16/Add')).toMatchObject({
      generation: 'v1',
      name: 'Add',
      size: '16',
      theme: null,
      surfaces: {
        reactIcons: {
          import: '@charcoal-ui/icons/react/v1',
          component: 'IconAdd16',
        },
        tailwind: { className: 'icon-v1-add-16', flag: 'iconsV1' },
        css: { className: 'charcoal-icon-v1-add-16' },
        pixivIcon: { name: '16/Add' },
        reactIcon: { name: '16/Add' },
      },
    })
  })

  test('Inline/Add keeps PascalCase on CSS size', () => {
    expect(recordByFile('Inline/Add')).toMatchObject({
      generation: 'v1',
      size: 'Inline',
      surfaces: {
        reactIcons: { component: 'IconAddInline' },
        tailwind: { className: 'icon-v1-add-inline' },
        css: { className: 'charcoal-icon-v1-add-Inline' },
      },
    })
  })

  test('24/color/color-mixture is Theme=Color', () => {
    expect(recordByFile('24/color/color-mixture')).toMatchObject({
      generation: 'v2',
      theme: 'color',
      figma: { variant: 'Size=24, Theme=Color' },
      surfaces: {
        reactIcons: { component: 'IconColorMixtureColor' },
      },
    })
  })

  test('figma.variant is not a standalone key', () => {
    const index = buildIconIndex()
    for (const record of index.records) {
      expect(record.keys, record.file).not.toContain('Size=24, Theme=Regular')
    }
    expect(recordByFile('24/regular/add.circle')?.keys).toEqual(
      expect.arrayContaining([
        'Size=24, Theme=Regular add.circle',
        'add.circle Size=24, Theme=Regular',
      ]),
    )
  })

  test('v1 keys include lowercase name and file', () => {
    expect(recordByFile('16/Add')?.keys).toEqual(
      expect.arrayContaining(['add', '16/add']),
    )
  })

  test('leftover React names join without a handwritten table', () => {
    expect(recordByFile('24/regular/mask')?.keys).toContain('IconLayerMask')
    expect(recordByFile('24/solid/mask')?.keys).toContain('IconLayerMaskSolid')
    expect(recordByFile('24/regular/pen.text')?.keys).toContain(
      'IconPencilText',
    )
    expect(recordByFile('24/solid/pen.text')?.keys).toContain(
      'IconPencilTextSolid',
    )
  })
})

describe('icon reverse lookup coverage', () => {
  test('every tailwind className is in some record.keys', () => {
    const keys = new Set(
      buildIconIndex().records.flatMap((record) => record.keys),
    )
    for (const { className } of listIconClassNames({ v2: true })) {
      expect(keys.has(className), className).toBe(true)
    }
    for (const { className } of listIconClassNames({ v2: false })) {
      expect(keys.has(className), className).toBe(true)
    }
  })

  test('every react barrel export name is in some record.keys', () => {
    const keys = new Set(
      buildIconIndex().records.flatMap((record) => record.keys),
    )
    const v1Names = parseReactExportNames(readFileSync(reactV1Path, 'utf8'))
    const v2Names = parseReactExportNames(readFileSync(reactV2Path, 'utf8'))
    for (const name of v1Names) {
      expect(keys.has(name), name).toBe(true)
    }
    for (const name of v2Names) {
      expect(keys.has(name), name).toBe(true)
    }
  })

  test('every generated CSS selector is in some record.keys', () => {
    const keys = new Set(
      buildIconIndex().records.flatMap((record) => record.keys),
    )
    for (const className of parseCssClassNames(
      readFileSync(cssV1Path, 'utf8'),
    )) {
      expect(keys.has(className), className).toBe(true)
    }
    for (const className of parseCssClassNames(
      readFileSync(cssV2Path, 'utf8'),
    )) {
      expect(keys.has(className), className).toBe(true)
    }
  })
})
