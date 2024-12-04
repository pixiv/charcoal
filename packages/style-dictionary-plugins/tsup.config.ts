import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  target: 'esnext',
  sourcemap: true,
  format: ['cjs', 'esm'],
})
