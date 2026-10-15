import { expect, test } from 'vitest'
import { mkdtempSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawnSync } from 'node:child_process'
import { loadTokens, normalize, rankTokens } from './tokens.mjs'
import {
  imageFill,
  isFillTransform,
  materialsOf,
  surfaceRole,
} from './design.mjs'
import { parseUrl } from './figma.mjs'
import type { FigmaNode } from './figma.mjs'
import type { Node } from './design.mjs'

type Rgb = { r: number; g: number; b: number }

/** A Figma node carrying only the fields the test under way cares about. */
const figma = (fields: Partial<FigmaNode> = {}): FigmaNode => ({
  id: 'id',
  type: 'FRAME',
  name: 'node',
  ...fields,
})

/** A flattened node carrying only the fields the test under way cares about. */
const node = (fields: Partial<Node> = {}): Node => ({
  kind: 'frame',
  name: 'node',
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  depth: 0,
  id: 'id',
  raw: figma(),
  children: [],
  ...fields,
})

/** The ranked winner alone; the tie list is asserted separately where it matters. */
const tokenFor = (...args: Parameters<typeof rankTokens>) =>
  rankTokens(...args).token

/** A token directory shaped like a real design system: shared palette, one file per theme. */
function tokenDir() {
  const dir = mkdtempSync(join(tmpdir(), 'tokens-'))
  writeFileSync(
    join(dir, 'base.json'),
    JSON.stringify({
      color: {
        'light/neutral/90': { value: 'rgba(31, 31, 31, 1)' },
        'dark/neutral/90': { value: 'rgba(228, 228, 228, 1)' },
        'light/blue/50': { value: '#0096fa' },
        'light/white': { value: '#ffffff' },
      },
      space: { 30: { value: '16px' }, 'component/30': { value: '16px' } },
    }),
  )
  writeFileSync(
    join(dir, 'theme-light.json'),
    JSON.stringify({
      color: {
        'text/default': { value: '{color.light/neutral/90}' },
        'icon/default': { value: '{color.text/default}' },
        'border/selected': { value: '{color.light/blue/50}' },
        'background/default': { value: '#ffffff' },
        // Several roles share one white, each with its own resting and hover value.
        'text/on-primary/default': { value: '#ffffff' },
        'text/on-primary/hover': { value: '#ffffff' },
        'text/on-on-img/default': { value: '#ffffff' },
        'container/primary/default': { value: '#0096fa' },
        // The page ground is a container too, and has no `text/on-default`.
        'container/default': { value: '#ffffff' },
        'container/on-img/default': { value: '#00000066' },
        'border-width/m': { value: '1px' },
      },
      'border-width': { m: { value: '1px' } },
    }),
  )
  writeFileSync(
    join(dir, 'theme-dark.json'),
    JSON.stringify({
      color: {
        'text/default': { value: '{color.dark/neutral/90}' },
        'background/default': { value: '#000000' },
      },
    }),
  )
  return dir
}

test('loads one theme, not every file that defines the same keys', () => {
  const dir = tokenDir()
  const light = loadTokens(dir, 'light')
  const dark = loadTokens(dir, 'dark')

  // Same key, different value per theme. Merging every file would make this depend on
  // the order the filesystem happened to list them in.
  expect(tokenFor('color', '#1f1f1f', light, ['text/'])?.key).toBe(
    'text/default',
  )
  expect(tokenFor('color', '#e4e4e4', dark, ['text/'])?.key).toBe(
    'text/default',
  )
  // In the dark theme nothing holds #1f1f1f: no role has it, and the light palette is
  // excluded with the rest of the opposite theme. Naming no token is the honest answer.
  expect(tokenFor('color', '#1f1f1f', dark, ['text/'])).toBe(undefined)
})

test('prefers the role the caller asked for', () => {
  const tokens = loadTokens(tokenDir(), 'light')
  // #1f1f1f is text/default and icon/default alike.
  expect(tokenFor('color', '#1f1f1f', tokens, ['text/'])?.key).toBe(
    'text/default',
  )
  expect(tokenFor('color', '#1f1f1f', tokens, ['icon/'])?.key).toBe(
    'icon/default',
  )
})

test('does not name an unrelated role when no preferred one matches', () => {
  const tokens = loadTokens(tokenDir(), 'light')
  // #0096fa is only `border/selected`. On a text node that is the wrong word for it, so
  // the palette entry is named instead — it claims only what the color is.
  const chosen = tokenFor('color', '#0096fa', tokens, ['text/'])
  expect(chosen?.key).toBe('light/blue/50')
})

