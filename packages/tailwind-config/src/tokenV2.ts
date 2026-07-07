import light from '@charcoal-ui/theme/tokens/css-variables.json' with { type: 'json' }
import type { Config } from 'tailwindcss'
import {
  flattenKey as flattenKeys,
  flattenKeyWithoutDefault,
  mapDefaultKey as mapDefaultKeys,
} from './util'
import { normalizeTokenV2SizeKeys } from './tokenV2SizeKeys'

export function unstable_createTailwindConfigTokenV2(): Omit<
  Config,
  'content'
> {
  const textFontSize = normalizeTokenV2SizeKeys(light.text['font-size'])
  const textLineHeight = normalizeTokenV2SizeKeys(light.text['line-height'])
  const space = normalizeTokenV2SizeKeys(light.space)
  const borderWidth = normalizeTokenV2SizeKeys(light['border-width'])
  const radius = normalizeTokenV2SizeKeys(light.radius)
  const paragraphWidth = normalizeTokenV2SizeKeys(light['paragraph-width'])

  const fontSize = Object.fromEntries(
    Object.entries(textFontSize).flatMap(([k, v]) => {
      // text.fontSize.paragraph + text.lineHeight.paragraph -> text-paragraph
      if (typeof v === 'string') {
        return [
          [
            k,
            [
              v,
              // @ts-expect-error k is keyof line-height
              { lineHeight: textLineHeight[k] },
            ],
          ],
        ]
      }

      // text.fontSize.heading.s + text.lineHeight.heading.s -> text-heading-sm
      return Object.entries(v as Record<string, string>).map(([kk, vv]) => {
        return [
          [k, kk].join('-'),
          [
            vv,
            // @ts-expect-error k is keyof line-height
            { lineHeight: textLineHeight[k][kk] },
          ],
        ]
      })
    }),
  ) as NonNullable<Config['theme']>['fontSize']

  // space.target.s -> p-target-sm
  // space.gap.gapButtons -> p-gap-buttons
  const spacing = flattenKeys(space, (key) => !/(gap|padding)/.test(key))
  // color.container.default -> bg-container
  // color.container.hover -> bg-container-hover
  const colors = mapDefaultKeys(light.color)

  const config: Omit<Config, 'content'> = {
    darkMode: 'media',
    theme: {
      // borderWidth.m -> border-wd-md
      // borderWidth.focus.1 -> border-wd-focus-1
      borderWidth: flattenKeyWithoutDefault({
        wd: flattenKeys(borderWidth), // unstable border width token
      }),
      borderRadius: flattenKeys({ ch: radius }),
      borderColor: flattenKeyWithoutDefault({ cl: flattenKeys(colors.border) }),

      colors,

      fontSize,
      fontWeight: flattenKeys({ ch: light.text['font-weight'] }),

      spacing,
      gap: spacing,
      width: paragraphWidth,
    },
  }

  return config
}
