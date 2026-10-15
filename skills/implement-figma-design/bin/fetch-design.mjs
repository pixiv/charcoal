#!/usr/bin/env node
/**
 * Turns a Figma design link into the structure to build and the materials to build it
 * from: no Dev Mode seat, only a read-only personal access token. Dev Mode's MCP
 * splits a design across three payloads and needs a paid seat; the REST API returns the
 * whole node tree to anyone with a personal token.
 *
 * The token comes from `FIGMA_TOKEN` in the environment, never from the command line,
 * where it would be kept in shell history.
 *
 *   node fetch-design.mjs \
 *     --url https://www.figma.com/design/<key>/<name>?node-id=36-6258 \
 *     --tokens node_modules/@charcoal-ui/theme/src/json \
 *     --assets design/assets
 *
 * See SKILL.md for what the output means and what it deliberately leaves out.
 */
import { realpathSync } from 'node:fs'
import { writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { parseArgs } from 'node:util'
import { pathToFileURL } from 'node:url'
import { downloadAssets, fetchNode, parseUrl } from './figma.mjs'
import { flatten, materialsOf } from './design.mjs'
import { loadTokens } from './tokens.mjs'

/** @import { Node } from './design.mjs' */

// Comparing basenames made any importer called `pack.mjs` run as the CLI and exit.
// Node realpaths the entry module, so a `bin` symlink has to be resolved to match.
const mainUrl = (() => {
  try {
    return pathToFileURL(realpathSync(resolve(process.argv[1] ?? ''))).href
  } catch {
    return undefined
  }
})()
const isCli = mainUrl !== undefined && import.meta.url === mainUrl
/** @type {{ url?: string, tokens?: string, theme?: string, assets?: string, spec?: string }} */
let args = {}
/** @type {string | undefined} */
let argError
if (isCli) {
  try {
    ;({ values: args } = parseArgs({
      options: {
        url: { type: 'string' },
        tokens: { type: 'string' },
        theme: { type: 'string' },
        assets: { type: 'string' },
        spec: { type: 'string' },
      },
      strict: true,
    }))
  } catch (error) {
    argError = error instanceof Error ? error.message : String(error)
  }
}
if (isCli && (argError || !args.url || !process.env.FIGMA_TOKEN)) {
  if (argError) {
    console.error(argError)
  }
  console.error(
    'Usage: fetch-design.mjs --url <figma url>' +
      ' [--tokens <dir>] [--theme light|dark] [--assets <dir>]',
  )
  console.error(
    'Set FIGMA_TOKEN in the environment. Create one at' +
      ' Figma > Settings > Security > Personal access tokens.',
  )
  console.error('Read-only scope is enough; no Dev Mode seat is required.')
  process.exit(1)
}
// Always a real URL under `isCli`: the guard above exits when it is missing.
const designUrl = args.url ?? ''

const NOT_DOWNLOADED = '(not downloaded — rerun with --assets)'

if (isCli) {
  try {
    // ---- output --------------------------------------------------------------

    const { key, node: nodeId } = parseUrl(designUrl)
    // Read the tokens first: a mistyped --tokens or --theme should fail before the
    // design is fetched, not after.
    const tokens = loadTokens(args.tokens, args.theme ?? 'light')
    const { document, components } = await fetchNode(key, nodeId)
    const nodes = flatten(document, components)
    const assetDir = args.assets
    const assets = assetDir
      ? await downloadAssets(
          key,
          nodes.flatMap((node) => (node.image ? [node.image.ref] : [])),
          assetDir,
        )
      : new Map()
    const round = Math.round

    // The frame is a box like any other: it has a ground color, a direction, a gap and
    // its own padding. Describing only its size loses the screen's own layout.
    const root = nodes.find((node) => node.depth === 0)
    const rootMaterials = root ? materialsOf(root, tokens) : []
    // A frame can be a photograph with the UI over it. The bitmap is downloaded either
    // way, so leaving it out of the header loses the thing the screen is built on.
    const rootImage = root?.image
    if (rootImage) {
      const file = assets.get(rootImage.ref) ?? NOT_DOWNLOADED
      rootMaterials.push(`image: ${file}; object-fit: ${rootImage.fit}`)
    }

    const lines = [
      `# ${document.name}`,
      '',
      `Frame: ${round(document.absoluteBoundingBox?.width ?? 0)}×${round(
        document.absoluteBoundingBox?.height ?? 0,
      )}px.`,
      // Labelled: an unlabelled declaration list under the size reads as a stray
      // fragment with nothing saying what it applies to. Measured against a scored
      // benchmark this did not by itself recover the frame's padding, which
      // implementations still drop — it is clearer, not a fix.
      ...(rootMaterials.length > 0
        ? ['', `The frame's own styles: ${rootMaterials.join('; ')}`]
        : []),
      '',
      'One line per element: the box it occupies, then what it is made of. A value given as',
      '`var(--…)` has a design token and should be written as that token; a bare value with',
      "no comment after it has none. Widths and heights are the design's geometry — no token",
      'owns those.',
      '',
      'A literal followed by `/* a | b */` means the system has several names for that',
      'value and the design does not say which: pick the one whose meaning fits the',
      'element, and write it as the token.',
      '',
      "The nesting is the structure to build. Position children with their parent's `gap` and",
      '`padding`, not with offsets on the children.',
      '',
      'Where an element has words, they are given as `text:` — use them verbatim. A node name',
      'is its Figma layer, which is often a label rather than what it says.',
      '',
    ]

    /**
     * The outermost ancestor that is a component instance, if any.
     *
     * Outermost, not nearest: an instance nests instances, and only the one the
     * implementation actually writes survives into the pack.
     */
    /**
     * @param {Node} node
     * @returns {Node | undefined}
     */
    const instanceAbove = (node) => {
      /** @type {Node | undefined} */
      let found
      for (let at = node.parent; at; at = at.parent) {
        if (at.kind === 'instance') {
          found = at
        }
      }
      return found
    }

    // Inside an instance the design shows how Figma composed the component, and the
    // library composes it differently: a TextField is a 22px label, a 4px gap and a
    // 40px field in the design, and one 40px element in the code. Describing those
    // parts invites an implementation that reproduces them and drifts from the design
    // with every one. The words are still wanted, so they move up onto the instance's
    // own line — collected first, because a node is written before its children walk.
    const inside = new Set()
    for (const node of nodes) {
      const owner = instanceAbove(node)
      if (!owner) {
        continue
      }
      inside.add(node)
      if (node.raw.characters) {
        owner.words = [...(owner.words ?? []), node.raw.characters]
      }
    }

    for (const node of nodes) {
      if (node.depth === 0 || inside.has(node)) {
        continue
      }
      const indent = '  '.repeat(node.depth - 1)
      const as = node.component ? ` — \`${node.component}\`` : ''
      lines.push(
        `${indent}- ${node.kind} "${node.name}" ${round(node.width)}×${round(node.height)}` +
          ` at (${round(node.x)}, ${round(node.y)})${as}`,
      )
      const words = node.raw.characters
        ? [node.raw.characters, ...(node.words ?? [])]
        : (node.words ?? [])
      if (words.length > 0) {
        lines.push(
          `${indent}  text: ${words.map((w) => JSON.stringify(w)).join(', ')}`,
        )
      }
      const materials = materialsOf(node, tokens)
      if (materials.length > 0) {
        lines.push(`${indent}  ${materials.join('; ')}`)
      }
      if (node.image) {
        const file = assets.get(node.image.ref) ?? NOT_DOWNLOADED
        lines.push(`${indent}  image: ${file}; object-fit: ${node.image.fit}`)
      }
    }

    process.stdout.write(`${lines.join('\n')}\n`)

    // The same design, in the form a script can hold a render up against. Nothing here
    // is new — every box and every token below is already stated in the pack — but a
    // list of facts is not the same as being able to check your own work against them.
    const specPath = args.spec
    if (specPath) {
      const described = nodes.filter(
        (node) => node.depth > 0 && !inside.has(node),
      )
      await writeFile(
        specPath,
        `${JSON.stringify(
          {
            name: document.name,
            frame: {
              width: round(document.absoluteBoundingBox?.width ?? 0),
              height: round(document.absoluteBoundingBox?.height ?? 0),
            },
            nodes: described.map((node) => ({
              id: node.id,
              parentId: node.parentId,
              name: node.name,
              kind: node.kind,
              depth: node.depth,
              x: round(node.x),
              y: round(node.y),
              width: round(node.width),
              height: round(node.height),
              text: node.raw.characters ?? undefined,
              // What the design says this is made of, already resolved to the tokens the
              // system owns — so a check can ask whether the value reached the screen.
              styles: materialsOf(node, tokens),
            })),
          },
          null,
          2,
        )}\n`,
      )
    }
  } catch (error) {
    // The audience for this is someone with a mistyped flag, not a stack trace — but
    // `fetch` reports every network failure as the single word "fetch failed" and puts
    // the reason that would actually help in `cause`.
    const failure = error instanceof Error ? error : new Error(String(error))
    const cause =
      /** @type {{ message?: string, code?: string } | undefined} */ (
        failure.cause
      )
    const why = cause?.message ?? cause?.code
    console.error(why ? `${failure.message}: ${why}` : failure.message)
    if (process.env.DEBUG) {
      console.error(failure.stack)
    }
    process.exit(1)
  }
}
