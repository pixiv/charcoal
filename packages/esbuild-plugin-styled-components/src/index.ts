import type { Loader, OnLoadResult, Plugin } from 'esbuild'
import * as babel from '@babel/core'
import type { ParserPlugin } from '@babel/parser'

export const styledComponentsPlugin: Plugin = {
  name: 'styled-components',
  setup(build) {
    const cache = new Map<string, Promise<OnLoadResult>>()

    build.onLoad({ filter: /\.(?:[mc]?[jt]s|[jt]sx)$/ }, async (args) => {
      const cachedResult = cache.get(args.path)

      if (cachedResult === undefined) {
        const result = transform(args.path)
        cache.set(args.path, result)
        return await result
      }

      return await cachedResult
    })
  },
}

async function transform(sourcePath: string): Promise<OnLoadResult> {
  const plugins: ParserPlugin[] = []
  if (sourcePath.endsWith('x')) {
    plugins.push('jsx')
  }
  if (sourcePath.endsWith('ts') || sourcePath.endsWith('tsx')) {
    plugins.push('typescript')
  }

  const result = await babel.transformFileAsync(sourcePath, {
    caller: {
      name: '@charcoal-ui/esbuild-plugin-styled-components',
      supportsStaticESM: true,
      supportsDynamicImport: true,
      supportsTopLevelAwait: true,
      supportsExportNamespaceFrom: true,
    },
    filename: sourcePath,
    configFile: false,
    babelrc: false,
    plugins: [
      [
        'babel-plugin-styled-components',
        {
          // https://styled-components.com/docs/tooling#babel-plugin
          displayName: false, // バンドルサイズ削減のためにコンポーネント名は省く
          namespace: 'ccl', // componentIdが重複しないよう適当なprefixを付与する
        },
      ],
    ],
    browserslistConfigFile: false,
    sourceMaps: 'inline',
    parserOpts: { plugins },
  })

  return {
    contents: result?.code ?? undefined,
    loader: selectEsbuildLoader(sourcePath),
  }
}

function selectEsbuildLoader(sourcePath: string): Loader {
  if (sourcePath.endsWith('js')) {
    return 'js'
  } else if (sourcePath.endsWith('jsx')) {
    return 'jsx'
  } else if (sourcePath.endsWith('ts')) {
    return 'ts'
  } else if (sourcePath.endsWith('tsx')) {
    return 'tsx'
  } else {
    throw new Error(`unexpected file type: ${sourcePath}`)
  }
}
