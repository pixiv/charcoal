import { defineConfig } from 'tsdown'
import { styledComponentsPlugin } from './build-plugin-styled-components/index.ts'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  banner: {
    js: `"use client";`,
  },
  target: 'esnext',
  sourcemap: true,
  dts: false,
  plugins: [styledComponentsPlugin],
})
