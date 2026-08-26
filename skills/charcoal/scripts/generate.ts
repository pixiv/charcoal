import { createHash } from 'node:crypto'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { getTokenV2TailwindClassMappings } from '@charcoal-ui/tailwind-config'
import { detectLayer, getCategory, getGroup } from './lookup/layer.mjs'

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../../..',
)
const indexPath = path.join(repoRoot, 'skills/charcoal/data/index.json')

const STATE_RE = /^(default|hover|press|disable|disabled)(?:-a)?$/u
const PRIMITIVE_NOTE =
  'Color Space プリミティブはプロダクト UI に直接使わない。セマンティックトークンを選べ。'

type ThemeToken = { value: string }
type ThemeJson = Record<string, Record<string, ThemeToken>>

type Tailwind = {
  key: string
  recommended: string[]
  alsoValid: string[]
}

export type IndexRecord = {
  layer: 'semantic' | 'primitive'
  tokenPath: string
  figma: string
  css: string
  category?: string
  group?: string
  kind?: string
  cssUsage?: string
  tailwind?: Tailwind
  mapping?: {
    tokenPath: string
    classCandidates: unknown[]
  }
  familyKey?: string
  state?: string
  recommendedSemantic?: { figma: string; reason?: string }[]
  notes?: string[]
  keys: string[]
}

export type TokenIndex = {
  source: {
    mappingPackageVersion: string
    mappingHash: string
  }
  records: IndexRecord[]
}

function kebabCase(value: string) {
  return value
    .replace(/([\da-z])([A-Z])/gu, '$1-$2')
    .replace(/([A-Z]+)([A-Z][\da-z])/gu, '$1-$2')
    .replace(/[_\s]+/gu, '-')
    .toLowerCase()
}

function toFigma(tokenPath: string) {
  return tokenPath.replaceAll('.', '/')
}

function toCssVariable(category: string, figmaKey: string) {
  return `--charcoal-${[category, ...figmaKey.split('/')].map(kebabCase).join('-')}`
}

function unique(values: string[]) {
  return [...new Set(values.filter((value) => value !== ''))]
}

function familyAndState(tokenPath: string) {
  const parts = tokenPath.split('.')
  const last = parts.at(-1)
  if (last !== undefined && STATE_RE.test(last)) {
    return { familyKey: parts.slice(0, -1).join('.'), state: last }
  }
  return { familyKey: tokenPath }
}

function cssUsageFor(mapping: {
  cssVariable?: string
  classCandidates: { utility: string; cssProperties: string[] }[]
  sourceTokens: { tokenPath: string; cssVariable?: string }[]
}) {
  const css = mapping.cssVariable
  if (css === undefined) return undefined
  const [candidate] = mapping.classCandidates
  if (candidate === undefined) return `var(${css})`

  if (candidate.utility === 'fontSize') {
    const usages = mapping.sourceTokens
      .filter((token) => token.cssVariable !== undefined)
      .map((token) => {
        const property = token.tokenPath.includes('line-height')
          ? 'line-height'
          : 'font-size'
        return `${property}: var(${token.cssVariable})`
      })
    return usages.join('; ')
  }

  const [property] = candidate.cssProperties
  if (property === undefined) return `var(${css})`
  if (candidate.utility === 'fill' || candidate.utility === 'stroke') {
    return mapping.classCandidates
      .map((item) => `${item.cssProperties[0]}: var(${css})`)
      .join('; ')
  }
  return `${property}: var(${css})`
}

function tailwindFrom(mapping: { classCandidates: { className: string }[] }) {
  const recommended = mapping.classCandidates.map(({ className }) => className)
  const [first] = recommended
  const key =
    first?.replace(/^(?:bg|text|fill|stroke|rounded|font|border|p|w)-/u, '') ??
    ''
  return { key, recommended, alsoValid: [] as string[] }
}

function recordKeys(record: Omit<IndexRecord, 'keys'>): string[] {
  const keys = [
    record.tokenPath,
    record.figma,
    record.css,
    record.css.replace(/^--/u, ''),
    ...(record.tailwind?.recommended ?? []),
    record.figma.replaceAll('/', '-'),
    record.tokenPath.split('.').slice(1).join('/'),
    record.tokenPath.split('.').slice(1).join('-'),
  ]
  return unique(keys)
}

