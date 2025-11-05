import { defineConfig } from 'tsdown'
import postcss from 'postcss'
import fs from 'node:fs/promises'
import path from 'node:path'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  platform: 'neutral',
  // FIXME: rolldown-plugin-dts is slow without Isolated Declarations
  dts: false,
  // dts: {
  // https://github.com/microsoft/typescript-go/issues/1034
  // tsgo: true,
  // },
  banner: {
    js: `"use client";`,
  },
  clean: false,
  target: 'esnext',
  sourcemap: true,
  minify: true,
  async onSuccess() {
    const indexCssPath = path.resolve(import.meta.dirname, './dist/index.css')
    const originalCssOutput = await fs.readFile(indexCssPath, 'utf-8')
    if (!originalCssOutput) {
      throw new Error('[at-layer-charcoal]: expect original css output')
    }

    const layeredCssFilePath = indexCssPath.replace('index.css', 'layered.css')
    const layeredCssOutput = await postcss({
      postcssPlugin: 'at-layer-charcoal',
      Once(_, { AtRule, result }) {
        const atLayerNode = new AtRule({
          name: 'layer',
          params: 'charcoal',
          nodes: result.root.nodes,
        })
        result.root.nodes = [atLayerNode]
      },
    }).process(originalCssOutput, {
      from: indexCssPath,
      to: layeredCssFilePath,
      map: {
        inline: false,
      },
    })

    await Promise.all([
      fs.writeFile(layeredCssFilePath, layeredCssOutput.content),
      fs.writeFile(
        `${layeredCssFilePath}.map`,
        layeredCssOutput.map.toString(),
      ),
    ])

    // eslint-disable-next-line no-console
    console.log(`transformed dist/layered.css`)
  },
})
