/**
 * The design's own words for its materials: the named styles and bound variables a
 * designer picked, read before any value is matched against a token.
 *
 * Ranking a literal against the token JSON is a guess about what the designer meant —
 * `#ffffff` is five roles at once. A node that says `fill: Text/5` or binds
 * `container/default` has already answered the question, so its answer wins outright and
 * the literal ranking in `tokens.mjs` is only the fallback for a value nobody named.
 *
 * charcoal has two vocabularies. v2 is the Style Dictionary JSON `--tokens` points at,
 * written as `var(--charcoal-…)`. v1 is the older theme object (`text2`, `surface4`,
 * `spacing[16]`, `typography.size[14]`) that the Figma library's named styles still
 * carry, and that a Tailwind or styled-components app spells its own way. The v1 keys
 * come from the installed `@charcoal-ui/theme` itself, never from a copy kept here.
 */
import { createRequire } from 'node:module'
import { join, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { material, normalize, rankTokens } from './tokens.mjs'

/** @import { Prefer, Token, Tokens } from './tokens.mjs' */

/**
 * The v1 theme as `@charcoal-ui/theme` exports it — only the parts a material can name.
 *
 * @typedef {object} V1Theme
 * @property {Record<string, unknown>} color
 * @property {Record<string, number>} [spacing]
 * @property {Record<string, number>} [borderRadius]
 * @property {{ size?: Record<string, { fontSize: number, lineHeight: number }> }} [typography]
 */

/**
 * One v1 word: `text2`, `spacing-16`, `radius-8`, `typography-14`.
 *
 * @typedef {object} Role
 * @property {string} id how the pack writes it
 * @property {'color' | 'spacing' | 'radius' | 'typography'} group
 * @property {string} key the theme's own key
 * @property {string} value the value it resolves to, normalized
 */

/**
 * @typedef {object} V1
 * @property {Map<string, Role>} colors by the key folded to letters and digits
 * @property {Map<string, Role>} spacing by pixel value
 * @property {Map<string, Role>} radius by pixel value
 * @property {Map<string, Role & { fontSize: number, lineHeight: number }>} typography by font size
 */

/**
 * @typedef {object} Vocabulary
 * @property {'v1' | 'v2'} mode which dialect a value nobody named is ranked in
 * @property {V1 | undefined} v1
 * @property {Record<string, { name: string, styleType?: string }>} styles by style id
 * @property {Record<string, { name: string }>} variables by variable id
 * @property {Map<string, { role: Role, properties: Set<string> }>} used every v1 role written, for the header
 */

/**
 * A reference from a node to a name the design gave a value.
 *
 * @typedef {{ style?: string, variable?: string }} Ref
 */

/** Letters and digits only, so `Text/2`, `text 2` and `text2` compare equal. */
const fold = (/** @type {string} */ s) =>
  s.toLowerCase().replace(/[^a-z0-9]/g, '')

/**
 * Indexes a v1 theme object.
 *
 * @param {V1Theme | undefined} theme
 * @returns {V1 | undefined}
 */
export function v1Vocabulary(theme) {
  if (!theme?.color) {
    return undefined
  }
  /** @type {V1} */
  const out = {
    colors: new Map(),
    spacing: new Map(),
    radius: new Map(),
    typography: new Map(),
  }
  for (const [key, value] of Object.entries(theme.color)) {
    // A gradient is a list of stops, not a color a fill can be matched against.
    if (typeof value === 'string') {
      out.colors.set(fold(key), {
        id: key,
        group: 'color',
        key,
        value: normalize(value),
      })
    }
  }
  for (const [key, px] of Object.entries(theme.spacing ?? {})) {
    out.spacing.set(normalize(px), {
      id: `spacing-${key}`,
      group: 'spacing',
      key,
      value: normalize(px),
    })
  }
  for (const [key, px] of Object.entries(theme.borderRadius ?? {})) {
    out.radius.set(normalize(px), {
      id: `radius-${key}`,
      group: 'radius',
      key,
      value: normalize(px),
    })
  }
  for (const [key, size] of Object.entries(theme.typography?.size ?? {})) {
    out.typography.set(String(size.fontSize), {
      id: `typography-${key}`,
      group: 'typography',
      key,
      value: `${size.fontSize}px/${size.lineHeight}px`,
      fontSize: size.fontSize,
      lineHeight: size.lineHeight,
    })
  }
  return out
}

/**
 * The installed `@charcoal-ui/theme`'s v1 theme, found next to the token JSON and then
 * from the working directory. Undefined when neither has it: the styles are then still
 * named, as comments, but nothing is mapped to a v1 key.
 *
 * @param {string | undefined} tokensDir
 * @param {string} theme
 * @returns {Promise<V1Theme | undefined>}
 */
export async function loadV1Theme(tokensDir, theme = 'light') {
  /** @type {string[]} */
  const from = [tokensDir ?? '', process.cwd()].filter((dir) => dir !== '')
  for (const dir of from) {
    try {
      const found = createRequire(join(resolve(dir), 'noop.js')).resolve(
        '@charcoal-ui/theme',
      )
      const loaded = await import(pathToFileURL(found).href)
      const themes = loaded.light ? loaded : loaded.default
      const chosen = themes?.[theme.toLowerCase() === 'dark' ? 'dark' : 'light']
      if (chosen?.color) {
        return chosen
      }
    } catch {
      // Try the next place.
    }
  }
  return undefined
}

/** Which v1 groups a CSS property can be named from. */
const SPACE = /^(gap|padding)/

/**
 * The v1 role a Figma style name stands for, if the theme has one.
 *
 * Fill styles are named after the key with a separator in it (`Text/2`, `Surface/4`), so
 * the comparison folds both to letters and digits, and tries the name's tail as well —
 * a library may group them (`Charcoal/Text/2`). Text styles are `14 / Regular`.
 *
 * @param {V1 | undefined} v1
 * @param {string} property
 * @param {string} name
 * @returns {Role | undefined}
 */
export function v1Style(v1, property, name) {
  if (!v1) {
    return undefined
  }
  if (property === 'typography') {
    const size = /^\s*(\d+)\s*\/\s*[a-z]/i.exec(name)?.[1]
    return size === undefined ? undefined : v1.typography.get(size)
  }
  if (!/color$/.test(property)) {
    return undefined
  }
  const parts = name.split('/')
  for (let i = 0; i < parts.length; i++) {
    const role = v1.colors.get(fold(parts.slice(i).join('')))
    if (role) {
      return role
    }
  }
  return undefined
}

/**
 * The v1 role a variable name stands for: `spacing/16`, `radius/8`, or a color key.
 *
 * @param {V1 | undefined} v1
 * @param {string} property
 * @param {string} name
 * @returns {Role | undefined}
 */
function v1Variable(v1, property, name) {
  if (!v1) {
    return undefined
  }
  const px = /^(?:spacing|space|radius|border-radius)\/(\d+)$/i.exec(name)?.[1]
  if (px !== undefined) {
    if (SPACE.test(property) && /^spac/i.test(name)) {
      return v1.spacing.get(normalize(px))
    }
    if (property === 'border-radius' && /radius/i.test(name)) {
      return v1.radius.get(normalize(px))
    }
    return undefined
  }
  return v1Style(v1, property, name)
}

/** The categories a property's variables live in, mirroring tokens.mjs's MATCH. */
/** @param {string} property */
const categoryOf = (property) =>
  /color$/.test(property)
    ? 'color'
    : SPACE.test(property)
      ? 'space'
      : property === 'border-radius'
        ? 'radius'
        : /^border.*width$/.test(property)
          ? 'border-width'
          : /^(font-size|line-height)$/.test(property)
            ? 'text'
            : undefined

/** @type {WeakMap<Tokens, Map<string, Token>>} */
const BY_KEY = new WeakMap()

/**
 * The v2 token a variable name is, when the token JSON has that key.
 *
 * @param {Tokens} tokens
 * @param {string} property
 * @param {string} name
 * @returns {Token | undefined}
 */
export function v2Variable(tokens, property, name) {
  let byKey = BY_KEY.get(tokens)
  if (!byKey) {
    byKey = new Map()
    for (const bucket of tokens.byValue.values()) {
      for (const token of bucket) {
        byKey.set(`${token.category}|${token.key.toLowerCase()}`, token)
      }
    }
    BY_KEY.set(tokens, byKey)
  }
  const category = categoryOf(property)
  if (!category) {
    return undefined
  }
  const key = name.toLowerCase().trim()
  return (
    byKey.get(`${category}|${key}`) ??
    // A collection may repeat the category as a group: `color/text/default`.
    byKey.get(`${category}|${key.replace(new RegExp(`^${category}/`), '')}`)
  )
}

/**
 * The v1 color a literal is, ranked like the v2 one: the roles the property can carry,
 * best first, and nothing where only an unrelated role matches.
 *
 * @type {Record<string, RegExp[]>}
 */
const V1_PREFER = {
  text: [/^text/, /^(link|brand|assertive|warning|success)/],
  vector: [/^(text|icon)/, /^(link|brand|assertive|warning|success)/],
  ground: [/^background/, /^surface/],
  box: [/^surface/, /^background/, /^(brand|assertive|warning|success)/],
  border: [/^border$/],
}

/**
 * @param {V1} v1
 * @param {string} property
 * @param {string | number} literal
 * @param {string} use which of V1_PREFER applies
 * @returns {{ role: Role | undefined, tied: string[] }}
 */
export function rankV1(v1, property, literal, use) {
  const value = normalize(literal)
  if (/color$/.test(property)) {
    const prefer = V1_PREFER[use] ?? []
    for (const pattern of prefer) {
      const hits = [...v1.colors.values()].filter(
        (r) => r.value === value && pattern.test(r.key.toLowerCase()),
      )
      if (hits.length === 1) {
        return { role: hits[0], tied: [] }
      }
      if (hits.length > 1) {
        return { role: undefined, tied: hits.map((r) => r.id) }
      }
    }
    return { role: undefined, tied: [] }
  }
  if (SPACE.test(property)) {
    return { role: v1.spacing.get(value), tied: [] }
  }
  if (property === 'border-radius') {
    return { role: v1.radius.get(value), tied: [] }
  }
  return { role: undefined, tied: [] }
}

/**
 * The v2 variable that holds the same value as a v1 role, where exactly one does.
 *
 * @param {Role} role
 * @param {string} property
 * @param {Tokens} tokens
 * @param {Prefer} [prefer]
 * @returns {string | undefined}
 */
export function v2Equivalent(role, property, tokens, prefer) {
  if (role.group === 'typography') {
    const [size, line] = role.value.split('/')
    const a = rankTokens('font-size', size, tokens).token
    const b = rankTokens('line-height', line, tokens).token
    return a && b ? `var(${a.cssVar}) / var(${b.cssVar})` : undefined
  }
  const asked =
    role.group === 'spacing'
      ? 'gap'
      : role.group === 'radius'
        ? 'border-radius'
        : property
  return rankTokens(asked, role.value, tokens, prefer).token?.cssVar
}

/**
 * One declaration, named by the design where it named it and ranked where it did not.
 *
 * @param {string} property
 * @param {string | number | undefined} literal
 * @param {Tokens} tokens
 * @param {Prefer} [prefer]
 * @param {Vocabulary} [vocab]
 * @param {Ref} [ref]
 * @param {string} [use] which v1 roles a literal may be ranked to
 * @returns {string | undefined}
 */
export function say(property, literal, tokens, prefer, vocab, ref, use = '') {
  if (literal === undefined || literal === null || literal === '') {
    return undefined
  }
  /** @type {string | undefined} */
  let named
  const variable = ref?.variable && vocab?.variables[ref.variable]?.name
  const style = ref?.style && vocab?.styles[ref.style]?.name
  if (variable) {
    const token = v2Variable(tokens, property, variable)
    if (token) {
      return `${property}: var(${token.cssVar})`
    }
    const role = v1Variable(vocab?.v1, property, variable)
    if (role) {
      return written(property, role, tokens, prefer, vocab)
    }
    named = `variable: ${variable}`
  } else if (style) {
    const role = v1Style(vocab?.v1, property, style)
    if (role) {
      return written(property, role, tokens, prefer, vocab)
    }
    named = `style: ${style}`
  }
  // Nobody named it, or named it with a word neither vocabulary has. The name is still
  // what the designer called it, so it goes in a comment rather than being dropped.
  let line
  if (vocab?.mode === 'v1' && vocab.v1) {
    const { role, tied } = rankV1(vocab.v1, property, literal, use)
    if (role) {
      line = written(property, role, tokens, prefer, vocab)
    } else if (tied.length > 0) {
      line = `${property}: ${normalize(literal)} /* ${tied.join(' | ')} */`
    }
  }
  line ??= material(property, literal, tokens, prefer)
  return named && line ? `${line} /* ${named} */` : line
}

/**
 * A v1 role as the pack writes it: the role itself, recorded for the header's table of
 * spellings — or, when the pack is in v2, the one v2 variable with the same value.
 *
 * @param {string} property
 * @param {Role} role
 * @param {Tokens} tokens
 * @param {Prefer | undefined} prefer
 * @param {Vocabulary | undefined} vocab
 */
export function written(property, role, tokens, prefer, vocab) {
  if (vocab?.mode !== 'v1') {
    const v2 = v2Equivalent(role, property, tokens, prefer)
    if (v2 && role.group !== 'typography') {
      return `${property}: var(${v2})`
    }
  }
  const used = vocab?.used.get(role.id)
  if (used) {
    used.properties.add(property)
  } else {
    vocab?.used.set(role.id, { role, properties: new Set([property]) })
  }
  return `${property}: ${role.id}`
}

/**
 * Which vocabulary a frame mostly speaks: every named style and every bound variable
 * in it, counted by the dialect it resolves to.
 *
 * @param {Iterable<{ styles?: Record<string, unknown>, boundVariables?: unknown }>} raws
 * @param {Pick<Vocabulary, 'styles' | 'variables' | 'v1'>} vocab
 * @param {Tokens} tokens
 * @returns {{ v1: number, v2: number }}
 */
export function countReferences(raws, vocab, tokens) {
  let v1 = 0
  let v2 = 0
  for (const raw of raws) {
    for (const id of Object.values(raw.styles ?? {})) {
      // A style is a v1 word by construction: the v2 vocabulary is variables.
      if (typeof id === 'string' && vocab.styles[id]) {
        v1++
      }
    }
    for (const id of variableIds(raw.boundVariables)) {
      const name = vocab.variables[id]?.name
      if (!name) {
        continue
      }
      const asV2 = ['color', 'gap', 'border-radius', 'font-size'].some(
        (p) => v2Variable(tokens, p, name) !== undefined,
      )
      if (asV2) {
        v2++
      } else if (
        ['color', 'gap', 'border-radius'].some(
          (p) => v1Variable(vocab.v1, p, name) !== undefined,
        )
      ) {
        v1++
      }
    }
  }
  return { v1, v2 }
}

/** @param {unknown} bound */
function variableIds(bound) {
  /** @type {string[]} */
  const out = []
  const visit = (/** @type {unknown} */ value) => {
    if (Array.isArray(value)) {
      value.forEach(visit)
    } else if (value && typeof value === 'object') {
      const alias = /** @type {{ type?: string, id?: string }} */ (value)
      if (alias.type === 'VARIABLE_ALIAS' && typeof alias.id === 'string') {
        out.push(alias.id)
      } else {
        Object.values(value).forEach(visit)
      }
    }
  }
  visit(bound)
  return out
}
