import type { TransformedToken } from 'style-dictionary/types'
export const nameTransformer = (token: TransformedToken): string => {
  const name = token.path
    .join('-')
    .replace(/(.)([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z])/g, '$1-$2')
    .toLowerCase()
    .replaceAll('/', '-')
    .replaceAll(' ', '-')
    .replace(/(--)(\D)/g, '-$2')
  return `charcoal-${name}`
}
