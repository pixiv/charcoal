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
 * @param {unknown} value
 * @param {string} label
 * @returns {asserts value is unknown[]}
 */
function assertArray(value, label) {
  if (!Array.isArray(value)) {
    throw new TypeError(`${label} must be an array`)
  }
}

/**
 * @param {Record<string, unknown>} value
 * @param {readonly string[]} allowed
 * @param {readonly string[]} required
 * @param {string} label
 */
function assertShape(value, allowed, required, label) {
  for (const key of Object.keys(value)) {
    if (!allowed.includes(key)) {
      throw new TypeError(`${label} has unexpected property: ${key}`)
    }
  }
  for (const key of required) {
    if (!(key in value)) {
      throw new TypeError(`${label} is missing required property: ${key}`)
    }
  }
}

/**
 * @param {unknown} value
 * @param {string} label
 */
function assertCss(value, label) {
  assertString(value, label)
  if (!value.startsWith('--charcoal-')) {
    throw new TypeError(`${label} must start with --charcoal-`)
  }
}

/** @param {unknown} value */
function assertTailwind(value) {
  assertObject(value, 'tailwind')
  assertShape(
    value,
    ['key', 'recommended', 'alsoValid'],
    ['key', 'recommended', 'alsoValid'],
    'tailwind',
  )
  assertString(value.key, 'tailwind.key')
  assertStringArray(value.recommended, 'tailwind.recommended')
  assertStringArray(value.alsoValid, 'tailwind.alsoValid')
}

/** @param {unknown} value */
function assertMembers(value) {
  assertObject(value, 'members')
  for (const [name, member] of Object.entries(value)) {
    assertObject(member, `members.${name}`)
    assertShape(
      member,
      ['css', 'tailwind'],
      ['css', 'tailwind'],
      `members.${name}`,
    )
    assertCss(member.css, `members.${name}.css`)
    assertStringArray(member.tailwind, `members.${name}.tailwind`)
  }
}

/** @param {unknown} value */
function assertMapping(value) {
  assertObject(value, 'mapping')
  assertShape(
    value,
    ['tokenPath', 'classCandidates'],
    ['tokenPath', 'classCandidates'],
    'mapping',
  )
  assertString(value.tokenPath, 'mapping.tokenPath')
  assertArray(value.classCandidates, 'mapping.classCandidates')
  for (const [index, candidate] of value.classCandidates.entries()) {
    assertObject(candidate, `mapping.classCandidates.${index}`)
    assertShape(
      candidate,
      ['className', 'utility', 'cssProperties'],
      ['className', 'utility', 'cssProperties'],
      `mapping.classCandidates.${index}`,
    )
    assertString(
      candidate.className,
      `mapping.classCandidates.${index}.className`,
    )
    assertString(candidate.utility, `mapping.classCandidates.${index}.utility`)
    assertStringArray(
      candidate.cssProperties,
      `mapping.classCandidates.${index}.cssProperties`,
    )
  }
}

