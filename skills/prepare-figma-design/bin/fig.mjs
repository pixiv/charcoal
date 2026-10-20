/**
 * Reads a `.fig` export — what Figma writes from File → Save local copy — and returns
 * the same shape `figma.mjs` returns from the REST API, so everything downstream of it
 * works unchanged.
 *
 * The point is that a `.fig` needs no credential, no network and no access to the
 * original file. What it costs is the work Figma's servers normally do for you: a REST
 * node arrives with its absolute box already computed, its instances already expanded
 * and its enums already spelled out, and none of that is in the export. The sections
 * below are those three jobs.
 *
 * A `.fig` is a zip holding `canvas.fig` — the document, in Kiwi — and every bitmap the
 * file uses, each named by the same hash the REST API calls an `imageRef`.
 */
import {
  closeSync,
  fstatSync,
  mkdirSync,
  openSync,
  readSync,
  writeFileSync,
} from 'node:fs'
import zlib from 'node:zlib'
import { join } from 'node:path'
import { decode, parseSchema } from './kiwi.mjs'

const { inflateRawSync } = zlib
/**
 * Zstandard landed in `node:zlib` in Node 22.15. An export written by a recent Figma
 * needs it, and a clear refusal beats a `TypeError` from inside a decoder.
 *
 * @type {((data: Buffer) => Buffer) | undefined}
 */
const zstdDecompressSync = /** @type {any} */ (zlib).zstdDecompressSync

/** @import { FigmaNode } from './figma.mjs' */

/**
 * @typedef {{ fd: number, entries: Map<string, ZipEntry> }} Zip
 * @typedef {{ offset: number, method: number, size: number, raw: number }} ZipEntry
 * @typedef {{ m00: number, m01: number, m02: number, m10: number, m11: number, m12: number }} Matrix
 */

/** @type {Matrix} */

// ---- the zip around it ----------------------------------------------------

/**
 * Reads the zip's central directory without pulling the archive into memory: a design
 * with photographs runs to hundreds of megabytes, and a pack wants a handful of them.
 *
 * @param {string} path
 * @returns {Zip}
 */
function openZip(path) {
  const fd = openSync(path, 'r')
  try {
    const total = fstatSync(fd).size
    const tail = Buffer.alloc(Math.min(66_000, total))
    readSync(fd, tail, 0, tail.length, total - tail.length)
    const end = tail.lastIndexOf('PK\x05\x06', tail.length, 'latin1')
    if (end === -1) {
      throw new Error(`${path} is not a .fig: no zip end-of-directory record`)
    }
    const count = tail.readUInt16LE(end + 10)
    const dirSize = tail.readUInt32LE(end + 12)
    const dir = Buffer.alloc(dirSize)
    readSync(fd, dir, 0, dirSize, tail.readUInt32LE(end + 16))

    /** @type {Map<string, ZipEntry>} */
    const entries = new Map()
    let at = 0
    for (let i = 0; i < count && at + 46 <= dir.length; i++) {
      const nameLength = dir.readUInt16LE(at + 28)
      entries.set(dir.toString('utf8', at + 46, at + 46 + nameLength), {
        method: dir.readUInt16LE(at + 10),
        raw: dir.readUInt32LE(at + 20),
        size: dir.readUInt32LE(at + 24),
        offset: dir.readUInt32LE(at + 42),
      })
      at +=
        46 + nameLength + dir.readUInt16LE(at + 30) + dir.readUInt16LE(at + 32)
    }
    return { fd, entries }
  } catch (error) {
    closeSync(fd)
    throw error
  }
}

/**
 * @param {Zip} zip
 * @param {string} name
 */
function readEntry(zip, name) {
  const entry = zip.entries.get(name)
  if (!entry) {
    throw new Error(`.fig has no ${name}`)
  }
  // The local header repeats the name and extra field, and its extra field can differ
  // in length from the directory's, so the data offset has to be read from it.
  const header = Buffer.alloc(30)
  readSync(zip.fd, header, 0, 30, entry.offset)
  const raw = Buffer.alloc(entry.raw)
  readSync(
    zip.fd,
    raw,
    0,
    entry.raw,
    entry.offset + 30 + header.readUInt16LE(26) + header.readUInt16LE(28),
  )
  return entry.method === 0 ? raw : inflateRawSync(raw)
}

