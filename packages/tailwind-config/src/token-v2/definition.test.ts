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
