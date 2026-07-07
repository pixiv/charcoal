# `unstable_createTailwindConfigTokenV2()` が生成するクラス

`packages/tailwind-config/src/tokenV2.ts` の `unstable_createTailwindConfigTokenV2()` は、`@charcoal-ui/theme/tokens/css-variables.json` の CSS Variables 形式の Token V2 を Tailwind CSS の `theme` に流し込むための設定を返す関数です。

返す値は `content` を持たない Tailwind config で、`darkMode: 'media'` と以下の theme キーを定義します。

- `colors`
- `borderColor`
- `borderRadius`
- `borderWidth`
- `fontSize`
- `fontWeight`
- `spacing`
- `gap`
- `width`

Tailwind のクラスはこの theme から標準ユーティリティとして生成されます。たとえば `theme.colors.container.DEFAULT` は `bg-container` や `text-container` のような色系ユーティリティに、`theme.spacing.target-sm` は `p-target-sm` や `mt-target-sm` のような spacing 系ユーティリティに使われます。

## 使われ方

この関数を直接使う場合は、生成された config だけで Token V2 ベースの Tailwind 設定になります。

```ts
import { unstable_createTailwindConfigTokenV2 } from '@charcoal-ui/tailwind-config'

export default {
  content: ['./src/**/*.{ts,tsx}'],
  ...unstable_createTailwindConfigTokenV2(),
}
```

通常の `createTailwindConfig()` 経由では、`unstableTokenV2: true` を渡したときだけこの設定が取り込まれます。

```ts
import { createTailwindConfig } from '@charcoal-ui/tailwind-config'

export default {
  content: ['./src/**/*.{ts,tsx}'],
  ...createTailwindConfig({ unstableTokenV2: true }),
}
```

`createTailwindConfig({ unstableTokenV2: true })` では、V2 の `colors` / `borderColor` / `spacing` / `gap` / `width` / `borderRadius` は既存 theme にマージされ、`borderWidth` / `fontWeight` / `fontSize` は `theme.extend` に入ります。

## 命名ルール

基本的には token の階層キーを `-` で連結します。

Token V2 のサイズ key に由来する `s` / `m` / `l` segment は、Tailwind theme に入れる前に `sm` / `md` / `lg` に正規化されます。CSS variable 名と token value は変更されません。

正規化対象は `text.font-size` / `text.line-height` / `space` / `border-width` / `radius` / `paragraph-width` です。`color` と `text.font-weight` は正規化対象外です。

| Token | theme key | 代表的なクラス |
| --- | --- | --- |
| `color.container.default` | `colors.container.DEFAULT` | `bg-container`, `text-container` |
| `color.container.hover` | `colors.container.hover` | `bg-container-hover` |
| `color.container.primary.default` | `colors.container.primary.DEFAULT` | `bg-container-primary` |
| `color.container.primary.hover` | `colors.container.primary.hover` | `bg-container-primary-hover` |
| `space.target.s` | `spacing.target-sm` | `p-target-sm`, `gap-target-sm` |
| `space.padding.padding-card` | `spacing.padding-card` | `p-padding-card` |
| `text.font-size.heading.s` | `fontSize.heading-sm` | `text-heading-sm` |
| `text.font-weight.bold` | `fontWeight.ch-bold` | `font-ch-bold` |
| `border-width.focus.1` | `borderWidth.wd-focus-1` | `border-wd-focus-1` |
| `border-width.m` | `borderWidth.wd-md` | `border-wd-md` |
| `radius.s` | `borderRadius.ch-sm` | `rounded-ch-sm` |

`default` キーは Tailwind の `DEFAULT` に変換されるため、クラス名からは省略されます。たとえば `container.default` は `bg-container-default` ではなく `bg-container` になります。

## 色トークンから生成されるクラス

`colors` には `color` token 全体が入ります。主なカテゴリは次の通りです。

- `background`
- `border`
- `container`
- `icon`
- `text`

Tailwind の色 theme は複数のユーティリティで参照されるため、同じ token key から `text-*`、`bg-*`、`border-*`、`fill-*`、`stroke-*` などが生成されます。

代表例:

```html
<div class="bg-background text-text">
<button class="bg-container-primary text-text-on-primary">
<button class="bg-container-primary-hover text-text-on-primary-hover">
<svg class="fill-icon-secondary stroke-icon-secondary-press">
```

`colors.border` とは別に `borderColor` も定義されます。`borderColor` 側は `cl` prefix を付け、border 用の色だけを平坦化します。

```html
<div class="border border-cl">
<div class="border border-cl-hover">
<div class="border border-cl-focus-1">
<div class="border border-cl-negative">
```

