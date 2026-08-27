import { describe, expect, test } from 'vitest'
import { assertIconResult } from './lookup/icon.mjs'
import { run } from './resolve.mjs'

function parseStdout(result) {
  expect(result.stderr).toBe('')
  expect(result.exitCode).toBe(0)
  const parsed = JSON.parse(result.stdout)
  assertIconResult(parsed)
  return parsed
}

describe('icon CLI contract', () => {
  test('usage errors go to stderr and exit 1', () => {
    expect(run(['icon'])).toMatchObject({
      exitCode: 1,
      stdout: '',
    })
    expect(run(['icon']).stderr).toContain('Missing query for icon.')
  })

  test('help includes icon and still documents token commands', () => {
    const result = run(['--help'])
    expect(result.exitCode).toBe(0)
    expect(result.stdout).toContain(
      'node skills/charcoal/scripts/resolve.mjs icon <query>',
    )
    expect(result.stdout).toContain(
      'node skills/charcoal/scripts/resolve.mjs resolve <query>',
    )
    expect(result.stdout).not.toContain('search-icon')
  })

  test('search-icon is still an unknown command', () => {
    const result = run(['search-icon', '閉じる'])
    expect(result.exitCode).toBe(1)
    expect(result.stderr).toContain('Unknown command: search-icon')
  })

  test('existing token resolve is unchanged', () => {
    const result = run(['resolve', 'color/container/primary/default'])
    expect(result.exitCode).toBe(0)
    expect(JSON.parse(result.stdout)).toMatchObject({
      ok: true,
      layer: 'semantic',
      css: '--charcoal-color-container-primary-default',
    })
  })

  test('icon hits and structured misses exit 0', () => {
    expect(run(['icon', 'add.circle']).exitCode).toBe(0)
    expect(run(['icon', '#0096FA']).exitCode).toBe(0)
    expect(run(['icon', 'lucide-x']).exitCode).toBe(0)
    expect(run(['icon', 'add']).exitCode).toBe(0)
  })
})

describe('icon golden examples', () => {
  test('icon add.circle is v2 regular 24', () => {
    const result = parseStdout(run(['icon', 'add.circle']))
    expect(result).toMatchObject({
      query: 'add.circle',
      ok: true,
      kind: 'icon',
      generation: 'v2',
      name: 'add.circle',
      size: '24',
      theme: 'regular',
      figma: {
        component: 'add.circle',
        variant: 'Size=24, Theme=Regular',
      },
      file: '24/regular/add.circle',
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
      related: {
        solid: {
          size: '24',
          tailwind: 'icon-v2-add-circle-solid',
          reactIcons: 'IconAddCircleSolid',
        },
        sizes: ['24'],
      },
    })
    expect(result.notes).toEqual([
      'Icons 2.0。`<pixiv-icon>` と `@charcoal-ui/react` の `<Icon>` では使えない。',
      'Regular はクラス / コンポーネント名から省略する。',
      'Size 24 はクラス / コンポーネント名から省略する。',
    ])
  })

  test('icon Size=24, Theme=Solid add.circle is solid', () => {
    const result = parseStdout(run(['icon', 'Size=24, Theme=Solid add.circle']))
    expect(result).toMatchObject({
      ok: true,
      kind: 'icon',
      generation: 'v2',
      name: 'add.circle',
      size: '24',
      theme: 'solid',
      file: '24/solid/add.circle',
      surfaces: {
        reactIcons: {
          import: '@charcoal-ui/icons/react/v2',
          component: 'IconAddCircleSolid',
        },
        tailwind: { className: 'icon-v2-add-circle-solid' },
      },
      related: {
        regular: {
          size: '24',
          tailwind: 'icon-v2-add-circle',
          reactIcons: 'IconAddCircle',
        },
      },
    })
  })

  test('icon 16/Add is v1', () => {
    const result = parseStdout(run(['icon', '16/Add']))
    expect(result).toMatchObject({
      ok: true,
      kind: 'icon',
      generation: 'v1',
      name: 'Add',
      size: '16',
      theme: null,
      file: '16/Add',
      surfaces: {
        reactIcons: {
          import: '@charcoal-ui/icons/react/v1',
          component: 'IconAdd16',
        },
        tailwind: { className: 'icon-v1-add-16', flag: 'iconsV1' },
        css: { className: 'charcoal-icon-v1-add-16' },
        reactIcon: { name: '16/Add' },
        pixivIcon: { name: '16/Add' },
      },
      related: { sizes: ['16', '24', 'Inline'] },
    })
    expect(result.related.solid).toBeUndefined()
    expect(result.notes).toEqual([
      'Icons 1.0。`<pixiv-icon>` と `@charcoal-ui/react` の `<Icon>` で使える。',
    ])
  })

  test('icon IconAdd is v2 24 Regular add, not v1 IconAdd24', () => {
    const result = parseStdout(run(['icon', 'IconAdd']))
    expect(result).toMatchObject({
      ok: true,
      generation: 'v2',
      name: 'add',
      size: '24',
      theme: 'regular',
      file: '24/regular/add',
      surfaces: {
        reactIcons: { component: 'IconAdd' },
      },
    })
  })

  test('icon icon-v2-add-solid is solid', () => {
    const result = parseStdout(run(['icon', 'icon-v2-add-solid']))
    expect(result).toMatchObject({
      ok: true,
      generation: 'v2',
      name: 'add',
      theme: 'solid',
      file: '24/solid/add',
    })
  })

  test('icon add is ambiguous across v1 sizes and v2 themes', () => {
    const result = parseStdout(run(['icon', 'add']))
    expect(result).toMatchObject({
      query: 'add',
      ok: false,
      reason: 'ambiguous',
    })
    expect(result.candidates.map((candidate) => candidate.file)).toEqual([
      '16/Add',
      '24/Add',
      'Inline/Add',
      '24/regular/add',
      '24/solid/add',
    ])
  })

  test('icon lucide-x is not_found', () => {
    const result = parseStdout(run(['icon', 'lucide-x']))
    expect(result).toEqual({
      query: 'lucide-x',
      ok: false,
      reason: 'not_found',
      message:
        '一致するアイコンが見つからない。Figma のコンポーネント名かクラス / コンポーネント名を渡せ。',
      candidates: [],
    })
  })

  test('icon hex is a structured miss and exits 0', () => {
    const result = parseStdout(run(['icon', '#0096FA']))
    expect(result).toEqual({
      query: '#0096FA',
      ok: false,
      reason: 'hex',
      message: 'hex はグリフ検索ではない。アイコン名を icon に渡せ。',
      candidates: [],
    })
  })

  test('icon IconLayerMask joins leftover React export to mask', () => {
    const result = parseStdout(run(['icon', 'IconLayerMask']))
    expect(result).toMatchObject({
      ok: true,
      file: '24/regular/mask',
    })
  })

  test.each([
    'charcoal-icon-v1-add-Inline',
    '.charcoal-icon-v1-add-Inline',
    'icon-v1-add-inline',
  ])('icon %s is Inline/Add', (query) => {
    const result = parseStdout(run(['icon', query]))
    expect(result).toMatchObject({
      ok: true,
      generation: 'v1',
      file: 'Inline/Add',
      surfaces: {
        reactIcon: { name: 'Inline/Add' },
        pixivIcon: { name: 'Inline/Add' },
      },
    })
  })
})
