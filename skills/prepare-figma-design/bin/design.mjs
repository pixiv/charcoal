/**
 * Figma's tree read as the thing to build: the nodes worth describing, and what each one
 * is made of, with the design system's own token names on the materials.
 */
import { material, normalize, rankTokens } from './tokens.mjs'

/** @import { FigmaNode, Paint } from './figma.mjs' */
/** @import { Prefer, Tokens } from './tokens.mjs' */

/**
 * A bitmap and the `object-fit` its crop implies.
 *
 * @typedef {object} ImageFill
 * @property {string} ref
 * @property {string} fit
 */

/**
 * One element of the flattened design: its box, the Figma node it came from, and where it
 * sits in the tree.
 *
 * @typedef {object} Node
 * @property {string} kind
 * @property {string} name
 * @property {number} x
 * @property {number} y
 * @property {number} width
 * @property {number} height
 * @property {number} depth
 * @property {FigmaNode} raw
 * @property {FigmaNode[]} children
 * @property {string} id
 * @property {string} [component]
 * @property {string} [parentId]
 * @property {Node} [parent]
 * @property {ImageFill} [image]
 * @property {string[]} [words]
 */

/** @param {{ r: number, g: number, b: number, a?: number }} color */
const rgba = (color) =>
  `rgba(${Math.round(color.r * 255)}, ${Math.round(color.g * 255)}, ${Math.round(
    color.b * 255,
  )}, ${color.a ?? 1})`

/**
 * The paint a reader sees where it is not a flat color: a gradient, a pattern, a noise
 * fill. None of them is a value the design system has a word for, and none can be
 * written as a length or a hex — but saying nothing is worse, because a box painted
 * with a gradient then reads exactly like a box painted with nothing.
 *
 * @param {Paint[] | undefined} paints
 * @returns {string | undefined}
 */
function unnameable(paints) {
  for (const paint of paints ?? []) {
    if (paint.visible === false || paint.type === 'SOLID') {
      continue
    }
    // IMAGE is left out: a bitmap is reported on its own `image:` line, with the file
    // it was downloaded to, so naming it here would state it twice.
    if (paint.type === 'IMAGE') {
      return undefined
    }
    // `GRADIENT_LINEAR` reads as "linear gradient", the way a reader would say it.
    const kind = /^GRADIENT_(.+)$/.exec(paint.type)?.[1]
    return kind ? `${kind.toLowerCase()} gradient` : paint.type.toLowerCase()
  }
  return undefined
}

/**
 * The first visible solid paint, which is the one a reader sees.
 *
 * @param {Paint[] | undefined} paints
 * @returns {string | undefined}
 */
function solid(paints) {
  for (const paint of paints ?? []) {
    if (paint.visible !== false && paint.type === 'SOLID' && paint.color) {
      return rgba({
        ...paint.color,
        a: (paint.color.a ?? 1) * (paint.opacity ?? 1),
      })
    }
  }
  return undefined
}

/**
 * Figma's node types, in the vocabulary the pack uses.
 *
 * @type {Record<string, string>}
 */
const KIND = {
  FRAME: 'frame',
  GROUP: 'group',
  INSTANCE: 'instance',
  COMPONENT: 'component',
  TEXT: 'text',
  RECTANGLE: 'rectangle',
  ELLIPSE: 'ellipse',
  VECTOR: 'vector',
  LINE: 'vector',
  // An icon is often a union of paths, or a drawn shape. All of them take an icon
  // color, not a surface's background.
  BOOLEAN_OPERATION: 'vector',
  STAR: 'vector',
  REGULAR_POLYGON: 'vector',
}

/**
 * Whether a node is a bitmap fill's placement rather than a box in the layout.
 *
 * Figma crops an image by making a childless rectangle larger than and offset from the
 * frame that clips it. Left in, the pack asks for boxes that paint nothing.
 */
const FILL_KINDS = new Set([
  'rectangle',
  'rounded-rectangle',
  'vector',
  'ellipse',
])

