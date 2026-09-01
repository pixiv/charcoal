import { createAppliedTokenIndex } from './flatten-css-variables'
import { appliedTokenIndex } from './applied-token-index'
import cssVariables from '@charcoal-ui/theme/tokens/css-variables.json' with { type: 'json' }

function cssVariableLeafReferences(tree: unknown): string[] {
  if (typeof tree === 'string') {
    return tree.startsWith('var(--') ? [tree] : []
  }
  if (tree === null || typeof tree !== 'object') {
    return []
  }
  return Object.values(tree).flatMap(cssVariableLeafReferences)
}

describe('createAppliedTokenIndex', () => {
  it('flattens nested CSS variable definitions without dropping path segments', () => {
    const index = createAppliedTokenIndex({
      color: {
        container: {
          primary: {
            default: 'var(--charcoal-color-container-primary-default)',
          },
        },
      },
    })

    expect(index.entries).toEqual([
      {
        canonicalPath: 'color/container/primary/default',
        figmaName: 'container/primary/default',
        cssVariable: '--charcoal-color-container-primary-default',
        cssReference: 'var(--charcoal-color-container-primary-default)',
      },
    ])
  })

  it('preserves duplicate Figma names in JSON traversal order', () => {
    const index = createAppliedTokenIndex({
      color: { s: 'var(--charcoal-color-s)' },
      space: { s: 'var(--charcoal-space-s)' },
    })

    expect(index.byFigmaName.get('s')).toEqual([
      expect.objectContaining({ canonicalPath: 'color/s' }),
      expect.objectContaining({ canonicalPath: 'space/s' }),
    ])
  })

  it('uses the leaf reference and ignores non-CSS-variable leaves', () => {
    const index = createAppliedTokenIndex({
      color: {
        applied: 'var(--custom-name)',
        primitive: '#ffffff',
      },
    })

    expect(index.entries).toEqual([
      {
        canonicalPath: 'color/applied',
        figmaName: 'applied',
        cssVariable: '--custom-name',
        cssReference: 'var(--custom-name)',
      },
    ])
  })

  it('indexes the theme package CSS variable definitions', () => {
    expect(
      appliedTokenIndex.byCanonicalPath.get('color/container/primary/default'),
    ).toEqual([
      {
        canonicalPath: 'color/container/primary/default',
        figmaName: 'container/primary/default',
        cssVariable: '--charcoal-color-container-primary-default',
        cssReference: 'var(--charcoal-color-container-primary-default)',
      },
    ])
  })

  it('indexes every CSS variable leaf in the theme manifest', () => {
    expect(
      appliedTokenIndex.entries.map((entry) => entry.cssReference),
    ).toEqual(cssVariableLeafReferences(cssVariables))
  })
})
