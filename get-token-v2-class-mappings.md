# `getTokenV2TailwindClassMappings()` 実装計画

## 目的

`@charcoal-ui/tailwind-config` 内で、token v2の元トークン名と、それに対応するFigma MCP向けの推奨Tailwind class名を同時に取得できる仕組みを作る。

この対応表は、Tailwindがtheme設定から生成し得るすべてのclassを列挙するものではない。Figma MCP向け外部ツールが、Figma VariableやデザイントークンをCharcoalのTailwind classへ変換するときに参照する、Charcoalとしての推奨対応表とする。

この仕組みは、次の2つから共通利用できるようにする。

- `@charcoal-ui/tailwind-config` のTailwind preset生成処理
- 別パッケージとして提供するtoken v2 class mapping確認CLI

Figma MCP向けの外部ツールは、この出力を正規の対応表として参照する。外部ツール側では、Tailwind class生成ルールを再実装しない。

## 決定事項

- API名は `getTokenV2TailwindClassMappings` とする
- API名に `unstable` は付けない
- CLIは `@charcoal-ui/tailwind-config` のbinとして同梱せず、別パッケージから提供する
- このAPI/CLIではv1由来classを扱わない
- 返り値はtoken単位のmappingとし、Figma MCP向けの推奨Tailwind class候補を `classCandidates` 配列で返す
- 各class candidateには `utility` と `cssProperties` を併記する
- 命名規則の説明はMarkdownに固定せず、CLI出力を正として扱う
- このAPIは「推奨対応表」を返すものであり、Tailwind core utilitiesが生成する全classの網羅を目的にしない
- `unstable_createTailwindConfigTokenV2()` / `unstableTokenV2` が残っている間は、APIの安定性についてREADMEまたはJSDocで明示する
- CLI別パッケージ名は `@charcoal-ui/token-v2-tailwind-classes` とする
- CLIのbin名は `charcoal-token-v2-classes` とする
- JSON schemaはCLIパッケージに同梱して公開する。ただし初期段階では独立した長期安定仕様ではなく、package versionとsnapshot testで管理する
- `getTokenV2TailwindClassMappings()` は `unstable_` prefixを付けない。ただし、token v2 presetがunstableの間はmapping内容が変わり得ることをJSDocで明示する
- `color.icon.*` の初期推奨utilityは `fill` と `stroke` とする。`textColor` はデフォルト推奨には含めない

## 背景

現状では、token v2からどのTailwind classを使うべきかを説明する場合、Markdownなどのドキュメントで命名規則を書くことになりやすい。

しかし、Markdownによる説明は実装と乖離しやすい。特に次のようなルールは、実装変更に追従しない説明が残るリスクがある。

- `default` がTailwind theme上で `DEFAULT` になり、class名では省略される
- `color.border.*` が `borderColor.ch-*` として扱われる
- `text.font-size.*` と `text.line-height.*` が組み合わさって `fontSize` tokenになる
- spacing tokenが `spacing` と `gap` の両方に入る
- v1由来classとv2由来classが同じTailwind theme内に混在する

そのため、命名規則の説明はMarkdownに固定して書くのではなく、CLIツールの出力に従う形にする。CLI出力を実装由来の「現在の推奨対応表」として扱うことで、ドキュメントと実装の乖離を避ける。

Tailwindの実際の生成classは、同じtheme namespaceから複数のcore utilityに広く展開される。たとえば `theme.colors.*` は `bg-*`, `text-*`, `fill-*`, `stroke-*` などを生成できる。一方で、Figma MCP向けに必要なのは「そのtokenをCharcoalとしてどのutilityへ変換するのが妥当か」という推奨判断である。

このAPI/CLIでは、Tailwindが生成し得るclassの完全列挙ではなく、Charcoal tokenの意味に基づいた推奨class候補を返す。

## 方針

`@charcoal-ui/tailwind-config` 内部に、token v2からTailwind theme keyとclass候補を生成する共通関数を置く。

この関数は、Tailwind preset生成処理とCLIツールの両方から利用できるようにする。

重要な方針:

