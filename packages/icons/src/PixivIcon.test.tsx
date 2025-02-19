// import { loaders } from './loaders'
import { PixivIcon } from '.'
import { vi } from 'vitest'

describe('PixivIcon', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  let icon: PixivIcon
  beforeEach(() => {
    icon = document.createElement('pixiv-icon') as PixivIcon

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    icon.waitUntilVisible = () => Promise.resolve()
  })

  it('can createElement()', () => {
    expect(icon.constructor.name).toBe('PixivIcon')
  })

  // describe('loaders', () => {
  //   let loadFromRawUrl: jest.SpyInstance
  //   let loadFromFile: jest.SpyInstance

  //   beforeEach(() => {
  //     window.fetch = jest.fn(() =>
  //       Promise.resolve({
  //         ok: true,
  //         text: () => Promise.resolve('{body}')
  //       } as any)
  //     )

  //     loadFromRawUrl = jest.spyOn(loaders, 'loadFromRawUrl')
  //     loadFromFile = jest.spyOn(loaders, 'loadFromFile')
  //   })

  //   describe('loads svg from file', () => {
  //     it('works', async () => {
  //       icon.setAttribute('name', '16/Add')
  //       document.body.appendChild(icon)

  //       await nextTick()

  //       expect(loadFromFile).toHaveBeenNthCalledWith(1, '16/Add')
  //     })
  //   })

  //   describe('loads svg from url', () => {
  //     beforeAll(() => {
  //       PixivIcon.extend({
  //         '16/Blah': 'https://example.com/blah.svg'
  //       })
  //     })

  //     it('works', async () => {
  //       icon.setAttribute('name', '16/Blah')
  //       document.body.appendChild(icon)

  //       await nextTick()

  //       expect(loadFromRawUrl).toHaveBeenNthCalledWith(1, 'https://example.com/blah.svg')
  //     })
  //   })
  // })
})

// function nextTick() {
//   return new Promise(resolve => {
//     process.nextTick(resolve)
//   })
// }
