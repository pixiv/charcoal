import { createAppliedTokenIndex } from './flatten-css-variables'
import { resolveTokenName } from './resolve-name'

const index = createAppliedTokenIndex({
  color: {
    s: 'var(--charcoal-color-s)',
    typography: { paragraph: 'var(--charcoal-color-paragraph)' },
  },
  space: { s: 'var(--charcoal-space-s)' },
})

describe('resolveTokenName', () => {
  it('resolves canonical paths and collection-less Figma names exactly', () => {
    expect(
      resolveTokenName(index, { name: 'color/typography/paragraph' }),
    ).toMatchObject({
      status: 'resolved',
      entry: { canonicalPath: 'color/typography/paragraph' },
    })
    expect(
      resolveTokenName(index, { name: 'typography/paragraph' }),
    ).toMatchObject({
      status: 'resolved',
      entry: { canonicalPath: 'color/typography/paragraph' },
    })
  })

  it('retains ambiguous Figma names and supports collection filtering', () => {
    expect(resolveTokenName(index, { name: 's' })).toMatchObject({
      status: 'ambiguous',
      candidates: [{ canonicalPath: 'color/s' }, { canonicalPath: 'space/s' }],
    })
    expect(
      resolveTokenName(index, { name: 's', collection: 'space' }),
    ).toMatchObject({
      status: 'resolved',
      entry: { canonicalPath: 'space/s' },
    })
  })

  it('accepts a unique case-insensitive exact match with a diagnostic', () => {
    expect(
      resolveTokenName(index, { name: 'TYPOGRAPHY/PARAGRAPH' }),
    ).toMatchObject({
      status: 'resolved',
      entry: { canonicalPath: 'color/typography/paragraph' },
      diagnostics: [{ code: 'case_normalized' }],
    })
  })

  it('normalizes the collection segment case for canonical queries', () => {
    expect(
      resolveTokenName(index, { name: 'Color/Typography/Paragraph' }),
    ).toMatchObject({
      status: 'resolved',
      entry: { canonicalPath: 'color/typography/paragraph' },
      diagnostics: [{ code: 'case_normalized' }],
    })
  })

  it('does not resolve an ambiguous case-insensitive match', () => {
    expect(resolveTokenName(index, { name: 'S' })).toMatchObject({
      status: 'ambiguous',
      candidates: [{ canonicalPath: 'color/s' }, { canonicalPath: 'space/s' }],
      diagnostics: [],
    })
  })

  it('does not use partial matches or normalize invalid paths', () => {
    expect(resolveTokenName(index, { name: 'paragraph' })).toMatchObject({
      status: 'not_found',
    })
    expect(() =>
      resolveTokenName(index, { name: 'typography//paragraph' }),
    ).toThrow()
  })
})
