import { normalizeQueryName } from './normalize-query'

describe('normalizeQueryName', () => {
  it('trims only outer whitespace and slashes', () => {
    expect(normalizeQueryName(' /container/primary/default/ ')).toEqual({
      name: 'container/primary/default',
      segments: ['container', 'primary', 'default'],
    })
  })

  it.each(['', '///', 'foo//bar'])(
    'rejects empty path segments: %s',
    (name) => {
      expect(() => normalizeQueryName(name)).toThrow(
        'Token name must not contain empty path segments.',
      )
    },
  )
})