- token v2 class mappingの生成ルールは `@charcoal-ui/tailwind-config` に集約する
- Figma MCP向け外部ツールではclass生成ルールを持たない
- Markdownには命名規則そのものを詳細に固定しない
- CLI出力を、人間向け説明・Agent向け参照・外部ツール向け入力の共通ソースにする
- 関数の引数で、対象カテゴリ・utility種別・出力粒度を制御できるようにする
- v1由来classはこのAPI/CLIの対象外にし、token v2由来classだけを出力する
- Tailwindの全生成classではなく、Figma MCP向けの推奨class候補だけを出力する
- 推奨class候補が実際のTailwind presetから生成可能であることをテストで検証する

## 想定API

```ts
export function getTokenV2TailwindClassMappings(
  options?: GetTokenV2TailwindClassMappingsOptions,
): TokenV2TailwindClassMapping[]
```

### Options

```ts
type GetTokenV2TailwindClassMappingsOptions = {
  categories?: TokenV2Category[]
  utilities?: TokenV2Utility[]
  tokens?: string[]
  includeThemeValue?: boolean
  includeCssVariable?: boolean
  includeAmbiguousUtilities?: boolean
}
```

`categories`:
対象tokenカテゴリを絞る。

`utilities`:
出力するTailwind utility種別を絞る。token mapping自体は残し、`classCandidates` の中身を対象utilityに絞る。

`tokens`:
出力するtoken pathを絞る。

`includeThemeValue`:
Tailwind theme上の値を `themeEntries[].themeValue` に含める。

`includeCssVariable`:
対応するCSS variable名を出力に含める。

`includeAmbiguousUtilities`:
同じtokenから複数utility候補が生成できる場合に、それらをすべて含めるかどうか。初期値は `true`。

ただし、このoptionはTailwindが生成し得る全utilityを出すためのものではない。たとえば `color.icon.*` はデフォルトで `fill` / `stroke` を返し、`textColor` は後続で必要性が明確になった場合に追加を検討する。

### API安定性

`getTokenV2TailwindClassMappings()` は `unstable_` prefixを付けない。

ただし、現時点でtoken v2 Tailwind presetは `unstable_createTailwindConfigTokenV2()` / `unstableTokenV2` として公開されている。そのため、このAPIのJSDocには次の方針を明記する。

```ts
/**
 * Returns recommended Tailwind class mappings for Charcoal token v2.
 *
 * This API name and output shape are intended to be stable, but mapping
 * contents may change while token v2 Tailwind preset support is exposed
 * through unstableTokenV2.
 */
```

扱いとしては、関数名と出力形式はなるべく維持する一方で、mapping内容はtoken v2 presetの変更に追従する。

### Types

```ts
type TokenV2Category =
  | 'color'
  | 'borderColor'
  | 'space'
  | 'radius'
  | 'text'
  | 'paragraphWidth'
  | 'borderWidth'

type TokenV2Utility =
  | 'backgroundColor'
  | 'textColor'
  | 'borderColor'
  | 'fill'
  | 'stroke'
  | 'spacing'
  | 'gap'
  | 'width'
  | 'borderRadius'
  | 'borderWidth'
  | 'fontSize'
  | 'fontWeight'

type TokenV2CssProperty =
  | 'background-color'
  | 'color'
  | 'border-color'
  | 'fill'
  | 'stroke'
  | 'padding'
  | 'margin'
  | 'gap'
  | 'width'
  | 'border-radius'
  | 'border-width'
  | 'font-size'
  | 'font-weight'
  | 'line-height'

type TokenV2TailwindClassCandidate = {
  className: string
  utility: TokenV2Utility
  cssProperties: TokenV2CssProperty[]
}

type TokenV2TailwindClassMapping = {
  tokenPath: string
  cssVariable?: string
  themeEntries: {
    themePath: string
    themeValue?: string | [string, Record<string, string>]
  }[]
  classCandidates: TokenV2TailwindClassCandidate[]
  category: TokenV2Category
  source: 'token-v2'
  mappingKind: 'recommended'
}
```

## 出力例

CLIや外部ツールでは、次のようなJSONをFigma MCP向けの正規推奨対応表として扱う。

