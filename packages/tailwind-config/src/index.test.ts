import { TailwindBuild } from './_lib/TailwindBuild'
import { createTailwindConfig } from '.'
import { dark, light } from '@charcoal-ui/theme'

describe('tailwind.config.js', () => {
  const defaultConfig = createTailwindConfig({
    version: 'v3',
    theme: {
      ':root': light,
      '@media (prefers-color-scheme: dark)': dark,
    },
  })

  test('defaultConfig', () => {
    expect(defaultConfig).toMatchSnapshot()
  })

  let result: TailwindBuild

  beforeAll(async () => {
    result = await TailwindBuild.run(
      // @ts-expect-error FIXME: missing content
      defaultConfig,
      `
        @import 'tailwindcss/base';
        @import 'tailwindcss/utilities';
        @import 'tailwindcss/components';
      `
    )
  })

  test('list of classes', () => {
    expect(result.classNames).toMatchSnapshot()
  })

  test('list of css variables', () => {
    expect(result.getCssVariables()).toMatchSnapshot()
  })

  test('color plugin', () => {
    const varName = '--tailwind-color-background1'

    expect(result.getStylesByClassName('bg-background1')).toContainEqual(
      expect.stringContaining(`background-color: var(${varName}, #ffffff);`)
    )

    expect(result.getCssVariable(varName)).toHaveLength(1)
  })

  test('typography plugin', () => {
    const styles = result.getStylesByClassName('typography-14')

    expect(styles).toHaveLength(3)
    expect(styles).toContainEqual(expect.stringContaining('::before'))
    expect(styles).toContainEqual(expect.stringContaining('::after'))
  })

  test('gradient plugin', () => {
    const varName = '--tailwind-gradient-surface5-left-hover'

    expect(
      result.getStylesByClassName('bg-surface5-left-hover')?.[0]
    ).toContain(`background-image: var(${varName});`)

    expect(result.getCssVariable(varName)).toHaveLength(2)
  })
})
