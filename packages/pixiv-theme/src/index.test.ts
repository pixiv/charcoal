import { dark, light } from '.'

describe('dark theme', () => {
  test('is serializable', () => {
    const parsedDark = JSON.parse(JSON.stringify(dark)) as typeof dark
    expect(parsedDark).toEqual(dark)
  })
})

describe('light theme', () => {
  test('is serializable', () => {
    const parsedLight = JSON.parse(JSON.stringify(light)) as typeof light
    expect(parsedLight).toEqual(light)
  })
})
