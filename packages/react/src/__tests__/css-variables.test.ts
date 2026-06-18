import { describe, expect, it } from 'vitest'
import fs from 'node:fs/promises'
import path from 'node:path'

const componentsDir = path.resolve(import.meta.dirname, '../components')
const unstableCssDir = path.resolve(
  import.meta.dirname,
  '../../../theme/src/unstable-css',
)

async function getCssFiles(dir: string): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const results = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        return getCssFiles(entryPath)
      }
      if (entry.isFile() && entry.name.endsWith('.css')) {
        return [entryPath]
      }
      return []
    }),
  )
  return results.flat()
}

function extractDefinedVariables(cssContent: string): string[] {
  return [...cssContent.matchAll(/(--[\w-]+)\s*:/g)].map((match) => match[1])
}

function extractUsedVariables(cssContent: string): string[] {
  return [...cssContent.matchAll(/var\(\s*(--[\w-]+)/g)].map(
    (match) => match[1],
  )
}

const unstableCssVariables = new Set<string>()

for (const cssFile of await getCssFiles(unstableCssDir)) {
  const content = await fs.readFile(cssFile, 'utf-8')
  for (const variable of extractDefinedVariables(content)) {
    unstableCssVariables.add(variable)
  }
}

const componentCssFiles = await getCssFiles(componentsDir)

describe('CSS variables', () => {
  it.each(componentCssFiles)(
    '%s uses only defined CSS variables',
    async (file) => {
      const content = await fs.readFile(file, 'utf-8')
      const definedVariables = new Set(extractDefinedVariables(content))
      const usedVariables = new Set(extractUsedVariables(content))

      const undefinedVariables = [...usedVariables].filter(
        (variable) =>
          !unstableCssVariables.has(variable) &&
          !definedVariables.has(variable),
      )

      expect(undefinedVariables).toEqual([])
    },
  )
})
