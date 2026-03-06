import { defineConfig } from 'tsdown'
import { writeThemeJson } from './cli/theme-json'
import { writeTokenObjects } from './cli/token-object'

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'unstable-token-object/index': 'src/unstable-token-object/index.ts',
  },
  format: ['esm', 'cjs'],
  target: 'esnext',
  sourcemap: true,
  clean: true,
  dts: true,
  fixedExtension: false,
  copy: [{ from: 'src/unstable-css', to: 'dist' }],
  onSuccess() {
    writeThemeJson()
    writeTokenObjects()
  },
})
