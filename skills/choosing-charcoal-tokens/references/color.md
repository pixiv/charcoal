# 色ガイドライン

Charcoal の色トークンを選ぶときの指示。トークン名を使う。色の値はトークンから解決し、用途の判断に hex を使わない。

見本は用途の確認用である。表の「使うとき」が名指ししていない部品へ、見本だけを理由に割り当てない。

## コンテナ色（container）

レイアウト用の背景色の上に載る要素の容器に使う色。文字・アイコン・線以外は、原則コンテナとして扱う。

### 状態の選び方

- 操作できるコンテナは、静止時 `default`、ホバー時 `hover`、押下時 `press` を対応する状態にだけ付ける。
- 透過が必要なときだけ、名前が `-a` で終わるバリエーション（`default-a` / `hover-a` / `press-a`）を選ぶ。不透過で足りるときは `-a` を付けない。
- 一覧にない状態（`disable` や `skeleton` への hover など）を推測で足さない。

個別トークンは、状態を持つ行では `<トークン>.<状態>` である。状態が無い行は、そのトークン名がそのまま個別トークンである。展開例は `container.default`、`container.secondary.hover-a`、`container.disable`、`container.HUD.press`。

### トークン


| トークン                    | 状態                                                        | 使うとき                                                                 |
| ----------------------- | --------------------------------------------------------- | -------------------------------------------------------------------- |
| `container`             | `default` `hover` `press` `default-a` `hover-a` `press-a` | デフォルトのコンテナ。Modal や Menu の背景に使う。                                      |
| `container.disable`     | なし                                                        | disabled のコンテナ。                                                      |
| `container.secondary`   | `default` `hover` `press` `default-a` `hover-a` `press-a` | `container` または background の上で、最低限の区別を付けたいとき。                        |
| `container.tertiary`    | `default` `hover` `press` `default-a` `hover-a` `press-a` | `container` または background の上で、container.secondaryと別にさらに区別を付けたいとき。   |
| `container.primary`     | `default` `hover` `press`                                 | 最も強調する要素。Primary の Button、選択状態の Checkbox などに使う。                      |
| `container.negative`    | `default` `hover` `press`                                 | エラーや減少など、ネガティブな状態。Toast が例。                                          |
| `container.positive`    | `default` `hover` `press`                                 | 成功や増加など、ポジティブな状態。Toast が例。                                           |
| `container.notice`      | `default` `hover` `press`                                 | 中程度のリスクがある操作など、注意を促す状態。Toast が例。                                     |
| `container.neutral`     | `default` `hover` `press`                                 | 弱い注意。中立・無・封鎖を示せる。未選択のSwitch や「非公開」Badge が例。                          |
| `container.on-img`（暫定）  | `default` `hover` `press`                                 | 画像の上に載せるときのみ利用する。                                                    |
| `container.discovery`   | `default` `hover` `press`                                 | 更新情報など、ユーザーに確認してほしい箇所のハイライト。Update Badge が例。                         |
| `container.HUD`         | `default` `hover` `press`                                 | HUD の容器。HUD は、一時的で、操作の邪魔をせず、追加操作なしに即時の情報を出す要素。Tooltip と Toast が該当する。 |
| `container.skeleton`    | なし                                                        | 読み込み中に、レイアウトや構成を模したスケルトンスクリーンへ使う。                                    |
| `container.subtle`（非推奨） | `default` `hover` `press`                                 | 使わない。新規では `container.secondary` を検討する。                               |




### 守ること

- 強調の強さは `primary`（最強調）→ `container`（標準）→ `secondary`（最小の区別）→ `tertiary`（第三）の順で選ぶ。意味（成否・注意・中立・更新・画像上・HUD・読み込み）があるときは、強さではなくその意味のトークンを優先する。
- `container.subtle` は新規実装の選択肢に入れない。
- `container.on-img` は暫定。画像上で没入を保つ用途以外に広げない。
- `container.tertiary` は基本的に使わない。



## テキスト色（text）

文字色は、この節のトークンから選ぶ。

メインコンテンツの規定の選択は `text` である。Charcoal で最も読みやすい文字色として、メインコンテンツへの使用が推奨されている。

### 状態の選び方

- 操作に応じて色が変わる文字は、静止時 `default`、ホバー時 `hover`、押下時 `press` を、その状態にだけ付ける。
- `text.placeholder` と `text.disable` に状態は無い。トークン名そのものが色である。
- この節に `-a` は無い。透過用の文字色を推測で足さない。
- 一覧に無い状態を推測で足さない。