// ---- the document inside it -----------------------------------------------

/**
 * Pulls the node tree out of `canvas.fig`. The schema travels with the data, so the
 * only Figma-specific knowledge needed is the name of the root type — and even the
 * enum member names come out of the schema.
 *
 * @param {Zip} zip
 */
function readCanvas(zip) {
  const canvas = readEntry(zip, 'canvas.fig')
  if (canvas.toString('latin1', 0, 8) !== 'fig-kiwi') {
    throw new Error('canvas.fig is not in the format this reads')
  }

  // An 8-byte prelude, a version, then length-prefixed chunks: the schema, then the
  // document. Read them as a list rather than at fixed offsets — a truncated file
  // should say so here, not fail as an out-of-range read inside a decompressor.
  const chunks = []
  for (let at = 12; at < canvas.length;) {
    if (at + 4 > canvas.length) {
      throw new Error(
        `Truncated canvas.fig: ${canvas.length - at} byte(s) where a chunk length should be`,
      )
    }
    const length = canvas.readUInt32LE(at)
    at += 4
    if (at + length > canvas.length) {
      throw new Error(
        `Truncated canvas.fig: chunk ${chunks.length} claims ${length} bytes but ${canvas.length - at} remain`,
      )
    }
    chunks.push(canvas.subarray(at, at + length))
    at += length
  }
  const [schema, body] = chunks
  if (!schema || !body) {
    throw new Error(
      `canvas.fig has ${chunks.length} chunk(s); a schema and a document were expected`,
    )
  }

  const definitions = parseSchema(inflateRawSync(schema))
  // Newer exports compress the document with zstd and leave the schema on deflate.
  let data
  if (body.length >= 4 && body.readUInt32LE(0) === 0xfd2fb528) {
    if (!zstdDecompressSync) {
      throw new Error(
        `This .fig is zstd-compressed and this Node (${process.version}) cannot read it. Node 22.15 or newer can.`,
      )
    }
    data = zstdDecompressSync(body)
  } else {
    data = inflateRawSync(body)
  }

  /** @type {Record<string, Record<number, string>>} */
  const enums = {}
  for (const definition of definitions) {
    if (definition.kind === 0) {
      enums[definition.name] = Object.fromEntries(
        definition.fields.map((f) => [f.id, f.name]),
      )
    }
  }
  return {
    nodes: decode(data, definitions, 'Message').nodeChanges ?? [],
    enums,
  }
}

// ---- from Figma's own shape to the REST shape -----------------------------

/** @param {{ sessionID: number, localID: number } | undefined} guid */
const idOf = (guid) => (guid ? `${guid.sessionID}:${guid.localID}` : undefined)

/** @param {number[] | undefined} hash */
const hexOf = (hash) =>
  hash?.map((b) => b.toString(16).padStart(2, '0')).join('')

const IDENTITY = { m00: 1, m01: 0, m02: 0, m10: 0, m11: 1, m12: 0 }

/** @type {Record<string, string>} */
const REST_TYPE = {
  ROUNDED_RECTANGLE: 'RECTANGLE',
  SYMBOL: 'COMPONENT',
}

/**
 * `outer ∘ inner` — a node's transform is written against its parent, so an absolute
 * one is every transform from the root down, multiplied together.
 *
 * Exported for the tests: this and `boxOf` are the whole of what the REST API would
 * otherwise have computed, and a quiet error in either moves every box in the pack.
 */
/**
 * @param {Matrix} outer
 * @param {Matrix} inner
 * @returns {Matrix}
 */
export function compose(outer, inner) {
  return {
    m00: outer.m00 * inner.m00 + outer.m01 * inner.m10,
    m01: outer.m00 * inner.m01 + outer.m01 * inner.m11,
    m02: outer.m00 * inner.m02 + outer.m01 * inner.m12 + outer.m02,
    m10: outer.m10 * inner.m00 + outer.m11 * inner.m10,
    m11: outer.m10 * inner.m01 + outer.m11 * inner.m11,
    m12: outer.m10 * inner.m02 + outer.m11 * inner.m12 + outer.m12,
  }
}

