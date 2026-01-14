export default {
  stories: [
    '../packages/**/*.mdx',
    '../packages/**/*.story.@(tsx)',
    './src/**/*.mdx',
  ],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    'storybook-dark-mode',
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-themes',
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
                options: { implementation: 'postcss' },
              },
            ],
          },
        ],
      },
    },
    '@storybook/addon-docs',
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
    // config.plugins.push(viteCommonjs({ include: 'packages/icons' }))
    return config
  },
  ...(process.env.USE_VITE === '1'
    ? {
        framework: {
          name: '@storybook/react-vite',
          options: {},
        },
        core: {
          builder: '@storybook/builder-vite',
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
