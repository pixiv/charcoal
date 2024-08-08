import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  target: 'esnext',
  sourcemap: true,
  tsconfig: "./tsconfig.build.json",
  clean: true,
  dts: true,
})
