import postcss, { type AcceptedPlugin } from 'postcss'
import tailwindcss from 'tailwindcss'
import light from '@charcoal-ui/theme/tokens/css-variables.json' with { type: 'json' }
import { unstable_createTailwindConfigTokenV2 } from '../tokenV2'
import { createTokenV2TailwindBindings } from './definition'
import { _resolveTokenV2ClassNames } from './resolve'
import type { TokenV2CssVariables } from './types'

describe('_resolveTokenV2ClassNames', () => {
  test.each([
    [
      'color/container/primary/default',
      'background-color',
      {
        property: 'background-color',
        className: 'bg-container-primary',
        themeKey: 'colors',
      },
    ],
    [
      'color/border/selected',
      'border-color',
      {
        property: 'border-color',
        className: 'border-ch-selected',
        themeKey: 'borderColor',
      },
    ],
    [
      'space/layout/20',
      'gap',
      { property: 'gap', className: 'gap-layout-20', themeKey: 'gap' },
    ],
    [
      'text/font-size/heading/xs',
      'font-size',
      {
        property: 'font-size',
        className: 'text-heading-xs',
        themeKey: 'fontSize',
      },
    ],
    [
      'text/font-weight/bold',
      'font-weight',
      {
        property: 'font-weight',
        className: 'font-ch-bold',
        themeKey: 'fontWeight',
      },
    ],
    [
      'radius/oval',
      'border-radius',
      {
        property: 'border-radius',
        className: 'rounded-oval',
        themeKey: 'borderRadius',
      },
    ],
    [
      'paragraph-width/s-cozy',
      'width',
      { property: 'width', className: 'w-s-cozy', themeKey: 'width' },
    ],
  ] as const)(
    '%s + %s resolves its Tailwind candidate',
    (canonicalPath, property, candidate) => {
      expect(_resolveTokenV2ClassNames({ canonicalPath, property })).toEqual({
        status: 'resolved',
        candidates: [candidate],
      })
    },
  )

  test('uses binding order and utility definition order when property is omitted', () => {
    expect(
      _resolveTokenV2ClassNames({ canonicalPath: 'space/layout/20' }),
    ).toEqual({
      status: 'resolved',
      candidates: [
        { property: 'margin', className: 'm-layout-20', themeKey: 'spacing' },
        {
          property: 'margin-top',
          className: 'mt-layout-20',
          themeKey: 'spacing',
        },
        {
          property: 'margin-right',
          className: 'mr-layout-20',
          themeKey: 'spacing',
        },
        {
          property: 'margin-bottom',
          className: 'mb-layout-20',
          themeKey: 'spacing',
        },
        {
          property: 'margin-left',
          className: 'ml-layout-20',
          themeKey: 'spacing',
        },
        { property: 'padding', className: 'p-layout-20', themeKey: 'spacing' },
        {
          property: 'padding-top',
          className: 'pt-layout-20',
          themeKey: 'spacing',
        },
        {
          property: 'padding-right',
          className: 'pr-layout-20',
          themeKey: 'spacing',
        },
        {
          property: 'padding-bottom',
          className: 'pb-layout-20',
          themeKey: 'spacing',
        },
        {
          property: 'padding-left',
          className: 'pl-layout-20',
          themeKey: 'spacing',
        },
        {
          property: 'inset',
          className: 'inset-layout-20',
          themeKey: 'spacing',
        },
        { property: 'top', className: 'top-layout-20', themeKey: 'spacing' },
        {
          property: 'right',
          className: 'right-layout-20',
          themeKey: 'spacing',
        },
        {
          property: 'bottom',
          className: 'bottom-layout-20',
          themeKey: 'spacing',
        },
        { property: 'left', className: 'left-layout-20', themeKey: 'spacing' },
        {
          property: 'min-width',
          className: 'min-w-layout-20',
          themeKey: 'spacing',
        },
        {
          property: 'max-width',
          className: 'max-w-layout-20',
          themeKey: 'spacing',
        },
        { property: 'height', className: 'h-layout-20', themeKey: 'spacing' },
        {
          property: 'min-height',
          className: 'min-h-layout-20',
          themeKey: 'spacing',
        },
        {
          property: 'max-height',
          className: 'max-h-layout-20',
          themeKey: 'spacing',
        },
        { property: 'gap', className: 'gap-layout-20', themeKey: 'gap' },
        { property: 'row-gap', className: 'gap-y-layout-20', themeKey: 'gap' },
        {
          property: 'column-gap',
          className: 'gap-x-layout-20',
          themeKey: 'gap',
        },
      ],
    })
  })

  test.each([
    ['missing/token', undefined, { status: 'binding_not_found' }],
    [
      'space/layout/20',
      'margin-inline-start',
      { status: 'unsupported_property', property: 'margin-inline-start' },
    ],
    [
      'space/layout/20',
      'width',
      { status: 'incompatible_property', property: 'width' },
    ],
    [
      'paragraph-width/s-cozy',
      'min-width',
      { status: 'incompatible_property', property: 'min-width' },
    ],
    [
      'color/container/primary/default',
      'border-color',
      { status: 'incompatible_property', property: 'border-color' },
    ],
  ] as const)(
    '%s + %s returns its domain status',
    (canonicalPath, property, result) => {
      expect(_resolveTokenV2ClassNames({ canonicalPath, property })).toEqual(
        result,
      )
    },
  )

  test('returns fresh candidate arrays and objects for every call', () => {
    const first = _resolveTokenV2ClassNames({
      canonicalPath: 'color/container/primary/default',
      property: 'background-color',
    })
    const second = _resolveTokenV2ClassNames({
      canonicalPath: 'color/container/primary/default',
      property: 'background-color',
    })

    if (first.status !== 'resolved' || second.status !== 'resolved') {
      throw new Error('Expected resolved candidates')
    }

    expect(first.candidates).not.toBe(second.candidates)
    expect(first.candidates[0]).not.toBe(second.candidates[0])
    ;(first.candidates[0] as { className: string }).className = 'changed'
    expect(second.candidates[0].className).toBe('bg-container-primary')
  })

  test('does not generate duplicate candidates while expanding every binding', () => {
    const canonicalPaths = new Set(
      createTokenV2TailwindBindings(light as TokenV2CssVariables).map(
        ({ canonicalPath }) => canonicalPath,
      ),
    )
    const seen = new Set<string>()

    for (const canonicalPath of canonicalPaths) {
      const result = _resolveTokenV2ClassNames({ canonicalPath })
      if (result.status !== 'resolved') {
        throw new Error(`Expected binding for ${canonicalPath}`)
      }
      for (const candidate of result.candidates) {
        const key = `${canonicalPath}:${candidate.property}:${candidate.className}`
        expect(seen.has(key)).toBe(false)
        seen.add(key)
      }
    }
  })

  test('v2-only Tailwind config generates CSS variable references for resolved candidates', async () => {
    const candidates = [
      'bg-container-primary',
      'border-ch-selected',
      'gap-layout-20',
      'text-heading-xs',
      'font-ch-bold',
      'rounded-oval',
      'w-s-cozy',
    ]
    const result = await postcss([
      tailwindcss({
        ...unstable_createTailwindConfigTokenV2(),
        content: [
          {
            raw: candidates
              .map((className) => `<div class=\"${className}\" />`)
              .join(''),
          },
        ],
      }) as AcceptedPlugin,
    ]).process('@tailwind utilities;', { from: undefined })

    expect(result.css).toContain(
      'var(--charcoal-color-container-primary-default)',
    )
    expect(result.css).toContain('var(--charcoal-color-border-selected)')
    expect(result.css).toContain('var(--charcoal-space-layout-20)')
    expect(result.css).toContain(
      'font-size: var(--charcoal-text-font-size-heading-xs)',
    )
    expect(result.css).toContain(
      'line-height: var(--charcoal-text-line-height-heading-xs)',
    )
    expect(result.css).toContain('var(--charcoal-text-font-weight-bold)')
    expect(result.css).toContain('var(--charcoal-radius-oval)')
    expect(result.css).toContain('var(--charcoal-paragraph-width-s-cozy)')
  })
})