```json
[
  {
    "tokenPath": "color.container.primary.default",
    "cssVariable": "--charcoal-color-container-primary-default",
    "themeEntries": [
      {
        "themePath": "colors.container.primary.DEFAULT"
      }
    ],
    "classCandidates": [
      {
        "className": "bg-container-primary",
        "utility": "backgroundColor",
        "cssProperties": ["background-color"]
      }
    ],
    "category": "color",
    "source": "token-v2",
    "mappingKind": "recommended"
  },
  {
    "tokenPath": "color.text.on-primary.default",
    "cssVariable": "--charcoal-color-text-on-primary-default",
    "themeEntries": [
      {
        "themePath": "colors.text.on-primary.DEFAULT"
      }
    ],
    "classCandidates": [
      {
        "className": "text-text-on-primary",
        "utility": "textColor",
        "cssProperties": ["color"]
      }
    ],
    "category": "color",
    "source": "token-v2",
    "mappingKind": "recommended"
  },
  {
    "tokenPath": "color.border.secondary",
    "cssVariable": "--charcoal-color-border-secondary",
    "themeEntries": [
      {
        "themePath": "colors.border.secondary"
      },
      {
        "themePath": "borderColor.ch-secondary"
      }
    ],
    "classCandidates": [
      {
        "className": "border-ch-secondary",
        "utility": "borderColor",
        "cssProperties": ["border-color"]
      }
    ],
    "category": "borderColor",
    "source": "token-v2",
    "mappingKind": "recommended"
  }
]
```

この例は説明用であり、実際の推奨対応表の正はCLI出力に置く。

`theme.colors.*` に入っているtokenはTailwind上では `bg-*`, `text-*`, `fill-*`, `stroke-*` など複数のclassを生成できるが、`classCandidates` はtokenの意味に基づいた推奨候補だけを返す。

## CLI設計

CLIは、実装由来の現在のmappingを出力するためのツールとして提供する。ただし、CLI本体は `@charcoal-ui/tailwind-config` には同梱しない。別パッケージから `getTokenV2TailwindClassMappings()` をimportして利用する。

想定コマンド:

```bash
charcoal-token-v2-classes
charcoal-token-v2-classes --format json
charcoal-token-v2-classes --format markdown
charcoal-token-v2-classes --category color
charcoal-token-v2-classes --utility backgroundColor
charcoal-token-v2-classes --token color.container.primary.default
```

### オプション

```bash
--format json|markdown|table
--category <category>
--utility <utility>
--token <token-path>
--include-theme-value
--include-css-variable
--include-ambiguous-utilities
```

### CLIの役割

- 現在の `@charcoal-ui/tailwind-config` が推奨するtoken v2 class mappingを確認する
- 人間が命名規則を確認するときの正規出力にする
- Figma MCP向け外部ツールが読み込めるJSONを出力する
- `--utility` によって `classCandidates` を用途別に絞り込めるようにする
- CIでsnapshotを取り、意図しないclass生成変更を検出する
- v1由来classは出力しない
- Tailwindが生成し得る全classの列挙はCLIの責務にしない

## Tailwind presetとの関係

理想的には、Tailwind preset生成処理とclass mapping出力処理が同じ中間データを使う。

想定構造:

```text
tokenV2 source tokens
  -> buildTokenV2ThemeEntries()
    -> createTailwindConfig / unstable_createTailwindConfigTokenV2
    -> getTokenV2TailwindClassMappings
    -> external CLI package output
```

`createTailwindConfig` や `unstable_createTailwindConfigTokenV2` はTailwind theme objectを作る。一方で `getTokenV2TailwindClassMappings` は同じ生成元から、元token path、class candidates、utility、CSS propertiesを含む対応表を作る。

重要なのは、preset用とCLI用で別々に命名変換を実装しないこと。

ただし、presetが生成可能にするclass集合と、Figma MCP向けに推奨するclass集合は一致しない。preset側はTailwindのthemeとして値を登録する。mapping側は同じtheme登録情報を参照しつつ、tokenのsemantic categoryに基づいて推奨classだけを選ぶ。

## 実装場所

`@charcoal-ui/tailwind-config` 側:

```text
packages/tailwind-config/src/tokenV2/
  index.ts
  theme.ts
  mappings.ts
```

または既存構成に合わせて、最初は小さく始める。

```text
packages/tailwind-config/src/tokenV2.ts
packages/tailwind-config/src/tokenV2Mappings.ts
```

