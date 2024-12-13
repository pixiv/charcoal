/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import light from '@charcoal-ui/theme/tokens/css-variables.json'
import { TailwindConfig } from 'tailwindcss/tailwind-config'
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
              // @ts-expect-error k should be keyof line-height
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
            // @ts-expect-error k should be keyof line-height
            { lineHeight: light.text['line-height'][k][kk] },
          ],
        ]
      })
    })
  )

  const config: TailwindConfig = {
    theme: {
      // borderWidth.m -> border-m
      // borderWidth.focus.1 -> border-focus-1
      borderWidth: flattenKeys(light['border-width']),
      borderRadius: light.radius,
      // color.container.default -> bg-container
      // color.container.hover -> bg-container-hover
      colors: mapDefaultKeys(light.color),

      // @ts-expect-error FIXME
      fontSize,
      fontWeight: light.text['font-weight'],
      darkMode: false,

      // space.gap.gapButtons -> p-gap-buttons
      // space.betweenCheckboxes.vertical -> p-between-checkboxes-horizontal
      spacing: flattenKeys(light.space, (key) => key.includes('between')),
      width: light['paragraph-width'],
    },
  }

  return config
}
