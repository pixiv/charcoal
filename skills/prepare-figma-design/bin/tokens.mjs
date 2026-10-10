/**
 * The design system's vocabulary: every token it publishes, indexed by the value it
 * resolves to, and the rules for which token a value may legitimately be called.
 *
 * Nothing here knows about Figma. This is the half of the pack that answers "does the
 * system have a word for this?", and it is where almost every judgement call lives.
 */
import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

/**
 * @typedef {object} Token
 * @property {string} category
 * @property {string} key
 * @property {string} cssVar
 * @property {string} value
 */

/**
 * @typedef {object} Tokens
 * @property {Map<string, Token[]>} byValue every token, by its resolved value
 * @property {Set<string>} [onRoles] surfaces the system has `text/on-<role>` words for
 */

/**
 * The roles a value may carry, best first. An entry that is itself a list holds prefixes
 * that rank equally.
 *
 * @typedef {(string | string[])[]} Prefer
 */

/**
 * Every token the design system publishes, by its resolved value.
 *
 * Style Dictionary chains references several levels deep (`{space.30}`), so they are
 * followed to a concrete value before indexing; a token whose reference cannot be
 * resolved is dropped rather than indexed under a brace.
 *
 * @param {string | undefined | null} dir
 * @param {string} [theme]
 * @returns {Tokens}
 */
export function loadTokens(dir, theme = 'light') {
  if (dir === undefined || dir === null) {
    return { byValue: new Map() }
  }
  if (dir === '') {
    throw new Error('--tokens needs a directory')
  }
  // A mistyped path must not read as a design system that simply has no token for
  // anything: the pack would come back full of raw hex and look like a ranking failure.
  if (!existsSync(dir)) {
    throw new Error(`--tokens: no such directory: ${dir}`)
  }

  // A design system ships one file per theme, and they define the same keys with
  // different values. Reading every file into one map means whichever the filesystem
  // listed last wins, so the same design resolves differently on ext4 and APFS. Take
  // the files that are not a theme, plus the one theme asked for, in a fixed order.
  const files = readdirSync(dir)
    .filter((f) => f.endsWith('.json'))
    .sort()
  const other = files.filter((f) => !/(light|dark)/i.test(f))
  if (theme === '') {
    throw new Error('--theme needs a name, such as light or dark')
  }
  const wanted = new RegExp(theme.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i')
  const chosen = files.filter((f) => wanted.test(f))
  if (chosen.length > 1) {
    // `--theme pixiv` matches pixiv-light.json and pixiv-dark.json alike, and merging
    // them is the order-dependence this whole function exists to avoid.
    throw new Error(
      `--theme ${theme} matches more than one file: ${chosen.join(', ')}`,
    )
  }
  if (chosen.length === 0 && files.some((f) => /(light|dark)/i.test(f))) {
    // Carrying on with the shared files alone drops every semantic token silently,
    // which looks like a design system that only has a palette.
    throw new Error(`No "${theme}" theme in ${dir}; it has ${files.join(', ')}`)
  }

  // The shared palette carries every theme's ramps (`light/red/0` beside `dark/red/0`).
  // The opposite ramp must not be nameable — a dark red in a light design is worse than
  // no token at all — but it must still be readable, because a theme deliberately points
  // some roles at the other ramp: light's `text/on-hud` is a dark neutral, since a HUD is
  // dark in both themes. Dropped at load, those roles resolve to nothing and vanish.
  const opposite = theme.toLowerCase() === 'dark' ? /^light\// : /^dark\//

  /** @type {Map<string, string>} */
  const raw = new Map()
  for (const file of [...other, ...chosen]) {
    let json
    try {
      json = JSON.parse(readFileSync(join(dir, file), 'utf8'))
    } catch (error) {
      throw new Error(
        `${join(dir, file)}: ${error instanceof Error ? error.message : String(error)}`,
      )
    }
    for (const [category, entries] of Object.entries(json)) {
      for (const [key, entry] of Object.entries(entries ?? {})) {
        const value = entry?.value
        if (typeof value === 'string' || typeof value === 'number') {
          raw.set(`${category}.${key}`, String(value))
        }
      }
    }
  }

  /** @type {(path: string, seen?: Set<string>) => string | undefined} */
  const resolve = (path, seen = new Set()) => {
    if (seen.has(path)) {
      return undefined
    }
    seen.add(path)
    const value = raw.get(path)
    if (value === undefined) {
      return undefined
    }
    const ref = /^\{([^}]+)\}$/.exec(value)?.[1]
    return ref === undefined ? value : resolve(ref, seen)
  }

  /** @type {Map<string, Token[]>} */
  const byValue = new Map()
  for (const path of raw.keys()) {
    const dot = path.indexOf('.')
    const category = path.slice(0, dot)
    const key = path.slice(dot + 1)
    const resolved = resolve(path)
    if (resolved === undefined) {
      continue
    }
    // Readable above, not nameable here.
    if (category === 'color' && opposite.test(key.toLowerCase())) {
      continue
    }

    const cssVar = `--charcoal-${[category, key]
      .join('-')
      .replace(/(.)([A-Z])/g, '$1-$2')
      .toLowerCase()
      .replaceAll('/', '-')
      .replaceAll(' ', '-')
      .replace(/(--)(\D)/g, '-$2')}`

    const token = { category, key, cssVar, value: normalize(resolved) }
    const bucket = byValue.get(token.value)
    if (bucket) {
      bucket.push(token)
    } else {
      byValue.set(token.value, [token])
    }
  }
  if (byValue.size === 0) {
    throw new Error(`--tokens: no Style Dictionary tokens found in ${dir}`)
  }

  // Which surfaces the system has words for things sitting on. `container/primary` has
  // `text/on-primary`; `container/secondary` and `container/press-a` have nothing, so
  // reading a label against one of those says nothing about the label.
  const onRoles = new Set()
  for (const bucket of byValue.values()) {
    for (const token of bucket) {
      const role = /^(?:text|icon)\/on-([^/]+)\//i.exec(token.key)?.[1]
      if (role) {
        onRoles.add(role.toLowerCase())
      }
    }
  }
  return { byValue, onRoles }
}

