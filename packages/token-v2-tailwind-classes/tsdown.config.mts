import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/cli.ts'],
  format: ['cjs'],
  target: 'node18',
  sourcemap: true,
  fixedExtension: false,
})