/**
 * The upright box that contains the node once its transform is applied — which is what
 * `absoluteBoundingBox` means, and why a rotated node's box is wider than the node.
 */
/**
 * @param {Matrix} absolute
 * @param {{ x: number, y: number } | undefined} size
 */
export function boxOf(absolute, size) {
  const width = size?.x ?? 0
  const height = size?.y ?? 0
  const xs = []
  const ys = []
  /** @type {[number, number][]} */
  const corners = [
    [0, 0],
    [width, 0],
    [0, height],
    [width, height],
  ]
  for (const [x, y] of corners) {
    xs.push(absolute.m00 * x + absolute.m01 * y + absolute.m02)
    ys.push(absolute.m10 * x + absolute.m11 * y + absolute.m12)
  }
  const left = Math.min(...xs)
  const top = Math.min(...ys)
  return {
    x: left,
    y: top,
    width: Math.max(...xs) - left,
    height: Math.max(...ys) - top,
  }
}

/**
 * Weights Figma spells as four numbers only when they differ.
 *
 * @param {any} node
 */
function strokeWeights(node) {
  if (!node.borderStrokeWeightsIndependent) {
    return undefined
  }
  return {
    top: node.borderTopWeight ?? 0,
    right: node.borderRightWeight ?? 0,
    bottom: node.borderBottomWeight ?? 0,
    left: node.borderLeftWeight ?? 0,
  }
}

/**
 * The radius, in whichever of the two forms the REST API would have used: one number
 * when every corner agrees, four when they do not.
 *
 * Figma writes a uniform radius in the per-corner fields as readily as in the single
 * one, so reading only the single field loses the radius on most rounded boxes.
 *
 * @param {any} node
 * @returns {{ cornerRadius?: number, rectangleCornerRadii?: number[] }}
 */
function cornerRadii(node) {
  const corners = [
    node.rectangleTopLeftCornerRadius,
    node.rectangleTopRightCornerRadius,
    node.rectangleBottomRightCornerRadius,
    node.rectangleBottomLeftCornerRadius,
  ]
  if (corners.some((r) => r !== undefined)) {
    const filled = corners.map((r) => r ?? 0)
    if (!filled.every((r) => r === filled[0])) {
      return { rectangleCornerRadii: filled }
    }
    if (filled[0] > 0) {
      return { cornerRadius: filled[0] }
    }
  }
  return node.cornerRadius ? { cornerRadius: node.cornerRadius } : {}
}

/**
 * @param {any} paint
 * @param {Record<string, Record<number, string>>} enums
 */
function toPaint(paint, enums) {
  /** @type {any} */
  const out = {
    type: enums.PaintType?.[paint.type] ?? 'SOLID',
    visible: paint.visible !== false,
    opacity: paint.opacity,
  }
  if (paint.color) {
    out.color = paint.color
  }
  const ref = hexOf(paint.image?.hash)
  if (ref) {
    out.imageRef = ref
    out.scaleMode = enums.ImageScaleMode?.[paint.imageScaleMode ?? 2] ?? 'FILL'
  }
  return out
}

/** Figma names a weight in the font's style; the pack wants the number. */
const WEIGHTS = [
  [/thin|hairline/i, 100],
  [/extra\s*light|ultra\s*light/i, 200],
  [/light/i, 300],
  [/medium/i, 500],
  [/semi\s*bold|demi\s*bold/i, 600],
  [/extra\s*bold|ultra\s*bold/i, 800],
  [/black|heavy/i, 900],
  [/bold/i, 700],
]

/** @param {any} node */
function weightOf(node) {
  const style = node.fontName?.style
  if (!style) {
    return undefined
  }
  // `Semi Bold` matches `bold` too, so the more specific patterns are tried first.
  for (const [pattern, weight] of WEIGHTS) {
    if (/** @type {RegExp} */ (pattern).test(style)) {
      return weight
    }
  }
  return undefined
}

/**
 * One node, in the shape the REST API would have returned.
 *
 * @param {any} node
 * @param {Matrix} absolute
 * @param {Record<string, Record<number, string>>} enums
 * @returns {FigmaNode}
 */