function semanticRecords() {
  const mappings = getTokenV2TailwindClassMappings({ includeCssVariable: true })
  return mappings.flatMap((mapping) => {
    if (mapping.cssVariable === undefined) return []
    const { familyKey, state } = familyAndState(mapping.tokenPath)
    const [candidate] = mapping.classCandidates
    const kind =
      candidate?.utility === 'fontSize' || candidate?.utility === 'fontWeight'
        ? candidate.utility
        : undefined
    const record: Omit<IndexRecord, 'keys'> = {
      layer: 'semantic',
      tokenPath: mapping.tokenPath,
      figma: toFigma(mapping.tokenPath),
      css: mapping.cssVariable,
      category: mapping.category,
      group: getGroup(mapping.tokenPath),
      ...(kind === undefined ? {} : { kind }),
      cssUsage: cssUsageFor(mapping),
      tailwind: tailwindFrom(mapping),
      mapping: {
        tokenPath: mapping.tokenPath,
        classCandidates: mapping.classCandidates,
      },
      familyKey,
      ...(state === undefined ? {} : { state }),
      notes: [],
    }
    const sourceKeys = mapping.sourceTokens.flatMap((source) => [
      source.tokenPath,
      toFigma(source.tokenPath),
      source.cssVariable ?? '',
    ])
    return [{ ...record, keys: unique([...recordKeys(record), ...sourceKeys]) }]
  })
}

function aliasReverseMap(theme: ThemeJson) {
  const aliases = new Map<string, { figma: string }[]>()
  for (const [category, tokens] of Object.entries(theme)) {
    for (const [key, token] of Object.entries(tokens)) {
      const match = /^\{([^.]+)\.(.+)\}$/u.exec(token.value)
      if (match === null) continue
      const primitivePath = `${match[1]}.${match[2].replaceAll('/', '.')}`
      const semanticFigma = `${category}/${key}`
      const current = aliases.get(primitivePath) ?? []
      current.push({ figma: semanticFigma })
      aliases.set(primitivePath, current)
    }
  }
  return aliases
}

function primitiveRecords(
  base: ThemeJson,
  aliases: Map<string, { figma: string }[]>,
) {
  const colorTokens = base.color ?? {}
  return Object.keys(colorTokens).flatMap((figmaKey) => {
    const tokenPath = `color.${figmaKey.replaceAll('/', '.')}`
    if (detectLayer(tokenPath) !== 'primitive') return []
    const css = toCssVariable('color', figmaKey)
    const recommendedSemantic = aliases.get(tokenPath) ?? []
    const record: Omit<IndexRecord, 'keys'> = {
      layer: 'primitive',
      tokenPath,
      figma: `color/${figmaKey}`,
      css,
      category: getCategory(tokenPath),
      group: getGroup(tokenPath),
      recommendedSemantic,
      notes: [PRIMITIVE_NOTE],
    }
    return [{ ...record, keys: recordKeys(record) }]
  })
}

export function buildIndex(): TokenIndex {
  const mappingPackageVersion = JSON.parse(
    readFileSync(
      path.join(repoRoot, 'packages/tailwind-config/package.json'),
      'utf8',
    ),
  ).version as string
  const semantics = semanticRecords()
  const mappingHash = createHash('sha256')
    .update(
      JSON.stringify(
        semantics.map((record) => [
          record.tokenPath,
          record.tailwind?.recommended,
        ]),
      ),
    )
    .digest('hex')
  const light = JSON.parse(
    readFileSync(
      path.join(repoRoot, 'packages/theme/src/json/pixiv-light.json'),
      'utf8',
    ),
  ) as ThemeJson
  const base = JSON.parse(
    readFileSync(
      path.join(repoRoot, 'packages/theme/src/json/base.json'),
      'utf8',
    ),
  ) as ThemeJson

  return {
    source: { mappingPackageVersion, mappingHash },
    records: [...semantics, ...primitiveRecords(base, aliasReverseMap(light))],
  }
}

export function writeIndex(filePath = indexPath) {
  mkdirSync(path.dirname(filePath), { recursive: true })
  writeFileSync(filePath, `${JSON.stringify(buildIndex(), null, 2)}\n`)
  return filePath
}

export { indexPath }
