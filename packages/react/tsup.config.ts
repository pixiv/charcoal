import { readFileSync, writeFileSync } from 'fs'
import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  target: 'esnext',
  sourcemap: true,
  // Next.jsでcjsを使うときにエラーになるので回避策としてstyled-componentsのrequireを書き換える
  // TypeError: import_styled_components2.default.button is not a function
  onSuccess: () => {
    const cjsDistFile = './dist/index.cjs'
    let src = readFileSync(cjsDistFile).toString()
    src = src.replace(
      // NOTE: この正規表現は出力結果を見て作成した
      /__toESM\(require\("styled-components"\), 1\);/g,
      `require("styled-components");`
    )
    writeFileSync(cjsDistFile, src)
    return Promise.resolve()
  },
})
