import { describe, it, expect } from 'vitest'
import postcss from 'postcss'
import postcssNested from 'postcss-nested'
import fs from 'node:fs/promises'
import path from 'node:path'

const componentsDir = path.resolve(import.meta.dirname, '../components')

async function getComponentCssFiles() {
  const entries = await fs.readdir(componentsDir, { withFileTypes: true })
  const results: { name: string; cssPath: string }[] = []
  for (const entry of entries) {
    if (entry.isDirectory()) {
      const cssPath = path.join(componentsDir, entry.name, 'index.css')
      try {
        await fs.access(cssPath)
        results.push({ name: entry.name, cssPath })
      } catch {
        // no index.css in this component
      }
    }
  }
  return results
}

const componentCssFiles = await getComponentCssFiles()

describe('CSS nesting output equivalence', () => {
  it.each(componentCssFiles)('$name', async ({ cssPath }) => {
    const source = await fs.readFile(cssPath, 'utf-8')
    const result = await postcss([postcssNested()]).process(source, {
      from: cssPath,
    })
    const snapshotPath = path.join(
      path.dirname(cssPath),
      '__snapshots__',
      'index.css.snap'
    )
    await expect(result.css).toMatchFileSnapshot(snapshotPath)
  })
})
