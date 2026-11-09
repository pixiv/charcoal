import { expect, test } from 'vitest'
import { mkdtempSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { loadTokens } from './tokens.mjs'
import { flatten, materialsOf } from './design.mjs'
import {
  countReferences,
  loadV1Theme,
  spellings,
  v1Style,
  v1Vocabulary,
} from './vocabulary.mjs'
import type { FigmaNode } from './figma.mjs'
import type { Node } from './design.mjs'
import type { Vocabulary } from './vocabulary.mjs'

/** A v1 theme shaped like `@charcoal-ui/theme`'s `light`, cut down to what is asserted. */
const THEME = {
  color: {
    text1: '#1f1f1f',
    text2: '#474747',
    text5: '#ffffff',
    background1: '#ffffff',
    surface1: '#ffffff',
    surface4: 'rgba(0,0,0,0.32)',
    surface9: '#ffffff',
    border: 'rgba(0,0,0,0.08)',
  },
  spacing: { 0: 0, 4: 4, 8: 8, 16: 16 },
  borderRadius: { 4: 4, 8: 8, oval: 999999 },
  typography: {
    size: {
      12: { fontSize: 12, lineHeight: 20 },
      14: { fontSize: 14, lineHeight: 22 },
    },
  },
}

function tokens() {
  const dir = mkdtempSync(join(tmpdir(), 'vocab-'))
  writeFileSync(
    join(dir, 'theme-light.json'),
    JSON.stringify({
      color: {
        'text/default': { value: '#1f1f1f' },
        'text/secondary/default': { value: '#474747' },
        'container/default': { value: '#ffffff' },
        'container/secondary/default': { value: '#f5f5f5' },
      },
      space: { 30: { value: '16px' }, 20: { value: '8px' } },
    }),
  )
  return loadTokens(dir, 'light')
}

const SOLID = (r: number, g: number, b: number) => ({
  type: 'SOLID',
  color: { r, g, b },
})

const node = (raw: Partial<FigmaNode>, kind = 'frame', depth = 1): Node => ({
  kind,
  name: 'node',
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  depth,
  id: 'id',
  raw: { id: 'id', type: 'FRAME', name: 'node', ...raw },
  children: [],
})

const vocab = (mode: 'v1' | 'v2'): Vocabulary => ({
  mode,
  v1: v1Vocabulary(THEME),
  styles: {
    's-text2': { name: 'Text/2', styleType: 'FILL' },
    's-surface4': { name: 'Surface/4', styleType: 'FILL' },
    's-unknown': { name: 'Brand/Special', styleType: 'FILL' },
    's-14': { name: '14 / Regular', styleType: 'TEXT' },
    's-odd': { name: 'Display/Huge', styleType: 'TEXT' },
  },
  variables: {
    'v-container': { name: 'container/secondary/default' },
    'v-16': { name: 'spacing/16' },
    'v-mystery': { name: 'brand/mystery' },
  },
  used: new Map(),
})

test('a named style wins over whatever its literal would rank as', () => {
  // The literal is #1f1f1f, which ranks as text/default; the designer picked Text/2.
  const label = node(
    { fills: [SOLID(0.122, 0.122, 0.122)], styles: { fill: 's-text2' } },
    'text',
  )
  expect(materialsOf(label, tokens(), vocab('v1'))[0]).toBe('color: text2')
  // In a v2 pack the same style is written as the one v2 token with Text/2's value.
  expect(materialsOf(label, tokens(), vocab('v2'))[0]).toBe(
    'color: var(--charcoal-color-text-secondary-default)',
  )
})

test('a bound variable is named by its own name, not matched by value', () => {
  // White would rank as container/default; the binding says secondary.
  const box = node({
    fills: [
      {
        ...SOLID(1, 1, 1),
        boundVariables: {
          color: { type: 'VARIABLE_ALIAS', id: 'v-container' },
        },
      } as never,
    ],
  })
  expect(materialsOf(box, tokens(), vocab('v1'))[0]).toBe(
    'background-color: var(--charcoal-color-container-secondary-default)',
  )
  // A v1-scale spacing variable is a v1 word.
  const row = node({
    layoutMode: 'HORIZONTAL',
    itemSpacing: 16,
    boundVariables: { itemSpacing: { type: 'VARIABLE_ALIAS', id: 'v-16' } },
  })
  expect(materialsOf(row, tokens(), vocab('v1'))).toContain('gap: spacing-16')
})

test('a name neither vocabulary has is kept as a comment, never dropped', () => {
  const box = node({
    fills: [SOLID(0.2, 0.4, 0.6)],
    styles: { fill: 's-unknown' },
  })
  expect(materialsOf(box, tokens(), vocab('v1'))[0]).toBe(
    'background-color: #336699 /* style: Brand/Special */',
  )
  const bound = node({
    fills: [SOLID(0.2, 0.4, 0.6)],
    boundVariables: { fills: [{ type: 'VARIABLE_ALIAS', id: 'v-mystery' }] },
  })
  expect(materialsOf(bound, tokens(), vocab('v2'))[0]).toBe(
    'background-color: #336699 /* variable: brand/mystery */',
  )
  const odd = node(
    { style: { fontSize: 40, lineHeightPx: 48 }, styles: { text: 's-odd' } },
    'text',
  )
  expect(materialsOf(odd, tokens(), vocab('v1'))[0]).toBe(
    'font-size: 40px /* style: Display/Huge */',
  )
})

test('a v1 text style is one typography role, not a size and a line height', () => {
  const label = node(
    { style: { fontSize: 14, lineHeightPx: 22 }, styles: { text: 's-14' } },
    'text',
  )
  expect(materialsOf(label, tokens(), vocab('v1'))).toEqual([
    'typography: typography-14',
  ])
  // Unnamed, the same size is still recognised in a v1 pack…
  const plain = node({ style: { fontSize: 12, lineHeightPx: 20 } }, 'text')
  expect(materialsOf(plain, tokens(), vocab('v1'))).toEqual([
    'typography: typography-12',
  ])
  // …but only when the line height agrees: 12/16 is not typography-12.
  const tight = node({ style: { fontSize: 12, lineHeightPx: 16 } }, 'text')
  expect(materialsOf(tight, tokens(), vocab('v1'))[0]).toMatch(/^font-size/)
})

test('a v1 literal is ranked like a v2 one: by role, and a tie is handed over', () => {
  // White on a box is surface1 and surface9 alike in v1, and nothing says which.
  const box = node({ fills: [SOLID(1, 1, 1)] })
  expect(materialsOf(box, tokens(), vocab('v1'))[0]).toBe(
    'background-color: #ffffff /* surface1 | surface9 */',
  )
  // On the root frame the ground role is preferred, and there is only one.
  const root = node({ fills: [SOLID(1, 1, 1)] }, 'frame', 0)
  expect(materialsOf(root, tokens(), vocab('v1'))[0]).toBe(
    'background-color: background1',
  )
  // Each used role is recorded for the pack's table of spellings.
  const v = vocab('v1')
  materialsOf(root, tokens(), v)
  expect([...v.used.keys()]).toEqual(['background1'])
})

test('style names map onto v1 keys through their separators', () => {
  const v1 = v1Vocabulary(THEME)
  expect(v1Style(v1, 'color', 'Surface/4')?.id).toBe('surface4')
  expect(v1Style(v1, 'color', 'Library/Text/1')?.id).toBe('text1')
  expect(v1Style(v1, 'typography', '12 / Bold')?.id).toBe('typography-12')
  expect(v1Style(v1, 'color', 'Text/9')).toBe(undefined)
  expect(v1Style(undefined, 'color', 'Text/1')).toBe(undefined)
})

test('auto picks the vocabulary the frame mostly references', () => {
  const v = vocab('v2')
  const v1Heavy = [
    { styles: { fill: 's-text2', text: 's-14' } },
    { styles: { fill: 's-surface4' } },
    {
      boundVariables: {
        fills: [{ type: 'VARIABLE_ALIAS', id: 'v-container' }],
      },
    },
  ]
  expect(countReferences(v1Heavy, v, tokens())).toEqual({ v1: 3, v2: 1 })
})

test('no installed theme is not an error: styles are then named as comments', async () => {
  const empty = mkdtempSync(join(tmpdir(), 'no-theme-'))
  const original = process.cwd()
  process.chdir(empty)
  try {
    expect(await loadV1Theme(empty, 'light')).toBe(undefined)
  } finally {
    process.chdir(original)
  }
})

test('a v1 role is spelled once per route, with the v2 variable that shares its value', () => {
  const v1 = v1Vocabulary(THEME)!
  const text2 = v1.colors.get('text2')!
  expect(spellings(text2, new Set(['color']), tokens())).toEqual({
    value: '#474747',
    v2: 'var(--charcoal-color-text-secondary-default)',
    tailwind: 'text-text2',
    styled: 'theme.color.text2',
    cssVar: 'var(--charcoal-text2)',
  })
  const gap = v1.spacing.get('16px')!
  expect(spellings(gap, new Set(['gap', 'padding-inline']), tokens())).toEqual({
    value: '16px',
    v2: 'var(--charcoal-space-30)',
    tailwind: 'gap-16 px-16',
    styled: 'theme.spacing[16]',
    cssVar: undefined,
  })
  // surface4 is translucent black and v2 has no single word for it here.
  const surface4 = v1.colors.get('surface4')!
  expect(spellings(surface4, new Set(['background-color']), tokens()).v2).toBe(
    undefined,
  )
})

test('an instance carries its component and its variant separately', () => {
  const [, instance] = flatten(
    {
      id: '1:1',
      type: 'FRAME',
      name: 'Screen',
      children: [
        { id: '1:2', type: 'INSTANCE', name: 'b', componentId: 'c:1' },
      ],
    },
    { 'c:1': { name: 'Size=S, State=Default', componentSetId: 'set:1' } },
    { 'set:1': { name: 'Button' } },
  )
  expect(instance?.component).toBe('Button')
  expect(instance?.variant).toBe('Size=S, State=Default')
  // A component outside a set has no variant: its own name is the component's.
  const [, plain] = flatten(
    {
      id: '1:1',
      type: 'FRAME',
      name: 'Screen',
      children: [
        { id: '1:2', type: 'INSTANCE', name: 'b', componentId: 'c:2' },
      ],
    },
    { 'c:2': { name: 'Logo' } },
  )
  expect(plain?.component).toBe('Logo')
  expect(plain?.variant).toBe(undefined)
})
