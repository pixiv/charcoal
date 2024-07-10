/**
 * @param {import('style-dictionary').TransformedToken} token
 * @return {string}
 */
const transformer = (token) => {
  return token.path
    .join('-')
    .replace(/(.)([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z])/g, '$1-$2')
    .toLowerCase()
    .replaceAll('/', '-')
    .replaceAll(' ', '-')
    .replace(/(--)(\D)/g, '-$2')
}

module.exports = {
  transformer,
}
