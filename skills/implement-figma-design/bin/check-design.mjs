#!/usr/bin/env node
/**
 * Holds a running implementation up against the design it was built from.
 *
 * Everything reported here is already in the design pack: the same boxes, the same
 * tokens. What this adds is not knowledge, it is feedback — the ability to look at your
 * own render instead of guessing whether it matches. An implementation that cannot see
 * itself ships a screen with every element correct and none of them styled, and that
 * failure is invisible from the source alone.
 *
 *   node check-design.mjs --spec design/spec.json --url http://localhost:4173
 *
 * Deliberately not a score. It names concrete mismatches, outermost first, because a
 * container in the wrong place moves everything inside it — the ancestor is the fix and
 * its descendants are symptoms.
 *
 * Needs `playwright` resolvable from the project being checked. Nothing else.
 */
import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'
import { parseArgs } from 'node:util'

/**
 * A box as the page renders it, and a declaration the design asked for. Playwright is
 * resolved from the project under check rather than imported, so nothing it returns
 * carries a type of its own.
 *
 * @typedef {{ tag: string, cls: string, text: string, x: number, y: number, width: number, height: number }} Box
 * @typedef {{ property: string, token: string }} Wanted
 */

/** @type {{ spec?: string, url?: string }} */
let args = {}
try {
  ;({ values: args } = parseArgs({
    options: { spec: { type: 'string' }, url: { type: 'string' } },
    strict: true,
  }))
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error))
  console.error(
    'Usage: check-design.mjs --spec <spec.json> --url <running app>',
  )
  process.exit(2)
}

const specPath = args.spec
const url = args.url
if (!specPath || !url) {
  console.error(
    'Usage: check-design.mjs --spec <spec.json> --url <running app>',
  )
  console.error(
    'Write the spec with: fetch-design.mjs --spec design/spec.json …',
  )
  process.exit(2)
}

// Resolved from the project being checked, not from wherever this skill happens to be
// installed. A plugin lives in its own cache directory, where the application's
// node_modules is nowhere on the resolution path, so a bare `import('playwright')`
// fails however correctly the application installed it.
let chromium
for (const find of [
  () =>
    createRequire(join(process.cwd(), 'package.json')).resolve('playwright'),
  () => undefined,
]) {
  try {
    const found = find()
    // Imported by path, playwright comes back as CommonJS with no named exports, so
    // the namespace has to be unwrapped before `chromium` is there to take.
    const loaded = await import(
      found ? pathToFileURL(found).href : 'playwright'
    )
    chromium = loaded.chromium ?? loaded.default?.chromium
    if (chromium) {
      break
    }
  } catch {
    // Try the next way of finding it.
  }
}
if (!chromium) {
  console.error(
    'check-design needs playwright installed in the project being checked.',
  )
  console.error('Install it, or skip the check — the pack is still the design.')
  process.exit(2)
}

const spec = JSON.parse(readFileSync(specPath, 'utf8'))
const browser = await chromium.launch()
const page = await browser.newPage({
  viewport: {
    width: Math.ceil(spec.frame.width),
    height: Math.ceil(spec.frame.height),
  },
})

