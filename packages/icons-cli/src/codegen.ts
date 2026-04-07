const SVG_EXTENSION = /\.svg$/iu
const NON_CSS_CLASS_NAME_CHARACTERS = /[^a-z0-9-]+/gu
const DUPLICATE_DASHES = /-+/gu
const EDGE_DASHES = /^-+|-+$/gu
const LINE_SEPARATOR = /\u2028/gu
const PARAGRAPH_SEPARATOR = /\u2029/gu

export function serializeJavaScriptValue(value: unknown): string {
  return JSON.stringify(value, null, 2)
    .replace(LINE_SEPARATOR, '\\u2028')
    .replace(PARAGRAPH_SEPARATOR, '\\u2029')
}

export function createSvgDataUri(svg: string): string {
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}

export function createCssClassNameSegment(fileName: string): string {
  const segment = fileName
    .toLowerCase()
    .replace(SVG_EXTENSION, '')
    .replaceAll('.', '-')
    .replace(NON_CSS_CLASS_NAME_CHARACTERS, '-')
    .replace(DUPLICATE_DASHES, '-')
    .replace(EDGE_DASHES, '')

  return segment === '' ? 'icon' : segment
}
