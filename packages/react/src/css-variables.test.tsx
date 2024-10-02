import glob from 'glob'
import { readFile } from 'fs/promises'
import path, { join } from 'path'

const dir = path.resolve(__dirname, 'components')

const extractVariables = (cssContent: string): string[] => {
  const variablePattern = /--[\w-]+(?=:)/g
  return cssContent.match(variablePattern) ?? []
}
const extractUsedVariables = (cssContent: string): string[] => {
  const usedVariablePattern = /var\((--[\w-]+)\)/g
  return Array.from(
    cssContent.matchAll(usedVariablePattern),
    (match) => match[1]
  )
}

const variablesSet = new Set<string>()
const variableFiles = [
  join(__dirname, './index.css'),
  ...glob.sync(join(__dirname, '../../theme/src/css/*.css')),
]

for (const file of variableFiles) {
  const content = await readFile(file, 'utf-8')
  const variables = extractVariables(content)
  for (const variable of variables) {
    variablesSet.add(variable)
  }
}

describe('CSS Variables Check', () => {
  const cssFiles = glob.sync(`${dir}/**/*.css`)

  describe.each(cssFiles)('Check file: %s', async (file) => {
    const content = await readFile(file, 'utf-8')
    const usedVariables = extractUsedVariables(content)
    const definedVariables = new Set(extractVariables(content))

    it('should not empty', () => {
      expect(content).not.toBe('')
    })

    it.each(usedVariables)(
      'should contain all used variables in %s',
      (variable) => {
        const contained =
          variablesSet.has(variable) || definedVariables.has(variable)
        expect(contained).toBeTruthy()
      }
    )
  })
})
