---
name: avoiding-deprecated-charcoal-apis
description: Use before writing or editing any code that imports @charcoal-ui (components, icons, styled-components themes, or Tailwind classes from the charcoal preset), and before adding an @charcoal-ui package to package.json. Several APIs look current but are deprecated with no runtime warning: all of @charcoal-ui/react-sandbox (Layout, LeftMenu, MenuListItem, Pager…), @charcoal-ui/styled in a project not already on styled-components, @charcoal-ui/tailwind-diff, Icon unsafeNonGuidelineScale / pixiv-icon unsafe-non-guideline-scale, createTheme, Tailwind black/white, and ClickableElement. If the existing code already imports one of these, ask the user (AskUserQuestion) whether to migrate it before building on it or copying it.
---

# 非推奨の charcoal API を避ける

charcoal は、非推奨の API を使っても実行時に何も警告しない。ソースで `@deprecated` タグが付いている API もあるが、`@charcoal-ui/react-sandbox` の大半（特に `Layout`・`LeftMenu`・`MenuListItem`）にはタグがまったく付いておらず、非推奨であることは Storybook の移行ページにしか書かれていない。タグ付きの API も、エージェントは記憶を頼りに書いてしまう。この skill はその一覧である。

12 個の `@charcoal-ui/*` パッケージがそれぞれ何のためのものかは、`references/packages.md` を参照。

## 非推奨・凍結のパッケージ

**`@charcoal-ui/react-sandbox` は v6 から非推奨で、次のメジャーで削除が検討されている。** README はいまも「試験的」としか書いていないが、それは現在の状態ではない。`@charcoal-ui/react` に同等のものが無い場合も、sandbox 版にある prop が無い場合も、依頼に「charcoal をできるだけ使って」とある場合も、新しく import しない。

- `Pager`、`LinkPager` → `@charcoal-ui/react` の `Pagination`（`makeUrl` → リンク、`onChange` → ボタン）
- `HintText`、`TextEllipsis` → `@charcoal-ui/react` の同名のもの
- `useMedia` → `@charcoal-ui/react` の `useMedia`（マウントされるまで `undefined` を返す。sandbox 版は同期的に `boolean` を返していた）
- `Carousel` → `@charcoal-ui/react` の `Carousel`。`scrollAmountCoef` → `scrollStep`。`fadeInGradient`・`buttonOffset`・`buttonPadding`・`bottomOffset`・`centerItems` は意図的に削除された
- `SwitchCheckbox` → `@charcoal-ui/react` の `Switch`（`onChange` が受け取るのはイベントではなく `boolean`）
- `ComponentAbstraction`、`useComponentAbstraction`、`LinkProps` → `@charcoal-ui/react` のコンポーネントの `component` prop
- それ以外（`*Layout*`、`LeftMenu*`、`MenuList*`、`Filter*`、`WithIcon`、`useElementSize`、`useMediaScreen1`、レイアウト用の定数）→ **置き換え先なし**。素のマークアップと charcoal のトークン（CSS 変数か Tailwind）、`Switch`・`Clickable`・`Icon` など `@charcoal-ui/react` の部品で、アプリ側に作る

「置き換え先なし」は、sandbox を使えという意味ではなく、アプリのコードで書けという意味。トークンを使って自前で書いた `<nav>` が意図した結果であり、charcoal を使い損ねたわけではない。

アプリがすでに sandbox を自前のコンポーネントで包んでいて、新しいコードがそれを使うことになる場合は、そのコンポーネントを `@charcoal-ui/react` に移行するかを利用者に尋ねる（`AskUserQuestion`。そのツールが無いエージェントならチャットで尋ねる）。移行すると既存の画面も変わるので、決めるのは利用者であって、あなたではない。

- 「そのまま」と言われた → そのコンポーネントには触らない。新しいコードは `@charcoal-ui/react` を直接使う。
- 尋ねる手段が無い → 触らない。最後の報告で、移行の候補として名前を挙げる。

**`@charcoal-ui/styled` は Design Token 1.0 で凍結されている**（正式に非推奨なのは `createTheme` だけ）。コードベースがすでに styled-components で作られている場合を除いて採用しない。すでに使われているなら `setting-up-charcoal-styled` skill に従う。既存の利用はそのままでよく、利用者に外すよう勧めない。