test('a property draws only from the category that owns it, shallowest first', () => {
  const tokens = loadTokens(tokenDir(), 'light')
  // 16px is `space/30` and `space/component/30`; the shallower key is the answer, and
  // a border radius must not borrow either of them.
  expect(tokenFor('gap', 16, tokens)?.key).toBe('30')
  expect(tokenFor('border-radius', 16, tokens)).toBe(undefined)
})

test('normalizes colors and lengths to one spelling', () => {
  expect(normalize('rgba(31, 31, 31, 1)')).toBe('#1f1f1f')
  expect(normalize('#FFF')).toBe('#ffffff')
  expect(normalize(16)).toBe('16px')
  expect(normalize('16px')).toBe('16px')
})

test('reads the file key and node id out of a design link', () => {
  const { key, node } = parseUrl(
    'https://www.figma.com/design/ABC123/Name?node-id=36-6258',
  )
  expect(key).toBe('ABC123')
  expect(node).toBe('36:6258')
})

test('a bitmap placement is not an element', () => {
  const parent = node({ x: 0, y: 0, width: 136, height: 94 })
  // Figma crops by making a rectangle larger than, and offset from, the frame clipping it.
  const placement = node({
    kind: 'rectangle',
    x: -1,
    y: -11,
    width: 139,
    height: 194,
  })
  const real = node({ kind: 'rectangle', x: 10, y: 10, width: 40, height: 40 })
  const bitmap = { ref: 'a', fit: 'cover' }
  expect(isFillTransform(placement, parent, bitmap)).toBe(true)
  expect(isFillTransform(real, parent, bitmap)).toBe(false)
  expect(isFillTransform(real, undefined, bitmap)).toBe(false)
  // An overflowing shape with no bitmap is a shape, not a placement — dropping it
  // would delete a decoration the designer drew.
  expect(isFillTransform(placement, parent, undefined)).toBe(false)
})

test('reads an image fill and the object-fit its crop implies', () => {
  expect(
    imageFill(
      figma({ fills: [{ type: 'IMAGE', imageRef: 'abc', scaleMode: 'FILL' }] }),
    ),
  ).toEqual({
    ref: 'abc',
    fit: 'cover',
  })
  expect(
    imageFill(
      figma({ fills: [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }] }),
    ),
  ).toBe(undefined)
  expect(imageFill(figma())).toBe(undefined)
})

test('never names the opposite theme’s palette', () => {
  const dir = tokenDir()
  // base.json carries both ramps; a light design must not borrow a dark one.
  expect(tokenFor('color', '#e4e4e4', loadTokens(dir, 'light'), [])).toBe(
    undefined,
  )
  expect(tokenFor('color', '#1f1f1f', loadTokens(dir, 'dark'), [])?.key).toBe(
    undefined,
  )
})

test('loadTokens refuses what it cannot use rather than returning nothing', () => {
  const dir = tokenDir()
  // Each of these used to produce a pack full of raw hex, which reads as "the design
  // system has no token for this" rather than "you pointed me at the wrong place".
  expect(() => loadTokens(join(tmpdir(), 'no-such-design-dir'))).toThrow(
    /no such directory/,
  )
  expect(() => loadTokens(mkdtempSync(join(tmpdir(), 'empty-')))).toThrow(
    /no Style Dictionary tokens/,
  )
  expect(() => loadTokens(dir, '')).toThrow(/--theme needs a name/)
  // A theme is matched as text, not as a pattern: a stray bracket is a typo, not a
  // regex, and carrying on with the shared files would drop every semantic token.
  expect(() => loadTokens(dir, 'l(ight')).toThrow(/No "l\(ight" theme/)
  // Nor may one name select two files — merging them is the order-dependence that
  // per-theme loading exists to avoid.
  expect(() => loadTokens(dir, 'theme')).toThrow(/matches more than one file/)
  // Asking for no token directory at all stays silent: the pack still works, it just
  // writes literal values.
  expect(loadTokens(undefined).byValue.size).toBe(0)
})

test('a resting value outranks the state variant that shares it', () => {
  const tokens = loadTokens(tokenDir(), 'light')
  // `text/on-primary/hover` is the same white, the same depth, and a shorter key than
  // several defaults. Ranked on length alone a plain label gets a hover shade.
  const chosen = tokenFor('color', '#ffffff', tokens, ['text/on-primary/'])
  expect(chosen?.key).toBe('text/on-primary/default')
})