function toRest(node, absolute, enums) {
  const stack = enums.StackMode?.[node.stackMode ?? 0] ?? 'NONE'
  const kind = enums.NodeType?.[node.type] ?? 'FRAME'
  /** @type {any} */
  const out = {
    id: idOf(node.guid) ?? '',
    // Figma's own vocabulary differs from the one its API answers in, and everything
    // downstream speaks the API's. A rounded rectangle is a RECTANGLE with a radius
    // over REST, and what the file calls a SYMBOL the API calls a COMPONENT.
    type: REST_TYPE[kind] ?? kind,
    name: node.name ?? '',
    visible: node.visible !== false,
    absoluteBoundingBox: boxOf(absolute, node.size),
    children: [],
  }
  if (node.fillPaints?.length) {
    out.fills = node.fillPaints.map((/** @type {any} */ p) => toPaint(p, enums))
  }
  if (node.strokePaints?.length) {
    out.strokes = node.strokePaints.map((/** @type {any} */ p) =>
      toPaint(p, enums),
    )
    out.strokeWeight = node.strokeWeight
    out.individualStrokeWeights = strokeWeights(node)
  }
  if (stack !== 'NONE') {
    out.layoutMode = stack
    out.itemSpacing = node.stackSpacing
    out.primaryAxisAlignItems =
      enums.StackJustify?.[node.stackPrimaryAlignItems ?? 0]
    // Figma stores one padding per axis and a second only where the sides differ.
    out.paddingLeft = node.stackHorizontalPadding ?? 0
    out.paddingRight =
      node.stackPaddingRight ?? node.stackHorizontalPadding ?? 0
    out.paddingTop = node.stackVerticalPadding ?? 0
    out.paddingBottom =
      node.stackPaddingBottom ?? node.stackVerticalPadding ?? 0
  }
  Object.assign(out, cornerRadii(node))
  if (node.textData) {
    out.characters = node.textData.characters
  }
  if (node.fontSize || node.lineHeight) {
    out.style = {
      fontSize: node.fontSize,
      // `units` 1 is pixels; a ratio or a percentage is not a length and is left out
      // rather than written as one.
      lineHeightPx:
        node.lineHeight?.units === 1 ? node.lineHeight.value : undefined,
      fontWeight: weightOf(node),
    }
  }
  const symbol = idOf(node.symbolData?.symbolID)
  if (symbol) {
    out.componentId = symbol
  }
  return out
}

// ---- the tree, and the instances the export leaves folded up --------------

/**
 * Builds the node tree and walks it into REST shape, expanding each instance far
 * enough to recover the words inside it.
 *
 * A `.fig` stores an instance as a reference to its component plus the overrides
 * applied to it, where the REST API hands back the instance with its contents already
 * expanded. The pack never describes what is inside an instance — the library composes
 * a component differently from the design, so describing Figma's parts invites an
 * implementation that reproduces them — but it does lift the *text* onto the instance's
 * own line. So instances are expanded for their text and nothing else, which is exactly
 * the part the pack keeps.
 *
 * @param {string} path
 * @param {string | undefined} nodeId
 */
