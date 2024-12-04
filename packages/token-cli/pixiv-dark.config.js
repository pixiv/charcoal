import { transforms } from '@charcoal-ui/style-dictionary-plugins'

transforms.registerCharcoalTransforms()

/** @type { import('style-dictionary').Config } */
export default {
  source: ['tokens/base.json', 'tokens/pixiv-dark.json'],
  platforms: {
    css: {
      transforms: ['charcoal/kebab'],
      transformGroup: 'css',
      buildPath: 'build/css/',
      files: [
        {
          destination: '_variables_dark.css',
          format: 'css/variables',
          options: {
            selector: ":root[data-theme='dark']",
            outputReferences: true,
          },
        },
      ],
    },
  },
}
