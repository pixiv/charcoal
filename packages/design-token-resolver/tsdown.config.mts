import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/index.ts'],
  dts: {
    generator: 'tsc',
    compilerOptions: { isolatedDeclarations: false },
  },
  format: 'esm',
  target: 'node22',
  sourcemap: true,
  fixedExtension: false,
})
