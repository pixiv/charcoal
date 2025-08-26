import {
  charcoalIconsV1,
  charcoalIconsV2,
  createIconUtilities,
} from './icons'
import { TailwindBuild } from './_lib/TailwindBuild'

describe('createIconUtilities for icons v2', () => {
  test('createIconUtilities for icons v2', () => {
    const utilities = createIconUtilities({ v2: true })
    expect(utilities).toMatchSnapshot()
  })
})

describe('createIconUtilities for icons v1', () => {
  test('createIconUtilities for icons v1', () => {
    const utilities = createIconUtilities({ v2: false })
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

describe('createTailwindConfigIconsV1', async () => {
  const config = {
    plugins: [charcoalIconsV1],
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