/** @param {unknown} value */
function assertRecommendedSemantic(value) {
  assertObject(value, 'recommendedSemantic entry')
  assertShape(
    value,
    ['figma', 'reason', 'themes'],
    ['figma'],
    'recommendedSemantic entry',
  )
  assertString(value.figma, 'recommendedSemantic entry.figma')
  if ('reason' in value) {
    assertString(value.reason, 'recommendedSemantic entry.reason')
  }
  if ('themes' in value) {
    assertStringArray(value.themes, 'recommendedSemantic entry.themes')
    if (
      value.themes.length === 0 ||
      new Set(value.themes).size !== value.themes.length
    ) {
      throw new TypeError(
        'recommendedSemantic entry.themes must be a non-empty unique array',
      )
    }
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

/**
 * Public CLI stdout JSON が cli-output.schema.json の contract に合うことを検査する。
 * JSON Schema を解釈せず、配布 runtime だけで実行できる型ガードとして保つ。
 * @param {unknown} value
 */
export function assertCliOutput(value) {
  assertObject(value, 'CLI output')
  assertShape(
    value,
    [
      'schemaVersion',
      'command',
      'query',
      'ok',
      'layer',
      'category',
      'group',
      'kind',
      'figma',
      'css',
      'cssUsage',
      'tailwind',
      'related',
      'mapping',
      'notes',
      'recommendedSemantic',
      'reason',
      'message',
      'candidates',
      'results',
      'members',
    ],
    ['schemaVersion', 'command', 'query', 'ok'],
    'CLI output',
  )
  if (value.schemaVersion !== 1) {
    throw new TypeError('schemaVersion must be 1')
  }
  if (!['resolve', 'search', 'family'].includes(value.command)) {
    throw new TypeError('command must be resolve, search, or family')
  }
  assertString(value.query, 'query')

  if (value.command === 'search') {
    assertShape(
      value,
      ['schemaVersion', 'command', 'query', 'ok', 'results'],
      ['schemaVersion', 'command', 'query', 'ok', 'results'],
      'search output',
    )
    if (value.ok !== true) {
      throw new TypeError('search output ok must be true')
    }
    assertArray(value.results, 'results')
    if (value.results.length > 8) {
      throw new TypeError('results must contain at most 8 entries')
    }
    for (const [index, result] of value.results.entries()) {
      assertObject(result, `results.${index}`)
      assertShape(
        result,
        ['score', 'layer', 'figma', 'css', 'tailwind'],
        ['score', 'layer', 'figma', 'css', 'tailwind'],
        `results.${index}`,
      )
      if (typeof result.score !== 'number') {
        throw new TypeError(`results.${index}.score must be a number`)
      }
      if (!['semantic', 'primitive'].includes(result.layer)) {
        throw new TypeError(
          `results.${index}.layer must be semantic or primitive`,
        )
      }
      assertString(result.figma, `results.${index}.figma`)
      assertCss(result.css, `results.${index}.css`)
      assertStringArray(result.tailwind, `results.${index}.tailwind`)
    }
    return
  }

  if (value.ok === false) {
    assertShape(
      value,
      [
        'schemaVersion',
        'command',
        'query',
        'ok',
        'reason',
        'message',
        'candidates',
      ],
      [
        'schemaVersion',
        'command',
        'query',
        'ok',
        'reason',
        'message',
        'candidates',
      ],
      'miss output',
    )
    if (!MISS_REASONS.has(value.reason)) {
      throw new TypeError(
        'reason must be not_found | ambiguous | hex | token_v1',
      )
    }
    assertString(value.message, 'message')
    assertArray(value.candidates, 'candidates')
    for (const [index, candidate] of value.candidates.entries()) {
      assertObject(candidate, `candidates.${index}`)
      assertShape(
        candidate,
        ['figma', 'css', 'tailwind'],
        ['figma', 'css', 'tailwind'],
        `candidates.${index}`,
      )
      assertString(candidate.figma, `candidates.${index}.figma`)
      assertCss(candidate.css, `candidates.${index}.css`)
      assertStringArray(candidate.tailwind, `candidates.${index}.tailwind`)
    }
    return
  }

  if (value.ok !== true) {
    throw new TypeError('ok must be a boolean')
  }
  if (value.layer === 'semantic' && value.command === 'resolve') {
    assertShape(
      value,
      [
        'schemaVersion',
        'command',
        'query',
        'ok',
        'layer',
        'category',
        'group',
        'kind',
        'figma',
        'css',
        'cssUsage',
        'tailwind',
        'related',
        'mapping',
        'notes',
      ],
      [
        'schemaVersion',
        'command',
        'query',
        'ok',
        'layer',
        'category',
        'group',
        'figma',
        'css',
        'cssUsage',
        'tailwind',
        'related',
        'mapping',
        'notes',
      ],
      'resolve semantic hit',
    )
    assertString(value.category, 'category')
    assertString(value.group, 'group')
    if ('kind' in value) {
      assertString(value.kind, 'kind')
    }
    assertString(value.figma, 'figma')
    assertCss(value.css, 'css')
    assertString(value.cssUsage, 'cssUsage')
    assertTailwind(value.tailwind)
    assertMembers(value.related)
    assertMapping(value.mapping)
    assertStringArray(value.notes, 'notes')
    return
  }
  if (value.layer === 'primitive' && value.command === 'resolve') {
    assertShape(
      value,
      [
        'schemaVersion',
        'command',
        'query',
        'ok',
        'layer',
        'figma',
        'css',
        'recommendedSemantic',
        'notes',
      ],
      [
        'schemaVersion',
        'command',
        'query',
        'ok',
        'layer',
        'figma',
        'css',
        'recommendedSemantic',
        'notes',
      ],
      'resolve primitive hit',
    )
    assertString(value.figma, 'figma')
    assertCss(value.css, 'css')
    assertArray(value.recommendedSemantic, 'recommendedSemantic')
    for (const entry of value.recommendedSemantic) {
      assertRecommendedSemantic(entry)
    }
    assertStringArray(value.notes, 'notes')
    return
  }
  if (value.layer === 'semantic' && value.command === 'family') {
    assertShape(
      value,
      ['schemaVersion', 'command', 'query', 'ok', 'layer', 'figma', 'members'],
      ['schemaVersion', 'command', 'query', 'ok', 'layer', 'figma', 'members'],
      'family semantic hit',
    )
    assertString(value.figma, 'figma')
    assertMembers(value.members)
    return
  }
  if (value.layer === 'primitive' && value.command === 'family') {
    assertShape(
      value,
      [
        'schemaVersion',
        'command',
        'query',
        'ok',
        'layer',
        'figma',
        'css',
        'members',
        'notes',
      ],
      [
        'schemaVersion',
        'command',
        'query',
        'ok',
        'layer',
        'figma',
        'css',
        'members',
        'notes',
      ],
      'family primitive hit',
    )
    assertString(value.figma, 'figma')
    assertCss(value.css, 'css')
    assertObject(value.members, 'members')
    if (Object.keys(value.members).length !== 0) {
      throw new TypeError('primitive family members must be empty')
    }
    assertStringArray(value.notes, 'notes')
    return
  }
  throw new TypeError('layer does not match command')
}

/** @param {unknown} value */
export function isCliOutput(value) {
  try {
    assertCliOutput(value)
    return true
  } catch {
    return false
  }
}
