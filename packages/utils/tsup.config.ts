import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  target: 'esnext',
  tsconfig: './tsconfig.build.json',
  sourcemap: true,
  clean: true,
  dts: true,
})
