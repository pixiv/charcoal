import { describe, expect, it } from 'vitest'
import fs from 'node:fs/promises'
import path from 'node:path'
import postcss, { type Rule } from 'postcss'

// Design Token 1.0互換モードの「見た目の非破壊」を検証する。
//
// 移行: 旧 `@charcoal-ui/react/dist/index.css` (v1, --charcoal-* を直接使用)
//   →  新 コンポーネントCSS (v2, --charcoal-color-* を使用) + `_token_v1.css` remap
//
// 非破壊であるためには、各 (セレクタ, プロパティ) で新CSSが使う 1つの --charcoal-color-*
// が、旧CSSで使われていた「単一の」--charcoal-* に対応していなければならない。同じ新トークンが
// 箇所ごとに異なる旧トークンに対応するなら、v2 が複数の v1 トークンを統合したということで、
// remap がどんな値を選んでも一部の箇所で色が変わる = 見た目が壊れる。
// 例: --charcoal-color-container-neutral-default は Modal 背景 (旧 surface4 = 暗幕) と
//     Switch (旧 text4) と Checkbox (旧 text3) に使われ、単一値では再現不可。
//
// 旧 index.css は charcoal の直前リリース (published v1) を fixtures に取り込んだもの。

const legacyPath = path.resolve(
  import.meta.dirname,
  'fixtures/legacy-v1-index.css',
)
const componentsDir = path.resolve(import.meta.dirname, '../components')

async function getCssFiles(dir: string): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const results = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(dir, entry.name)
      if (entry.isDirectory()) return getCssFiles(entryPath)
      if (entry.isFile() && entry.name.endsWith('.css')) return [entryPath]
      return []
    }),
  )
  return results.flat()
}

/** 親 Rule を辿ってネストしたセレクタパスを組み立てる。 */
function selectorPath(rule: Rule): string {
  const parts: string[] = []
  let node: postcss.Container | postcss.Document | undefined = rule
  while (node && node.type === 'rule') {
    parts.unshift((node as Rule).selector.replace(/\s+/g, ' ').trim())
    node = node.parent as postcss.Container | undefined
  }
  return parts.join(' >> ')
}

/** `${selectorPath} | ${prop}` -> 単一 var(--charcoal…) の参照トークン。 */
function declarationTokens(css: string): Map<string, string> {
  const root = postcss.parse(css)
  const map = new Map<string, string>()
  root.walkDecls((decl) => {
    const m = decl.value.match(/^var\(\s*(--charcoal-[a-z0-9-]+)\s*\)$/)
    if (!m || decl.parent?.type !== 'rule') return
    map.set(`${selectorPath(decl.parent as Rule)} | ${decl.prop}`, m[1])
  })
  return map
}

const legacy = declarationTokens(await fs.readFile(legacyPath, 'utf-8'))
const modern = new Map<string, string>()
for (const file of await getCssFiles(componentsDir)) {
  for (const [key, token] of declarationTokens(
    await fs.readFile(file, 'utf-8'),
  )) {
    modern.set(key, token)
  }
}

// 新旧で一致する (セレクタ, プロパティ) について 新トークン -> {旧トークン…}
const correspondence = new Map<string, Map<string, string>>()
for (const [key, newToken] of modern) {
  if (!legacy.has(key)) continue
  if (!newToken.startsWith('--charcoal-color-')) continue
  if (!correspondence.has(newToken)) correspondence.set(newToken, new Map())
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  correspondence.get(newToken)!.set(key, legacy.get(key)!)
}

describe('Design Token 1.0互換: 旧 index.css の見た目を壊さない', () => {
  it('新トークンは旧の単一 --charcoal-* に対応する (v2 でのトークン統合による破壊がない)', () => {
    const breaking = [...correspondence]
      .map(([newToken, byKey]) => ({
        newToken,
        oldTokens: [...new Set(byKey.values())].sort(),
        usages: [...byKey.entries()].map(([k, v]) => `${k} → ${v}`),
      }))
      .filter(({ oldTokens }) => oldTokens.length > 1)
      .map(
        ({ newToken, oldTokens, usages }, index) =>
          `${index + 1}) ${newToken} は旧の {${oldTokens.join(', ')}} を破壊的に統合:\n    - ${usages.join('\n    - ')}`,
      )
      .join('\n')

    expect(breaking).toMatchInlineSnapshot(`
      "1) --charcoal-color-text-default は旧の {--charcoal-text1, --charcoal-text2} を破壊的に統合:
          - .charcoal-button | color → --charcoal-text2
          - .charcoal-checkbox__label_div | color → --charcoal-text2
          - .charcoal-ui-dropdown-selector-text | color → --charcoal-text2
          - .charcoal-field-label | color → --charcoal-text1
          - .charcoal-modal-header-title | color → --charcoal-text1
          - .charcoal-multi-select-label | color → --charcoal-text2
          - .charcoal-radio__label_div | color → --charcoal-text2
          - .charcoal-switch__label_div | color → --charcoal-text2
      2) --charcoal-color-border-default は旧の {--charcoal-text3, --charcoal-text4} を破壊的に統合:
          - .charcoal-checkbox-input:not(:checked) | border-color → --charcoal-text4
          - .charcoal-radio-input:not(:checked) | border-color → --charcoal-text3
      3) --charcoal-color-icon-tertiary-default は旧の {--charcoal-text3, --charcoal-text4} を破壊的に統合:
          - .charcoal-hint-text-icon | color → --charcoal-text3
          - .charcoal-loading-spinner | color → --charcoal-text4
      4) --charcoal-color-container-neutral-default は旧の {--charcoal-text3, --charcoal-text4} を破壊的に統合:
          - .charcoal-multi-select-input[type='checkbox'] | background-color → --charcoal-text3
          - .charcoal-switch-input | background-color → --charcoal-text4"
    `)
  })
})
