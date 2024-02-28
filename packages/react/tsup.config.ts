import { defineConfig } from 'tsup'
import { styledComponentsPlugin } from '@charcoal-ui/esbuild-plugin-styled-components'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  outExtension({ format }) {
    return {
      js: `.${format}.js`,
    }
  },
  target: 'esnext',
  sourcemap: true,
  esbuildPlugins: [styledComponentsPlugin],
})
