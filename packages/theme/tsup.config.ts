import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  target: 'esnext',
  sourcemap: true,
  dts: true,
  clean: true,
  tsconfig: './tsconfig.build.json',
})
