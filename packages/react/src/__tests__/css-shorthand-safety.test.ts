import { describe, expect, it } from 'vitest'
import fs from 'node:fs/promises'
import path from 'node:path'
import postcss from 'postcss'
import postcssNested from 'postcss-nested'

/**
 * CSS shorthand properties reset ALL their sub-properties. When a rule has
 * e.g. `font: inherit` followed by `line-height: 22px`, the longhand
 * correctly overrides the shorthand within that rule. But CSS minifiers
 * (cssnano's postcss-merge-rules) can extract the shared longhand into a
 * merged selector, leaving only the shorthand — which then silently resets
 * the longhand back.
 *
 * This test detects shorthand-then-longhand patterns in component CSS so
 * we catch them before they reach production minification.
 */

const SHORTHAND_TO_LONGHANDS: Record<string, string[]> = {
  font: [
    'font-family',
    'font-size',
    'font-style',
    'font-variant',
    'font-weight',
    'font-stretch',
    'line-height',
  ],
  background: [
    'background-color',
    'background-image',
    'background-position',
    'background-size',
    'background-repeat',
    'background-origin',
    'background-clip',
    'background-attachment',
  ],
  animation: [
    'animation-name',
    'animation-duration',
    'animation-timing-function',
    'animation-delay',
    'animation-iteration-count',
    'animation-direction',
    'animation-fill-mode',
    'animation-play-state',
  ],
}

const componentsDir = path.resolve(import.meta.dirname, '../components')

async function getComponentCssFiles() {
  const results: string[] = []
  async function walk(dir: string) {
    for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        await walk(full)
      } else if (entry.isFile() && entry.name.endsWith('.css')) {
        results.push(full)
      }
    }
  }
  await walk(componentsDir)
  return results
}

function selectorPath(rule: postcss.Rule): string {
  const parts: string[] = []
  let node: postcss.Container | postcss.Document | undefined = rule
  while (node && node.type === 'rule') {
    parts.unshift((node as postcss.Rule).selector.replace(/\s+/g, ' ').trim())
    node = node.parent as postcss.Container | undefined
  }
  return parts.join(' ')
}

interface Conflict {
  file: string
  selector: string
  shorthand: string
  longhands: string[]
}

function findConflicts(root: postcss.Root, file: string): Conflict[] {
  const conflicts: Conflict[] = []

  root.walkRules((rule) => {
    for (const [shorthand, longhands] of Object.entries(
      SHORTHAND_TO_LONGHANDS
    )) {
      let seenShorthand = false
      const conflicting: string[] = []

      rule.walkDecls((decl) => {
        if (decl.parent !== rule) return
        if (decl.prop === shorthand) {
          seenShorthand = true
          conflicting.length = 0
        } else if (seenShorthand && longhands.includes(decl.prop)) {
          conflicting.push(decl.prop)
        }
      })

      if (conflicting.length > 0) {
        conflicts.push({
          file: path.relative(componentsDir, file),
          selector: selectorPath(rule),
          shorthand,
          longhands: conflicting,
        })
      }
    }
  })

  return conflicts
}

const cssFiles = await getComponentCssFiles()

describe('CSS shorthand/longhand safety', () => {
  it('no shorthand followed by its longhands in the same rule', async () => {
    const allConflicts: Conflict[] = []

    for (const file of cssFiles) {
      const source = await fs.readFile(file, 'utf-8')
      const result = await postcss([postcssNested()]).process(source, {
        from: file,
      })
      allConflicts.push(...findConflicts(result.root, file))
    }

    if (allConflicts.length > 0) {
      const report = allConflicts
        .map(
          (c) =>
            `${c.file}: "${c.selector}" has ${c.shorthand} followed by ${c.longhands.join(', ')}`
        )
        .join('\n')
      expect.fail(
        `Shorthand/longhand conflicts found. CSS minifiers (cssnano merge-rules) ` +
          `can extract longhands into merged selectors, leaving the shorthand to ` +
          `silently reset them.\n\n` +
          `Fix: either expand the shorthand into individual properties, or fold ` +
          `the longhand values into the shorthand.\n\n${report}`
      )
    }
  })
})
