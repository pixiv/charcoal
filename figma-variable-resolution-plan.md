# Figma Variable Name Resolution Plan

## Purpose

`@charcoal-ui/token-v2-tailwind-classes` の `--token` 検索で、Figma MCP が返す
variable 名をそのまま使えるようにする。

対象として調査した Figma Design ファイル:

- <https://www.figma.com/design/LG2CYJlMaqTbw28yY5I9Rc/>
- file key: `LG2CYJlMaqTbw28yY5I9Rc`

このファイルは実装時の命名規則を把握するために参照したものであり、CLI の対応表や
テスト fixture のマスターにはしない。対応表の正は引き続き、このリポジトリの token v2 と
`getTokenV2TailwindClassMappings()` である。

## Figma MCP で確認した命名規則

Figma MCP の Variables API で、local variable の collection、name、type、scope を確認した。
collection が token の namespace、variable の `name` が namespace より後ろのパスを表す。
Figma ではパスを `/`、リポジトリの canonical token path では `.` で区切る。

| Figma collection | Figma variable name の例 | canonical token path |
| --- | --- | --- |
| `color` | `text/default` | `color.text.default` |
| `color` | `text/secondary/default` | `color.text.secondary.default` |
| `color` | `container/primary/default` | `color.container.primary.default` |
| `color` | `icon/on-primary/default` | `color.icon.on-primary.default` |
| `color` | `border/focus/2` | `color.border.focus.2` |
| `space` | `layout/10` | `space.layout.10` |
| `text` | `font-size/heading/m` | `text.font-size.heading.m` |
| `radius` | `m` | `radius.m` |
| `paragraph-width` | `m-compact` | `paragraph-width.m-compact` |

特に `color` collection には、`background`（4件）、`text`（52件）、`border`（11件）、
`icon`（37件）、`container`（45件）の COLOR variable がある。したがって、質問で挙がった
`text/default` と `text/secondary/default` は、文字 typography の `text` collection ではなく
`color` collection の variable 名である。

解決規則は推測ではなく、次の可逆変換とする。

```text
canonical token path = `${collection}.${variable.name.replaceAll('/', '.')}`
```

## Search contract

既存の `--token` を Figma-compatible に拡張する。別の Figma 専用 option は作らない。
Figma MCP 利用者が得た名前をそのまま渡せることを優先する。

`--token` は次の 3 形式を受け付ける。

| 入力形式 | 例 | 解決方法 |
| --- | --- | --- |
| canonical token path | `color.text.default` | 現行どおり完全一致 |
| collection を含む Figma path | `color/text/default` | `/` を `.` に正規化して canonical path と完全一致 |
| collection を省いた Figma variable name | `text/default` | mapping が持つ Figma variable 名と完全一致 |

解決順序は canonical 完全一致を先に行い、見つからない場合だけ collection を省いた Figma
variable 名で検索する。部分一致、prefix 補完、`text/*` を常に `color.text.*` とみなすような
ヒューリスティックは実装しない。

後者の検索が複数の collection に一致した場合は、候補を勝手に選ばずエラーにする。その際に
`color/text/default` のような collection を含む入力を案内する。これにより将来、別 collection
へ同名の variable が増えても誤った class を返さない。

## Mapping model

CLI の出力 mapping に、Figma から導出できる識別子を明示的に追加する。

```ts
type TokenV2FigmaVariable = {
  collection: string
  name: string
}

type FigmaTokenV2TailwindClassMapping = {
  // existing fields
  figmaVariables: TokenV2FigmaVariable[]
}
```

- `figmaVariables` は CLI が `sourceTokens` から機械的に導出する。color mapping では通常 1 件、
  `fontSize` mapping では font-size と line-height のように複数件になり得る。
- source token の先頭 segment を collection、残りを `/` join した値を name とする。
- 出力の `tokenPath` と `sourceTokens` の意味は変更しない。`figmaVariables` は Figma 検索用の
  補助情報である。
- `schema.json` に optional `figmaVariables` を追加する。既存 JSON consumer は無視できる。

Figma 固有の対応表や URL を成果物に保存しない。token を更新すれば alias も同じ build 時に
更新されるため、Figma 側とリポジトリ側の二重管理を避けられる。

## Implementation plan

1. **検索語を構造化する**
   - `packages/token-v2-tailwind-classes/src/run.ts` の `normalizeTokenPath()` を、canonical 検索と
     Figma variable-name 検索を区別できる parser に置き換える。
   - `/` を含む collection 付き入力は canonical form に正規化する。
   - collection を省いた入力は Figma name として保持し、`.` を `/` と同一視する。

2. **Figma alias を CLI mapping から導出する**
   - `packages/token-v2-tailwind-classes/src/` に pure function を追加し、`sourceTokens` から
     `{ collection, name }` を生成する。
   - `@charcoal-ui/tailwind-config` の公開 API は拡張しない。canonical token と Tailwind class の
     対応だけを返し、Figma 固有の検索規則は CLI 内に閉じ込める。
   - query と CLI が導出した `figmaVariables` の collection/name を完全一致させる。

3. **CLI の filter と診断を実装する**
   - `--token text/default` が `color.text.default` の mapping を返すようにする。
   - `--token` を複数指定した場合は、指定された query のいずれかに一致する mapping を返す。
   - 一つの bare Figma name が複数 mapping に一致するときは、input と
     collection 付き候補を含む `TypeError` を返す。
   - 0 件の場合は従来の空配列ではなくエラーに変更せず、CLI の既存 filter と同じく空配列を
     返す。ただし `--verbose` 等の新しい診断 option はこの変更の scope に含めない。

4. **出力・文書を更新する**
   - `schema.json` と JSON snapshot に `figmaVariables` を追加する。
   - README に上記の 3 入力形式、Figma で collection と name が別フィールドで得られた場合は
     `collection/name` を渡すこと、bare name が曖昧な場合のエラーを追記する。
   - Markdown/Table の列は増やさない。Figma 識別子は機械利用向け JSON 出力で提供する。

## Tests and acceptance criteria

`packages/token-v2-tailwind-classes/src/run.test.ts` に次を追加する。既存の
`packages/tailwind-config/src/tokenV2Mappings.test.ts` は canonical mapping が Figma 固有の
フィールドを含まないことを維持する。

- `--token text/default` が `color.text.default` と `text-text` を返す。
- `--token text/secondary/default` が `color.text.secondary.default` と `text-text-secondary` を返す。
- `--token color/text/default` と `--token color.text.default` が同じ mapping を返す。
- `--token text/font-size/heading/s` が typography mapping を返し、font-size と line-height の
  Figma variable を `figmaVariables` に持つ。
- `sourceTokens` を複数持つ mapping の Figma 検索（line-height 側）を維持する。
- collision 用の unit test で、bare name が曖昧なら collection 付き候補を示して失敗する。
- CLI が出力する全 `figmaVariables` を canonical path へ再変換し、対応する source token と
  一致することを検証する。
- 既存の canonical `--token` の snapshot と Tailwind class 生成検証を維持する。

検証コマンド:

```sh
pnpm --filter @charcoal-ui/tailwind-config test
pnpm --filter @charcoal-ui/token-v2-tailwind-classes test
pnpm --filter @charcoal-ui/tailwind-config typecheck
pnpm --filter @charcoal-ui/token-v2-tailwind-classes typecheck
```

完了条件は、Figma MCP の代表例 `text/default`、`text/secondary/default`、
`container/primary/default`、`font-size/heading/*` を collection の有無に応じて正しく検索でき、
曖昧な bare name を誤解決せず、canonical token の既存利用を壊さないことである。
