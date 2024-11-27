import { nameTransformer } from './src/transformer/index.js'

/** @type { import('style-dictionary').Config } */
export default {
  source: ['tokens/base.json'],
  hooks: {
    transform: {
      'charcoal/kebab': {
        type: 'name',
        platforms: ['css'],
        transformer: nameTransformer,
      },
    },
  },
  platforms: {
    css: {
      transforms: ['charcoal/kebab'],
      transformGroup: ['css'],
      buildPath: 'build/css/',
      files: [
        {
          destination: '_variables_light.css',
          format: 'css/variables',
          options: {
            selector: ":root[data-theme='light'], :root:not([data-theme])",
            outputReferences: true,
          },
        },
      ],
    },
  },
}