/**
 * @param {Node} node
 * @param {Node | undefined} parent
 * @param {ImageFill | undefined} image
 */
export function isFillTransform(node, parent, image) {
  // Without a bitmap it is not a bitmap's placement — it is a shape the designer drew
  // that happens to bleed past its parent, and dropping it loses a real element.
  if (
    !image ||
    !parent ||
    !FILL_KINDS.has(node.kind) ||
    node.children.length > 0
  ) {
    return false
  }
  return (
    node.x < parent.x - 0.5 ||
    node.y < parent.y - 0.5 ||
    node.x + node.width > parent.x + parent.width + 0.5 ||
    node.y + node.height > parent.y + parent.height + 0.5
  )
}

/**
 * The image fill on a node, if it has one.
 *
 * `scaleMode` is the crop Figma applies, and it maps onto `object-fit` exactly. Without
 * it an implementation has to guess where a 512x512 bitmap sits inside a 294x165 slot,
 * and every guess is wrong somewhere.
 *
 * @type {Record<string, string>}
 */
const OBJECT_FIT = {
  FILL: 'cover',
  FIT: 'contain',
  TILE: 'repeat',
  STRETCH: 'fill',
}

/**
 * @param {FigmaNode} raw
 * @returns {ImageFill | undefined}
 */
export function imageFill(raw) {
  for (const fill of raw.fills ?? []) {
    if (fill.visible !== false && fill.type === 'IMAGE' && fill.imageRef) {
      return {
        ref: fill.imageRef,
        fit: OBJECT_FIT[fill.scaleMode ?? ''] ?? 'cover',
      }
    }
  }
  return undefined
}

/**
 * Flattens Figma's tree into the nodes worth describing, in document order.
 *
 * @param {FigmaNode} document
 * @param {Record<string, { name: string }>} components
 * @returns {Node[]}
 */
export function flatten(document, components) {
  const origin = document.absoluteBoundingBox ?? { x: 0, y: 0 }
  /** @type {Node[]} */
  const out = []

  /**
   * @param {FigmaNode} raw
   * @param {number} depth
   * @param {Node | undefined} parent
   */
  const walk = (raw, depth, parent) => {
    if (raw.visible === false) {
      return
    }
    const box = raw.absoluteBoundingBox ?? { x: 0, y: 0, width: 0, height: 0 }
    /** @type {Node} */
    const node = {
      kind: KIND[raw.type] ?? raw.type.toLowerCase(),
      name: raw.name,
      x: box.x - origin.x,
      y: box.y - origin.y,
      width: box.width,
      height: box.height,
      depth,
      raw,
      // A rounded rectangle is a rectangle in Figma's vocabulary; the pack distinguishes
      // them because the radius is what tells an implementation which it is.
      children: raw.children ?? [],
      component: raw.componentId
        ? components[raw.componentId]?.name
        : undefined,
      id: raw.id,
      parentId: parent?.raw?.id,
      parent,
    }
    if (node.kind === 'rectangle' && (raw.cornerRadius ?? 0) > 0) {
      node.kind = 'rounded-rectangle'
    }
    const fill = imageFill(raw)
    if (parent && isFillTransform(node, parent, fill)) {
      // The rectangle is the bitmap's placement, not an element — but it is also where
      // the bitmap is recorded. The frame that clips it is the box to paint, so the
      // image moves there and the rectangle still goes.
      parent.image = fill
      return
    }
    if (fill) {
      node.image = fill
    }
    out.push(node)
    for (const child of node.children) {
      walk(child, depth + 1, node)
    }
  }

  walk(document, 0, undefined)
  return out
}

/**
 * The surface roles a node could be sitting on — the container's own name, so the
 * family built from it is `text/on-<role>` and a photograph gives `text/on-on-img`.
 *
 * Five roles share one white, and nothing about the color says which; what says it is
 * what the text sits on. More than one comes back when the surface is itself ambiguous
 * (charcoal paints `container/negative` and `container/discovery` the same red).
 *
 * @param {Node} node
 * @param {Tokens} tokens
 * @returns {string[]}
 */