既存の `tokenV2.ts` に処理を詰め込みすぎない。theme生成とmapping生成の共通部品を切り出す。

CLI側は別パッケージとして作る。

```text
packages/token-v2-tailwind-classes/
  package.json
  schema.json
  src/
    cli.ts
    format-json.ts
    format-markdown.ts
    format-table.ts
```

CLIパッケージは `@charcoal-ui/tailwind-config` に依存し、`getTokenV2TailwindClassMappings()` を呼び出すだけにする。class生成ルールはCLI側に持たない。

パッケージ名:

```text
@charcoal-ui/token-v2-tailwind-classes
```

bin名:

```text
charcoal-token-v2-classes
```

JSON schema:

- CLIパッケージに `schema.json` として同梱する
- 外部ツールは必要に応じてこのschemaを参照できる
- 初期段階ではschemaを独立した長期安定仕様とは扱わない
- package versionとsnapshot testで破壊的変更を検出する

## 実装ステップ

### 1. 現行token v2生成処理の棚卸し

- `unstable_createTailwindConfigTokenV2()` が生成しているtheme keyを洗い出す
- token pathからtheme pathへの変換ルールを整理する
- `default` / `DEFAULT` の扱いを確認する
- `color.border.*` の `borderColor.ch-*` 変換を確認する
- typographyの `font-size` と `line-height` の結合ルールを確認する

成果物:

- 現行生成処理に対するテストケース一覧

### 2. 中間データ生成関数を作る

Tailwind theme objectを直接組み立てる前に、元token path、theme path、theme valueを持つ中間データを生成する。

```ts
type TokenV2ThemeEntry = {
  tokenPath: string
  cssVariable: string
  themePath: string
  themeValue: unknown
  category: TokenV2Category
}
```

成果物:

- `buildTokenV2ThemeEntries()`
- 既存theme生成結果と一致するテスト

注意:

- 1つのtokenが複数のtheme entryを持てる構造にする
- `color.border.*` は `colors.border.*` と `borderColor.ch-*` の両方に関係する
- `text.font-size.*` は `text.line-height.*` と組み合わせて `fontSize` entryになる

### 3. Tailwind theme生成を中間データ経由にする

- 既存の `unstable_createTailwindConfigTokenV2()` の出力を維持する
- 内部実装だけを中間データ経由に変更する
- 既存snapshotが変わらないことを確認する

成果物:

- 既存API互換の `unstable_createTailwindConfigTokenV2()`
- 既存テストの通過

### 4. `getTokenV2TailwindClassMappings()` を実装する

- 中間データからFigma MCP向けの推奨class candidatesを生成する
- utility種別ごとにclass prefixを定義する
- utility種別ごとに対応するCSS propertyを定義する
- `DEFAULT` をclass nameから省略する
- optionでカテゴリやutilityを絞れるようにする
- v1由来classを出力対象から除外する
- Tailwind core utilitiesが生成し得る全classを出力対象にしない
- 推奨class candidateが実際にTailwind build結果に含まれることをテストする

成果物:

- `getTokenV2TailwindClassMappings()`
- `TokenV2TailwindClassCandidate`
- category / utility / token filteringのテスト

推奨mappingの初期ルール:

- `color.background.*` -> `bg-*`
- `color.container.*` -> `bg-*`
- `color.text.*` -> `text-*`
- `color.icon.*` -> `fill-*`, `stroke-*`
- `color.border.*` -> `border-ch-*`

`color.icon.*` はFigma上のvector/icon colorとの対応を優先し、初期実装では `fill` / `stroke` を推奨候補にする。CSSの `color` を経由して `currentColor` に効かせる `textColor` は便利な場合があるが、Figma MCP向けの直接対応としては間接的なのでデフォルト推奨には含めない。

将来、Charcoal ReactのIcon利用や外部ツール側の要件として `text-icon-*` が必要になった場合は、`includeAmbiguousUtilities` などの明示optionで追加する。

### 5. 別パッケージとしてCLIを追加する

- JSON出力を最初に実装する
- Markdown/table出力は人間向け確認用として追加する
- CLIは `@charcoal-ui/tailwind-config` のbinにはしない
- CLIは `@charcoal-ui/tailwind-config` の `getTokenV2TailwindClassMappings()` を呼び出す
- CLI出力をREADMEや外部ツールの入力例として使う

