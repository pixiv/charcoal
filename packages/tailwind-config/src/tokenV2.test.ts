import { TailwindBuild } from './_lib/TailwindBuild'
import { unstable_createTailwindConfigTokenV2 } from './tokenV2'

describe('unstable_createTailwindConfigTokenV2', async () => {
  const config = unstable_createTailwindConfigTokenV2()
  const result = await TailwindBuild.run(
    // `config` omits `content` since consumers supply their own;
    // `content: []` is fine here because TailwindBuild disables purge via `safelist`.
    { ...config, content: [] },
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
