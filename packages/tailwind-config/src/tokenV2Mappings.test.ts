import { TailwindBuild } from './_lib/TailwindBuild'
import { unstable_createTailwindConfigTokenV2 } from './tokenV2'
import { getTokenV2TailwindClassMappings } from './tokenV2Mappings'

describe('getTokenV2TailwindClassMappings', async () => {
  const mappings = getTokenV2TailwindClassMappings()

  test('returns the recommended color mappings', () => {
    expect(mappings).toMatchSnapshot()
  })

  test('omits DEFAULT from class names', () => {
    expect(
      getTokenV2TailwindClassMappings({
        tokens: ['color.container.primary.default'],
        includeCssVariable: true,
        includeThemeValue: true,
      }),
    ).toEqual([
      {
        tokenPath: 'color.container.primary.default',
        cssVariable: '--charcoal-color-container-primary-default',
        sourceTokens: [
          {
            tokenPath: 'color.container.primary.default',
            cssVariable: '--charcoal-color-container-primary-default',
          },
        ],
        themeEntries: [
          {
            themePath: 'colors.container.primary.DEFAULT',
            themeValue: 'var(--charcoal-color-container-primary-default)',
          },
        ],
        classCandidates: [
          {
            className: 'bg-container-primary',
            utility: 'backgroundColor',
            cssProperties: ['background-color'],
          },
        ],
        category: 'color',
        source: 'token-v2',
        mappingKind: 'recommended',
      },
    ])
  })

  test('returns both theme entries for border colors', () => {
    const [mapping] = getTokenV2TailwindClassMappings({
      tokens: ['color.border.secondary'],
    })

    expect(mapping).toMatchObject({
      category: 'borderColor',
      themeEntries: [
        { themePath: 'borderColor.ch-secondary' },
        { themePath: 'colors.border.secondary' },
      ],
      classCandidates: [
        {
          className: 'border-ch-secondary',
          utility: 'borderColor',
          cssProperties: ['border-color'],
        },
      ],
    })
  })

  test('filters mappings and candidates independently', () => {
    expect(
      getTokenV2TailwindClassMappings({
        categories: ['color'],
        utilities: ['stroke'],
        tokens: ['color.icon.default', 'color.border.default'],
      }),
    ).toEqual([
      expect.objectContaining({
        tokenPath: 'color.icon.default',
        classCandidates: [
          {
            className: 'stroke-icon',
            utility: 'stroke',
            cssProperties: ['stroke'],
          },
        ],
      }),
    ])
  })

  test('can select one candidate for ambiguous icon colors', () => {
    expect(
      getTokenV2TailwindClassMappings({
        tokens: ['color.icon.default'],
        includeAmbiguousUtilities: false,
      })[0].classCandidates,
    ).toEqual([
      {
        className: 'fill-icon',
        utility: 'fill',
        cssProperties: ['fill'],
      },
    ])
  })

  test('maps remaining token v2 categories to recommended classes', () => {
    expect(
      getTokenV2TailwindClassMappings({
        tokens: ['radius.m'],
        includeCssVariable: true,
      }),
    ).toEqual([
      expect.objectContaining({
        tokenPath: 'radius.m',
        cssVariable: '--charcoal-radius-m',
        category: 'radius',
        classCandidates: [
          {
            className: 'rounded-m',
            utility: 'borderRadius',
            cssProperties: ['border-radius'],
          },
        ],
      }),
    ])
    expect(
      getTokenV2TailwindClassMappings({
        tokens: ['border-width.m'],
        includeCssVariable: true,
      }),
    ).toEqual([
      expect.objectContaining({
        tokenPath: 'border-width.m',
        cssVariable: '--charcoal-border-width-m',
        category: 'borderWidth',
        classCandidates: [
          {
            className: 'border-width-ch-m',
            utility: 'borderWidth',
            cssProperties: ['border-width'],
          },
        ],
      }),
    ])
    expect(
      getTokenV2TailwindClassMappings({
        tokens: ['text.font-weight.bold'],
        includeCssVariable: true,
      }),
    ).toEqual([
      expect.objectContaining({
        tokenPath: 'text.font-weight.bold',
        cssVariable: '--charcoal-text-font-weight-bold',
        category: 'text',
        classCandidates: [
          {
            className: 'font-ch-bold',
            utility: 'fontWeight',
            cssProperties: ['font-weight'],
          },
        ],
      }),
    ])
    expect(
      getTokenV2TailwindClassMappings({
        tokens: ['space.layout.40'],
        includeCssVariable: true,
      }),
    ).toEqual([
      expect.objectContaining({
        tokenPath: 'space.layout.40',
        cssVariable: '--charcoal-space-layout-40',
        category: 'space',
        classCandidates: [
          {
            className: 'p-layout-40',
            utility: 'spacing',
            cssProperties: ['padding'],
          },
          {
            className: 'm-layout-40',
            utility: 'margin',
            cssProperties: ['margin'],
          },
          {
            className: 'gap-layout-40',
            utility: 'gap',
            cssProperties: ['gap'],
          },
        ],
      }),
    ])
    expect(
      getTokenV2TailwindClassMappings({
        tokens: ['paragraph-width.m'],
        includeCssVariable: true,
      }),
    ).toEqual([
      expect.objectContaining({
        tokenPath: 'paragraph-width.m',
        cssVariable: '--charcoal-paragraph-width-m',
        category: 'paragraphWidth',
        classCandidates: [
          {
            className: 'w-m',
            utility: 'width',
            cssProperties: ['width'],
          },
        ],
      }),
    ])
  })

  test('recommends padding, margin, and gap utilities for space tokens', () => {
    const [mapping] = getTokenV2TailwindClassMappings({
      tokens: ['space.layout.40'],
    })
    expect(mapping.classCandidates).toEqual([
      {
        className: 'p-layout-40',
        utility: 'spacing',
        cssProperties: ['padding'],
      },
      {
        className: 'm-layout-40',
        utility: 'margin',
        cssProperties: ['margin'],
      },
      {
        className: 'gap-layout-40',
        utility: 'gap',
        cssProperties: ['gap'],
      },
    ])
    expect(mapping.themeEntries.map(({ themePath }) => themePath)).toEqual(
      expect.arrayContaining(['spacing.layout-40', 'gap.layout-40']),
    )
  })

  test('can select one candidate for space tokens', () => {
    expect(
      getTokenV2TailwindClassMappings({
        tokens: ['space.layout.40'],
        includeAmbiguousUtilities: false,
      })[0].classCandidates,
    ).toEqual([
      {
        className: 'p-layout-40',
        utility: 'spacing',
        cssProperties: ['padding'],
      },
    ])
  })

  test('can filter space candidates by utility', () => {
    expect(
      getTokenV2TailwindClassMappings({
        tokens: ['space.layout.40'],
        utilities: ['margin'],
      })[0].classCandidates,
    ).toEqual([
      {
        className: 'm-layout-40',
        utility: 'margin',
        cssProperties: ['margin'],
      },
    ])
  })

  test('maps matching font-size and line-height tokens to one class', () => {
    const [mapping] = getTokenV2TailwindClassMappings({
      tokens: ['text.line-height.heading.s'],
      includeCssVariable: true,
      includeThemeValue: true,
    })

    expect(mapping).toEqual({
      tokenPath: 'text.font-size.heading.s',
      cssVariable: '--charcoal-text-font-size-heading-s',
      sourceTokens: [
        {
          tokenPath: 'text.font-size.heading.s',
          cssVariable: '--charcoal-text-font-size-heading-s',
        },
        {
          tokenPath: 'text.line-height.heading.s',
          cssVariable: '--charcoal-text-line-height-heading-s',
        },
      ],
      themeEntries: [
        {
          themePath: 'fontSize.heading-s',
          themeValue: [
            'var(--charcoal-text-font-size-heading-s)',
            { lineHeight: 'var(--charcoal-text-line-height-heading-s)' },
          ],
        },
      ],
      classCandidates: [
        {
          className: 'text-heading-s',
          utility: 'fontSize',
          cssProperties: ['font-size', 'line-height'],
        },
      ],
      category: 'text',
      source: 'token-v2',
      mappingKind: 'recommended',
    })
  })

  test('all recommended classes can be generated by the token v2 preset', async () => {
    const result = await TailwindBuild.run(
      // @ts-expect-error TailwindBuild supplies content through its safelist
      unstable_createTailwindConfigTokenV2(),
      `
        @import 'tailwindcss/base';
        @import 'tailwindcss/utilities';
        @import 'tailwindcss/components';
      `,
    )
    const generatedClasses = new Set(result.classNames)

    for (const { classCandidates } of mappings) {
      for (const { className } of classCandidates) {
        expect(generatedClasses.has(className), className).toBe(true)
      }
    }
  })
})
