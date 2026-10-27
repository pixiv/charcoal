import * as babel from '@babel/core'
import type { ParserPlugin } from '@babel/parser'
import type { UserConfig } from 'tsdown'
import path from 'path'

const cache = new Map<string, ReturnType<typeof transformStyledComponents>>()

export const styledComponentsPlugin: UserConfig['plugins'] = {
  name: 'styled-components',
  async transform(code, id) {
    if (id.includes('\0') || !/\.(?:[mc]?[jt]s|[jt]sx)$/.test(id)) {
      return null
    }
    const cachedResult = cache.get(id)

    if (cachedResult === undefined) {
      const result = transformStyledComponents(code, id)
      cache.set(id, result)
      return await result
    }

    return await cachedResult
  },
}

async function transformStyledComponents(code: string, sourcePath: string) {
  if (sourcePath.includes('styledExportFix')) {
    return { code, map: null }
  }
  const plugins: ParserPlugin[] = []
  if (sourcePath.endsWith('x')) {
    plugins.push('jsx')
  }
  if (sourcePath.endsWith('ts') || sourcePath.endsWith('tsx')) {
    plugins.push('typescript')
  }

  const result = await babel.transformAsync(code, {
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
      // https://github.com/styled-components/styled-components/issues/3437
      function styledImportFix({ types: t }: typeof babel) {
        const importFix = path.join(import.meta.dirname, './styledExportFix.ts')
        return {
          visitor: {
            ImportDeclaration(path) {
              if (path.node.source.value === 'styled-components') {
                path.node.source = t.stringLiteral(importFix)
              }
            },
          },
        } satisfies babel.PluginObj
      },
    ],
    browserslistConfigFile: false,
    sourceMaps: true,
    parserOpts: { plugins },
  })

  if (!result?.code) {
    throw new Error('expect code to be generated')
  }

  return { code: result.code, map: result.map }
}
