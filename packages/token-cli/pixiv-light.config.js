// eslint-disable-next-line @typescript-eslint/no-var-requires
const { nameTransformer } = require('./src/transformer')

/** @type { import('style-dictionary').Config } */
module.exports = {
  source: ['tokens/base.json', 'tokens/pixiv-light.json'],
  transform: {
    'charcoal/kebab': {
      type: 'name',
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      transformer: nameTransformer,
    },
  },
  platforms: {
    css: {
      transforms: ['charcoal/kebab'],
      transformGroup: 'css',
      buildPath: 'build/css/',
      files: [
        {
          destination: '_variables_light.css',
          format: 'css/variables',
          options: {
            selector: ":root[data-color-scheme='light']",
            outputReferences: true,
          },
        },
      ],
    },
  },
}
