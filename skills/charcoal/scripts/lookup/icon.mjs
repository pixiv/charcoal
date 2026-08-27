import { readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { isHexQuery } from './normalize.mjs'

const indexPath = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  '../../data/icons.json',
)

/**
 * @typedef {import('../generate-icons.ts').IconRecord} IconRecord
 * @typedef {import('../generate-icons.ts').IconIndex} IconIndex
 */

const HEX_MESSAGE = 'hex はグリフ検索ではない。アイコン名を icon に渡せ。'
const NOT_FOUND_MESSAGE =
  '一致するアイコンが見つからない。Figma のコンポーネント名かクラス / コンポーネント名を渡せ。'
const AMBIGUOUS_MESSAGE =
  '複数のアイコンに当たった。Size / Theme かファイルパスで icon し直せ。'

const SIZE_ORDER = ['16', '20', '24', '32', 'Inline']
const THEMES = new Set(['regular', 'solid', 'color'])
const ICON_MISS_REASONS = new Set(['not_found', 'ambiguous', 'hex'])
const SEARCH_LIMIT = 24
const SCORE_EXACT = 3
const SCORE_PREFIX = 2
const SCORE_PARTIAL = 1

const V2_NOTE =
  'Icons 2.0。`<pixiv-icon>` と `@charcoal-ui/react` の `<Icon>` では使えない。'
const V2_REGULAR_NOTE = 'Regular はクラス / コンポーネント名から省略する。'
const V2_SIZE_24_NOTE = 'Size 24 はクラス / コンポーネント名から省略する。'
const V2_COLOR_NOTE =
  'Theme=Color（currentColor ではない）ので color.icon.* で塗らない。'
const V1_NOTE =
  'Icons 1.0。`<pixiv-icon>` と `@charcoal-ui/react` の `<Icon>` で使える。'

/** @type {IconIndex | undefined} */
let cachedIndex

/**
 * @param {string} [filePath]
 * @returns {IconIndex}
 */
export function loadIconIndex(filePath = indexPath) {
  if (filePath === indexPath && cachedIndex !== undefined) return cachedIndex
  const index = JSON.parse(readFileSync(filePath, 'utf8'))
  if (filePath === indexPath) cachedIndex = index
  return index
}

/**
 * @param {string} theme
 */
function toFigmaTheme(theme) {
  if (theme === 'regular') return 'Regular'
  if (theme === 'solid') return 'Solid'
  return 'Color'
}

/**
 * @param {Set<string>} needles
 * @param {string} value
 */
function addNeedle(needles, value) {
  if (value !== '') needles.add(value)
}

/**
 * @param {string} query
 * @returns {{
 *   needles: Set<string>
 *   size: string | undefined
 *   theme: string | undefined
 * }}
 */
function parseIconQuery(query) {
  const trimmed = query.trim()
  const collapsed = trimmed.replace(/\s+/gu, ' ')
  const needles = new Set()

  for (const value of [trimmed, collapsed]) {
    addNeedle(needles, value)
    addNeedle(needles, value.toLowerCase())
    if (value.startsWith('.')) {
      addNeedle(needles, value.slice(1))
      addNeedle(needles, value.slice(1).toLowerCase())
    }
  }

  let rest = collapsed
  /** @type {string | undefined} */
  let size
  /** @type {string | undefined} */
  let theme

  const sizeMatch = rest.match(/Size=([^,\s]+)/iu)
  if (sizeMatch?.[0] !== undefined && sizeMatch[1] !== undefined) {
    size = sizeMatch[1]
    rest = rest.replace(sizeMatch[0], '')
  }

  const themeMatch = rest.match(/Theme=(Regular|Solid|Color)/iu)
  if (themeMatch?.[0] !== undefined && themeMatch[1] !== undefined) {
    theme = themeMatch[1].toLowerCase()
    rest = rest.replace(themeMatch[0], '')
  }

  const name = rest.replaceAll(',', ' ').replace(/\s+/gu, ' ').trim()
  if (name !== '') {
    addNeedle(needles, name)
    addNeedle(needles, name.toLowerCase())
  }
  if (size !== undefined && theme !== undefined && name !== '') {
    const variant = `Size=${size}, Theme=${toFigmaTheme(theme)}`
    addNeedle(needles, `${variant} ${name}`)
    addNeedle(needles, `${name} ${variant}`)
  }

  return { needles, size, theme }
}

