import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  target: 'node16',
  sourcemap: true,
  format: ['cjs', 'esm'],
})
