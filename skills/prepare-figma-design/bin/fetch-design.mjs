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
import { downloadAssets, fetchNode, nodeId, parseUrl } from './figma.mjs'
import { figAssets, readFig } from './fig.mjs'
import { flatten, materialsOf } from './design.mjs'
import { loadTokens } from './tokens.mjs'
import {
  countReferences,
  loadV1Theme,
  spellings,
  v1Vocabulary,
} from './vocabulary.mjs'

/** @import { Node } from './design.mjs' */
/** @import { Vocabulary } from './vocabulary.mjs' */

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
/** @type {{ url?: string, fig?: string, node?: string, tokens?: string, theme?: string, vocabulary?: string, assets?: string, spec?: string }} */
let args = {}
/** @type {string | undefined} */
let argError
if (isCli) {
  try {
    ;({ values: args } = parseArgs({
      options: {
        url: { type: 'string' },
        fig: { type: 'string' },
        node: { type: 'string' },
        tokens: { type: 'string' },
        theme: { type: 'string' },
        vocabulary: { type: 'string' },
        assets: { type: 'string' },
        spec: { type: 'string' },
      },
      strict: true,
    }))
  } catch (error) {
    argError = error instanceof Error ? error.message : String(error)
  }
}
// A .fig carries the design and its bitmaps, so that route needs no credential at all.
const fromFig = args.fig !== undefined
if (
  isCli &&
  (argError ||
    (!args.url && !fromFig) ||
    (args.url && fromFig) ||
    (!fromFig && !process.env.FIGMA_TOKEN) ||
    !['auto', 'v1', 'v2'].includes(args.vocabulary ?? 'auto'))
) {
  if (argError) {
    console.error(argError)
  }
  if (!['auto', 'v1', 'v2'].includes(args.vocabulary ?? 'auto')) {
    console.error(`--vocabulary takes auto, v1 or v2, not ${args.vocabulary}.`)
  }
  if (args.url && fromFig) {
    console.error(
      'Give --url or --fig, not both: they are two ways to the same design.',
    )
  }
  console.error(
    'Usage: fetch-design.mjs (--url <figma url> | --fig <file.fig>)' +
      ' [--tokens <dir>] [--theme light|dark] [--vocabulary auto|v1|v2]' +
      ' [--assets <dir>] [--spec <path>]',
  )
  console.error(
    "--url reads the design over Figma's REST API. Set FIGMA_TOKEN in the" +
      ' environment; create one at Figma > Settings > Security > Personal access' +
      ' tokens. Read-only scope is enough; no Dev Mode seat is required.',
  )
  console.error(
    '--fig reads a local export (File > Save local copy) and needs no token,' +
      ' no network and no access to the original file. Name the frame with' +
      " --node 110-8609, which is the node-id from the design's link.",
  )
  process.exit(1)
}
// Always a real URL under `isCli`: the guard above exits when it is missing.
const designUrl = args.url ?? ''

const NOT_DOWNLOADED = '(not downloaded — rerun with --assets)'

