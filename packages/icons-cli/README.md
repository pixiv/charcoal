# `@charcoal-ui/icons-cli`

Figma からアイコンの SVG をダウンロードし、GitHub に自動で更新の Pull Request を作成します。

GitLab にも対応しています。

## インストール

npm

```
npm i --save-dev @charcoal-ui/icons-cli
```

yarn

```
yarn add -D @charcoal-ui/icons-cli
```

## 使い方

### Figma からアイコンをダウンロードする

```
yarn icons-cli figma:export
```

必要な環境変数は以下です。

| 名前            | 必須 | 説明                                                                                          |
| --------------- | ---- | --------------------------------------------------------------------------------------------- |
| FIGMA_FILE_URL  | yes  | Figma の URL です。node-id を含んでいる場合、その子孫のコンポーネントのみダウンロードします。 |
| FIGMA_TOKEN     | yes  | Figma API のアクセストークンです                                                              |
| OUTPUT_ROOT_DIR | yes  | svg をダウンロードするディレクトリです（例: `packages/icon-files`）                           |

Figma 内のコンポーネントは以下の命名規則に従います（ 例: `16/Add` `Inline/Add` ）。

- `/` を含む
- `/` の前は数字あるいは `Inline`

### SVG ファイルにアイコン向けの変換をかける

```
yarn icons-cli svg:optimize --color "#000" --ignoreFile ./misc/icons-cli-denylist
```

SVG ファイルに SVGO による最適化をかけつつ、指定した色を `currentColor` に置換します。
`ignoreFile`では、処理から除外する SVG ファイルの一覧を記したファイルを指定することができます。[glob](https://nodejs.org/api/fs.html#fspromisesglobpattern-options)のパターンを使用できます。

必要な環境変数は以下です。

| 名前            | 必須 | 説明                                                                    |
| --------------- | ---- | ----------------------------------------------------------------------- |
| OUTPUT_ROOT_DIR | yes  | svg ディレクトリが存在するディレクトリです（例: `packages/icon-files`） |

### SVG コードを dynamic import するファイルを生成する

```
yarn icons-cli files:generate
```

必要な環境変数は以下です。

| 名前            | 必須 | 説明                                                                    |
| --------------- | ---- | ----------------------------------------------------------------------- |
| OUTPUT_ROOT_DIR | yes  | svg ディレクトリが存在するディレクトリです（例: `packages/icon-files`） |

### GitHub に Pull Request を作成する

```
yarn icons-cli github:pr
```

必要な環境変数は以下です。

| 名前                  | 必須 | 説明                                             |
| --------------------- | ---- | ------------------------------------------------ |
| GITHUB_ACCESS_TOKEN   | yes  | GitHub のアクセストークンです                    |
| GITHUB_REPO_OWNER     | no   | リポジトリの owner です（ 例: pixiv ）           |
| GITHUB_REPO_NAME      | no   | リポジトリ名です（ 例: charcoal ）               |
| GITHUB_DEFAULT_BRANCH | no   | リポジトリのデフォルトブランチです（ 例: main ） |

### GitLab に Pull Request を作成する

```
yarn icons-cli gitlab:mr
```

必要な環境変数は以下です。

| 名前                  | 必須 | 説明                                                                          |
| --------------------- | ---- | ----------------------------------------------------------------------------- |
| GITLAB_PROJECT_ID     | yes  | GitLab のプロジェクト ID（数値）です                                          |
| GITLAB_ACCESS_TOKEN   | yes  | GitLab のアクセストークンです                                                 |
| GITLAB_HOST           | no   | GitLab のホスト名（セルフホスティング版の場合は自身のサーバーのホスト名）です |
| GITLAB_DEFAULT_BRANCH | no   | リポジトリのデフォルトブランチです（ 例: main ）                              |
