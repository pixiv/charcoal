import { readFileSync, writeFileSync } from 'fs'
import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  target: 'esnext',
  sourcemap: true,
  onSuccess: () => {
    {
      let src = readFileSync('./dist/index.cjs').toString()
      src = src.replace(
        /__toESM\(require\("styled-components"\), 1\);/g,
        `require("styled-components");`
      )
      writeFileSync('./dist/index.cjs', src)
    }
    {
      let src = readFileSync('./dist/index.js').toString()
      const namedImportRegexp =
        /import \{[\n\s]+([a-zA-Z0-9$, \n]*?)[\n\s]*?\} from "@react-aria\/(.*)";/
      let match = src.match(namedImportRegexp)
      const pkgNameMap: Record<string, number> = {}
      while (match) {
        const namedExportGroup = match[1].replace(/ as /g, ': ')
        const pkgGroup = match[2] ?? ''
        let pkgName = pkgGroup.replace(/-/, '_') + 'Pkg'
        if (pkgNameMap[pkgName] === undefined) {
          pkgNameMap[pkgName] = 0
        }
        pkgName = pkgName + (pkgNameMap[pkgName]++).toString()
        src = src.replace(
          namedImportRegexp,
          () => `import ${pkgName} from "@react-aria/${pkgGroup}";
const { ${namedExportGroup} } = ${pkgName};`
        )
        match = src.match(namedImportRegexp)
      }
      writeFileSync('./dist/index.js', src)
    }
  },
})
