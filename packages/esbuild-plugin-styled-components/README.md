# `@charcoal-ui/esbuild-plugin-styled-components`

styled-components に関連する transform を行う esbuild plugin です。[`babel-plugin-styled-components`](https://github.com/styled-components/babel-plugin-styled-components)を使用し、hydration error を防ぐ ID 付与やスタイルの minification などを行います。

[`@charcoal-ui/react`](../react)と[`@charcoal-ui/react-sandbox`](../react-sandbox)で使用されています。

## なぜ必要なのか

charcoal ではソースコードを esbuild でバンドルし npm で配布しています。esbuild でバンドルされたコードでは`import`や`require`がラップされるため、`babel-plugin-styled-components`や`@swc/plugin-styled-components`が静的解析で styled-components の使用箇所を検出できなくなります。

そのため、esbuild でバンドルする前に`babel-plugin-styled-components`を適用する必要があります。

## なぜ Babel を使っているのか

SWC にも`babel-plugin-styled-components`に相当する`@swc/plugin-styled-components`がありますが使用していません。SWC は不安定であることと、SWC では`@swc/plugin-styled-components`だけを適用することができず、強制的に import や JSX の transform が行われてしまうことが理由です。

手元でビルド時間を計測したところ Babel は SWC と比較して 4〜5 倍遅いという結果でしたが、1 回のビルドあたり 1 秒未満の差であるため許容しています。
