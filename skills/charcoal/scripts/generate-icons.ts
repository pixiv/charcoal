import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  writeFileSync,
} from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import iconFilesV1 from '../../../packages/icon-files/src/index.js'
import iconFilesV2 from '../../../packages/icon-files/v2/src/index.js'
import { createCssClassNameSegment } from '../../../packages/icons-cli/src/codegen.ts'
import { listIconClassNames } from '../../../packages/tailwind-config/src/icons.ts'

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../../..',
)
const iconsIndexPath = path.join(repoRoot, 'skills/charcoal/data/icons.json')

const iconsCssV1Path = path.join(repoRoot, 'packages/icons/css/v1/index.css')
const iconsCssV2Path = path.join(repoRoot, 'packages/icons/css/v2/index.css')
const iconsReactV1Path = path.join(
  repoRoot,
  'packages/icons/src/react/v1/index.tsx',
)
const iconsReactV2Path = path.join(
  repoRoot,
  'packages/icons/src/react/v2/index.tsx',
)
const iconFilesV2SrcDir = path.join(repoRoot, 'packages/icon-files/v2/src')

const REACT_EXPORT_RE = /^export \{\s*(\w+)\s*\} from ['"]\.\/([^'"]+)['"]/gm
const CSS_CLASS_RE = /^\.(charcoal-icon-v[12]-[^\s{]+)/gm

type IconTheme = 'regular' | 'solid' | 'color'
type IconSize = '16' | '20' | '24' | '32' | 'Inline'

export type IconRecord = {
  generation: 'v1' | 'v2'
  name: string
  size: IconSize
  theme: IconTheme | null
  figma: {
    component: string
    variant: string | null
  }
  file: string
  surfaces: {
    reactIcons: {
      import: string
      component: string
    }
    tailwind: {
      className: string
      flag: 'iconsV1' | 'iconsV2'
    }
    css: {
      className: string
      import: string
    }
    reactIcon: { name: string } | null
    pixivIcon: { name: string } | null
  }
  familyKey: string
  keys: string[]
}

export type IconIndex = {
  source: {
    iconFilesV1Count: number
    iconFilesV2Count: number
  }
  records: IconRecord[]
}

function unique(values: string[]) {
  return [...new Set(values.filter((value) => value !== ''))]
}

function normalizeIconName(name: string) {
  return name.toLowerCase().replace(/[.-]/gu, '')
}

function parseSize(value: string, file: string): IconSize {
  if (
    value === '16' ||
    value === '20' ||
    value === '24' ||
    value === '32' ||
    value === 'Inline'
  ) {
    return value
  }
  throw new Error(`Unexpected icon size "${value}" in ${file}`)
}

function parseV2Theme(value: string, file: string): IconTheme {
  if (value === 'regular' || value === 'solid' || value === 'color') {
    return value
  }
  throw new Error(`Unexpected v2 icon theme "${value}" in ${file}`)
}

function toFigmaTheme(theme: IconTheme) {
  if (theme === 'regular') return 'Regular'
  if (theme === 'solid') return 'Solid'
  return 'Color'
}

function joinKey(
  generation: 'v1' | 'v2',
  size: string,
  theme: string | null,
  name: string,
) {
  const normalized = normalizeIconName(name)
  return generation === 'v2'
    ? `${size}/${theme}/${normalized}`
    : `${size}/${normalized}`
}

type ReactExport = {
  component: string
  size: string
  theme: string | null
  name: string
}

function parseReactBarrel(
  source: string,
  generation: 'v1' | 'v2',
): Map<string, ReactExport> {
  const byJoin = new Map<string, ReactExport>()
  for (const match of source.matchAll(REACT_EXPORT_RE)) {
    const component = match[1]
    const fromPath = match[2]
    if (component === undefined || fromPath === undefined) {
      throw new Error(`Failed to parse React export: ${match[0]}`)
    }
    const parts = fromPath.split('/')
    if (generation === 'v2') {
      if (parts.length !== 3) {
        throw new Error(`Unexpected v2 React export path: ${fromPath}`)
      }
      const [size, theme, name] = parts
      const key = joinKey('v2', size, theme, name)
      if (byJoin.has(key)) {
        throw new Error(`Duplicate React join key ${key}`)
      }
      byJoin.set(key, { component, size, theme, name })
      continue
    }
    if (parts.length !== 2) {
      throw new Error(`Unexpected v1 React export path: ${fromPath}`)
    }
    const [size, name] = parts
    const key = joinKey('v1', size, null, name)
    if (byJoin.has(key)) {
      throw new Error(`Duplicate React join key ${key}`)
    }
    byJoin.set(key, { component, size, theme: null, name })
  }
  return byJoin
}

function parseCssClassNames(css: string) {
  const names = new Set<string>()
  for (const match of css.matchAll(CSS_CLASS_RE)) {
    const className = match[1]
    if (className !== undefined) names.add(className)
  }
  return names
}

function tailwindByFile(v2: boolean) {
  return new Map(
    listIconClassNames({ v2 }).map((item) => [item.fileName, item.className]),
  )
}

/**
 * icons-cli の transformCSS と同じ omit 規則。
 * 名前セグメントだけ createCssClassNameSegment に渡し、size は 24 以外をそのまま付ける。
 */
function assembleCssClassName(
  generation: 'v1' | 'v2',
  size: string,
  theme: string | null,
  name: string,
) {
  if (generation === 'v2') {
    return [
      'charcoal-icon-v2',
      createCssClassNameSegment(name),
      ...(theme === 'regular' || theme === null ? [] : [theme]),
      ...(size === '24' ? [] : [size]),
    ].join('-')
  }
  return [
    'charcoal-icon-v1',
    createCssClassNameSegment(name),
    ...(size === '24' ? [] : [size]),
  ].join('-')
}

function svgFingerprint(jsSource: string) {
  const svg = jsSource
    .replace(/^[\s\S]*<svg/u, '<svg')
    .replace(/<\/svg>[\s\S]*$/u, '</svg>')
  return svg.replaceAll('\\"', '"').replace(/\s+/gu, ' ')
}

function isRename(leftover: string, canonical: string) {
  const leftoverParts = leftover.toLowerCase().replaceAll('-', '.').split('.')
  const canonicalParts = canonical.toLowerCase().replaceAll('-', '.').split('.')
  if (leftoverParts.length !== canonicalParts.length) return false
  return leftoverParts.every((part, index) => {
    const canonicalPart = canonicalParts[index]
    if (canonicalPart === undefined) return false
    return (
      part === canonicalPart ||
      part.startsWith(canonicalPart) ||
      canonicalPart.startsWith(part)
    )
  })
}

/**
 * React barrel にあって icon-files 正本に無い export（リネーム残骸）を、
 * 同じ size/theme の正本レコードへ載せる。対応表も編集距離も使わない。
 * 1. SVG fingerprint が一意一致
 * 2. ディスク上の leftover basename と正本 name が isRename で一意
 */
function attachLeftoverReactExportKeys(
  records: IconRecord[],
  reactByJoin: Map<string, ReactExport>,
  iconFilesSrcDir: string,
) {
  const used = new Set(
    records.map((record) => record.surfaces.reactIcons.component),
  )
  const leftovers = [...reactByJoin.values()].filter(
    (react) => !used.has(react.component),
  )
  if (leftovers.length === 0) return

  const fingerprints = new Map<string, string>()
  for (const record of records) {
    const canonicalPath = path.join(iconFilesSrcDir, `${record.file}.js`)
    if (existsSync(canonicalPath)) {
      fingerprints.set(
        record.file,
        svgFingerprint(readFileSync(canonicalPath, 'utf8')),
      )
    }
  }

  for (const react of leftovers) {
    if (react.theme === null) {
      throw new Error(
        `React export ${react.component} does not join to an icon-files key`,
      )
    }
    const candidates = records.filter(
      (record) => record.size === react.size && record.theme === react.theme,
    )
    const dir = path.join(iconFilesSrcDir, react.size, react.theme)
    const leftoverModule = existsSync(dir)
      ? readdirSync(dir).find((entry) => {
          return (
            entry.endsWith('.js') &&
            normalizeIconName(entry.slice(0, -3)) ===
              normalizeIconName(react.name)
          )
        })
      : undefined
    if (leftoverModule === undefined) {
      throw new Error(
        `React export ${react.component} does not join to an icon-files key (candidates: none)`,
      )
    }
    const leftoverBasename = leftoverModule.slice(0, -3)
    const leftoverSvg = svgFingerprint(
      readFileSync(path.join(dir, leftoverModule), 'utf8'),
    )
    const svgHits = candidates.filter(
      (record) => fingerprints.get(record.file) === leftoverSvg,
    )
    const [svgHit] = svgHits
    if (svgHits.length === 1 && svgHit !== undefined) {
      svgHit.keys = unique([...svgHit.keys, react.component])
      continue
    }
    const renameHits = candidates.filter((record) =>
      isRename(leftoverBasename, record.name),
    )
    const [renameHit] = renameHits
    if (renameHits.length === 1 && renameHit !== undefined) {
      renameHit.keys = unique([...renameHit.keys, react.component])
      continue
    }
    const candidateFiles = unique([
      leftoverModule,
      ...svgHits.map((record) => record.file),
      ...renameHits.map((record) => record.file),
    ])
    throw new Error(
      `React export ${react.component} does not join to an icon-files key (candidates: ${candidateFiles.join(', ')})`,
    )
  }
}

function recordKeys(record: Omit<IconRecord, 'keys'>): string[] {
  const { figma, surfaces } = record
  const keys = [
    record.file,
    record.file.toLowerCase(),
    surfaces.tailwind.className,
    surfaces.css.className,
    `.${surfaces.css.className}`,
    surfaces.reactIcons.component,
    figma.component,
    record.name,
    record.name.toLowerCase(),
    record.name.replaceAll('.', '-'),
    record.name.replaceAll('.', ' '),
    record.name.toLowerCase().replaceAll('.', '-'),
    record.name.toLowerCase().replaceAll('.', ' '),
  ]
  if (surfaces.pixivIcon !== null) {
    keys.push(surfaces.pixivIcon.name)
  }
  if (surfaces.reactIcon !== null) {
    keys.push(surfaces.reactIcon.name)
  }
  if (figma.variant !== null) {
    keys.push(
      `${figma.variant} ${figma.component}`,
      `${figma.component} ${figma.variant}`,
    )
  }
  return unique(keys)
}

function buildV2Record(
  file: string,
  reactByJoin: Map<string, ReactExport>,
  twByFile: Map<string, string>,
  cssClassNames: Set<string>,
): IconRecord {
  const parts = file.split('/')
  if (parts.length !== 3) {
    throw new Error(`Unexpected v2 icon file key: ${file}`)
  }
  const [rawSize, rawTheme, name] = parts
  const size = parseSize(rawSize, file)
  const theme = parseV2Theme(rawTheme, file)
  const key = joinKey('v2', size, theme, name)
  const react = reactByJoin.get(key)
  if (react === undefined) {
    throw new Error(`React export not found for icon file ${file}`)
  }
  const className = twByFile.get(file)
  if (className === undefined) {
    throw new Error(`Tailwind class not found for icon file ${file}`)
  }
  const cssClassName = assembleCssClassName('v2', size, theme, name)
  if (!cssClassNames.has(cssClassName)) {
    throw new Error(
      `Assembled CSS class ${cssClassName} for ${file} is not in generated CSS`,
    )
  }
  const record: Omit<IconRecord, 'keys'> = {
    generation: 'v2',
    name,
    size,
    theme,
    figma: {
      component: name,
      variant: `Size=${size}, Theme=${toFigmaTheme(theme)}`,
    },
    file,
    surfaces: {
      reactIcons: {
        import: '@charcoal-ui/icons/react/v2',
        component: react.component,
      },
      tailwind: {
        className,
        flag: 'iconsV2',
      },
      css: {
        className: cssClassName,
        import: '@charcoal-ui/icons/css/v2/index.css',
      },
      reactIcon: null,
      pixivIcon: null,
    },
    familyKey: `v2:${name}`,
  }
  return { ...record, keys: recordKeys(record) }
}

function buildV1Record(
  file: string,
  reactByJoin: Map<string, ReactExport>,
  twByFile: Map<string, string>,
  cssClassNames: Set<string>,
): IconRecord {
  const parts = file.split('/')
  if (parts.length !== 2) {
    throw new Error(`Unexpected v1 icon file key: ${file}`)
  }
  const [rawSize, name] = parts
  const size = parseSize(rawSize, file)
  const key = joinKey('v1', size, null, name)
  const react = reactByJoin.get(key)
  if (react === undefined) {
    throw new Error(`React export not found for icon file ${file}`)
  }
  const className = twByFile.get(file)
  if (className === undefined) {
    throw new Error(`Tailwind class not found for icon file ${file}`)
  }
  const cssClassName = assembleCssClassName('v1', size, null, name)
  if (!cssClassNames.has(cssClassName)) {
    throw new Error(
      `Assembled CSS class ${cssClassName} for ${file} is not in generated CSS`,
    )
  }
  const record: Omit<IconRecord, 'keys'> = {
    generation: 'v1',
    name,
    size,
    theme: null,
    figma: {
      component: name,
      variant: null,
    },
    file,
    surfaces: {
      reactIcons: {
        import: '@charcoal-ui/icons/react/v1',
        component: react.component,
      },
      tailwind: {
        className,
        flag: 'iconsV1',
      },
      css: {
        className: cssClassName,
        import: '@charcoal-ui/icons/css/v1/index.css',
      },
      reactIcon: { name: file },
      pixivIcon: { name: file },
    },
    familyKey: `v1:${name}`,
  }
  return { ...record, keys: recordKeys(record) }
}

export function buildIconIndex(): IconIndex {
  const v1Files = Object.keys(iconFilesV1)
  const v2Files = Object.keys(iconFilesV2)
  const reactV1 = parseReactBarrel(readFileSync(iconsReactV1Path, 'utf8'), 'v1')
  const reactV2 = parseReactBarrel(readFileSync(iconsReactV2Path, 'utf8'), 'v2')
  const cssV1 = parseCssClassNames(readFileSync(iconsCssV1Path, 'utf8'))
  const cssV2 = parseCssClassNames(readFileSync(iconsCssV2Path, 'utf8'))
  const twV1 = tailwindByFile(false)
  const twV2 = tailwindByFile(true)

  const v1Records = v1Files.map((file) =>
    buildV1Record(file, reactV1, twV1, cssV1),
  )
  const v2Records = v2Files.map((file) =>
    buildV2Record(file, reactV2, twV2, cssV2),
  )
  attachLeftoverReactExportKeys(
    v1Records,
    reactV1,
    path.join(repoRoot, 'packages/icon-files/src'),
  )
  attachLeftoverReactExportKeys(v2Records, reactV2, iconFilesV2SrcDir)

  return {
    source: {
      iconFilesV1Count: v1Files.length,
      iconFilesV2Count: v2Files.length,
    },
    records: [...v1Records, ...v2Records].sort((a, b) => {
      if (a.generation !== b.generation) {
        return a.generation.localeCompare(b.generation)
      }
      return a.file.localeCompare(b.file)
    }),
  }
}

export function writeIconIndex(filePath = iconsIndexPath) {
  mkdirSync(path.dirname(filePath), { recursive: true })
  writeFileSync(filePath, `${JSON.stringify(buildIconIndex(), null, 2)}\n`)
  return filePath
}

export { iconsIndexPath }
