import { defineConfig } from 'tsdown'
import postcss from 'postcss'
import fs from 'node:fs/promises'
import path from 'node:path'
import pluginBabel from '@rollup/plugin-babel'

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
  plugins: [
    pluginBabel({
      babelHelpers: 'bundled',
      parserOpts: {
        sourceType: 'module',
        plugins: ['jsx', 'typescript'],
      },
      plugins: [
        [
          'babel-plugin-react-compiler',
          {
            compilationMode: 'annotation',
            target: '18',
          },
        ],
      ],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
  ],
  clean: false,
  target: 'esnext',
  sourcemap: true,
  // Preserve per-module structure instead of bundling into a single file.
  // A single bundle prevents consumer bundlers (webpack, etc.) from
  // tree-shaking unused components (Modal, Popover, etc.) and their
  // transitive deps like react-aria's overlay machinery — tens of KB
  // would end up in chunks that only use Button. Per-module output
  // combined with sideEffects: ["*.css"] ensures only imported
  // component modules enter the consumer's module graph.
  unbundle: true,
  // Skip minification — the consumer's bundler will minify anyway, and
  // minifying here would destroy /*#__PURE__*/ annotations and module
  // structure that the consumer's innerGraph analysis needs to drop
  // unused exports.
  minify: false,
  deps: {
    neverBundle: ['react-compiler-runtime'],
  },
  css: {
    // unbundle sets css.splitting by default; disable it so all CSS is
    // collected into a single index.css instead of per-chunk files.
    splitting: false,
    fileName: 'index.css',
    transformer: 'postcss',
    postcss: path.join(import.meta.dirname, 'postcss.config.mjs'),
  },
  async onSuccess() {
    const distDir = path.resolve(import.meta.dirname, './dist')

    // Strip "use client" and empty-css markers from barrel entry files so
    // that bundlers (webpack, etc.) treat re-exports as side-effect-free
    // and can tree-shake unused components.
    for (const name of ['index.js', 'index.cjs']) {
      const p = path.join(distDir, name)
      const src = await fs.readFile(p, 'utf-8')
      const cleaned = src
        .replace(/^"use client";\n?/, '')
        .replace(/\/\*\s*empty css\s*\*\/\n?/g, '')
      if (cleaned !== src) await fs.writeFile(p, cleaned)
    }

    const indexCssPath = path.join(distDir, 'index.css')
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
