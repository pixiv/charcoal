import light from '@charcoal-ui/theme/tokens/css-variables.json' with { type: 'json' }
import {
  assertUniqueTokenV2TailwindBindings,
  createTokenV2TailwindBindings,
} from './definition'
import type { TokenV2CssVariables } from './types'

const bindings = createTokenV2TailwindBindings(light as TokenV2CssVariables)

describe('createTokenV2TailwindBindings', () => {
  test.each([
    ['color/container/primary/default', 'colors', 'container-primary'],
    ['color/border/default', 'colors', 'border'],
    ['color/border/default', 'borderColor', 'ch'],
    ['color/border/selected', 'borderColor', 'ch-selected'],
    ['border-width/focus/1', 'borderWidth', 'width-ch-focus-1'],
    ['space/layout/20', 'spacing', 'layout-20'],
    ['space/layout/20', 'gap', 'layout-20'],
    ['space/padding/padding-card', 'spacing', 'padding-card'],
    ['text/font-size/heading/xs', 'fontSize', 'heading-xs'],
    ['text/font-weight/bold', 'fontWeight', 'ch-bold'],
    ['radius/oval', 'borderRadius', 'oval'],
    ['paragraph-width/s-cozy', 'width', 's-cozy'],
  ])('%s creates a %s binding with modifier %s', (canonicalPath, themeKey, modifier) => {
    expect(bindings).toContainEqual(
      expect.objectContaining({ canonicalPath, themeKey, modifier }),
    )
  })

  test('combines font size with its line height', () => {
    expect(bindings).toContainEqual({
      canonicalPath: 'text/font-size/heading/xs',
      themeKey: 'fontSize',
      modifier: 'heading-xs',
      value: [
        'var(--charcoal-text-font-size-heading-xs)',
        { lineHeight: 'var(--charcoal-text-line-height-heading-xs)' },
      ],
    })
  })

  test('only removes a trailing default segment from prefixed modifiers', () => {
    const prefixedBindings = createTokenV2TailwindBindings({
      ...light,
      color: {
        ...light.color,
        border: { default: { hover: 'nested-default' }, 'default-a': 'default-a' },
      },
      'border-width': { default: { hover: 'nested-default' } },
      text: {
        ...light.text,
        'font-weight': { default: 'weight-default', 'default-a': 'weight-default-a' },
      },
    } as TokenV2CssVariables)

    expect(prefixedBindings).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          canonicalPath: 'color/border/default/hover',
          themeKey: 'borderColor',
          modifier: 'ch-default-hover',
        }),
        expect.objectContaining({
          canonicalPath: 'color/border/default-a',
          themeKey: 'borderColor',
          modifier: 'ch-default-a',
        }),
        expect.objectContaining({
          canonicalPath: 'border-width/default/hover',
          themeKey: 'borderWidth',
          modifier: 'width-ch-default-hover',
        }),
        expect.objectContaining({
          canonicalPath: 'text/font-weight/default',
          themeKey: 'fontWeight',
          modifier: 'ch',
        }),
        expect.objectContaining({
          canonicalPath: 'text/font-weight/default-a',
          themeKey: 'fontWeight',
          modifier: 'ch-default-a',
        }),
      ]),
    )
  })

  test('rejects duplicate theme keys and modifiers', () => {
    expect(() =>
      createTokenV2TailwindBindings({
        ...light,
        space: { foo: 'a', gap: { foo: 'b' } },
      } as TokenV2CssVariables),
    ).toThrow('Duplicate Tailwind token binding: spacing:foo')
  })

  test('can validate bindings independently', () => {
    expect(() =>
      assertUniqueTokenV2TailwindBindings([
        { canonicalPath: 'a', themeKey: 'spacing', modifier: 'a', value: 'a' },
        { canonicalPath: 'b', themeKey: 'spacing', modifier: 'a', value: 'b' },
      ]),
    ).toThrow('Duplicate Tailwind token binding: spacing:a')
  })
})
