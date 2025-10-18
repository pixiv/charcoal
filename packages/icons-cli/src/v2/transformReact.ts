import { mustBeDefined } from '../utils'
import ts from 'typescript'
import glob from 'fast-glob'
import { readFile, writeFile } from 'fs-extra'
import path from 'path'

async function main() {
  mustBeDefined(process.env.OUTPUT_ROOT_DIR, 'OUTPUT_ROOT_DIR')
  mustBeDefined(process.env.VERSION, 'VERSION')
  const workDir = process.env.OUTPUT_ROOT_DIR
  const version = process.env.VERSION

  const fileNames = await glob('*/**/*.tsx', { cwd: workDir })
  const filesWithContent = await Promise.all(
    fileNames.map(async (fileName) => {
      const filePath = path.join(workDir, fileName)
      const content = await readFile(filePath, 'utf-8')
      return {
        filePath,
        fileName,
        content,
      }
    })
  )
  const { transformed, catalog } = rewrite(filesWithContent)
  await Promise.all(
    transformed.map(async (file) => {
      return writeFile(file.filePath, file.content)
    })
  )
  const icons = Object.entries(catalog)

  const iconsPair = icons
    .map(([iconName, iconPath]) => [
      iconName,
      './' + iconPath.replace('.tsx', ''),
    ])
    .sort((a, b) => (a[1] > b[1] ? 1 : a[1] < b[1] ? -1 : 0))

  await writeFile(
    path.join(workDir, 'index.tsx'),
    `${iconsPair
      .map(([iconName, iconPath]) => `export {${iconName}} from '${iconPath}'`)
      .join('\n')}`
  )

  await writeFile(
    path.join(workDir, 'index.story.tsx'),
    `${iconsPair
      .map(([iconName, iconPath]) => `import {${iconName}} from '${iconPath}'`)
      .join('\n')}
import { createGlobalStyle } from 'styled-components'

export default {
  title: 'Icons/${version}/react',
  parameters: {
    storyshots: {
      disable: true,
    },
  },
  render() {
    return (
      <>
        <div className="icons-grid">
${icons
  .sort((a, b) => a[0].localeCompare(b[0]))
  .map(
    ([iconName]) => `
          <div>
            <${iconName} />
            <code>${`&lt;${iconName} /&gt;`}</code>
          </div>`
  )
  .join('\n')}
        </div>
        <Global />
      </>
    )
  },
}

export const Default = {}

const Global = createGlobalStyle\`
  .icons-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, 300px);
    font-size: 14px;
    gap: 8px;
  }
  .icons-grid div {
    overflow-wrap: anywhere;
    display: flex;
    align-items: center;
    gap: 8px;
  }
\`
`
  )
}
interface FileWithContent {
  filePath: string
  fileName: string
  content: string
}

type Catalog = Record<string, string>

function rewrite(tsxSourceTexts: FileWithContent[]): {
  catalog: Catalog
  transformed: FileWithContent[]
} {
  const catalog: Catalog = {}

  const updateJSX: ts.TransformerFactory<ts.SourceFile> = (ctx) => (source) => {
    const [name, variant, size] = source.fileName
      .split('.')[0]
      .split('/')
      .reverse()
    const newName = [
      'Icon',
      name,
      variant === 'regular'
        ? []
        : [variant.charAt(0).toUpperCase() + variant.slice(1)],
      size === '24' ? [] : [size],
    ].join('')
    catalog[newName] = source.fileName
    const visitor: ts.Visitor = (node) => {
      if (ts.isIdentifier(node)) {
        return transformIdent(node)
      }
      if (ts.isVariableStatement(node)) {
        if (
          node.declarationList.declarations.at(0)?.name.getText(source) ===
          'ForwardRef'
        ) {
          return ts.visitEachChild(
            ctx.factory.updateVariableStatement(
              node,
              [ctx.factory.createToken(ts.SyntaxKind.ExportKeyword)],
              node.declarationList
            ),
            visitor,
            ctx
          )
        }
      }
      return ts.visitEachChild(node, visitor, ctx)
    }

    function transformIdent(node: ts.Identifier) {
      if (node.text === 'ForwardRef') {
        return ts.factory.createIdentifier(newName)
      }
      return node
    }

    return ts.visitNode(source, visitor) as ts.SourceFile
  }

  const printer = ts.createPrinter()

  const sources = tsxSourceTexts.map((sourceText) => {
    return ts.createSourceFile(
      sourceText.fileName,
      sourceText.content,
      ts.ScriptTarget.ESNext,
      undefined,
      ts.ScriptKind.TSX
    )
  })
  const { transformed } = ts.transform(sources, [updateJSX])
  return {
    catalog,
    transformed: transformed.map((t, i) => {
      const printed = printer.printFile(t)
      return { ...tsxSourceTexts[i], content: printed }
    }),
  }
}

void main()