if (isCli) {
  try {
    // ---- output --------------------------------------------------------------

    const figPath = args.fig
    const { key, node: target } = figPath
      ? { key: '', node: args.node && nodeId(args.node) }
      : parseUrl(designUrl)
    if (figPath && !target) {
      throw new Error(
        'Give --node <id> with --fig: a .fig holds the whole file, so there is no' +
          " one frame to default to. The id is the node-id in the design's link.",
      )
    }
    // Read the tokens first: a mistyped --tokens or --theme should fail before the
    // design is read, not after.
    const theme = args.theme ?? 'light'
    const tokens = loadTokens(args.tokens, theme)
    const v1 = v1Vocabulary(await loadV1Theme(args.tokens, theme))
    const {
      document,
      components,
      componentSets,
      styles = {},
      variables = {},
    } = figPath ? readFig(figPath, target) : await fetchNode(key, target)
    const nodes = flatten(document, components, componentSets)

    // Which dialect a value nobody named is ranked in. `auto` follows the frame: a
    // design built from the v1 library's styles is read in v1, one bound to v2
    // variables in v2, so the pack speaks the words the design already uses.
    const references = countReferences(
      nodes.map((node) => node.raw),
      { styles, variables, v1 },
      tokens,
    )
    const asked = args.vocabulary ?? 'auto'
    /** @type {Vocabulary} */
    const vocab = {
      mode:
        asked === 'v1' || asked === 'v2'
          ? asked
          : references.v1 > references.v2 && v1
            ? 'v1'
            : 'v2',
      v1,
      styles,
      variables,
      used: new Map(),
    }
    if (references.v1 > 0 && !v1) {
      console.error(
        'The design uses named styles, but @charcoal-ui/theme was not found next to' +
          ' --tokens or in this project, so they are written as comments, not as v1 keys.',
      )
    }
    const assetDir = args.assets
    const refs = nodes.flatMap((node) => (node.image ? [node.image.ref] : []))
    const assets = !assetDir
      ? new Map()
      : figPath
        ? figAssets(figPath, refs, assetDir)
        : await downloadAssets(key, refs, assetDir)
    const round = Math.round

    // The frame is a box like any other: it has a ground color, a direction, a gap and
    // its own padding. Describing only its size loses the screen's own layout.
    const root = nodes.find((node) => node.depth === 0)
    const rootMaterials = root ? materialsOf(root, tokens, vocab) : []
    // A frame can be a photograph with the UI over it. The bitmap is downloaded either
    // way, so leaving it out of the header loses the thing the screen is built on.
    const rootImage = root?.image
    if (rootImage) {
      const file = assets.get(rootImage.ref) ?? NOT_DOWNLOADED
      rootMaterials.push(`image: ${file}; object-fit: ${rootImage.fit}`)
    }

    // Which frame, which theme and which vocabulary: the same drawing resolves to
    // different token names under each, and a pack that does not say which was used
    // cannot be checked against the one the implementation chose.
    const vocabularyWhy =
      asked === 'auto'
        ? ` (auto: the frame references ${references.v1} v1 name(s) and ${references.v2} v2)`
        : ''
    const lines = [
      `# ${document.name}`,
      '',
      `- Frame: "${document.name}", node ${document.id}, ${round(
        document.absoluteBoundingBox?.width ?? 0,
      )}×${round(document.absoluteBoundingBox?.height ?? 0)}px`,
      `- Theme: ${theme}`,
      `- Vocabulary: ${vocab.mode}${vocabularyWhy}`,
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
      'A bare word such as `text2`, `spacing-16` or `typography-14` is a charcoal v1 theme',
      'key. It is written once, as the role, because a project spells v1 one of several',
      'ways; the table below gives each spelling, and the v2 variable with the same value.',
      'A `/* style: … */` or `/* variable: … */` comment is a name the design used that',
      'neither vocabulary has: the value before it is what that name looks like.',
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

    const tableAt = lines.length

    /**
     * The outermost ancestor that is a component instance, if any.
     *
     * Outermost, not nearest: an instance nests instances, and only the one the
     * implementation actually writes survives into the pack.
     */
    // Inside an instance the design shows how Figma composed the component, and the
    // library composes it differently: a TextField is a 22px label, a 4px gap and a
    // 40px field in the design, and one 40px element in the code. Describing those
    // parts invites an implementation that reproduces them and drifts from the design
    // with every one. The words are still wanted, so they move up onto the instance's
    // own line — collected first, because a node is written before its children walk.
    //
    // `nodes` is in document order, so the outermost enclosing instance is whatever
    // the parent's was, or the parent itself. Asking each node to walk its own
    // ancestors instead costs a pass over the whole chain per node.
    /** @type {Map<Node, Node | undefined>} */
    const owners = new Map()
    /** @type {Node[]} */
    const described = []
    for (const node of nodes) {
      const parent = node.parent
      const owner = parent
        ? (owners.get(parent) ??
          (parent.kind === 'instance' ? parent : undefined))
        : undefined
      owners.set(node, owner)
      if (owner) {
        if (node.raw.characters) {
          ;(owner.words ??= []).push(node.raw.characters)
        }
        continue
      }
      // Everything not inside an instance, and not the frame itself, is described —
      // once, so the markdown and the spec can never disagree about the node set.
      if (node.depth > 0) {
        described.push(node)
      }
    }

    /** Ranking a node's materials is the expensive part; `--spec` restates them. */
    const materialsFor = new Map(
      described.map((node) => [node, materialsOf(node, tokens, vocab)]),
    )

    for (const node of described) {
      const indent = '  '.repeat(node.depth - 1)
      const as = node.component
        ? ` — \`${node.component}\`${node.variant ? ` \`${node.variant}\`` : ''}`
        : ''
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
      const materials = materialsFor.get(node) ?? []
      if (materials.length > 0) {
        lines.push(`${indent}  ${materials.join('; ')}`)
      }
      if (node.image) {
        const file = assets.get(node.image.ref) ?? NOT_DOWNLOADED
        lines.push(`${indent}  image: ${file}; object-fit: ${node.image.fit}`)
      }
    }

    // The roles are only known once every material has been named, so the table is
    // placed into the header afterwards, ahead of the elements it explains.
    if (vocab.used.size > 0) {
      const table = [
        'Each v1 role used below, spelled for each route (— where that route has no word for it):',
        '',
        '| Role | Value | v2 CSS variable | Tailwind (v1) | styled theme (v1) | v1 CSS variable |',
        '| --- | --- | --- | --- | --- | --- |',
        ...[...vocab.used.values()].map(({ role, properties }) => {
          const s = spellings(role, properties, tokens)
          const cell = (/** @type {string | undefined} */ v) =>
            v ? `\`${v}\`` : '—'
          return `| \`${role.id}\` | ${s.value} | ${cell(s.v2)} | ${cell(s.tailwind)} | ${cell(s.styled)} | ${cell(s.cssVar)} |`
        }),
        '',
      ]
      lines.splice(tableAt, 0, ...table)
    }

    process.stdout.write(`${lines.join('\n')}\n`)

    // The same design, in the form a script can hold a render up against. Nothing here
    // is new — every box and every token below is already stated in the pack — but a
    // list of facts is not the same as being able to check your own work against them.
    const specPath = args.spec
    if (specPath) {
      await writeFile(
        specPath,
        `${JSON.stringify(
          {
            name: document.name,
            nodeId: document.id,
            theme,
            vocabulary: vocab.mode,
            // What each v1 role resolves to, so a check can ask the rendered page for the
            // value whichever way the implementation spelled it.
            roles: Object.fromEntries(
              [...vocab.used.values()].map(({ role, properties }) => [
                role.id,
                spellings(role, properties, tokens),
              ]),
            ),
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
              component: node.component,
              variant: node.variant,
              // What the design says this is made of, already resolved to the tokens the
              // system owns — so a check can ask whether the value reached the screen.
              styles: materialsFor.get(node) ?? [],
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
