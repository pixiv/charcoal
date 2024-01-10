const path = require('path')
const { promisify } = require('util')
const glob = promisify(require('glob'))
const { viteCommonjs } = require('@originjs/vite-plugin-commonjs')

module.exports = {
  stories: ['../packages/**/*.mdx', '../packages/**/*.story.@(tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    // '@storybook/addon-knobs',
    'storybook-dark-mode',
    {
      name: '@storybook/addon-styling',
      options: {
        postCss: {
          implementation: require.resolve('postcss'),
        },
        postcssLoaderOptions: {
          postcssOptions: {
            config: path.resolve(__dirname, 'postcss.config.js'),
          },
          implementation: require('postcss'),
        },
      },
    },
  ],
  async webpackFinal(config, { configType }) {
    if (configType === 'PRODUCTION') {
      return config
    }
    // 事前ビルドが不要になるようにマッピング
    config.resolve.alias = { ...config.resolve.alias, ...(await alias()) }
    return config
  },
  async viteFinal(config, { configType }) {
    if (configType === 'PRODUCTION') {
      return config
    }
    // 事前ビルドが不要になるようにマッピング
    config.resolve.alias = { ...config.resolve.alias, ...(await alias()) }
    // proxyが噛んでいる場合にクライアント側のwssポート番号を変更する
    if (typeof process.env.CLIENT_PORT !== 'undefined') {
      config.server.hmr.port = process.env.CLIENT_PORT
    }
    config.plugins.push(viteCommonjs({ include: 'packages/icons' }))
    return config
  },
  // 実験的にviteをpreviewビルドでviteを利用する
  // CLIENT_PORT=443 yarn storybook:experimental-vite -p 6007 --no-manager-cache
  ...(process.env.USE_VITE === '1'
    ? {
        framework: {
          name: '@storybook/react-vite',
          options: {},
        },
      }
    : {
        framework: {
          name: '@storybook/react-webpack5',
          options: {},
        },
      }),
}

const packagesDir = path.resolve(__dirname, '../packages')
const alias = async () =>
  Object.fromEntries(
    (await glob(path.resolve(packagesDir, '*'))).map((absolute) => {
      const relative = path.relative(packagesDir, absolute)
      const from = path.join('@charcoal-ui', relative)
      const to = path.resolve(absolute, 'src')
      return [from, to]
    })
  )
