/** @type { import('style-dictionary') } */
module.exports = {
  source: ['tokens/base.json', 'tokens/pixiv-dark.json'],
  transform: {
    'name/cti/kebab': {
      type: 'name',
      transformer: (token) => {
        return token.path
          .join('-')
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
