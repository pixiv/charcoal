# Styling

トークンの具体名はここに書かない。名前は `scripts/resolve.mjs` の出力を使う。

## Incorrect → Correct

Hex をベタ書きしない。

```css
/* Incorrect */
background-color: #0096fa;

/* Correct */
background-color: var(--charcoal-…); /* resolve の css を使う */
```

shadcn 風のユーティリティを出さない。

```html
<!-- Incorrect -->
<button class="bg-primary text-muted-foreground">
  <!-- Correct -->
  <button class="…">
    <!-- resolve の tailwind.recommended だけを書く -->
  </button>
</button>
```

Token 1.0 名を出さない。変換表は持たない。2.0 名を `search` / `resolve` し直す。

```css
/* Incorrect */
color: var(--charcoal-text2);

/* Correct */
color: var(--charcoal-…); /* Token 2.0。resolve の css を使う */
```

Tailwind クラスに `default` を残さない。

```html
<!-- Incorrect -->
<div class="bg-container-primary-default"></div>

<!-- Correct -->
<div class="…"></div>
<!-- default セグメントはクラス名から落ちる。resolve の recommended を使う -->
```

border width を `border-m` と書かない。この系統は resolve で確認する。radius や font-weight も同様に、表で列挙せずスクリプトを呼ぶ。

Color Space をプロダクト UI の背景に使わない。`resolve` が `layer: "primitive"` を返したら `recommendedSemantic` か `search` でセマンティックを取り直す。

## Checklist

- `ok: true` の CSS 変数または `tailwind.recommended` だけを書く
- `alsoValid` は使わない
- hover / press は `family` または `related`
