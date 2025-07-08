import { createTailwindConfigIconsV2 } from './iconsV2'
import { TailwindBuild } from './_lib/TailwindBuild'

describe('createTailwindConfigIconsV2', async () => {
  const config = createTailwindConfigIconsV2()
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