test('a label is colored for the surface it sits on', () => {
  const tokens = loadTokens(tokenDir(), 'light')
  const white = figma({
    fills: [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }],
  })
  // White is the resting text color of several roles at once; what picks between
  // them is what the text is sitting on.
  const onPrimary = node({
    kind: 'text',
    depth: 2,
    raw: white,
    parent: node({
      raw: figma({
        fills: [{ type: 'SOLID', color: { r: 0, g: 0.588, b: 0.98 } }],
      }),
    }),
  })
  expect(surfaceRole(onPrimary, tokens)).toEqual(['primary'])
  expect(materialsOf(onPrimary, tokens)[0]).toBe(
    'color: var(--charcoal-color-text-on-primary-default)',
  )
  // Over a photograph the surface is the image itself.
  const onImage = node({
    kind: 'text',
    depth: 2,
    raw: white,
    parent: node({ image: { ref: 'a', fit: 'cover' } }),
  })
  // The role is the container's own name, so the family is `text/on-on-img`.
  expect(surfaceRole(onImage, tokens)).toEqual(['on-img'])
  expect(materialsOf(onImage, tokens)[0]).toBe(
    'color: var(--charcoal-color-text-on-on-img-default)',
  )
})

test('a one-sided stroke is a divider, not a border round the row', () => {
  const tokens = loadTokens(tokenDir(), 'light')
  const row = node({
    depth: 1,
    raw: figma({
      strokes: [{ type: 'SOLID', color: { r: 0, g: 0.588, b: 0.98 } }],
      strokeWeight: 1,
      individualStrokeWeights: { top: 0, right: 0, bottom: 1, left: 0 },
    }),
  })
  const properties = materialsOf(row, tokens).map((line) => line.split(':')[0])
  expect(properties).toEqual(['border-color', 'border-bottom-width'])
})

test('a grid auto-layout is not called a column', () => {
  const tokens = loadTokens(tokenDir(), 'light')
  const grid = node({
    depth: 1,
    raw: figma({ layoutMode: 'GRID', itemSpacing: 16 }),
  })
  const out = materialsOf(grid, tokens).join('; ')
  expect(out).toMatch(/display: grid/)
  expect(out).not.toMatch(/flex-direction/)
})

test('reads the older percent-encoded node id too', () => {
  // Figma wrote ids this way for years and the links are still in circulation.
  expect(
    parseUrl('https://www.figma.com/design/ABC123/Name?node-id=36%3A6258').node,
  ).toBe('36:6258')
  // A link to no particular node is a whole-file request, not a node called "".
  expect(parseUrl('https://www.figma.com/design/ABC123/Name').node).toBe(
    undefined,
  )
})

test('a tie between roles is handed over, not guessed', () => {
  const tokens = loadTokens(tokenDir(), 'light')
  // White is the resting color of two roles here and nothing in the design says
  // which, so the pack writes the literal and names the candidates.
  const label = node({
    kind: 'text',
    depth: 2,
    raw: figma({ fills: [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }] }),
  })
  const line = materialsOf(label, tokens)[0]
  expect(line).toMatch(/^color: #ffffff/)
  expect(line).toMatch(/text\/on-primary/)
  expect(line).toMatch(/text\/on-on-img/)
})

test('a cross-theme role survives the opposite palette being unnameable', () => {
  const dir = mkdtempSync(join(tmpdir(), 'hud-'))
  writeFileSync(
    join(dir, 'base.json'),
    JSON.stringify({
      color: {
        'light/neutral/90': { value: '#1f1f1f' },
        'dark/neutral/90': { value: '#e4e4e4' },
      },
    }),
  )
  // A HUD is dark in both themes, so the light theme points at the dark ramp.
  writeFileSync(
    join(dir, 'theme-light.json'),
    JSON.stringify({
      color: { 'text/on-hud/default': { value: '{color.dark/neutral/90}' } },
    }),
  )
  const tokens = loadTokens(dir, 'light')
  expect(tokenFor('color', '#e4e4e4', tokens, ['text/'])?.key).toBe(
    'text/on-hud/default',
  )
  // The ramp it points at is still not a name the pack will use on its own.
  expect(tokenFor('color', '#e4e4e4', tokens, [])?.key).toBe(
    'text/on-hud/default',
  )
})

