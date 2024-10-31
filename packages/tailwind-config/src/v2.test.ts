/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { TailwindBuild } from './_lib/TailwindBuild'
import light from '@charcoal-ui/theme/tokens/css-variables.json'
import { TailwindConfig } from 'tailwindcss/tailwind-config'
import { flattenKey, mapDefault } from './util'

describe('v2', async () => {
  const fontSize = Object.fromEntries(
    Object.entries(light.text['font-size']).flatMap(([k, v]) => {
      if (typeof v === 'string') {
        return [
          [
            k,
            // @ts-expect-error k should be keyof line-height
            [v, { lineHeight: light.text['line-height'][k] }],
          ],
        ]
      }

      return Object.entries(v as Record<string, string>).map(([kk, vv]) => {
        return [
          [k, kk].join('-'),
          // @ts-expect-error k should be keyof line-height
          [vv, { lineHeight: light.text['line-height'][k][kk] }],
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
      borderRadius: light.radius,
      // @ts-expect-error FIXME
      fontSize,
      fontWeight: light.text['font-weight'],
      darkMode: false,
    },
  }

  const result = await TailwindBuild.run(
    config,
    `
        @import 'tailwindcss/base';
        @import 'tailwindcss/utilities';
        @import 'tailwindcss/components';
      `
  )
  test('config object', () => {
    expect(config).toMatchSnapshot()
  })

  test('list of classes', () => {
    expect(result.classNames).toMatchSnapshot()
  })
})