成果物:

- 別パッケージの `@charcoal-ui/token-v2-tailwind-classes`
- bin `charcoal-token-v2-classes`
- `schema.json`
- JSON出力snapshot
- Markdown出力snapshot

### 6. Figma MCP向け外部ツールとの接続

- Figma MCP向けCLIは `charcoal-token-v2-classes --format json` の出力を読む
- または `getTokenV2TailwindClassMappings()` を直接importする
- Figma側のVariable名正規化と、Charcoal側の正規mappingを突き合わせる

成果物:

- Figma MCP向けCLIで利用するmapping入力仕様

## 初期スコープ

最初はcolor tokenに絞る。

対象:

- `color.*` -> `theme.colors.*`
- `color.border.*` -> `theme.borderColor.ch-*`
- `bg-*`
- `text-*`
- `border-*`
- `fill-*`
- `stroke-*`

ただし、出力するのはTailwindが生成可能な全color utilityではなく、Figma MCP向けの推奨候補に限る。

後続対応:

- `space.*` -> `spacing`, `gap`
- `radius.*` -> `borderRadius`
- `text.font-size.*` + `text.line-height.*` -> `fontSize`
- `text.font-weight.*` -> `fontWeight`
- `paragraph-width.*` -> `width`
- `border-width.*` -> `borderWidth`

## テスト方針

- 既存の `unstable_createTailwindConfigTokenV2()` 出力が変わらないことを確認する
- `getTokenV2TailwindClassMappings()` のJSON snapshotを作る
- `DEFAULT` の省略ルールを個別テストする
- `color.border.default` と `color.border.secondary` の `border-ch` 系classを個別テストする
- color tokenのsemantic categoryごとの推奨候補を個別テストする
- class candidateに `utility` と `cssProperties` が含まれることをテストする
- `bg-*` などのclass名prefixに頼らず、`cssProperties` で用途判定できることをテストする
- 推奨class candidateがTailwind build結果のclass一覧に存在することをテストする
- v1由来classが出力に含まれないことをテストする
- CLIの `--category`, `--utility`, `--token` filteringをテストする

## PR分割

### PR 1: theme entry共通化

- `unstable_createTailwindConfigTokenV2()` の現行生成処理を棚卸しする
- `buildTokenV2ThemeEntries()` 相当の中間データ生成を追加する
- `unstable_createTailwindConfigTokenV2()` を中間データ経由にする
- 既存snapshotが変わらないことを確認する

このPRでは公開mapping APIとCLIはまだ追加しない。

### PR 2: color向け推奨mapping API

- `getTokenV2TailwindClassMappings()` を追加する
- 初期スコープはcolor tokenに限定する
- 推奨class candidateのsnapshotを追加する
- 推奨class candidateがTailwind build結果に存在することを検証する
- `@charcoal-ui/tailwind-config` のexportに追加する

このPRではCLIはまだ追加しない。

### PR 3: CLI別パッケージ

- `@charcoal-ui/token-v2-tailwind-classes` としてCLIを追加する
- bin名は `charcoal-token-v2-classes` とする
- JSON出力を最初に実装する
- `--category`, `--utility`, `--token` filteringを追加する
- `schema.json` を同梱する
- Markdown/table出力は必要なら後続で追加する

### PR 4以降: 対象カテゴリ拡張

- `space.*`
- `radius.*`
- `text.font-size.*` + `text.line-height.*`
- `text.font-weight.*`
- `paragraph-width.*`
- `border-width.*`

各カテゴリは、Figma MCP向けに推奨classの意味が明確になったものから追加する。

## 未決事項

現時点ではなし。

以下は決定済み:

- CLI別パッケージ名は `@charcoal-ui/token-v2-tailwind-classes`
- bin名は `charcoal-token-v2-classes`
- JSON schemaはCLIパッケージに同梱して公開する
- `getTokenV2TailwindClassMappings()` は `unstable_` prefixなし。ただしJSDocでmapping内容の変更可能性を明示する
- `color.icon.*` の初期推奨utilityは `fill` / `stroke`