/**
 * @param {IconRecord[]} records
 * @param {Set<string>} needles
 * @returns {IconRecord[]}
 */
function findIconRecords(records, needles) {
  /** @type {IconRecord[]} */
  const matches = []
  const seen = new Set()
  for (const record of records) {
    if (seen.has(record.file)) continue
    if (!record.keys.some((key) => needles.has(key))) continue
    seen.add(record.file)
    matches.push(record)
  }
  return matches
}

/**
 * @param {IconRecord[]} records
 */
function sameGenerationAndName(records) {
  const [first] = records
  if (first === undefined) return false
  return records.every((record) => {
    if (record.generation !== first.generation) return false
    if (record.generation === 'v1') {
      return record.name.toLowerCase() === first.name.toLowerCase()
    }
    return record.name === first.name
  })
}

/**
 * @param {IconRecord[]} records
 * @returns {IconRecord[]}
 */
function pickDefaultVariant(records) {
  let next = records
  if (next.some((record) => record.size === '24')) {
    next = next.filter((record) => record.size === '24')
  }
  if (
    next[0]?.generation === 'v2' &&
    next.some((record) => record.theme === 'regular')
  ) {
    next = next.filter((record) => record.theme === 'regular')
  }
  return next
}

/**
 * @param {string} size
 * @param {string} other
 */
function compareSizes(size, other) {
  const left = SIZE_ORDER.indexOf(size)
  const right = SIZE_ORDER.indexOf(other)
  const leftRank = left === -1 ? SIZE_ORDER.length : left
  const rightRank = right === -1 ? SIZE_ORDER.length : right
  if (leftRank !== rightRank) return leftRank - rightRank
  return size.localeCompare(other)
}

/**
 * @param {IconRecord} record
 * @param {IconIndex} index
 */
function relatedFor(record, index) {
  const family = index.records.filter(
    (other) => other.familyKey === record.familyKey,
  )
  /** @type {Record<string, unknown>} */
  const related = {}
  for (const other of family) {
    if (other.theme === null || other.theme === record.theme) continue
    related[other.theme] = {
      size: other.size,
      tailwind: other.surfaces.tailwind.className,
      reactIcons: other.surfaces.reactIcons.component,
    }
  }
  related.sizes = [...new Set(family.map((other) => other.size))].sort(
    compareSizes,
  )
  return related
}

/**
 * @param {IconRecord} record
 * @returns {string[]}
 */
function notesFor(record) {
  if (record.generation === 'v1') return [V1_NOTE]
  /** @type {string[]} */
  const notes = [V2_NOTE]
  if (record.theme === 'regular') notes.push(V2_REGULAR_NOTE)
  if (record.size === '24') notes.push(V2_SIZE_24_NOTE)
  if (record.theme === 'color') notes.push(V2_COLOR_NOTE)
  return notes
}

/**
 * @param {IconRecord} record
 * @param {string} query
 * @param {IconIndex} index
 */
function toIconHit(record, query, index) {
  return {
    query,
    ok: true,
    kind: 'icon',
    generation: record.generation,
    name: record.name,
    size: record.size,
    theme: record.theme,
    figma: record.figma,
    file: record.file,
    surfaces: record.surfaces,
    related: relatedFor(record, index),
    notes: notesFor(record),
  }
}

/**
 * @param {IconRecord} record
 */
function toCandidate(record) {
  return {
    generation: record.generation,
    name: record.name,
    size: record.size,
    theme: record.theme,
    file: record.file,
    reactIcons: record.surfaces.reactIcons.component,
    tailwind: record.surfaces.tailwind.className,
  }
}

/**
 * @param {string} query
 * @param {'not_found' | 'ambiguous' | 'hex'} reason
 * @param {string} message
 * @param {ReturnType<typeof toCandidate>[]} [candidates]
 */
function toIconMiss(query, reason, message, candidates = []) {
  return { query, ok: false, reason, message, candidates }
}

/**
 * @param {string} query
 * @param {IconIndex} index
 */
