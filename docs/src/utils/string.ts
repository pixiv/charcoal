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
    .map((line) => {
      if (isWhiteSpaceOnly(line)) {
        return ''
      }

      return line.replace(行の先頭にあるminimumIndent個のスペース, '')
    })
    .join('\n')
    .trim()
}

function getMinimumIndent(lines: string[]) {
  const indents = lines
    .filter((line) => !isWhiteSpaceOnly(line))
    .map(getIndentCount)
    .filter((indent) => indent > 0)

  return Math.min(...indents)
}

function isWhiteSpaceOnly(line: string) {
  return /^\s+$/.test(line)
}

function getIndentCount(line: string) {
  const spaces = line.match(/^\s+/)?.[0]

  return spaces?.length ?? 0
}
