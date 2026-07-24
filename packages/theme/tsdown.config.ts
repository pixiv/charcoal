import { defineConfig } from 'tsdown'
import { writeThemeJson } from './cli/theme-json.ts'
import { writeTokenObjects } from './cli/token-object.ts'

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'token-object/index': 'src/token-object/index.ts',
  },
  format: ['esm', 'cjs'],
  target: 'esnext',
  sourcemap: true,
  clean: true,
  dts: true,
  fixedExtension: false,
  copy: [{ from: 'src/css', to: 'dist' }],
  onSuccess() {
    writeThemeJson()
    writeTokenObjects()
  },
})