export function lookupIconQuery(query, index = loadIconIndex()) {
  if (isHexQuery(query)) {
    return toIconMiss(query, 'hex', HEX_MESSAGE)
  }

  const { needles, size, theme } = parseIconQuery(query)
  let matches = findIconRecords(index.records, needles)

  if (matches.length === 0) {
    return toIconMiss(query, 'not_found', NOT_FOUND_MESSAGE)
  }
  if (matches.length === 1) {
    return toIconHit(matches[0], query, index)
  }

  if (size !== undefined || theme !== undefined) {
    matches = matches.filter((record) => {
      if (size !== undefined && record.size !== size) return false
      if (theme !== undefined && record.theme !== theme) return false
      return true
    })
    if (matches.length === 1) {
      return toIconHit(matches[0], query, index)
    }
    if (matches.length === 0) {
      return toIconMiss(query, 'not_found', NOT_FOUND_MESSAGE)
    }
  }

  if (sameGenerationAndName(matches)) {
    const picked = pickDefaultVariant(matches)
    if (picked.length === 1) {
      return toIconHit(picked[0], query, index)
    }
    matches = picked
  }

  if (matches.length === 1) {
    return toIconHit(matches[0], query, index)
  }

  return toIconMiss(
    query,
    'ambiguous',
    AMBIGUOUS_MESSAGE,
    matches.map(toCandidate),
  )
}

/**
 * 空白・`/`・カンマで分割。1文字の `x` は残す。同義語は持たない。
 * @param {string} query
 */
function searchIconTerms(query) {
  return query
    .trim()
    .toLowerCase()
    .split(/[\s/,]+/u)
    .filter((term) => term.length >= 1)
}

/**
 * @param {IconRecord} record
 */
function iconSearchFields(record) {
  /** @type {string[]} */
  const fields = [
    record.name,
    record.file,
    record.surfaces.reactIcons.component,
    record.surfaces.tailwind.className,
    record.surfaces.css.className,
  ]
  if (record.surfaces.pixivIcon !== null) {
    fields.push(record.surfaces.pixivIcon.name)
  }
  return fields.map((value) => value.toLowerCase())
}

/**
 * @param {IconRecord} record
 * @param {string[]} terms
 */
function scoreIconSearchRecord(record, terms) {
  if (terms.length === 0) return 0
  const name = record.name.toLowerCase()
  const component = record.surfaces.reactIcons.component.toLowerCase()
  const fields = iconSearchFields(record)
  let best = 0
  for (const term of terms) {
    let termScore = 0
    if (name === term || component === term) {
      termScore = SCORE_EXACT
    } else if (fields.some((field) => field.startsWith(term))) {
      termScore = SCORE_PREFIX
    } else if (fields.some((field) => field.includes(term))) {
      termScore = SCORE_PARTIAL
    } else {
      return 0
    }
    if (termScore > best) best = termScore
  }
  return best
}

/**
 * 名前ヒットの配列。1件に決めない。セマンティック同義語は持たない。
 * @param {string} query
 * @param {IconIndex} [index]
 */
export function searchIconQuery(query, index = loadIconIndex()) {
  if (isHexQuery(query)) {
    return toIconMiss(query, 'hex', HEX_MESSAGE)
  }

  const terms = searchIconTerms(query)
  /** @type {(ReturnType<typeof toCandidate> & { score: number })[]} */
  const results = []
  const seen = new Set()
  for (const record of index.records) {
    if (seen.has(record.file)) continue
    const score = scoreIconSearchRecord(record, terms)
    if (score === 0) continue
    seen.add(record.file)
    results.push({ score, ...toCandidate(record) })
  }

  results.sort((left, right) => {
    if (left.score !== right.score) return right.score - left.score
    if (left.generation !== right.generation) {
      return left.generation === 'v2' ? -1 : 1
    }
    return left.file.localeCompare(right.file)
  })

  return {
    query,
    ok: true,
    kind: 'icon-search',
    results: results.slice(0, SEARCH_LIMIT),
  }
}

/**
 * @param {unknown} value
 * @param {string} label
 * @returns {asserts value is Record<string, unknown>}
 */
function assertObject(value, label) {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    throw new TypeError(`${label} must be an object`)
  }
}

/**
 * @param {unknown} value
 * @param {string} label
 */
function assertString(value, label) {
  if (typeof value !== 'string') {
    throw new TypeError(`${label} must be a string`)
  }
}

/**
 * @param {unknown} value
 * @param {string} label
 */
function assertStringArray(value, label) {
  if (!Array.isArray(value) || value.some((item) => typeof item !== 'string')) {
    throw new TypeError(`${label} must be an array of strings`)
  }
}

