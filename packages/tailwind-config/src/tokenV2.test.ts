import { TailwindBuild } from './_lib/TailwindBuild'
import { unstable_createTailwindConfigTokenV2 } from './tokenV2'
import { buildTokenV2ThemeEntries } from './tokenV2Theme'

describe('unstable_createTailwindConfigTokenV2', async () => {
  const config = unstable_createTailwindConfigTokenV2()
  const result = await TailwindBuild.run(
    // @ts-expect-error FIXME: missing content
    config,
    `
        @import 'tailwindcss/base';
        @import 'tailwindcss/utilities';
        @import 'tailwindcss/components';
      `,
  )
  test('config object', () => {
    expect(config).toMatchSnapshot()
  })

  test('list of classes', () => {
    expect(result.classNames).toMatchSnapshot()
  })

  test('theme entries retain their source token metadata', () => {
    const entries = buildTokenV2ThemeEntries()

    expect(entries).toContainEqual({
      tokenPath: 'color.container.primary.default',
      cssVariable: '--charcoal-color-container-primary-default',
      themePath: 'colors.container.primary.DEFAULT',
      themeValue: 'var(--charcoal-color-container-primary-default)',
      category: 'color',
    })
    expect(entries).toContainEqual({
      tokenPath: 'color.border.secondary',
      cssVariable: '--charcoal-color-border-secondary',
      themePath: 'borderColor.ch-secondary',
      themeValue: 'var(--charcoal-color-border-secondary)',
      category: 'borderColor',
    })
  })
})
