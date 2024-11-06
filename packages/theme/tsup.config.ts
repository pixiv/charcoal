import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'token-object/index': 'src/token-object/index.ts',
  },
  format: ['esm', 'cjs'],
  outExtension({ format }) {
    return {
      js: `.${format}.js`,
    }
  },
  target: 'esnext',
  sourcemap: true,
  clean: true,
})
