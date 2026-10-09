---
name: choosing-charcoal-tokens
description: Use before choosing any color, text style, spacing, radius or border value in code that uses @charcoal-ui, and whenever a literal is about to be written where a token exists — a hex color, a px padding or gap, a font-size, a border-radius or border-width. Charcoal has one correct token for each of these and the choice is prescribed, not a matter of taste. Also use when reviewing such code, or when deciding how dense, how loud or how bordered a screen should be.
---

# Charcoal のトークンを選ぶ

Charcoal の値は好みで決めない。用途ごとに使うトークンが決まっている。迷ったら推測せず、
下の参照先で用途の表を引く。

**原則として、hex・px の直書きをしない。** 値はトークン名で書く。

## どれを読むか

| 決めること | 参照 |
|---|---|
| 背景・文字・アイコン・ボーダーの色、状態（hover/press）、強さ | `references/color.md` |
| 本文か見出しか、Body / Caption / Heading / Paragraph の選択、字間・字幅 | `references/typography.md` |
| 余白、要素間の間隔、コンポーネント内部の padding、タップ領域の大きさ | `references/spacing.md` |
| 角丸の大きさ、円形にするかどうか | `references/radius.md` |
| 線を引くかどうか、太さ、どの色か | `references/border.md` |
| 上の各ガイドラインに無い判断、全体の方針 | `references/design-philosophy.md` |

## 読む前に外さないこと

参照を開かずに書き始める場合でも、次は守る。

- **文字色に `#000000` を使わない。** 既定は `text.default`。
- **プライマリーカラーは重要アクションと誘導にだけ使う。** 目立たせたいという理由で使わない。
- **警告色はその状態を示すときだけ使う。** 強調の手段にしない。
- **ボーダーは、無いと理解を妨げるときだけ引く。** まず余白か背景色の差で足りないか試す。
  区切り線の既定は `border.secondary`。
- **余白はレイアウトトークンから選ぶ。** トークンに無い数値を作らない。迷ったら `layout.30`。
- **本文の基準は Body（`body.Regular`）。** テキストスタイルは 4 種類しかない。5 種類目を作らない。
- **派手なグラデーション、過剰な線、過剰な装飾を足さない。** コンテンツより UI が目立たない。

## 判断の順番

1. その値にトークンがあるか。あれば必ずトークンを使う。
2. 用途の表で、書こうとしている部品が名指しされているか。されていなければ、近い値を理由に
   割り当てない。表が名指ししている用途にだけ使う。
3. 状態（hover / press / disabled）が要るか。要る状態にだけ付ける。
4. 迷いが残るなら `references/design-philosophy.md` の原則で決める。
