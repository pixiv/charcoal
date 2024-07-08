/** @type { import('style-dictionary') } */
module.exports = {
  source: ['tokens/base.json', 'tokens/pixiv-dark.json'],
  transform: {
    'name/cti/kebab': {
      type: 'name',
      transformer: (token) => {
        return token.path
          .join('-')
          .replace(/(.)([A-Z])/g, '$1-$2')
          .toLowerCase()
          .replaceAll('/', '-')
          .replaceAll(' ', '-')
      },
    },
  },
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'build/css/',
      prefix: 'charcoal',
      files: [
        {
          destination: '_variables_dark.css',
          format: 'css/variables',
        },
      ],
      options: {
        outputReferences: true,
      },
    },
  },
}
