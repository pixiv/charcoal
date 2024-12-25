import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'unstable-token-object/index': 'src/unstable-token-object/index.ts',
  },
  format: ['esm', 'cjs'],
  target: 'esnext',
  sourcemap: true,
  dts: true,
  clean: true,
  tsconfig: './tsconfig.build.json',
})
