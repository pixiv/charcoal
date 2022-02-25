const path = require('path')
const { promisify } = require('util')
const glob = promisify(require('glob'))

module.exports = {
  stories: ['../packages/**/*.story.@(tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    // '@storybook/addon-knobs',
    'storybook-dark-mode',
  ],
  framework: '@storybook/react',
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
    return config
  },
  // 実験的にviteをpreviewビルドでviteを利用する
  // CLIENT_PORT=443 yarn storybook:experimental-vite -p 6007 --no-manager-cache
  ...(process.env.USE_VITE === '1'
    ? {
        core: {
          builder: 'storybook-builder-vite',
        },
      }
    : {}),
}

const packagesDir = path.resolve(__dirname, '../packages')
const alias = async () =>
  Object.fromEntries(
    (await glob(path.resolve(packagesDir, '*'))).map((absolute) => {
      const relative = path.relative(packagesDir, absolute)
      const from = path.join('@charcoal', relative)
      const to = path.resolve(absolute, 'src')
      return [from, to]
    })
  )
