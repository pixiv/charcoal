import {
  isSupportedTokenV2CSSProperty,
  resolveTokenV2ClassCandidates,
} from './resolve-class-names'

describe('resolveTokenV2ClassCandidates', () => {
  test.each([
    ['colors', 'container-primary', 'color', 'text-container-primary'],
    ['colors', 'container-primary', 'background-color', 'bg-container-primary'],
    ['colors', 'icon-primary', 'fill', 'fill-icon-primary'],
    ['colors', 'icon-primary', 'stroke', 'stroke-icon-primary'],
    ['borderColor', 'ch-selected', 'border-color', 'border-ch-selected'],
    [
      'borderWidth',
      'width-ch-focus-1',
      'border-width',
      'border-width-ch-focus-1',
    ],
    ['fontSize', 'heading-xs', 'font-size', 'text-heading-xs'],
    ['fontWeight', 'ch-bold', 'font-weight', 'font-ch-bold'],
    ['spacing', 'layout-20', 'margin', 'm-layout-20'],
    ['spacing', 'layout-20', 'padding', 'p-layout-20'],
    ['spacing', 'layout-20', 'inset', 'inset-layout-20'],
    ['spacing', 'layout-20', 'min-width', 'min-w-layout-20'],
    ['spacing', 'layout-20', 'height', 'h-layout-20'],
    ['gap', 'layout-20', 'gap', 'gap-layout-20'],
    ['width', 's-cozy', 'width', 'w-s-cozy'],
  ] as const)(
    '%s + %s + %s returns %s',
    (themeKey, modifier, property, className) => {
      expect(
        resolveTokenV2ClassCandidates({ themeKey, modifier, property }),
      ).toEqual([{ property, className, themeKey }])
    },
  )

  test.each([
    ['borderColor', 'ch-selected', 'border-top-color', 'border-t-ch-selected'],
    [
      'borderColor',
      'ch-selected',
      'border-right-color',
      'border-r-ch-selected',
    ],
    [
      'borderColor',
      'ch-selected',
      'border-bottom-color',
      'border-b-ch-selected',
    ],
    ['borderColor', 'ch-selected', 'border-left-color', 'border-l-ch-selected'],
    ['borderWidth', 'width-ch-1', 'border-top-width', 'border-t-width-ch-1'],
    ['borderWidth', 'width-ch-1', 'border-right-width', 'border-r-width-ch-1'],
    ['borderWidth', 'width-ch-1', 'border-bottom-width', 'border-b-width-ch-1'],
    ['borderWidth', 'width-ch-1', 'border-left-width', 'border-l-width-ch-1'],
    ['borderRadius', 'l', 'border-top-left-radius', 'rounded-tl-l'],
    ['borderRadius', 'l', 'border-top-right-radius', 'rounded-tr-l'],
    ['borderRadius', 'l', 'border-bottom-right-radius', 'rounded-br-l'],
    ['borderRadius', 'l', 'border-bottom-left-radius', 'rounded-bl-l'],
    ['spacing', 'layout-20', 'margin-top', 'mt-layout-20'],
    ['spacing', 'layout-20', 'margin-right', 'mr-layout-20'],
    ['spacing', 'layout-20', 'margin-bottom', 'mb-layout-20'],
    ['spacing', 'layout-20', 'margin-left', 'ml-layout-20'],
    ['spacing', 'layout-20', 'padding-top', 'pt-layout-20'],
    ['spacing', 'layout-20', 'padding-right', 'pr-layout-20'],
    ['spacing', 'layout-20', 'padding-bottom', 'pb-layout-20'],
    ['spacing', 'layout-20', 'padding-left', 'pl-layout-20'],
    ['spacing', 'layout-20', 'top', 'top-layout-20'],
    ['spacing', 'layout-20', 'right', 'right-layout-20'],
    ['spacing', 'layout-20', 'bottom', 'bottom-layout-20'],
    ['spacing', 'layout-20', 'left', 'left-layout-20'],
    ['spacing', 'layout-20', 'max-width', 'max-w-layout-20'],
    ['spacing', 'layout-20', 'min-height', 'min-h-layout-20'],
    ['spacing', 'layout-20', 'max-height', 'max-h-layout-20'],
    ['gap', 'layout-20', 'row-gap', 'gap-y-layout-20'],
    ['gap', 'layout-20', 'column-gap', 'gap-x-layout-20'],
  ] as const)('%s maps %s to %s', (themeKey, modifier, property, className) => {
    expect(
      resolveTokenV2ClassCandidates({ themeKey, modifier, property }),
    ).toEqual([{ property, className, themeKey }])
  })

  test('uses definition order when property is omitted', () => {
    expect(
      resolveTokenV2ClassCandidates({
        themeKey: 'colors',
        modifier: 'container-primary-hover',
      }),
    ).toEqual([
      {
        property: 'color',
        className: 'text-container-primary-hover',
        themeKey: 'colors',
      },
      {
        property: 'background-color',
        className: 'bg-container-primary-hover',
        themeKey: 'colors',
      },
      {
        property: 'fill',
        className: 'fill-container-primary-hover',
        themeKey: 'colors',
      },
      {
        property: 'stroke',
        className: 'stroke-container-primary-hover',
        themeKey: 'colors',
      },
    ])
  })

  test.each([
    ['spacing', 'layout-20', 'width'],
    ['spacing', 'layout-20', 'gap'],
    ['width', 's-cozy', 'min-width'],
    ['width', 's-cozy', 'max-width'],
    ['colors', 'container-primary', 'border-color'],
    ['gap', 'layout-20', 'padding'],
  ] as const)(
    '%s does not infer a candidate for %s',
    (themeKey, modifier, property) => {
      expect(
        resolveTokenV2ClassCandidates({ themeKey, modifier, property }),
      ).toEqual([])
    },
  )

  test('does not add interaction variants', () => {
    expect(
      resolveTokenV2ClassCandidates({
        themeKey: 'colors',
        modifier: 'container-primary-hover',
        property: 'background-color',
      }),
    ).toEqual([
      {
        property: 'background-color',
        className: 'bg-container-primary-hover',
        themeKey: 'colors',
      },
    ])
  })

  test('identifies only properties defined by the utility definitions', () => {
    expect(isSupportedTokenV2CSSProperty('border-top-width')).toBe(true)
    expect(isSupportedTokenV2CSSProperty('margin-inline-start')).toBe(false)
  })
})