export function readFig(path, nodeId) {
  const zip = openZip(path)
  try {
    const { nodes, enums } = readCanvas(zip)

    /** @type {Map<string, any>} */
    const byId = new Map()
    /** @type {Map<string, any[]>} */
    const children = new Map()
    for (const node of nodes) {
      const id = idOf(node.guid)
      if (id === undefined) {
        continue
      }
      byId.set(id, node)
      const parent = idOf(node.parentIndex?.guid)
      if (parent !== undefined) {
        const siblings = children.get(parent)
        if (siblings) {
          siblings.push(node)
        } else {
          children.set(parent, [node])
        }
      }
    }
    // Siblings carry a fractional index rather than an array position, and it is built
    // so that ordering the strings orders the children.
    for (const siblings of children.values()) {
      siblings.sort((a, b) =>
        (a.parentIndex?.position ?? '') < (b.parentIndex?.position ?? '')
          ? -1
          : 1,
      )
    }

    const rootId =
      nodeId ?? idOf(nodes.find((/** @type {any} */ n) => n.type === 1)?.guid)
    const root = rootId === undefined ? undefined : byId.get(rootId)
    if (!root) {
      throw new Error(
        `Node ${nodeId} is not in this .fig. Check the node-id in the link.`,
      )
    }

    /** @type {Record<string, { name: string }>} */
    const components = {}

    /**
     * @param {any} node
     * @param {Matrix} parentAbsolute
     * @returns {FigmaNode}
     */
    const walk = (node, parentAbsolute) => {
      const absolute = compose(parentAbsolute, node.transform ?? IDENTITY)
      const out = toRest(node, absolute, enums)
      const symbolId = idOf(node.symbolData?.symbolID)
      if (symbolId) {
        const symbol = byId.get(symbolId)
        if (symbol) {
          components[symbolId] = { name: symbol.name ?? '' }
        }
        out.children = wordsOf(node, symbolId, out)
        return out
      }
      out.children = (children.get(idOf(node.guid) ?? '') ?? []).map((child) =>
        walk(child, absolute),
      )
      return out
    }

    /**
     * The text an instance shows: each text node in its component, with the instance's
     * override applied where it has one. These carry no box of their own because the
     * pack never places them — they are read for their words and then hidden.
     *
     * @param {any} instance
     * @param {string} symbolId
     * @param {FigmaNode} shell
     */
    const wordsOf = (instance, symbolId, shell) => {
      /** @type {Map<string, string>} */
      const overrides = new Map()
      for (const override of instance.symbolData?.symbolOverrides ?? []) {
        const last = override.guidPath?.guids?.at(-1)
        const characters = override.textData?.characters
        if (last && characters !== undefined) {
          overrides.set(idOf(last) ?? '', characters)
        }
      }
      /** @type {FigmaNode[]} */
      const out = []
      const seen = new Set()
      const collect = (/** @type {string} */ id) => {
        if (seen.has(id)) {
          return
        }
        seen.add(id)
        for (const child of children.get(id) ?? []) {
          const childId = idOf(child.guid) ?? ''
          const nested = idOf(child.symbolData?.symbolID)
          const characters =
            overrides.get(childId) ?? child.textData?.characters
          if (characters) {
            out.push({
              id: childId,
              type: 'TEXT',
              name: child.name ?? '',
              characters,
              absoluteBoundingBox: shell.absoluteBoundingBox,
              children: [],
            })
          }
          collect(nested ?? childId)
        }
      }
      collect(symbolId)
      return out
    }

    return { document: walk(root, IDENTITY), components }
  } finally {
    closeSync(zip.fd)
  }
}

/**
 * Copies the bitmaps the design uses out of the archive. They are already in it, under
 * the same hash the pack refers to them by, so nothing is downloaded.
 *
 * @param {string} path
 * @param {string[]} refs
 * @param {string} dir
 * @returns {Map<string, string>} each image reference, by the path it was written to
 */
export function figAssets(path, refs, dir) {
  const wanted = [...new Set(refs)]
  const out = new Map()
  if (wanted.length === 0) {
    return out
  }
  const zip = openZip(path)
  try {
    mkdirSync(dir, { recursive: true })
    for (const ref of wanted) {
      if (!zip.entries.has(`images/${ref}`)) {
        console.error(
          `No image ${ref} in the .fig; it may predate this export.`,
        )
        continue
      }
      const bytes = readEntry(zip, `images/${ref}`)
      const file = join(dir, `${ref.slice(0, 12)}.${extensionOf(bytes)}`)
      writeFileSync(file, bytes)
      out.set(ref, file)
    }
    return out
  } finally {
    closeSync(zip.fd)
  }
}

/** The archive records no media type, so the bytes have to say what they are. */
/** @param {Buffer} bytes */
function extensionOf(bytes) {
  if (bytes[0] === 0xff && bytes[1] === 0xd8) {
    return 'jpg'
  }
  if (bytes.toString('latin1', 0, 3) === 'GIF') {
    return 'gif'
  }
  if (bytes.toString('latin1', 8, 12) === 'WEBP') {
    return 'webp'
  }
  return 'png'
}
