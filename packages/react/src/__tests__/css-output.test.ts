import { describe, it, expect } from 'vitest'
import postcss, { type Root } from 'postcss'
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

/**
 * Normalize a postcss AST to a canonical string format so that
 * flat CSS and postcss-nested expanded CSS produce identical output.
 */
function canonicalize(root: Root): string {
  let isFirst = true
  root.walk((node) => {
    if (node.type === 'rule' || node.type === 'atrule') {
      node.raws.before = isFirst ? '' : '\n\n'
      node.raws.after = '\n'
      node.raws.between = ' '
      if (node.type === 'rule') {
        node.selector = node.selector
          .replace(/\s+/g, ' ')
          .replace(/\(\s+/g, '(')
          .replace(/\s+\)/g, ')')
      }
      if (node.type === 'atrule' && node.raws.afterName) {
        node.raws.afterName = ' '
      }
      isFirst = false
    } else if (node.type === 'decl') {
      node.raws.before = '\n  '
      node.raws.between = ': '
      if (node.raws.value) {
        node.raws.value = undefined
      }
      // postcss-nested may drop semicolons when bubbling @media
      if (node.parent) {
        node.parent.raws.semicolon = true
      }
    }
  })
  return root.toString() + '\n'
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
      'index.css.snap',
    )
    await expect(canonicalize(result.root)).toMatchFileSnapshot(snapshotPath)
  })
})
