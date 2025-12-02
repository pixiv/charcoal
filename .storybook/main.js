import { dirname, join } from 'path'
const { viteCommonjs } = require('@originjs/vite-plugin-commonjs')

/** @type {import('@storybook/react-vite').StorybookConfig}*/
module.exports = {
  stories: [
    '../packages/**/*.mdx',
    '../packages/**/*.story.@(tsx)',
    './src/**/*.mdx',
  ],

  addons: [
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-storysource'),
    getAbsolutePath('storybook-dark-mode'),
    getAbsolutePath('@storybook/addon-mdx-gfm'),
    getAbsolutePath('@storybook/addon-webpack5-compiler-swc'),
    getAbsolutePath('@storybook/addon-themes'),
    {
      name: '@storybook/addon-styling-webpack',
      options: {
        rules: [
          {
            test: /\.css$/,
            sideEffects: true,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                  modules: {
                    auto: true,
                    localIdentName: '[name]__[local]--[hash:base64:5]',
                  },
                },
              },
              {
                // Gets options from `postcss.config.js` in your project root
                loader: 'postcss-loader',
                options: { implementation: require.resolve('postcss') },
              },
            ],
          },
        ],
      },
    },
  ],

  async webpackFinal(config, { configType }) {
    if (configType === 'PRODUCTION') {
      return config
    }
    return config
  },

  async viteFinal(config, { configType }) {
    if (configType === 'PRODUCTION') {
      return config
    }
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
          options: {
            builder: {
              useSWC: true,
            },
          },
        },
      }),

  swc() {
    return {
      jsc: {
        transform: {
          react: {
            runtime: 'automatic',
          },
        },
      },
    }
  },
  docs: {
    autodocs: true,
  },
  staticDirs: ['./static'],
  managerHead: (head) => `${head}
    <title>Charcoal ドキュメント</title>
    <meta
      property="description"
      content="ピクシブ株式会社のデザインシステム charcoal のドキュメントサイト"
    />
    <meta property="og:url" content="" />
    <meta property="og:title" content="charcoal"} />
    <meta property="og:site_name" content="Charcoal ドキュメント" />
    <meta
      property="og:description"
      content="ピクシブ株式会社のデザインシステム charcoal のドキュメントサイト"
    />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="/charcoal-ogp.jpg" />
  `,
}

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')))
}