## 判断

この方針は採用する価値が高い。

理由:

- token v2 class生成ルールを `@charcoal-ui/tailwind-config` に集約できる
- Markdown説明と実装の乖離を避けられる
- Figma MCP向け外部ツールの推測ロジックを減らせる
- CLI出力を人間・Agent・CI・外部ツールで共通利用できる
- 将来token v2の命名やTailwind出力が変わっても、参照先をCLI/API出力に寄せられる

ただし、このAPI/CLIは「Tailwindの全生成class一覧」ではなく「Figma MCP向け推奨対応表」として設計する。この前提を外すと、`spacing` や `colors` がTailwind core utilitiesによって大量のclassへ展開されるため、用途が曖昧になりやすい。

## 実装完了報告

2026-07-14に、初期スコープとして定義したPR 1からPR 3までの実装を完了した。

実装済み:

- token v2のtheme生成処理を、token path、CSS variable、theme path、theme value、categoryを保持する共通のtheme entry経由に変更した
- `unstable_createTailwindConfigTokenV2()` の既存theme設定と生成classを維持した
- `getTokenV2TailwindClassMappings()` と関連する公開型を `@charcoal-ui/tailwind-config` からexportした
- 初期対象をcolor tokenに限定し、background/container、text、icon、borderのsemantic categoryに応じた推奨class candidateを生成した
- `color.icon.*` の推奨utilityを `fill` / `stroke` とし、`textColor` は含めていない
- category、utility、token pathによるfilterと、theme value、CSS variable、ambiguous utilityの出力optionを実装した
- `DEFAULT` をclass名から省略し、`color.border.*` を `border-ch-*` に対応させた
- 推奨class candidateがtoken v2 Tailwind presetから実際に生成できることをテストした
- 別パッケージ `@charcoal-ui/token-v2-tailwind-classes` を追加した
- bin `charcoal-token-v2-classes` を追加した
- JSON、Markdown、table形式の出力とCLI helpを実装した
- CLIパッケージに `schema.json` を同梱した
- APIとCLIのsnapshot testを追加した

検証結果:

- `@charcoal-ui/tailwind-config`: 7 test files、27 tests passed
- `@charcoal-ui/token-v2-tailwind-classes`: 1 test file、5 tests passed
- 両パッケージのtypecheckとbuildを実行済み
- 変更対象に対するESLintとPrettierを実行済み
- build後のCLIでhelp、table出力、JSON出力、utility filterを確認済み

未実装の後続スコープ:

- PR 4以降として記載した `space.*`、`radius.*`、typography、paragraph width、border widthのmapping
- Figma MCP向け外部ツール本体との接続

## 作成したブランチ

実装は、PRを個別に作成できるstacked branchとして次の3ブランチに分割した。後続ブランチは直前のブランチをbaseとしているため、記載順に取り込む。

### 1. `mimo/token-v2-theme-entries`

Base: `main`

責務:

- token v2 theme entryの共通化
- `unstable_createTailwindConfigTokenV2()` を共通entry経由に変更
- 既存preset出力の互換性を維持

Commit:

- `855d0997e refactor(tailwind-config): share token v2 theme entries`

### 2. `mimo/token-v2-color-mappings`

Base: `mimo/token-v2-theme-entries`

責務:

- color token向けの `getTokenV2TailwindClassMappings()` を公開
- mapping関連の公開型とoptionを追加
- README/JSDocにAPI安定性を明記
- mapping snapshotとTailwind生成classとの整合テストを追加

Commits:

- `07be6f6f6 feat(tailwind-config): expose token v2 color mappings`
- `066d70188 fix(tailwind-config): preserve mapping literal types`

### 3. `mimo/token-v2-tailwind-classes-cli`

Base: `mimo/token-v2-color-mappings`

責務:

- `@charcoal-ui/token-v2-tailwind-classes` パッケージを追加
- `charcoal-token-v2-classes` binを追加
- JSON、Markdown、table formatterとCLI optionを追加
- JSON schema、README、snapshot testを追加

Commit:

- `ed3a3d087 feat: add token v2 Tailwind classes CLI`

PRは作成していない。PRを作成する場合は、各ブランチのBaseに記載したブランチをbase branchとして指定する。
