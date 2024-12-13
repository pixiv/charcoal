/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import light from '@charcoal-ui/theme/tokens/css-variables.json'
import { TailwindConfig } from 'tailwindcss/tailwind-config'
import { flattenKey, mapDefault } from './util'

export function unstable_createTailwindConfigTokenV2() {
  const fontSize = Object.fromEntries(
    Object.entries(light.text['font-size']).flatMap(([k, v]) => {
      if (typeof v === 'string') {
        return [
          [
            k,
            [
              (v),
              // @ts-expect-error k should be keyof line-height
              { lineHeight: (light.text['line-height'][k]) },
            ],
          ],
        ]
      }

      return Object.entries(v as Record<string, string>).map(([kk, vv]) => {
        return [
          [k, kk].join('-'),
          [
            (vv),
            // @ts-expect-error k should be keyof line-height
            { lineHeight: (light.text['line-height'][k][kk]) },
          ],
        ]
      })
    })
  )

  const config: TailwindConfig = {
    theme: {
      colors: mapDefault(light.color),
      spacing: flattenKey(light.space, (key) => key.includes('between')),
      width: light['paragraph-width'],
      borderWidth: flattenKey(light['border-width']),
      borderRadius: Object.fromEntries(
        Object.entries(light.radius).map(([k, v]) => [k, (v)])
      ),
      // @ts-expect-error FIXME
      fontSize,
      fontWeight: light.text['font-weight'],
      darkMode: false,
    },
  }

  return config
}
