import { readFileSync, writeFileSync } from 'fs'
import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  target: 'esnext',
  sourcemap: true,
  onSuccess: () => {
    const cjsDistFile = './dist/index.cjs'
    let src = readFileSync(cjsDistFile).toString()
    src = src.replace(
      /__toESM\(require\("styled-components"\), 1\);/g,
      `require("styled-components");`
    )
    writeFileSync(cjsDistFile, src)
    return Promise.resolve()
  },
})