/**
 * @param {unknown} value
 * @param {string} label
 */
function assertStringOrNull(value, label) {
  if (value !== null && typeof value !== 'string') {
    throw new TypeError(`${label} must be a string or null`)
  }
}

/**
 * @param {Record<string, unknown>} value
 */
function assertIconHit(value) {
  if (value.kind !== 'icon') {
    throw new TypeError('icon hit kind must be "icon"')
  }
  if (value.generation !== 'v1' && value.generation !== 'v2') {
    throw new TypeError('generation must be "v1" or "v2"')
  }
  assertString(value.name, 'name')
  assertString(value.size, 'size')
  if (value.theme !== null && !THEMES.has(value.theme)) {
    throw new TypeError('theme must be regular | solid | color | null')
  }
  assertObject(value.figma, 'figma')
  assertString(value.figma.component, 'figma.component')
  assertStringOrNull(value.figma.variant, 'figma.variant')
  assertString(value.file, 'file')
  assertObject(value.surfaces, 'surfaces')
  assertObject(value.surfaces.reactIcons, 'surfaces.reactIcons')
  assertString(value.surfaces.reactIcons.import, 'surfaces.reactIcons.import')
  assertString(
    value.surfaces.reactIcons.component,
    'surfaces.reactIcons.component',
  )
  assertObject(value.surfaces.tailwind, 'surfaces.tailwind')
  assertString(value.surfaces.tailwind.className, 'surfaces.tailwind.className')
  assertObject(value.surfaces.css, 'surfaces.css')
  assertString(value.surfaces.css.className, 'surfaces.css.className')
  assertObject(value.related, 'related')
  assertStringArray(value.related.sizes, 'related.sizes')
  assertStringArray(value.notes, 'notes')
}

/**
 * @param {unknown} value
 */
function assertIconCandidate(value) {
  assertObject(value, 'candidate')
  assertString(value.generation, 'candidate.generation')
  assertString(value.name, 'candidate.name')
  assertString(value.size, 'candidate.size')
  assertStringOrNull(value.theme, 'candidate.theme')
  assertString(value.file, 'candidate.file')
  assertString(value.reactIcons, 'candidate.reactIcons')
  assertString(value.tailwind, 'candidate.tailwind')
}

/**
 * @param {Record<string, unknown>} value
 */
function assertIconMiss(value) {
  if (
    typeof value.reason !== 'string' ||
    !ICON_MISS_REASONS.has(value.reason)
  ) {
    throw new TypeError('reason must be not_found | ambiguous | hex')
  }
  assertString(value.message, 'message')
  if (!Array.isArray(value.candidates)) {
    throw new TypeError('candidates must be an array')
  }
  if (value.reason === 'ambiguous') {
    for (const candidate of value.candidates) {
      assertIconCandidate(candidate)
    }
  }
}

/**
 * icon の stdout JSON が契約に合うことを検査する。
 * トークンの assertResolveResult は使わない。
 * kind: 'icon' の hit 契約は search と混ぜない。
 * @param {unknown} value
 */
export function assertIconResult(value) {
  assertObject(value, 'icon result')
  assertString(value.query, 'query')

  if (value.ok === true) {
    assertIconHit(value)
    return
  }

  if (value.ok === false) {
    assertIconMiss(value)
    return
  }

  throw new TypeError('ok must be a boolean')
}

/**
 * @param {unknown} value
 */
function assertIconSearchHit(value) {
  assertIconCandidate(value)
  if (typeof value.score !== 'number') {
    throw new TypeError('score must be a number')
  }
}

/**
 * search-icon の stdout JSON。0件でも ok: true, kind: 'icon-search'。
 * hex miss は icon と同じ structured miss。
 * @param {unknown} value
 */
export function assertIconSearchResult(value) {
  assertObject(value, 'icon search result')
  assertString(value.query, 'query')

  if (value.ok === true) {
    if (value.kind !== 'icon-search') {
      throw new TypeError('icon search kind must be "icon-search"')
    }
    if (!Array.isArray(value.results)) {
      throw new TypeError('results must be an array')
    }
    for (const item of value.results) {
      assertIconSearchHit(item)
    }
    return
  }

  if (value.ok === false) {
    assertIconMiss(value)
    return
  }

  throw new TypeError('ok must be a boolean')
}
