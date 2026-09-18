import {
  resolveBatchQueries,
  resolveSingleQuery,
  resolveToken,
} from './resolve'

describe('resolveToken', () => {
  it('returns CSS and Tailwind candidates from their respective sources', () => {
    expect(
      resolveSingleQuery({
        name: 'container/primary/default',
        collection: 'color',
        property: 'background-color',
      }),
    ).toEqual({
      schemaVersion: 1,
      query: {
        name: 'container/primary/default',
        collection: 'color',
        property: 'background-color',
      },
      status: 'resolved',
      token: { canonicalPath: 'color/container/primary/default' },
      css: {
        variable: '--charcoal-color-container-primary-default',
        reference: 'var(--charcoal-color-container-primary-default)',
      },
      tailwind: {
        candidates: [
          {
            property: 'background-color',
            className: 'bg-container-primary',
            themeKey: 'colors',
          },
        ],
      },
      diagnostics: [],
    })
  })

  it('does not pick a Tailwind class without property context', () => {
    expect(
      resolveToken({ name: 'container/primary/default', collection: 'color' }),
    ).toMatchObject({
      status: 'resolved',
      tailwind: { candidates: [] },
    })
  })

  it('keeps CSS resolution when no Tailwind binding exists', () => {
    expect(
      resolveToken({
        name: 'container/primary/default',
        collection: 'color',
        property: 'opacity',
      }),
    ).toMatchObject({
      status: 'unsupported_property',
      token: { canonicalPath: 'color/container/primary/default' },
    })
    expect(
      resolveToken({
        name: 'line-height/body',
        collection: 'text',
        property: 'line-height',
      }),
    ).toMatchObject({
      status: 'resolved',
      diagnostics: [{ code: 'tailwind_binding_not_found' }],
    })
  })

  it('distinguishes incompatible properties from unsupported properties', () => {
    expect(
      resolveToken({
        name: 'container/primary/default',
        collection: 'color',
        property: 'border-radius',
      }),
    ).toMatchObject({ status: 'incompatible_property' })
  })

  it('uses property context to narrow an ambiguous name only when unique', () => {
    expect(resolveToken({ name: 'm', property: 'width' })).toMatchObject({
      status: 'resolved',
      token: { canonicalPath: 'paragraph-width/m' },
    })
    expect(resolveToken({ name: 'm', property: 'opacity' })).toMatchObject({
      status: 'ambiguous',
      candidates: ['border-width/m', 'paragraph-width/m', 'radius/m'],
    })
  })

  it('wraps batch results in a stable envelope without dropping domain failures', () => {
    expect(
      resolveBatchQueries([
        { name: 'container/primary/default', collection: 'color' },
        { name: 'unknown' },
      ]),
    ).toMatchObject({
      schemaVersion: 1,
      results: [{ status: 'resolved' }, { status: 'not_found' }],
    })
  })
})
