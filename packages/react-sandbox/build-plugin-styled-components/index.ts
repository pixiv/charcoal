import * as babel from '@babel/core'
import type { ParserPlugin } from '@babel/parser'
import type { Options } from 'tsdown'

const cache = new Map<string, Promise<string>>()

export const styledComponentsPlugin: Options['plugins'] = {
  name: 'styled-components',
  async transform(code, id) {
    if (!/\.(?:[mc]?[jt]s|[jt]sx)$/.test(id)) {
      return code
    }
    const cachedResult = cache.get(id)

    if (cachedResult === undefined) {
      const result = transformStyledComponents(id)
      cache.set(id, result)
      return await result
    }

    return await cachedResult
  },
}

async function transformStyledComponents(sourcePath: string): Promise<string> {
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

  return result?.code ?? undefined
}
