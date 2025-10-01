import { defineConfig } from 'tsup'
import { styledComponentsPlugin } from '@charcoal-ui/esbuild-plugin-styled-components'
import postcss from 'postcss'
import fs from 'node:fs/promises'
import path from 'node:path'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  outExtension({ format }) {
    return {
      js: `.${format}.js`,
    }
  },
  banner: {
    js: `"use client";`,
  },
  target: 'esnext',
  sourcemap: true,
  minify: true,
  esbuildPlugins: [
    styledComponentsPlugin,
    {
      name: 'at-layer-charcoal',
      setup(build) {
        // NOTE: this will be called twice for esm and cjs.
        build.onEnd(async (result) => {
          const originalCssOutput = result.outputFiles?.find((file) =>
            file.path.endsWith('css')
          )
          if (!originalCssOutput) {
            throw new Error('[at-layer-charcoal]: expect original css output')
          }

          const layeredCssFilePath = originalCssOutput.path.replace(
            'index.css',
            'layered.css'
          )
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
          }).process(originalCssOutput.text, {
            from: originalCssOutput.path,
            to: layeredCssFilePath,
            map: {
              inline: false,
            },
          })

          // https://github.com/evanw/esbuild/issues/2999
          // this will be called before dist is created
          await fs.mkdir(path.dirname(layeredCssFilePath), { recursive: true })
          await Promise.all([
            fs.writeFile(layeredCssFilePath, layeredCssOutput.content),
            fs.writeFile(
              `${layeredCssFilePath}.map`,
              layeredCssOutput.map.toString()
            ),
          ])

          // eslint-disable-next-line no-console
          console.log(
            `${build.initialOptions.format?.toUpperCase()} dist/layered.css`
          )
        })
      },
    },
  ],
})
