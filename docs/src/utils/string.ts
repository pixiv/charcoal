/**
 * インデントを良い感じに取り除く
 *
 * タグ付きテンプレートリテラルで書けるが、変数埋め込みはサポートしない
 */
export function dedent(tag: TemplateStringsArray) {
  if (tag.length > 1) {
    throw new Error('Do not interpolate value')
  }

  const lines = tag[0].split(/\n/)
  const minimumIndent = getMinimumIndent(lines)

  const 行の先頭にあるminimumIndent個のスペース = new RegExp(
    `^\\s{${minimumIndent}}`
  )

  return lines
    .map((line) => line.replace(行の先頭にあるminimumIndent個のスペース, ''))
    .join('\n')
    .trim()
}

function getMinimumIndent(lines: string[]) {
  // 空白しかない行を除く
  const lineWithNonSpaces = lines.filter((line) => !/^\s+$/.test(line))

  const indents = lineWithNonSpaces
    .map(getIndentCount)
    .filter((indent) => indent > 0)

  return Math.min(...indents)
}

function getIndentCount(line: string) {
  const spaces = line.match(/^\s+/)?.[0]

  return spaces?.length ?? 0
}
