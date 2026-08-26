const HEX_RE = /^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/iu
const RGB_RE = /^rgba?\(/iu

const COLLECTION_OR_MODE_PREFIXES = [
  /^color space\/?/iu,
  /^pixiv\/(?:light|dark)\/?/iu,
]

const TW_PREFIXES = [
  'border-width-ch-',
  'border-ch-',
  'font-ch-',
  'rounded-',
  'stroke-',
  'fill-',
  'text-',
  'bg-',
  'gap-',
  'border-',
  'p-',
  'm-',
  'w-',
]

const V1_CSS_RE = /^--charcoal-(?:text|surface|background|link|brand)\d(?:-|$)/u
const V1_BARE_RE = /^(?:text|surface|background|link|brand)\d(?:-|$)/u

/**
 * @typedef {'hex' | 'token_v1' | 'css' | 'tw' | 'figma' | 'slug' | 'unknown'} QueryKind
 *
 * @typedef {{
 *   kind: QueryKind
 *   query: string
 *   normalized: string
 *   reason?: 'hex' | 'token_v1'
 * }} ClassifiedQuery
 */

/**
 * @param {string} query
 */
export function stripCollectionAndMode(query) {
  let value = query.trim()
  for (const prefix of COLLECTION_OR_MODE_PREFIXES) {
    value = value.replace(prefix, '')
  }
  return value
}

/**
 * @param {string} query
 * @returns {boolean}
 */
export function isHexQuery(query) {
  const value = query.trim()
  return HEX_RE.test(value) || RGB_RE.test(value)
}

/**
 * Token 1.0 らしい形か。2.0 名への変換表は持たない。
 * @param {string} query
 */
export function isTokenV1Query(query) {
  const value = stripCollectionAndMode(query).replace(/^--/, '')
  if (value.startsWith('theme.color.') || value.startsWith('theme.colors.')) {
    return true
  }
  if (value.startsWith('charcoal-')) {
    return V1_CSS_RE.test(`--${value}`)
  }
  return V1_CSS_RE.test(`--charcoal-${value}`) || V1_BARE_RE.test(value)
}

/**
 * @param {string} raw
 * @returns {ClassifiedQuery}
 */
export function classifyQuery(raw) {
  const query = raw.trim()

  if (isHexQuery(query)) {
    return { kind: 'hex', query, normalized: query, reason: 'hex' }
  }

  const stripped = stripCollectionAndMode(query)

  if (isTokenV1Query(stripped)) {
    return {
      kind: 'token_v1',
      query,
      normalized: stripped,
      reason: 'token_v1',
    }
  }

  if (stripped.startsWith('--charcoal-') || stripped.startsWith('charcoal-')) {
    const css = stripped.startsWith('--') ? stripped : `--${stripped}`
    return { kind: 'css', query, normalized: css }
  }

  if (TW_PREFIXES.some((prefix) => stripped.startsWith(prefix))) {
    return { kind: 'tw', query, normalized: stripped }
  }

  if (stripped.includes('/')) {
    return { kind: 'figma', query, normalized: stripped }
  }

  if (stripped.includes('.')) {
    return {
      kind: 'figma',
      query,
      normalized: stripped.replaceAll('.', '/'),
    }
  }

  if (stripped.includes('-')) {
    return { kind: 'slug', query, normalized: stripped }
  }

  return { kind: 'unknown', query, normalized: stripped }
}
