# `@charcoal-ui/*` パッケージの役割と状態

12 個のパッケージはすべて公開されていて、バージョンもそろえて上がる。役割より状態のほうが大事で、使えそうに見えても新しいコードに入れてはいけないものが 3 つある。

## 現役

| パッケージ                     | 役割                                                                                                                                                                  | 新しいコードで直接 import するか                                                         |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `@charcoal-ui/react`           | React コンポーネント（Button、Modal、Pagination、Switch、Icon、Carousel など）。`dist/index.css` / `dist/layered.css` の素の CSS で動き、styled-components は要らない | する。コンポーネントを探すならまずここ                                                   |
| `@charcoal-ui/theme`           | テーマの型、`light` / `dark` オブジェクト、トークンの CSS（`css/v1/remap.css`、`css/v2/light.css`、`css/v2/dark.css`）、`token-object`、`tokens/*`                    | する。主に CSS ファイルと型のため                                                        |
| `@charcoal-ui/tailwind-config` | Tailwind のプリセット / `createTailwindConfig`。Design Token 2.0 の新しいユーティリティはまずここに入る                                                               | する。`tailwind.config.*` で使う                                                         |
| `@charcoal-ui/icons`           | `<pixiv-icon>` カスタム要素。`css/*`、`react/v1`、`react/v2` のサブパス                                                                                               | 素の HTML / SSR ならする。React では、これを包んだ `@charcoal-ui/react` の `Icon` を使う |
| `@charcoal-ui/icon-files`      | アイコンの SVG 文字列（ルート = v1 のセット、`/v2`、`/v1/datauri`、`/v2/datauri`）。`icons-cli` で生成される                                                          | まれ。生の SVG 文字列が必要なときだけ                                                    |
| `@charcoal-ui/foundation`      | 基本の型と値（spacing、typography、grid、colors、effects）                                                                                                            | まれ。ふつうは `theme` 経由で使う                                                        |
| `@charcoal-ui/utils`           | ヘルパー（色の混合、CSS）。README には主に内部向けとある                                                                                                              | しない                                                                                   |

## CLI

| パッケージ               | 役割                                                                     | 備考             |
| ------------------------ | ------------------------------------------------------------------------ | ---------------- |
| `@charcoal-ui/icons-cli` | Figma からアイコンを書き出し、SVG を最適化し、GitHub/GitLab に PR を出す | API 調整予定 [1] |
| `@charcoal-ui/token-cli` | Figma Variables を取得して Design Token の JSON / CSS にする             | API 調整予定 [1] |

## 非推奨・凍結 — 新しいコードに入れない

| パッケージ                   | 状態                                                                                                 | 代わりに使うもの                                                       |
| ---------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `@charcoal-ui/react-sandbox` | v6 から非推奨で、次のメジャーで削除が検討されている [2]。README はいまも「試験的」としか書いていない | `@charcoal-ui/react`。対応表は SKILL.md を参照                         |
| `@charcoal-ui/styled`        | Design Token 1.0 で凍結され、新機能は入らない。正式に非推奨なのは `createTheme` だけ [3]             | `@charcoal-ui/react` + CSS 変数、または `@charcoal-ui/tailwind-config` |
| `@charcoal-ui/tailwind-diff` | 廃止予定 [1]                                                                                         | 提供されていない                                                       |

## 出典

1. `.storybook/src/v5.0.0.mdx` — 「今後大幅な調整が入る可能性がある」の下のパッケージ一覧。
2. `.storybook/src/v6.0.0.mdx` — 「**非推奨:** `@charcoal-ui/react-sandbox` は v6 から非推奨です。」
3. `.storybook/src/styling-guide.mdx` — 「Design Token 2.0 には対応していません。…新規採用は避け」。

これらの状態は、どれも実行時の警告やパッケージの README のバナーとしては表に出ない。