test('what the surface walk stops at, and what it looks through', () => {
  const tokens = loadTokens(tokenDir(), 'light')
  const fill = (color: Rgb, opacity?: number) =>
    node({
      raw: figma({
        fills: [{ type: 'SOLID', color, ...(opacity ? { opacity } : {}) }],
      }),
    })
  const primary = fill({ r: 0, g: 0.588, b: 0.98 })
  const page = fill({ r: 1, g: 1, b: 1 })
  const black = { r: 0, g: 0, b: 0 }

  const cases: [Node, string[]][] = [
    // A badge painted a color the system has no word for: the label sits on the
    // badge, not on the button, so the button's role is not its role.
    [{ ...fill({ r: 0.2, g: 0.4, b: 0.6 }), parent: primary }, []],
    // `container/press-a` and friends are a few percent of black laid over whatever
    // is beneath, so the label is still sitting on the button.
    [{ ...fill(black, 0.09), parent: primary }, ['primary']],
    [{ ...fill(black, 0.3), parent: primary }, ['primary']],
    // A caption over a scrim, in a card with no fill, on the page. The page is
    // `container/default` as well as `background/default` and the system has no
    // `text/on-default`, so reading the caption against it would lose the scrim.
    [{ ...fill(black, 0.4), parent: node({ parent: page }) }, ['on-img']],
  ]
  for (const [parent, expected] of cases) {
    expect(surfaceRole(node({ parent }), tokens)).toEqual(expected)
  }

  // And the role reaches the declaration, not just the walk.
  const pressed = { ...fill(black, 0.09), parent: primary }
  const label = node({
    kind: 'text',
    depth: 2,
    raw: figma({ fills: [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }] }),
    parent: pressed,
  })
  expect(materialsOf(label, tokens)[0]).toBe(
    'color: var(--charcoal-color-text-on-primary-default)',
  )
})

test('a tokens object without the role index still works', () => {
  // `onRoles` is built by loadTokens; a caller that assembles tokens by hand should
  // get the unfiltered behavior rather than an exception.
  const { byValue } = loadTokens(tokenDir(), 'light')
  const parent = node({
    raw: figma({
      fills: [{ type: 'SOLID', color: { r: 0, g: 0.588, b: 0.98 } }],
    }),
  })
  expect(surfaceRole(node({ parent }), { byValue })).toEqual(['primary'])
})

test('the command reports a mistyped flag on one line and writes nothing', () => {
  const cli = fileURLToPath(new URL('./fetch-design.mjs', import.meta.url))
  const run = spawnSync(
    process.execPath,
    [
      cli,
      '--url',
      'https://www.figma.com/design/ABC123/x?node-id=1-2',
      '--tokens',
      tokenDir(),
      '--theme',
      'nope',
    ],
    {
      encoding: 'utf8',
      env: { ...process.env, FIGMA_TOKEN: 'x' },
    },
  )
  expect(run.status).toBe(1)
  expect(run.stdout).toBe('')
  expect(run.stderr.trim().split('\n').length).toBe(1)
  expect(run.stderr).toMatch(/No "nope" theme/)
})

test('a broken token file is named', () => {
  const dir = mkdtempSync(join(tmpdir(), 'broken-'))
  writeFileSync(join(dir, 'base.json'), '{ "color": ')
  expect(() => loadTokens(dir)).toThrow(/base\.json: /)
})

test('a surface that is two roles at once hands over both, not the shorter name', () => {
  const dir = mkdtempSync(join(tmpdir(), 'two-'))
  writeFileSync(
    join(dir, 'base.json'),
    JSON.stringify({ color: { 'light/red/50': { value: '#fd5b4e' } } }),
  )
  writeFileSync(
    join(dir, 'theme-light.json'),
    JSON.stringify({
      color: {
        // One red, two meanings — a question about the design, not the color.
        'container/negative/default': { value: '{color.light/red/50}' },
        'container/discovery/default': { value: '{color.light/red/50}' },
        'text/on-negative/default': { value: '#ffffff' },
        'text/on-discovery/default': { value: '#ffffff' },
      },
    }),
  )
  const tokens = loadTokens(dir, 'light')
  const label = node({
    kind: 'text',
    depth: 2,
    raw: figma({ fills: [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }] }),
    parent: node({
      raw: figma({
        fills: [{ type: 'SOLID', color: { r: 0.992, g: 0.357, b: 0.306 } }],
      }),
    }),
  })
  expect(surfaceRole(label, tokens).sort()).toEqual(['discovery', 'negative'])
  const line = materialsOf(label, tokens)[0]
  expect(line).toMatch(/^color: #ffffff/)
  expect(line).toMatch(/text\/on-negative\/default/)
  expect(line).toMatch(/text\/on-discovery\/default/)
})