export function surfaceRole(node, tokens) {
  // The walk starts at the parent and never looks at `node`, so every child of one box
  // gets the same answer — 27k nodes over 8.5k distinct parents on a real screen.
  const cached = SURFACES.get(tokens)?.get(node.parent ?? EMPTY)
  if (cached) {
    return cached
  }
  const roles = walkSurface(node, tokens)
  let perTokens = SURFACES.get(tokens)
  if (!perTokens) {
    perTokens = new WeakMap()
    SURFACES.set(tokens, perTokens)
  }
  perTokens.set(node.parent ?? EMPTY, roles)
  return roles
}

/** Stands in for "no parent", which is one answer too and cannot key a WeakMap. */
const EMPTY = {}

/**
 * Keyed by the token set as well as the parent: `materialsOf` is exported, and two
 * callers with two design systems must not share an answer.
 *
 * @type {WeakMap<object, WeakMap<object, string[]>>}
 */
const SURFACES = new WeakMap()

/**
 * @param {Node} node
 * @param {Tokens} tokens
 * @returns {string[]}
 */
function walkSurface(node, tokens) {
  /** @type {string[] | undefined} */
  let fallback
  for (let at = node.parent; at; at = at.parent) {
    if (at.image) {
      return ['on-img']
    }
    const fill = solid(at.raw?.fills)
    if (!fill) {
      continue
    }
    const { token, tied } = rankTokens('background-color', fill, tokens, [
      'container/',
      'background/',
    ])
    // Only a role the system can finish the sentence about counts. `container/default`
    // is the page's own ground and has no `text/on-default`, so returning it would
    // discard a scrim's `on-img` for a name that resolves to nothing.
    const known = tokens.onRoles
    const roles = [
      ...new Set(
        (token ? [token.key] : tied).flatMap((key) => {
          const role = /^container\/([^/]+)/i.exec(key)?.[1]?.toLowerCase()
          return role && (!known || known.has(role)) ? [role] : []
        }),
      ),
    ]
    const opaque = normalize(fill).length === 7
    if (roles.length > 0 && opaque) {
      return roles
    }
    // A translucent fill shows what is under it, so it is not the whole answer even
    // when the system names it: a state overlay like `container/press-a` is 9% black
    // over whatever it is covering. Keep looking for the ground, and fall back to this
    // if there is none — a scrim over an image is the surface when the image is not an
    // ancestor of the text.
    if (roles.length > 0) {
      fallback = fallback ?? roles
      continue
    }
    // An opaque surface hides everything beneath it, whether or not the system has a
    // word for the color. What is further up is not what this text sits on.
    if (opaque) {
      return fallback ?? []
    }
  }
  return fallback ?? []
}

/**
 * Everything the design states about one node, as token-named declarations.
 *
 * @param {Node} node
 * @param {Tokens} tokens
 * @returns {string[]}
 */