/**
 * Colors to `#rrggbb`, lengths to a bare pixel count, so equal values compare equal.
 *
 * @param {unknown} raw
 * @returns {string}
 */
export function normalize(raw) {
  const value = String(raw).trim().toLowerCase()
  const rgba =
    /^rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,\s/]+([\d.]+%?))?\s*\)$/.exec(
      value,
    )
  if (rgba) {
    const channels = [rgba[1], rgba[2], rgba[3]].map((n) =>
      Math.max(0, Math.min(255, Math.round(Number(n)))),
    )
    const a =
      rgba[4] === undefined
        ? 1
        : rgba[4].endsWith('%')
          ? Number(rgba[4].slice(0, -1)) / 100
          : Number(rgba[4])
    const hex = channels.map((n) => n.toString(16).padStart(2, '0')).join('')
    return a >= 1
      ? `#${hex}`
      : `#${hex}${Math.round(a * 255)
          .toString(16)
          .padStart(2, '0')}`
  }
  if (value.startsWith('#')) {
    let hex = value.slice(1)
    if (hex.length === 3 || hex.length === 4) {
      hex = [...hex].map((c) => c + c).join('')
    }
    if (hex.length === 8 && hex.slice(6) === 'ff') {
      hex = hex.slice(0, 6)
    }
    return `#${hex}`
  }
  const px = /^(-?[\d.]+)px$/.exec(value)
  if (px) {
    return `${Number(px[1])}px`
  }
  if (/^-?[\d.]+$/.test(value)) {
    return `${Number(value)}px`
  }
  return value
}

/**
 * Which tokens a property may legitimately resolve to, by category and key prefix.
 *
 * Category alone is too coarse. `text` holds both `font-size/40` and `line-height/40`,
 * so a 36px line height resolves to a font size and the pack states it as fact. Geometry
 * is absent on purpose: a width is the design's, and no token owns it.
 *
 * @type {Record<string, { category: string, prefix?: string }>}
 */
const MATCH = {
  gap: { category: 'space' },
  padding: { category: 'space' },
  'padding-inline': { category: 'space' },
  'padding-block': { category: 'space' },
  'padding-top': { category: 'space' },
  'padding-bottom': { category: 'space' },
  'padding-left': { category: 'space' },
  'padding-right': { category: 'space' },
  'border-radius': { category: 'radius' },
  'border-width': { category: 'border-width' },
  'border-top-width': { category: 'border-width' },
  'border-right-width': { category: 'border-width' },
  'border-bottom-width': { category: 'border-width' },
  'border-left-width': { category: 'border-width' },
  'font-size': { category: 'text', prefix: 'font-size/' },
  'line-height': { category: 'text', prefix: 'line-height/' },
  color: { category: 'color' },
  'background-color': { category: 'color' },
  'border-color': { category: 'color' },
}

/**
 * A raw palette entry, which names a color rather than a role.
 *
 * Keys arrive capitalised (`Light/Cyan/50`), so every comparison here folds case first.
 */
const PALETTE = /^(light|dark)\//

/**
 * A key that names an interaction state rather than a resting value.
 *
 * Many state variants resolve to the same color as some unrelated role's resting
 * value — white is `text/on-color/default` and also the hover shade of three other
 * roles — and they are the same depth and often shorter, so a tie-break on length
 * alone hands a plain white label `text/on-on-img/hover`.
 */
const STATE =
  /\/(hover|press|pressed|active|focus|focused|disabled|visited)(\/|$)/

/**
 * The token a literal resolves to, or — where the system offers several and the design
 * does not say which — the candidates that tied, so the pack can hand the choice over
 * instead of guessing.
 *
 * Several tokens commonly share one value, so candidates are ranked rather than taken in
 * file order: `#1f1f1f` is both `text/default` and `dark/blue/0`, and naming the palette
 * entry teaches the wrong vocabulary. Among equals the shallower key wins.
 *
 * @param {string} property
 * @param {string | number | undefined} literal
 * @param {Tokens} tokens
 * @param {Prefer} [prefer]
 * @returns {{ token: Token | undefined, tied: string[] }}
 */
