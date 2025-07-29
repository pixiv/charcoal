import { charcoalIconsV2, createIconUtilities } from './iconsV2'
import { TailwindBuild } from './_lib/TailwindBuild'

describe('createIconUtilities', () => {
  test('createIconUtilities', () => {
    const utilities = createIconUtilities()
    expect(utilities).toMatchSnapshot()
  })
})

describe('createTailwindConfigIconsV2', async () => {
  const config = {
    plugins: [charcoalIconsV2],
  }
  const result = await TailwindBuild.run(
    // @ts-expect-error FIXME: missing content
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