**`@charcoal-ui/tailwind-diff` は廃止予定。** 追加しない。

## 非推奨の API

- **`Icon` の prop `unsafeNonGuidelineScale`**（`@charcoal-ui/react`）→ `fixedSize={20}`。倍率ではなくピクセルで指定する。
- **`<pixiv-icon unsafe-non-guideline-scale>`** → `fixed-size="20"` に `style="--charcoal-icon-size: 20px"` を添え、`@charcoal-ui/icons/css/icon.css` を読み込む。こうするとアップグレード前から箱が 20px になる。
- **`createTheme` / `theme(o => [...])`**（`@charcoal-ui/styled`）→ styled-components のテーマ機能で `${({ theme }) => theme.color.text1}` と書く。周りのファイルが `createTheme` を使っていてもそうする。既存の非推奨パターンに合わせると、移行の手間が増えるだけ。`theme.utils`（`addThemeUtils`）は、`ThemeProvider` に `addThemeUtils(light)` が渡されている場合にしか無い。`setting-up-charcoal-styled` を参照。
- **Tailwind の `black` / `white`**（`bg-black`、`text-white`、`bg-black/50` など）→ 役割に合った意味トークンにする。Token 1.0 のプリセット（既定）では `bg-surface4`（黒 32%）/ `bg-surface8`（黒 88%）と `text-text5` で、どちらのテーマでも暗い。Token 2.0（`unstableTokenV2` と `.ch-token-v2` があるときだけ。`setting-up-charcoal-tailwind` を参照）では、`bg-background-overlay` か `bg-container-on-img` に `text-text-on-on-img` を合わせると、どちらのテーマでも暗い地に明るい文字のままになる。`bg-container-hud` + `text-text-on-hud` は _反転_ する面で、ダークテーマでは明るくなるので、黒の代わりにはならない。
- **`ClickableElement` 型**（`@charcoal-ui/react`）→ 実際に描画する要素の型にする。`HTMLButtonElement`、または `component="a"` なら `HTMLAnchorElement`。

## 見つけ方

アプリのルートで実行する。自分が今回足すコードから出たヒットは取り除く。もともとあったヒットは移行の積み残しで、今回の変更の範囲ではない。特に、styled-components のコードベースでは、既存の `@charcoal-ui/styled` の import と `createTheme` のヘルパーはそのまま残す（上を参照）。

```bash
rg -n "['\"]@charcoal-ui/react-sandbox"
rg -n "@charcoal-ui/tailwind-diff|\btailwind-diff\b"
rg -n "['\"]@charcoal-ui/styled"
rg -nU "createTheme\s*<|createTheme\(\s*(styled\s*)?\)|\btheme\(\s*\(?\s*\w+\s*\)?\s*=>"
rg -nU "import\s*\{[^}]*\bcreateTheme\b[^}]*\}\s*from\s*['\"]@charcoal-ui/styled"
rg -n "unsafeNonGuidelineScale|unsafe-non-guideline-scale"
rg -n "(^|[\s\"'\`:!])(bg|text|border(-[tblrxyse])?|divide|ring(-offset)?|outline|fill|stroke|from|via|to|shadow|accent|caret|decoration|placeholder)-(black|white)\b"
rg -n "\bClickableElement\b"
```

## 危険信号

- 「react にはレイアウトやメニューのコンポーネントが無いから、charcoal で使えるのは sandbox だ」→ sandbox は非推奨。アプリ側に作る。
- 「react 版には sandbox 版にある prop が無い」→ その prop は意図的に削除された。react 版を使う。
- 「sandbox は試験的なだけだから、破壊的変更は許容できる」→ 試験的なのではなく、非推奨。
- 「アプリがすでに sandbox を自前のコンポーネントで包んでいるから、それを再利用しよう」→ そのラッパーを移行するかを尋ねる。それまでは `@charcoal-ui/react` を直接使う。
- 「既存のファイルが `createTheme` を使っているから合わせよう」→ 新しいコードは styled-components のテーマ機能を使う。
- 「ガイドライン外のアイコンサイズは `unsafe-` の属性で指定する」→ それは古い API。`fixed-size` を使う。