const problems = []
try {
  await page.goto(url, { waitUntil: 'networkidle' })

  // Does the design system's vocabulary actually resolve? A screen can import every
  // component, write every value as a token, and render with none of them applied.
  const tokenIsLive = await page.evaluate(
    () =>
      getComputedStyle(document.documentElement)
        .getPropertyValue('--charcoal-color-text-default')
        .trim().length > 0,
  )
  if (!tokenIsLive) {
    problems.push({
      depth: -1,
      line:
        'charcoal variables do not resolve on the page — none of its styles are ' +
        'applied.\n  Finish the setup before reading anything below: every box will ' +
        'look wrong until the tokens land.',
    })
  }

  /** @type {Box[]} */
  const boxes = await page.evaluate(() => {
    const out = []
    for (const el of document.querySelectorAll('body *')) {
      const r = el.getBoundingClientRect()
      if (r.width === 0 && r.height === 0) {
        continue
      }
      out.push({
        tag: el.tagName.toLowerCase(),
        cls: typeof el.className === 'string' ? el.className.slice(0, 40) : '',
        text: (el.textContent ?? '').trim().slice(0, 40),
        x: r.x,
        y: r.y,
        width: r.width,
        height: r.height,
      })
    }
    return out
  })

  // A node is matched by the rendered box nearest it in position and size. Text is a
  // strong hint where a node has it, because two boxes of the same size are otherwise
  // indistinguishable.
  const used = new Set()
  for (const node of [...spec.nodes].sort((a, b) => a.depth - b.depth)) {
    /** @type {{ index: number, box: Box } | undefined} */
    let best
    let bestCost = Infinity
    boxes.forEach((box, i) => {
      if (used.has(i)) {
        return
      }
      const sameWords =
        node.text && box.text && box.text.startsWith(node.text.slice(0, 20))
      const cost =
        Math.abs(box.x - node.x) +
        Math.abs(box.y - node.y) +
        Math.abs(box.width - node.width) +
        Math.abs(box.height - node.height) -
        (sameWords ? 200 : 0)
      if (cost < bestCost) {
        bestCost = cost
        best = { index: i, box }
      }
    })
    if (best === undefined || bestCost > 160) {
      problems.push({
        depth: node.depth,
        line: `${node.kind} "${node.name}" ${node.width}×${node.height} at (${node.x}, ${node.y}) — nothing rendered there`,
      })
      continue
    }
    used.add(best.index)
    const box = best.box
    const dx = Math.round(box.x - node.x)
    const dy = Math.round(box.y - node.y)
    const dw = Math.round(box.width - node.width)
    const dh = Math.round(box.height - node.height)
    if (
      Math.abs(dx) > 4 ||
      Math.abs(dy) > 4 ||
      Math.abs(dw) > 4 ||
      Math.abs(dh) > 4
    ) {
      const moved = [
        dx ? `${dx > 0 ? '+' : ''}${dx} across` : '',
        dy ? `${dy > 0 ? '+' : ''}${dy} down` : '',
        dw ? `${dw > 0 ? '+' : ''}${dw} wide` : '',
        dh ? `${dh > 0 ? '+' : ''}${dh} tall` : '',
      ].filter(Boolean)
      problems.push({
        depth: node.depth,
        line: `${node.kind} "${node.name}" is ${moved.join(', ')} — <${box.tag}> at (${Math.round(box.x)}, ${Math.round(box.y)}) ${Math.round(box.width)}×${Math.round(box.height)}`,
      })
    }
  }

  // Did the values the design names actually reach the screen?
  //
  // Asked of the rendered page, not of the source. A component library applies its
  // tokens through stylesheets, so reading `style` attributes would report every value
  // that arrived via `<Button>` as missing and push an implementation towards inlining
  // everything — penalising the design system this is meant to encourage.
  //
  // Asked of the whole page rather than of the element each node matched: that matching
  // is good enough to say a box is in the wrong place, but not good enough to pin which
  // tag carries a color, and a gate that cries wolf is worse than no gate.
  /** @type {Wanted[]} */
  const wanted = []
  const seen = new Set()
  for (const node of spec.nodes) {
    for (const style of node.styles ?? []) {
      const [, property, token] =
        /^([a-z-]+):\s*var\((--charcoal-[a-z0-9-]+)\)$/.exec(style.trim()) ?? []
      if (property && token && !seen.has(`${property} ${token}`)) {
        seen.add(`${property} ${token}`)
        wanted.push({ property, token })
      }
    }
  }

  const unreached = await page.evaluate((/** @type {Wanted[]} */ wanted) => {
    const root = getComputedStyle(document.documentElement)
    const elements = [...document.querySelectorAll('body *')]
    const out = []
    for (const { property, token } of wanted) {
      const value = root.getPropertyValue(token).trim()
      if (!value) {
        out.push({ token, why: 'no such variable in the theme' })
        continue
      }
      // Colors come back as rgb(); let the browser resolve both sides rather than
      // comparing the text of either.
      const probe = document.createElement('span')
      // A width with no style is not a border: `border-width` computes to 0px unless
      // something is drawn, so without this every border token resolves to 0px — which
      // nearly every element on the page matches, and a missing border is never caught.
      if (property.endsWith('-width') && property.startsWith('border')) {
        probe.style.setProperty('border-style', 'solid')
      }
      probe.style.setProperty(property, value)
      document.body.append(probe)
      const want = getComputedStyle(probe).getPropertyValue(property).trim()
      probe.remove()
      if (!want) {
        continue
      }
      // The same applies on the page: an element carrying the width but no style draws
      // nothing, and reads 0px here, which is the honest answer.
      const landed = elements.some(
        (el) => getComputedStyle(el).getPropertyValue(property).trim() === want,
      )
      if (!landed) {
        out.push({ token, why: `nothing on the page has ${property}: ${want}` })
      }
    }
    return out
  }, wanted)

  for (const { token, why } of unreached.slice(0, 8)) {
    problems.push({
      depth: 98,
      line: `${token} did not reach the screen — ${why}`,
    })
  }
  if (unreached.length > 8) {
    problems.push({
      depth: 98,
      line: `(+${unreached.length - 8} more tokens that did not reach the screen)`,
    })
  }
} finally {
  await browser.close()
}

if (problems.length === 0) {
  console.log(`${spec.name}: every box within 4px and every token on the page.`)
  process.exit(0)
}

console.log(
  `${spec.name}: ${problems.length} thing(s) to fix, outermost first.\n`,
)
for (const p of problems.sort((a, b) => a.depth - b.depth)) {
  console.log(`  ${p.line}`)
}
process.exit(1)
