import remarkGfm from 'remark-gfm'
import type { StorybookConfig as ViteStorybookConfig } from '@storybook/react-vite'
import path from 'node:path'

const generalConfig: Omit<ViteStorybookConfig, 'framework'> = {
  stories: [
    '../packages/**/*.mdx',
    '../packages/**/*.story.@(tsx)',
    './src/**/*.mdx',
  ],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@vueless/storybook-dark-mode',
    '@storybook/addon-themes',
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
    '@storybook/addon-mcp',
  ],
  staticDirs: ['./static'],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
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
    config.css ??= {}
    config.css.postcss = path.resolve(process.cwd(), '.storybook')
    config.resolve ??= {}
    config.resolve.dedupe = [
      ...(config.resolve.dedupe ?? []),
      'react',
      'react-dom',
      'styled-components',
    ]
    config.plugins ??= []
    config.define = {
      ...config.define,
      'process.env.TEST': process.env.TEST,
    }
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
      ;(config.server as any).hmr!.port = process.env.CLIENT_PORT
    }
    return config
  },
}

export default viteConfig
