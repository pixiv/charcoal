// eslint-disable-next-line @typescript-eslint/no-var-requires
const { nameTransformer } = require('.')
test('tests transformer real case', () => {
  expect(
    nameTransformer({ path: ['Color', 'container/secondary/defaultA'] })
  ).toBe('ch-color-container-secondary-default-a')
})
test('tests transformer negative primitive value case', () => {
  expect(nameTransformer({ path: ['Colors', 'Dark/Neutral/-10'] })).toBe(
    'ch-colors-dark-neutral--10'
  )
})
test('tests transformer negative primitive value unreal case', () => {
  expect(nameTransformer({ path: ['Colors', 'dark/neutralABCDEF/-10'] })).toBe(
    'ch-colors-dark-neutral-a-b-c-d-e-f--10'
  )
})
test('tests transformer unreal case', () => {
  expect(
    nameTransformer({ path: ['Color', 'Container/Secondary/DefaultABCDEF'] })
  ).toBe('ch-color-container-secondary-default-a-b-c-d-e-f')
})
