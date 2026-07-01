import { describe, expect, it } from 'vitest'
import fs from 'node:fs/promises'
import path from 'node:path'
import postcss from 'postcss'

// Design Token 1.0互換モード (`@charcoal-ui/theme/css/_token_v1.css`) の remap を検証する。
//
// アプリは 1.0互換 (`_token_v1.css`) か 2.0 (`_variables_*.css`) のいずれかで --charcoal-color-*
// を供給し、コンポーネント実装CSS (`@charcoal-ui/react`) がそれを消費する。remap が
// 「壊さない・冗長でない・正しい」ことを次で担保する:
//   1. 非破壊: コンポーネントが使う --charcoal-color-* は全て remap 経由で解決できる。
//   2. 正しさ: --charcoal-color-* 同士の参照は全て定義済みで循環しない。重複定義がない。
//   3. 冗長でない: 2.0 API にも無く・内部参照も無く・コンポーネントも使わないトークンを持たない。

const cssDir = path.resolve(import.meta.dirname, '../../../theme/src/css')
const tokenV1Path = path.join(cssDir, '_token_v1.css')
const variables2Path = path.join(cssDir, '_variables_light.css')
const componentsDir = path.resolve(import.meta.dirname, '../components')

const COLOR_PREFIX = '--charcoal-color-'
const colorVarsIn = (value: string): string[] =>
  [...value.matchAll(/var\(\s*(--charcoal-color-[a-z0-9-]+)/g)].map((m) => m[1])

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

/** --charcoal-color-* の定義 (prop -> value) を収集。重複も検出。 */
function parseColorDefinitions(css: string): {
  defs: Map<string, string>
  duplicates: string[]
} {
  const defs = new Map<string, string>()
  const duplicates: string[] = []
  postcss.parse(css).walkDecls((decl) => {
    if (!decl.prop.startsWith(COLOR_PREFIX)) return
    if (defs.has(decl.prop)) duplicates.push(decl.prop)
    defs.set(decl.prop, decl.value)
  })
  return { defs, duplicates }
}

/** 宣言値から使用中の --charcoal-color-* を収集。 */
function usedColorVars(css: string): Set<string> {
  const used = new Set<string>()
  postcss.parse(css).walkDecls((decl) => {
    for (const v of colorVarsIn(decl.value)) used.add(v)
  })
  return used
}

/** --charcoal-color-* の var() チェインを解決。未定義参照・循環があれば失敗。 */
function resolve(
  token: string,
  defs: Map<string, string>,
  seen = new Set<string>(),
): { ok: true } | { ok: false; reason: string } {
  if (!defs.has(token)) return { ok: false, reason: `undefined ${token}` }
  if (seen.has(token)) return { ok: false, reason: `cycle at ${token}` }
  seen.add(token)
  for (const ref of colorVarsIn(defs.get(token)!)) {
    const r = resolve(ref, defs, seen)
    if (!r.ok) return r
  }
  return { ok: true } // --charcoal-color-* を含まない = 終端 (--charcoal-* かリテラル)
}

const { defs: tokenDefs, duplicates } = parseColorDefinitions(
  await fs.readFile(tokenV1Path, 'utf-8'),
)
const variables2Defs = parseColorDefinitions(
  await fs.readFile(variables2Path, 'utf-8'),
).defs

const componentCssFiles = await getCssFiles(componentsDir)
const componentUsed = new Set<string>()
for (const file of componentCssFiles) {
  for (const v of usedColorVars(await fs.readFile(file, 'utf-8'))) componentUsed.add(v)
}

describe('Design Token 1.0互換 (_token_v1.css) remap', () => {
  it('重複定義がない', () => {
    expect(duplicates).toEqual([])
  })

  it('全ての --charcoal-color-* が解決する (dangling / 循環がない)', () => {
    const broken = [...tokenDefs.keys()]
      .map((token) => ({ token, r: resolve(token, tokenDefs) }))
      .filter(({ r }) => !r.ok)
      .map(({ token, r }) => `${token}: ${(r as { reason: string }).reason}`)

    expect(broken).toEqual([])
  })

  it('冗長トークンがない (2.0 API にも無く・内部参照も無く・コンポーネント未使用)', () => {
    const internallyReferenced = new Set<string>()
    for (const value of tokenDefs.values()) {
      for (const ref of colorVarsIn(value)) internallyReferenced.add(ref)
    }
    const redundant = [...tokenDefs.keys()].filter(
      (t) =>
        !variables2Defs.has(t) &&
        !internallyReferenced.has(t) &&
        !componentUsed.has(t),
    )

    expect(redundant).toEqual([])
  })

  it.each(componentCssFiles)(
    '%s: 使用する --charcoal-color-* は全て _token_v1.css 経由で解決する (非破壊)',
    async (file) => {
      const css = await fs.readFile(file, 'utf-8')
      const unresolved = [...usedColorVars(css)]
        .map((token) => ({ token, r: resolve(token, tokenDefs) }))
        .filter(({ r }) => !r.ok)
        .map(({ token }) => token)

      expect(unresolved).toEqual([])
    },
  )
})
