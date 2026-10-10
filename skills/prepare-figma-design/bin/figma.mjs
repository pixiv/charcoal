/**
 * Figma's REST API: the node tree behind a design link, and the bitmaps it refers to.
 *
 * A read-only personal access token is enough for every call here — none of them needs a
 * Dev Mode seat. The token is read where it is used rather than kept at module level.
 */
import { mkdirSync } from 'node:fs'
import { writeFile } from 'node:fs/promises'
import { join } from 'node:path'

/**
 * The shapes this file works in. Figma's REST payload is huge and mostly unread; only the
 * fields the pack actually looks at are named, so the typedef doubles as the list of what
 * a design is read for.
 *
 * @typedef {object} Paint
 * @property {string} type
 * @property {boolean} [visible]
 * @property {number} [opacity]
 * @property {{ r: number, g: number, b: number, a?: number }} [color]
 * @property {string} [imageRef]
 * @property {string} [scaleMode]
 */

/**
 * @typedef {object} FigmaNode
 * @property {string} id
 * @property {string} type
 * @property {string} name
 * @property {boolean} [visible]
 * @property {FigmaNode[]} [children]
 * @property {string} [componentId]
 * @property {string} [characters]
 * @property {{ x: number, y: number, width: number, height: number }} [absoluteBoundingBox]
 * @property {Paint[]} [fills]
 * @property {Paint[]} [strokes]
 * @property {string} [layoutMode]
 * @property {string} [primaryAxisAlignItems]
 * @property {number} [itemSpacing]
 * @property {number} [paddingTop]
 * @property {number} [paddingRight]
 * @property {number} [paddingBottom]
 * @property {number} [paddingLeft]
 * @property {number} [cornerRadius]
 * @property {number[]} [rectangleCornerRadii]
 * @property {number} [strokeWeight]
 * @property {{ top: number, right: number, bottom: number, left: number }} [individualStrokeWeights]
 * @property {{ fontSize?: number, lineHeightPx?: number, fontWeight?: number }} [style]
 */

/**
 * The credential, read where it is used.
 *
 * Importing this file for `loadTokens` should not reach into the environment for a
 * secret it will never send, and a module-level copy outlives every request made with
 * it. The environment is the only place it lives.
 */
function figmaAuth() {
  return { 'X-Figma-Token': process.env.FIGMA_TOKEN ?? '' }
}

/**
 * The file key and node id Figma puts in a design URL.
 *
 * @param {string} url
 * @returns {{ key: string, node: string | undefined }}
 */
export function parseUrl(url) {
  const key = /\/(?:file|design)\/([A-Za-z0-9]+)/.exec(url)?.[1]
  // Figma wrote ids as `36%3A6258` for years and still accepts those links; left
  // encoded, the id is double-encoded onto the query and the file reports it missing.
  const raw = /node-id=([^&]+)/.exec(url)?.[1] ?? ''
  let node
  try {
    node = decodeURIComponent(raw).replace('-', ':').trim()
  } catch {
    throw new Error(`Could not read the node id in ${url}`)
  }
  if (!key) {
    throw new Error(`No file key in ${url}`)
  }
  return { key, node: node || undefined }
}

/**
 * @param {string} key
 * @param {string | undefined} node
 * @returns {Promise<{ document: FigmaNode, components: Record<string, { name: string }> }>}
 */
export async function fetchNode(key, node) {
  const path = node
    ? `files/${key}/nodes?ids=${encodeURIComponent(node)}`
    : `files/${key}`
  const response = await fetch(`https://api.figma.com/v1/${path}`, {
    headers: figmaAuth(),
  })
  if (!response.ok) {
    throw new Error(`Figma returned ${response.status} ${response.statusText}`)
  }
  const body = await response.json()
  if (body.err) {
    throw new Error(body.err)
  }
  if (node && !body.nodes?.[node]) {
    throw new Error(
      `Node ${node} is not in file ${key}. Check the node-id in the link, and that the ` +
        'token can read this file.',
    )
  }
  return node
    ? {
        document: body.nodes[node].document,
        components: body.nodes[node].components ?? {},
      }
    : { document: body.document, components: body.components ?? {} }
}

/** @type {Record<string, string>} */
const IMAGE_EXTENSION = {
  'image/jpeg': 'jpg',
  'image/gif': 'gif',
  'image/webp': 'webp',
}

/**
 * Downloads the design's bitmaps, so the implementation has the images and not just
 * boxes where images go.
 *
 * Two calls: one asks Figma for a URL per image reference, then each is fetched. The
 * URLs are short-lived and signed, so they are downloaded now rather than written into
 * the pack for someone to follow later.
 *
 * Takes the image references rather than the nodes holding them, so nothing in this
 * file needs to know the shape of a flattened design.
 *
 * @param {string} key
 * @param {string[]} refs
 * @param {string} dir
 * @returns {Promise<Map<string, string>>} each image reference, by the path it was saved to
 */
export async function downloadAssets(key, refs, dir) {
  const wanted = [...new Set(refs)]
  if (wanted.length === 0) {
    return new Map()
  }

  const response = await fetch(`https://api.figma.com/v1/files/${key}/images`, {
    headers: figmaAuth(),
  })
  if (!response.ok) {
    console.error(
      `Could not list images: ${response.status} ${response.statusText}`,
    )
    return new Map()
  }
  const urls = (await response.json())?.meta?.images ?? {}

  mkdirSync(dir, { recursive: true })

  // The bitmaps are independent, and each is a separate round trip to a signed URL. A
  // screen with a dozen pictures spends seconds here if they are fetched one at a time.
  const downloaded = await Promise.all(
    [...wanted].map(async (ref) => {
      const url = urls[ref]
      if (!url) {
        console.error(
          `No URL for image ${ref}; it may have been deleted from the file.`,
        )
        return undefined
      }
      const image = await fetch(url)
      if (!image.ok) {
        console.error(`Could not download image ${ref}: ${image.status}`)
        return undefined
      }
      const extension = IMAGE_EXTENSION[image.headers.get('content-type') ?? '']
      const path = join(dir, `${ref.slice(0, 12)}.${extension ?? 'png'}`)
      // Blocking here would stall every other download still in flight.
      await writeFile(path, Buffer.from(await image.arrayBuffer()))
      return /** @type {[string, string]} */ ([ref, path])
    }),
  )
  return new Map(downloaded.filter((entry) => entry !== undefined))
}
