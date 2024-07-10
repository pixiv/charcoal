// eslint-disable-next-line @typescript-eslint/no-var-requires
const { transformer } = require('.')
test('tests transformer real case', () => {
  expect(transformer({ path: ['Color', 'container/secondary/defaultA'] })).toBe(
    'color-container-secondary-default-a'
  )
})
test('tests transformer negative primitive value case', () => {
  expect(transformer({ path: ['Colors', 'Dark/Neutral/-10'] })).toBe(
    'colors-dark-neutral--10'
  )
})
test('tests transformer negative primitive value unreal case', () => {
  expect(transformer({ path: ['Colors', 'dark/neutralABCDEF/-10'] })).toBe(
    'colors-dark-neutral-a-b-c-d-e-f--10'
  )
})
test('tests transformer unreal case', () => {
  expect(
    transformer({ path: ['Color', 'Container/Secondary/DefaultABCDEF'] })
  ).toBe('color-container-secondary-default-a-b-c-d-e-f')
})
