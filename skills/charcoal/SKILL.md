---
name: charcoal
description: Use Charcoal Design Token 2.0 when writing CSS or Tailwind for pixiv charcoal-ui. Use when styling charcoal components, mapping Figma variables via MCP, or converting hex / Token 1.0 / shadcn class names to charcoal CSS variables and Tailwind classes.
---

# Charcoal

pixiv の Design System。プロダクト UI に書いてよい名前は **Design Token 2.0 だけ**。

トークン名・クラス名は推測しない。Figma MCP の hex も使わない。
この Skill の directory を解決し、その directory を working directory にして
`node scripts/resolve.mjs resolve <変数名またはクラス>` を実行する。返ってきた CSS 変数または Tailwind クラスだけを書く。
`layer` が `primitive` ならプロダクト UI には使わず、`recommendedSemantic` か `search` でセマンティックを取り直す。

## When to use

- charcoal / `@charcoal-ui/*` の画面を CSS または Tailwind で書く
- Figma MCP から色・タイポ・スペースをコードに落とす
- `bg-primary`、`--charcoal-text2`、hex、Color Space が出そうなとき

## Procedure

1. [rules/styling.md](rules/styling.md) を読む
2. CSS なら [references/css.md](references/css.md)、Tailwind なら [references/tailwind.md](references/tailwind.md) だけ読む
3. トークンはスクリプトで取る。Markdown の表を作らない
4. Figma MCP があるときは [references/figma.md](references/figma.md)。bound variable 名を resolve に渡す
5. `layer` が `primitive` なら `recommendedSemantic` か `search`
6. hover / press が要るなら `family`

## Commands

```text
node scripts/resolve.mjs resolve <query>
node scripts/resolve.mjs search <intent>
node scripts/resolve.mjs family <token>
```

- ヒットも `{ ok: false, reason }` も exit 0。`ok` を見る
- 使い方エラーだけ exit 1
- `--pretty` で人間向け JSON

`query` は Figma 変数名、CSS 変数、Tailwind クラス、スラッグのどれでもよい。

## Critical rules

- Token 2.0 名だけ。`--charcoal-text2` や `theme.color.background1` は出さない
- shadcn の `bg-primary` / `text-muted-foreground` は出さない
- Figma の resolved hex をコードに書かない
- Color Space（`light-*` / `dark-*`）を背景色にしない
- `default` を Tailwind クラスに残さない
- アプリが `remap.css` を読んでいても、書く名前は 2.0 のまま
