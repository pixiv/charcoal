import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: 'src/index.ts',
  format: ['esm', 'cjs'],
  target: 'esnext',
  sourcemap: true,
  dts: true,
  // class PixivIcon must be kept as-is
  minify: false,
})