export function rankTokens(property, literal, tokens, prefer = []) {
  const rule = MATCH[property]
  if (!rule || literal === undefined) {
    return { token: undefined, tied: [] }
  }

  // Keys arrive in mixed case (`Light/Cyan/50` beside `text/default`), so every
  // comparison folds case first.
  const candidates = (tokens.byValue.get(normalize(literal)) ?? []).filter(
    (t) => {
      const key = t.key.toLowerCase()
      return (
        t.category === rule.category &&
        (!rule.prefix || key.startsWith(rule.prefix))
      )
    },
  )
  if (candidates.length === 0) {
    return { token: undefined, tied: [] }
  }

  // `#1f1f1f` is `text/default` and `icon/default` alike, so the caller says which role
  // it is asking about: a color on a text node is a text color, the same color on a
  // vector is an icon color, and naming the other one teaches the wrong token.
  // An entry may be a group of prefixes that rank equally. Where the surface a label
  // sits on is itself two roles at once, neither of them is the better guess, and
  // ordering them would decide by name length what the design did not decide.
  /** @param {Token} t */
  const role = (t) => {
    const key = t.key.toLowerCase()
    const i = prefer.findIndex((wanted) =>
      Array.isArray(wanted)
        ? wanted.some((one) => key.startsWith(one))
        : key.startsWith(wanted),
    )
    return i === -1 ? prefer.length : i
  }

  // When a preferred role matches, rank by it. When none does, naming some other
  // semantic role is worse than saying nothing: a brand blue on a text node is not
  // `border/selected`, and a reader who trusts the pack learns the wrong token. Fall
  // through to the palette, which at least only claims what the color is.
  /** @param {Token} t */
  const stateRank = (t) => (STATE.test(t.key.toLowerCase()) ? 1 : 0)

  const preferred = candidates.filter((t) => role(t) < prefer.length)
  const pool =
    preferred.length > 0
      ? preferred
      : prefer.length === 0
        ? candidates
        : candidates.filter((t) => PALETTE.test(t.key.toLowerCase()))

  const sorted = pool.sort((a, b) => {
    const byRole = role(a) - role(b)
    if (byRole !== 0) {
      return byRole
    }
    // Among equals the shallower key wins: a 16px gap is `space/30`, not
    // `space/component/30`.
    // A resting value outranks a state variant that happens to share it.
    const state = stateRank(a) - stateRank(b)
    if (state !== 0) {
      return state
    }
    const depth = a.key.split('/').length - b.key.split('/').length
    if (depth !== 0) {
      return depth
    }
    return a.key.length - b.key.length
  })

  // Where several roles share one value and nothing separates them but the length of
  // their names, the design system has no answer and neither does the pack. White is
  // the resting text color on primary, negative, positive and discovery alike; saying
  // `text/on-on-img/default` because it sorts first teaches a token the design did not
  // choose. The literal is written instead, and the reader picks the role they know.
  const best = sorted[0]
  if (!best) {
    return { token: undefined, tied: [] }
  }
  /** @param {Token} t */
  const family = (t) => t.key.toLowerCase().split('/').slice(0, -1).join('/')
  const tied = sorted.filter(
    (t) =>
      role(t) === role(best) &&
      stateRank(t) === stateRank(best) &&
      t.key.split('/').length === best.key.split('/').length,
  )
  /** @type {Map<string, string>} */
  const families = new Map()
  for (const candidate of tied) {
    // The whole key, not the family: `container/tertiary/hover` and
    // `container/secondary/press` are one value under two names, and a reader who
    // appends `/default` to the family gets a third color.
    if (!families.has(family(candidate))) {
      families.set(family(candidate), candidate.key)
    }
  }
  if (families.size > 1) {
    // Several hues carrying one value is not the system offering several words for
    // this role — it is the palette, which has nothing to say about roles at all.
    const palette = tied.every((t) => PALETTE.test(t.key.toLowerCase()))
    return { token: undefined, tied: palette ? [] : [...families.values()] }
  }
  return { token: best, tied: [] }
}

/**
 * `var(--token)` where the system names the value, the literal where it does not.
 *
 * @param {string} property
 * @param {string | number | undefined} literal
 * @param {Tokens} tokens
 * @param {Prefer} [prefer]
 * @returns {string | undefined}
 */
export function material(property, literal, tokens, prefer) {
  if (literal === undefined || literal === null || literal === '') {
    return undefined
  }
  const { token, tied } = rankTokens(property, literal, tokens, prefer)
  if (token) {
    return `${property}: var(${token.cssVar})`
  }
  // A tie is worth more than the literal alone: the system does have a word for this,
  // several in fact, and which one is right is a question about the design rather than
  // about the color. Naming the candidates lets the reader answer it.
  const choices = tied.length > 0 ? ` /* ${tied.join(' | ')} */` : ''
  return `${property}: ${normalize(literal)}${choices}`
}
