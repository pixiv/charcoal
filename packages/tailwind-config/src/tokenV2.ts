/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import light from '@charcoal-ui/theme/unstable-tokens/css-variables.json'
import { Config } from 'tailwindcss'
import {
  flattenKey as flattenKeys,
  mapDefaultKey as mapDefaultKeys,
} from './util'

export function unstable_createTailwindConfigTokenV2() {
  const fontSize = Object.fromEntries(
    Object.entries(light.text['font-size']).flatMap(([k, v]) => {
      // text.fontSize.paragraph + text.lineHeight.paragraph -> text-paragraph
      if (typeof v === 'string') {
        return [
          [
            k,
            [
              v,
              // @ts-expect-error k is keyof line-height
              { lineHeight: light.text['line-height'][k] },
            ],
          ],
        ]
      }

      // text.fontSize.heading.s + text.lineHeight.heading.s -> text-heading-s
      return Object.entries(v as Record<string, string>).map(([kk, vv]) => {
        return [
          [k, kk].join('-'),
          [
            vv,
            // @ts-expect-error k is keyof line-height
            { lineHeight: light.text['line-height'][k][kk] },
          ],
        ]
      })
    })
  ) as NonNullable<Config['theme']>['fontSize']

  // space.target.s -> p-target-s
  // space.gap.gapButtons -> p-gap-buttons
  const spacing = flattenKeys(light.space, (key) => !/(gap|padding)/.test(key))
  // color.container.default -> bg-container
  // color.container.hover -> bg-container-hover
  const colors = mapDefaultKeys(light.color)

  const config: Omit<Config, 'content'> = {
    darkMode: 'media',
    theme: {
      // borderWidth.m -> border-m
      // borderWidth.focus.1 -> border-focus-1
      borderWidth: flattenKeys(light['border-width']),
      borderRadius: light.radius,
      borderColor: flattenKeys(colors.border),

      colors,

      fontSize,
      fontWeight: light.text['font-weight'],

      spacing: spacing,
      gap: spacing,
      width: light['paragraph-width'],
    },
  }

  return config
}