export function materialsOf(node, tokens) {
  const raw = node.raw
  /** @type {string[]} */
  const out = []
  /**
   * @param {string} property
   * @param {string | number | undefined} value
   * @param {Prefer} [prefer]
   */
  const push = (property, value, prefer) => {
    const line = material(property, value, tokens, prefer)
    if (line) {
      out.push(line)
    }
  }

  // What a fill means depends on what it fills: words, an icon's shape, or a surface.
  const fill = solid(raw.fills)
  const property =
    node.kind === 'text' || node.kind === 'vector' ? 'color' : 'background'
  const painted = fill === undefined && unnameable(raw.fills)
  if (painted) {
    out.push(
      `${property}: ${painted} /* no token for this; read it from the design */`,
    )
  }
  if (node.kind === 'text' || node.kind === 'vector') {
    // Only a label or an icon is read against what it sits on, so only these two pay
    // for the ancestor walk.
    const family = node.kind === 'text' ? 'text' : 'icon'
    const on = surfaceRole(node, tokens)
    push('color', fill, [
      on.map((role) => `${family}/on-${role}/`),
      `${family}/`,
    ])
  } else {
    // The root frame is the screen's own ground; a box inside it is a container.
    // references/color.md reserves `container.default` for Modal and Menu.
    push(
      'background-color',
      fill,
      node.depth === 0
        ? ['background/', 'container/']
        : ['container/', 'background/'],
    )
  }

  if (raw.layoutMode && raw.layoutMode !== 'NONE') {
    // Figma also has a GRID auto-layout. Calling it a column is a wrong instruction
    // rather than a missing one, so it is named for what it is.
    /** @type {Record<string, string>} */
    const flow = {
      HORIZONTAL: 'flex-direction: row',
      VERTICAL: 'flex-direction: column',
    }
    out.push(flow[raw.layoutMode] ?? 'display: grid')
    // `itemSpacing` is meaningless under space-between; stating both would mislead.
    if (raw.primaryAxisAlignItems === 'SPACE_BETWEEN') {
      out.push('justify-content: space-between')
    } else if (raw.itemSpacing) {
      push('gap', raw.itemSpacing)
    }
  }

  const pad = {
    top: raw.paddingTop ?? 0,
    right: raw.paddingRight ?? 0,
    bottom: raw.paddingBottom ?? 0,
    left: raw.paddingLeft ?? 0,
  }
  // An axis with equal sides is one logical shorthand; otherwise state each side.
  /**
   * @param {keyof typeof pad} a
   * @param {keyof typeof pad} b
   * @param {string} both
   * @param {string} first
   * @param {string} second
   * @returns {[string, number][]}
   */
  const axis = (a, b, both, first, second) =>
    pad[a] === pad[b]
      ? [[both, pad[a]]]
      : [
          [first, pad[a]],
          [second, pad[b]],
        ]
  /** @type {[string, number][]} */
  const padding =
    pad.top === pad.right && pad.right === pad.bottom && pad.bottom === pad.left
      ? [['padding', pad.top]]
      : [
          ...axis(
            'left',
            'right',
            'padding-inline',
            'padding-left',
            'padding-right',
          ),
          ...axis(
            'top',
            'bottom',
            'padding-block',
            'padding-top',
            'padding-bottom',
          ),
        ]
  for (const [property, value] of padding.filter(([, value]) => value)) {
    push(property, value)
  }

  if (raw.cornerRadius) {
    push('border-radius', raw.cornerRadius)
  } else if (raw.rectangleCornerRadii?.some((r) => r > 0)) {
    // Mixed corners have no single token; state the four so the radius is not lost.
    out.push(
      `border-radius: ${raw.rectangleCornerRadii.map((r) => `${r}px`).join(' ')}`,
    )
  }
  const stroke = solid(raw.strokes)
  if (stroke) {
    push('border-color', stroke, ['border/'])
    // A list divider is a stroke on one side only. Stating `border-width` alone boxes
    // every row, which is the opposite of what references/border.md asks for.
    const sides = raw.individualStrokeWeights
    const perSide =
      sides && new Set(Object.values(sides)).size > 1
        ? Object.entries(sides).filter(([, weight]) => weight > 0)
        : []
    if (perSide.length > 0) {
      for (const [side, weight] of perSide) {
        push(`border-${side}-width`, weight)
      }
    } else {
      push('border-width', raw.strokeWeight)
    }
  }
  if (raw.style?.fontSize) {
    push('font-size', raw.style.fontSize)
  }
  if (raw.style?.lineHeightPx) {
    push('line-height', raw.style.lineHeightPx)
  }
  if (raw.style?.fontWeight && raw.style.fontWeight !== 400) {
    out.push(`font-weight: ${raw.style.fontWeight}`)
  }
  return out
}
