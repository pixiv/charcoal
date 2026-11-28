import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/index.ts', 'src/token-v2/index.ts'],
  dts: {
    generator: 'tsc',
    compilerOptions: { isolatedDeclarations: false },
  },
  format: ['esm', 'cjs'],
  target: 'esnext',
  sourcemap: true,
  fixedExtension: false,
})
