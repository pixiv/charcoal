import remarkGfm from 'remark-gfm'
import type { StorybookConfig as Webpack5StorybookConfig } from '@storybook/react-webpack5'
import type { StorybookConfig as ViteStorybookConfig } from '@storybook/react-vite'
import path from 'node:path'

const generalConfig: Omit<
  Webpack5StorybookConfig | ViteStorybookConfig,
  'framework'
> = {
  stories: [
    '../packages/**/*.mdx',
    '../packages/**/*.story.@(tsx)',
    './src/**/*.mdx',
  ],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@vueless/storybook-dark-mode',
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
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
  ],
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

const webpack5Config: Webpack5StorybookConfig = {
  ...generalConfig,
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
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
}

const viteConfig: ViteStorybookConfig = {
  ...generalConfig,
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config, { configType }) {
    config.plugins ??= []

    config.plugins.unshift({
      name: 'fix-storybook-mdx-react-shim-file-url',
      enforce: 'pre',
      resolveId(source) {
        // file://./node_modules/.../mdx-react-shim.js となるのを相対パスに修正する
        if (source.startsWith('file://') && source.includes('mdx-react-shim')) {
          const withoutProtocol = source.replace(/^file:\/\//, '')
          return path.resolve(process.cwd(), withoutProtocol)
        }
        return null
      },
    })

    if (configType === 'PRODUCTION') {
      return config
    }
    // proxyが噛んでいる場合にクライアント側のwssポート番号を変更する
    if (typeof process.env.CLIENT_PORT !== 'undefined') {
      ; (config.server as any).hmr!.port = process.env.CLIENT_PORT
    }
    return config
  },
}

export default process.env.USE_VITE === '1' ? viteConfig : webpack5Config
