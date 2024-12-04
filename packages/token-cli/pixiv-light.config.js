import { nameTransformer } from './src/transformer/index.js'
import StyleDictionary from 'style-dictionary'

StyleDictionary.registerTransform({
  name: 'charcoal/kebab',
  type: 'name',
  transform: nameTransformer,
})

/** @type { import('style-dictionary').Config } */
export default {
  source: ['tokens/base.json', 'tokens/pixiv-light.json'],
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
            selector: ":root[data-theme='light'], :root:not([data-theme])",
            outputReferences: true,
          },
        },
      ],
    },
  },
}
