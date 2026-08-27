# Tailwind

構文だけ。トークン名の正本は `scripts/resolve.mjs`。

## Setup

`createTailwindConfig({ unstableTokenV2: true })` を使う。v1 由来 class は書かない。

## Usage

`resolve` の `tailwind.recommended` だけを書く。`alsoValid` は無視する。

- `default` はクラス名から落ちる
- 色の `text-text` とタイポの `text-body` は別物。`kind` を見る
- border color は `border-ch-*`、border width は `border-width-ch-*`
- font-weight は `font-ch-*`
- `recommended` が複数あるときは、今書いているプロパティに合う 1 つだけ使う。space は `p-*` / `m-*` / `gap-*`、icon は `fill-*` / `stroke-*`
- space の片側・軸だけなら接頭辞だけ変えてよい（`mt-*` / `px-*` / `gap-x-*` など）。キーは変えない。検証するときは基の `p-*` / `m-*` / `gap-*` を resolve に渡す

クラス名が正しいか迷ったら、書いたクラスを `resolve` に渡して検証する。