`borderColor` では `border.default` が `border-cl` になり、`border.focus.1` が `border-cl-focus-1` になります。

## spacing / gap から生成されるクラス

`spacing` と `gap` には同じ値が入ります。`space` token のうち、`gap` と `padding` を含まないトップレベルキーは親キーもクラス名に含めます。

生成される key:

- `component-0`, `component-10`, `component-20`, `component-25`, `component-30`, `component-40`, `component-50`
- `layout-0`, `layout-10`, `layout-20`, `layout-25`, `layout-30`, `layout-40`, `layout-50`, `layout-60`, `layout-70`, `layout-80`, `layout-90`, `layout-100`
- `target-xs`, `target-sm`, `target-md`, `target-lg`
- `padding-card`

spacing theme を使うため、余白・サイズ・位置系の Tailwind ユーティリティが生成されます。

```html
<div class="p-target-sm">
<div class="px-component-20 py-component-10">
<div class="mt-layout-40">
<div class="w-layout-100 h-target-md">
<div class="gap-component-20">
<div class="-inset-target-sm">
```

`gap` theme も同じ token を参照するため、`gap-*`、`gap-x-*`、`gap-y-*` でも同じ key が使えます。

## typography から生成されるクラス

`fontSize` は `text.font-size` と `text.line-height` を組み合わせ、Tailwind の `fontSize` tuple として定義します。そのため `text-*` クラスは `font-size` と `line-height` を同時に指定します。

生成される key:

- `body`
- `paragraph`
- `caption-md`, `caption-sm`, `caption-sm-10`
- `heading-xxxs`, `heading-xxs`, `heading-xs`, `heading-sm`, `heading-md`, `heading-lg`, `heading-xl`, `heading-xxl`, `heading-xxxl`

代表例:

```html
<p class="text-body">
<p class="text-paragraph">
<p class="text-caption-sm">
<h2 class="text-heading-md">
```

`fontWeight` は `ch` prefix 付きで平坦化されます。

```html
<p class="font-ch-regular">
<p class="font-ch-bold">
```

## border から生成されるクラス

`borderRadius` は `radius` token を `ch` prefix 付きで平坦化します。`s` / `m` / `l` は `sm` / `md` / `lg` に正規化されるため、Tailwind 標準の `rounded-sm` / `rounded-md` / `rounded-lg` とは別の `rounded-ch-*` として生成されます。

生成される key:

- `ch-0`
- `ch-xs`
- `ch-sm`
- `ch-md`
- `ch-lg`
- `ch-xl`
- `ch-xxl`
- `ch-oval`

代表例:

```html
<div class="rounded-ch-sm">
<div class="rounded-ch-md">
<div class="rounded-ch-oval">
```

`borderWidth` は `wd` prefix を付けて `border-width` token を平坦化します。コメント上も unstable な border width token として扱われています。

生成される key:

- `wd-md`
- `wd-lg`
- `wd-focus-1`
- `wd-focus-2`

代表例:

```html
<div class="border-wd-md">
<div class="border-wd-focus-1">
```

## paragraph width から生成されるクラス

`width` には `paragraph-width` token が入ります。これは Tailwind の `w-*` として使われます。

生成される key:

- `sm`, `sm-compact`, `sm-cozy`
- `md`, `md-compact`, `md-cozy`
- `lg`, `lg-compact`, `lg-cozy`

代表例:

```html
<p class="w-sm">
<p class="w-md-cozy">
<p class="w-lg-compact">
```

`createTailwindConfig({ unstableTokenV2: true })` 経由では既存の `width` theme とマージされるため、従来の `w-full`、`w-screen`、`w-col-span-*`、`w-1/12` なども残ります。`unstable_createTailwindConfigTokenV2()` を単独で使う場合、この関数が明示的に定義する `width` は paragraph width token だけです。

## テストスナップショットの注意点

`packages/tailwind-config/src/tokenV2.test.ts` は `TailwindBuild.run()` で Tailwind を実行し、`safelist: [{ pattern: /./u }]` によって purge せず全クラスを生成しています。

そのため `tokenV2.test.ts.snap` の `list of classes` には、`sr-only`、`absolute`、`flex` など Tailwind 標準のユーティリティも含まれます。スナップショットのクラス一覧は「この config で Tailwind が出力できる全クラス」の確認であり、「Token V2 が独自に追加したクラスだけ」の一覧ではありません。

この関数が Token V2 として意味を持つのは、上で説明した theme key に由来する `bg-*` / `text-*` / `border-*` / `p-*` / `gap-*` / `rounded-ch-*` / `font-*` / `w-*` などのクラスです。
