/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
module.exports = {
  source: ['tokens/base.json', 'tokens/pixiv-light.json'],
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
