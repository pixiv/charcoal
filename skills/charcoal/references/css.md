# CSS

構文だけ。トークン名の正本は `scripts/resolve.mjs`。

## Import

Token 2.0 の値:

```css
@import '@charcoal-ui/theme/css/v2/light.css';
@import '@charcoal-ui/theme/css/v2/dark.css';
```

1.0 互換の値に 2.0 名でアクセスするなら `v1/remap.css`。**書く名前はどちらも 2.0**。

## Usage

`resolve` の `css` と `cssUsage` を使う。

```css
.example {
  /* cssUsage のプロパティ: var(css) */
}
```

- 変数名は `--charcoal-` で始まる Token 2.0
- hex / `rgb()` / Token 1.0 名は書かない
- `layer` が `primitive` なら使わない
- `cssUsage` にプロパティが複数あるときは、今書いているプロパティに合う 1 つだけ使う。space は `padding` / `margin` / `gap` のどれでもよい