個別トークンは `<トークン>.<状態>` である。状態が無い行は、そのトークン名がそのまま個別トークンである。展開例は `text.default`、`text.info.hover`、`text.placeholder`、`text.on-HUD.press`。

### 本文の強さ

強い順に `text`、`text.secondary`、`text.tertiary` である。

- `text` はデフォルトであり、メインコンテンツに使う。
- `text.secondary` は `text` より少し控えめである。補助的な文章、太字の見出しに使う。
- `text.tertiary` は `text.secondary` よりさらに控えめである。

意味（入力の空き、無効、成否、注意、リンク、訪問済み）や、下地のコンテナに紐づく色があるときは、強さよりそのトークンを優先する。

### トークン


| トークン                | 状態                        | 使うとき                                                           |
| ------------------- | ------------------------- | -------------------------------------------------------------- |
| `text`              | `default` `hover` `press` | デフォルトの文字色。メインコンテンツ。                                            |
| `text.secondary`    | `default` `hover` `press` | 補助的な文章、太字の見出し。                                                 |
| `text.tertiary`     | `default` `hover` `press` | `text.secondary` よりさらに控えめな文字。装飾的な見出しが例。                        |
| `text.placeholder`  | なし                        | プレースホルダー。TextFieldが例。                                          |
| `text.disable`      | なし                        | Disabled のコンポーネント内の文字。                                         |
| `text.negative`     | `default` `hover` `press` | エラーや減少など、ネガティブな状態。                                             |
| `text.positive`     | `default` `hover` `press` | 成功や増加など、ポジティブな状態。                                              |
| `text.notice`       | `default` `hover` `press` | リスクが高い操作など、注意するべき状況。見本は取り消しできない操作の文言。                          |
| `text.info`         | `default` `hover` `press` | リンク。                                                           |
| `text.visited`      | `default` `hover` `press` | CSS の `:visited`。情報の探索や再訪を容易にするために使う。                          |
| `text.on-primary`   | `default` `hover` `press` | `container.primary` の上の文字。Primary Buttonが例。                    |
| `text.on-on-img`    | `default` `hover` `press` | `container.on-img` の上の文字。見本は画像上の Button。名前は `on-on-img` のまま使う。 |
| `text.on-negative`  | `default` `hover` `press` | `container.negative` の上の文字。                                    |
| `text.on-positive`  | `default` `hover` `press` | `container.positive` の上の文字                                     |
| `text.on-notice`    | `default` `hover` `press` | `container.notice` の上の文字                                       |
| `text.on-discovery` | `default` `hover` `press` | `container.discovery` の上の文字。                                   |
| `text.on-HUD`       | `default` `hover` `press` | `container.HUD` の上の文字。Tooltipが例。                               |




### 守ること

- `on-*` は、対応する `container.*` の上でだけ使う。下地が違うときに、近い `on-*` で代用しない。表に無い組み合わせ（`text.on-secondary` など）は作らない。
- リンクの文字色は `text.info` を使う。`:visited` の文字色は `text.visited` を使う。通常の本文にこの二つを使わない。
- `text.info` と `text.visited` は、`text` との相対輝度の差を 3:1 以上にできると望ましい（WCAG 2.1）。これは要件ではなく望ましい条件である。
- `text.visited` を使うときはプライバシーへの配慮が必要である。配慮の具体手段はこの節では定義しない。



## アイコン色（icon）

ペアで用いる文字との統一が重要なため、アイコン色のトークンは概ね文字色トークンに準じる。アイコンの塗りはこの節のトークンから選ぶ。

文字と並ぶアイコンは、その文字の `text` トークンと同じ役割の `icon` トークンを使う。この節に無い役割は作らない。文字色にあってアイコン色に無いもの（`placeholder`、`negative`、`positive`、`info`、`visited`、`on-on-img`、`on-negative`、`on-positive`、`on-discovery`、`on-HUD`）を、対応するアイコン色として補完しない。`icon.on-neutral` はアイコン色だけにある。

### 状態の選び方

- 操作に応じて色が変わるアイコンは、静止時 `default`、ホバー時 `hover`、押下時 `press` を、その状態にだけ付ける。
- `icon.disable` に状態は無い。トークン名そのものが色である。
- この節に `-a` は無い。透過用のアイコン色を推測で足さない。
- 一覧に無い状態を推測で足さない。

個別トークンは `<トークン>.<状態>` である。状態が無い行は、そのトークン名がそのまま個別トークンである。展開例は `icon.default`、`icon.secondary.hover`、`icon.disable`、`icon.on-notice.press`。

