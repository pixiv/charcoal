import { loadIndex } from './query.mjs'

/**
 * @typedef {import('../generate.ts').IndexRecord} IndexRecord
 * @typedef {import('../generate.ts').TokenIndex} TokenIndex
 */

const SYNONYMS = {
  プライマリ: ['primary'],
  プライマリー: ['primary'],
  背景: ['container', 'background'],
  ボタン: ['primary', 'container'],
  本文: ['text'],
  テキスト: ['text'],
  色: ['color', 'text'],
  フォーカス: ['focus'],
  リング: ['focus', 'border'],
}

/**
 * @param {string} query
 */
function searchTerms(query) {
  const lower = query.toLowerCase()
  /** @type {string[]} */
  const terms = []
  for (const [source, extras] of Object.entries(SYNONYMS)) {
    if (lower.includes(source.toLowerCase())) {terms.push(...extras)}
  }
  terms.push(
    ...lower.split(/[^\p{L}\p{N}-]+/u).filter((term) => term.length > 1),
  )
  return [...new Set(terms)]
}

/**
 * @param {IndexRecord} record
 */
function haystack(record) {
  return [
    record.tokenPath,
    record.figma,
    record.group ?? '',
    record.category ?? '',
    ...(record.tailwind?.recommended ?? []),
    ...(record.notes ?? []),
  ]
    .join(' ')
    .toLowerCase()
}

/**
 * @param {IndexRecord} record
 * @param {string[]} terms
 */
function scoreRecord(record, terms) {
  const text = haystack(record)
  let score = 0
  for (const term of terms) {
    if (text.includes(term.toLowerCase())) {score += 1}
  }
  if (score === 0) {return 0}
  if (record.layer === 'semantic') {score += 10}
  if (record.state === 'default' || record.state === undefined) {score += 1}
  if (
    record.group !== undefined &&
    terms.some((term) => term.toLowerCase() === record.group.toLowerCase())
  ) {
    score += 3
  }
  if (
    terms.includes('text') &&
    record.tailwind?.recommended.includes('text-text')
  ) {
    score += 4
  }
  return score
}

/**
 * @param {string} query
 * @param {TokenIndex} [index]
 */
export function searchQuery(query, index = loadIndex()) {
  const terms = searchTerms(query)
  const results = index.records
    .map((record) => ({
      score: scoreRecord(record, terms),
      layer: record.layer,
      figma: record.figma,
      css: record.css,
      tailwind: record.tailwind?.recommended ?? [],
    }))
    .filter((result) => result.score > 0)
    .sort((a, b) => {
      if (a.layer !== b.layer) {return a.layer === 'semantic' ? -1 : 1}
      return b.score - a.score
    })
    .slice(0, 8)

  return {
    query,
    ok: true,
    results,
  }
}
