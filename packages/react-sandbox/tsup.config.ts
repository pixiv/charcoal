import { defineConfig } from 'tsup'
import { styledComponentsPlugin } from '@charcoal-ui/esbuild-plugin-styled-components'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  target: 'esnext',
  sourcemap: true,
  esbuildPlugins: [styledComponentsPlugin],
  clean: true,
  dts: false,
  tsconfig: './tsconfig.build.json',
})
