import { TailwindBuild } from './_lib/TailwindBuild'
import { createTailwindConfigTokenV2 } from './tokenV2'

describe('unstable_createTailwindConfigTokenV2', async () => {
  const config = createTailwindConfigTokenV2()
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
})
