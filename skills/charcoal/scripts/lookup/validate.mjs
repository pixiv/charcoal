const MISS_REASONS = new Set(['not_found', 'ambiguous', 'hex', 'token_v1'])

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
 * @param {Record<string, unknown>} value
 */
function assertSemanticHit(value) {
  if (value.layer !== 'semantic') {
    throw new TypeError('semantic hit layer must be "semantic"')
  }
  for (const key of ['category', 'group', 'figma', 'css', 'cssUsage']) {
    assertString(value[key], key)
  }
  if (typeof value.css !== 'string' || !value.css.startsWith('--charcoal-')) {
    throw new TypeError('css must start with --charcoal-')
  }
  assertObject(value.tailwind, 'tailwind')
  assertString(value.tailwind.key, 'tailwind.key')
  assertStringArray(value.tailwind.recommended, 'tailwind.recommended')
  assertStringArray(value.tailwind.alsoValid, 'tailwind.alsoValid')
  assertObject(value.related, 'related')
  assertStringArray(value.notes, 'notes')
}

/**
 * @param {Record<string, unknown>} value
 */
function assertPrimitiveHit(value) {
  if (value.layer !== 'primitive') {
    throw new TypeError('primitive hit layer must be "primitive"')
  }
  assertString(value.css, 'css')
  if (!value.css.startsWith('--charcoal-')) {
    throw new TypeError('css must start with --charcoal-')
  }
  if (!Array.isArray(value.recommendedSemantic)) {
    throw new TypeError('recommendedSemantic must be an array')
  }
  assertStringArray(value.notes, 'notes')
  if (value.notes.length === 0) {
    throw new TypeError('primitive hit notes must not be empty')
  }
}

/**
 * @param {Record<string, unknown>} value
 */
function assertMiss(value) {
  if (typeof value.reason !== 'string' || !MISS_REASONS.has(value.reason)) {
    throw new TypeError('reason must be not_found | ambiguous | hex | token_v1')
  }
  assertString(value.message, 'message')
  if (!Array.isArray(value.candidates)) {
    throw new TypeError('candidates must be an array')
  }
}

/**
 * resolve の stdout JSON が契約に合うことを検査する。
 * @param {unknown} value
 */
export function assertResolveResult(value) {
  assertObject(value, 'resolve result')
  assertString(value.query, 'query')

  if (value.ok === true) {
    if (value.layer === 'semantic') {
      assertSemanticHit(value)
      return
    }
    if (value.layer === 'primitive') {
      assertPrimitiveHit(value)
      return
    }
    throw new TypeError('layer must be "semantic" or "primitive"')
  }

  if (value.ok === false) {
    assertMiss(value)
    return
  }

  throw new TypeError('ok must be a boolean')
}
