import type { TokenV2TailwindClassMapping } from '@charcoal-ui/tailwind-config'

export type OutputFormat = 'json' | 'markdown' | 'table'

export type FigmaVariable = {
  collection: string
  name: string
}

export type FigmaTokenV2TailwindClassMapping =
  TokenV2TailwindClassMapping & {
    figmaVariables: FigmaVariable[]
  }

export function formatJson(mappings: FigmaTokenV2TailwindClassMapping[]) {
  return JSON.stringify(mappings, null, 2)
}

function formatClasses(mapping: FigmaTokenV2TailwindClassMapping) {
  return mapping.classCandidates
    .map(
      ({ className, cssProperties }) =>
        `${className} (${cssProperties.join(', ')})`,
    )
    .join(', ')
}

export function formatMarkdown(mappings: FigmaTokenV2TailwindClassMapping[]) {
  const header =
    '| Token | Category | Recommended classes | Theme paths | CSS variable |\n' +
    '| --- | --- | --- | --- | --- |'
  const rows = mappings.map((mapping) =>
    [
      mapping.tokenPath,
      mapping.category,
      formatClasses(mapping),
      mapping.themeEntries.map(({ themePath }) => themePath).join('<br>'),
      mapping.cssVariable ?? '',
    ]
      .map((value) => value.replaceAll('|', '\\|'))
      .join(' | '),
  )

  return [header, ...rows.map((row) => `| ${row} |`)].join('\n')
}

export function formatTable(mappings: FigmaTokenV2TailwindClassMapping[]) {
  const rows = mappings.map((mapping) => [
    mapping.tokenPath,
    mapping.category,
    mapping.classCandidates.map(({ className }) => className).join(', '),
  ])
  const headings = ['TOKEN', 'CATEGORY', 'RECOMMENDED CLASSES']
  const widths = headings.map((heading, index) =>
    Math.max(heading.length, ...rows.map((row) => row[index].length)),
  )
  const formatRow = (row: string[]) =>
    row.map((value, index) => value.padEnd(widths[index])).join('  ')

  return [formatRow(headings), ...rows.map(formatRow)].join('\n')
}

export function formatMappings(
  mappings: FigmaTokenV2TailwindClassMapping[],
  format: OutputFormat,
) {
  switch (format) {
    case 'json':
      return formatJson(mappings)
    case 'markdown':
      return formatMarkdown(mappings)
    case 'table':
      return formatTable(mappings)
  }
}