### 強さ

強い順に `icon`、`icon.secondary`、`icon.tertiary` である。

- `icon` はデフォルトのアイコン色である。
- `icon.secondary` は `icon` より少し控えめである。
- `icon.tertiary` は `icon.secondary` よりさらに控えめである。

無効、または下地のコンテナに紐づく色があるときは、強さよりそのトークンを優先する。

### トークン


| トークン              | 状態                        | 使うとき                                              |
| ----------------- | ------------------------- | ------------------------------------------------- |
| `icon`            | `default` `hover` `press` | デフォルトのアイコン色。                                      |
| `icon.secondary`  | `default` `hover` `press` | 第二のアイコン色。`icon` より少し控えめ。                          |
| `icon.tertiary`   | `default` `hover` `press` | 第三のアイコン色。`icon.secondary` よりさらに控えめ。               |
| `icon.disable`    | なし                        | Disabled 状態のアイコン。                                 |
| `icon.on-primary` | `default` `hover` `press` | `container.primary` の上。選択中の Checkbox と Switchが 例。 |
| `icon.on-neutral` | `default` `hover` `press` | `container.neutral` の上。未選択の Switch が例。            |
| `icon.on-notice`  | `default` `hover` `press` | `container.notice` の上。Toastが例。                    |




### 守ること

- `on-*` は、対応する `container.*` の上でだけ使う。下地が違うときに、近い `on-*` で代用しない。表に無い組み合わせは作らない。
- 文字とアイコンを組にするときは、両方の役割を揃える。本文が `text.secondary` ならアイコンは `icon.secondary`、Disabled の中の文字が `text.disable` ならアイコンは `icon.disable` とする。



## ボーダー色（border）

UI 内の境界や区切りを示すボーダーに使うトークンである。情報の整理やグループ化を視覚的に支える。ボーダーの色はこの節のトークンから選ぶ。

### 状態の選び方

- 状態を持つのは `border` と `border.negative` だけである。静止時 `default`、ホバー時 `hover`、押下時 `press` を、その状態にだけ付ける。
- それ以外の行に状態は無い。トークン名そのものが色である。`border.secondary` にも `default` / `hover` / `press` は無い。
- `border.focus.1` と `border.focus.2` の `.1` `.2` は状態ではなく、トークン名の一部である。
- この節に `-a` は無い。一覧に無い状態を推測で足さない。

個別トークンは、状態を持つ行だけ `<トークン>.<状態>` である。展開例は `border.default`、`border.negative.press`、`border.secondary`、`border.focus.1`、`border.hud`。

### トークン


| トークン               | 状態                        | 使うとき                                                                     |
| ------------------ | ------------------------- | ------------------------------------------------------------------------ |
| `border`           | `default` `hover` `press` | Radio や Checkbox に使う、アクセシビリティが良いボーダー色。見本は Checkbox。レイアウトの区別に使用することを禁止する。 |
| `border.secondary` | なし                        | 控えめなボーダー色。Divider など、レイアウトの区別を行なうときに使う。                                  |
| `border.disable`   | なし                        | Disabled のコンポーネントに使う。                                                    |
| `border.selected`  | なし                        | 選択中、または有効である状態を示す。Tabが例。                                                 |
| `border.focus.1`   | なし                        | フォーカスインジケータを構成する 2 色のうち 1 つ。インジケータのコントラスト比を上げる。                          |
| `border.focus.2`   | なし                        | フォーカスインジケータを構成する 2 色のうち 1 つ。インジケータの面積を広げる。                               |
| `border.negative`  | `default` `hover` `press` | エラー箇所の強調に使う。                                                             |
| `border.hud`       | なし                        | HUD 類の要素に使う。背景要素の影響を受けにくくする。名前は `hud` と小文字のまま使う。見本は Toast。               |




### 守ること

- 区切りには基本的に `border.secondary` を使う。Radio と Checkbox のボーダーを `border.secondary` にしない。
- フォーカスインジケータは `border.focus.1` と `border.focus.2` を組にして使う。`border.focus.2` は `border.focus.1` と組み合わせ、任意の背景でもコントラスト比を保証する。どちらか一方だけでインジケータを作らない。
- 選択中または有効を示すボーダーは `border.selected` を使う。Disabled のボーダーは `border.disable` を使う。エラーの強調は `border.negative` を使う。
- HUD の定義は container 節に従う。この節が追加するのは、その要素のボーダーに `border.hud` を使うことである。

