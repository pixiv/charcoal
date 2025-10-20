import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/index.ts'],
  format: 'cjs',
  target: 'node22',
  sourcemap: true,
})
