import { readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { classifyQuery } from './normalize.mjs'
import { assertResolveResult } from './validate.mjs'

const indexPath = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  '../../data/index.json',
)

/**
 * @typedef {import('../types.d.ts').IndexRecord} IndexRecord
 * @typedef {import('../types.d.ts').TokenIndex} TokenIndex
 */

/** @type {TokenIndex | undefined} */
let cachedIndex

/**
 * @param {string} [filePath]
 * @returns {TokenIndex}
 */
export function loadIndex(filePath = indexPath) {
  if (filePath === indexPath && cachedIndex !== undefined) {return cachedIndex}
  const index = JSON.parse(readFileSync(filePath, 'utf8'))
  if (filePath === indexPath) {cachedIndex = index}
  return index
}

/**
 * @param {IndexRecord} record
 * @param {TokenIndex} index
 */
function relatedFor(record, index) {
  if (record.familyKey === undefined) {return {}}
  /** @type {Record<string, { css: string, tailwind: string[] }>} */
  const related = {}
  for (const other of index.records) {
    if (other.layer !== 'semantic') {continue}
    if (other.familyKey !== record.familyKey) {continue}
    if (other.tokenPath === record.tokenPath) {continue}
    if (other.state === undefined) {continue}
    related[other.state] = {
      css: other.css,
      tailwind: other.tailwind?.recommended ?? [],
    }
  }
  return related
}

/**
 * @param {IndexRecord} record
 * @param {string} query
 * @param {TokenIndex} index
 */
function toResolveResult(record, query, index) {
  if (record.layer === 'primitive') {
    return {
      query,
      ok: true,
      layer: 'primitive',
      css: record.css,
      figma: record.figma,
      recommendedSemantic: record.recommendedSemantic ?? [],
      notes: record.notes ?? [],
    }
  }

  return {
    query,
    ok: true,
    layer: 'semantic',
    category: record.category,
    group: record.group,
    ...(record.kind === undefined ? {} : { kind: record.kind }),
    figma: record.figma,
    css: record.css,
    cssUsage: record.cssUsage,
    tailwind: record.tailwind,
    related: relatedFor(record, index),
    ...(record.mapping === undefined ? {} : { mapping: record.mapping }),
    notes: record.notes ?? [],
  }
}

/**
 * @param {string} query
 * @param {TokenIndex} index
 * @returns {IndexRecord[]}
 */
export function findRecords(query, index = loadIndex()) {
  const classified = classifyQuery(query)
  const needles = new Set(
    [query.trim(), classified.normalized].filter((value) => value !== ''),
  )

  /** @type {IndexRecord[]} */
  const matches = []
  const seen = new Set()
  for (const record of index.records) {
    if (record.keys.some((key) => needles.has(key))) {
      if (seen.has(record.tokenPath)) {continue}
      seen.add(record.tokenPath)
      matches.push(record)
    }
  }
  return matches
}

/**
 * @param {string} query
 * @param {TokenIndex} index
 */
export function lookupQuery(query, index = loadIndex()) {
  const matches = findRecords(query, index)

  if (matches.length === 1) {
    return toResolveResult(matches[0], query, index)
  }

  if (matches.length > 1) {
    return {
      query,
      ok: false,
      reason: 'ambiguous',
      message:
        '複数のトークンに当たった。Figma のフルパスか CSS 変数で resolve し直せ。',
      candidates: matches.map((record) => ({
        figma: record.figma,
        css: record.css,
        tailwind: record.tailwind?.recommended ?? [],
      })),
    }
  }

  return {
    query,
    ok: false,
    reason: 'not_found',
    message:
      '一致する Token 2.0 が見つからない。Figma の変数名か Token 2.0 の CSS / class を渡せ。',
    candidates: [],
  }
}

/**
 * @param {string} query
 * @param {TokenIndex} index
 */
export function familyQuery(query, index = loadIndex()) {
  const resolved = lookupQuery(query, index)
  if (resolved.ok !== true) {return resolved}

  const matches = findRecords(query, index)
  const [record] = matches
  if (record === undefined) {return resolved}

  if (record.layer === 'primitive') {
    return {
      query,
      ok: true,
      layer: 'primitive',
      figma: record.figma,
      css: record.css,
      members: {},
      notes: record.notes ?? [],
    }
  }

  return {
    query,
    ok: true,
    layer: 'semantic',
    figma: record.figma,
    members: {
      [record.state ?? 'default']: {
        css: record.css,
        tailwind: record.tailwind?.recommended ?? [],
      },
      ...relatedFor(record, index),
    },
  }
}

export function assertLookupResult(value) {
  assertResolveResult(value)
}
