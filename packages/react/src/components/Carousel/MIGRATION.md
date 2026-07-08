# Carousel 移行ガイド（`@charcoal-ui/react-sandbox` → `@charcoal-ui/react`）

`@charcoal-ui/react-sandbox` の `Carousel`（react-spring + styled-components 実装）から、
`@charcoal-ui/react` の `Carousel`（CSS scroll-snap + store ベース実装）への移行手順をまとめる。

## 移行の要点

- **import 差し替えがほぼ唯一の必須変更**。`children` はそのまま渡せる（ただし自前の
  `flex` ラッパーは外して **1 スライド 1 直接子要素**にし、ラッパーの `gap` は
  各スライドの `margin` に置き換える）。
- `onScroll` / `onResize` / `onScrollStateChange` / `ref`（`resetScroll()`）/ `defaultScroll` /
  `hasGradient` は **sandbox と同じシグネチャ**で利用できる（drop-in 互換）。
- `scrollAmountCoef` は `scrollStep`（関数も可）に名称変更。`fadeInGradient` / `buttonOffset` 系 /
  `centerItems` は廃止。
- `size` / `indicator` / `scrollSnap` / `fullWidth` は新規（任意・後方互換）。

## 概要

|                | sandbox (`@charcoal-ui/react-sandbox`) | react (`@charcoal-ui/react`)                    |
| -------------- | -------------------------------------- | ----------------------------------------------- |
| スクロール     | react-spring による JS アニメーション  | ネイティブ overflow + CSS `scroll-snap`         |
| 子要素         | `children`（任意のノード）             | `children`（1 直接子要素 = 1 スライド）         |
| インジケーター | なし                                   | CSS `::scroll-marker` / JS フォールバックの dot |
| スタイル       | styled-components                      | プレーン CSS（`index.css`）                     |

## import

```diff
- import { Carousel } from '@charcoal-ui/react-sandbox'
+ import { Carousel } from '@charcoal-ui/react'
```

公開型: `CarouselProps` / `CarouselHandlerRef` / `ScrollAlign` / `ScrollStep` /
`ScrollStepContext` / `ScrollSnap` / `ScrollSnapType` / `ScrollSnapAlign`。

## 子要素: `children`（そのまま渡せる）

sandbox と同じく子ノードを直接渡し、スライドの寸法・間隔も sandbox 同様に利用者が持つ
（コンポーネントの責務はスクロールと indicator / arrow によるページ送りのみ）。
ただし**直接子要素 1 つを 1 スライド**として数えるので、`flex` ラッパーは外し、
`gap` の代わりに各スライドの `margin` などで間隔を注入する。

```diff
- <Carousel hasGradient defaultScroll={{ align: 'center' }} scrollAmountCoef={0.75}>
-   <div style={{ display: 'flex', gap: 8 }}>
-     {items.map((i) => (
-       <Slide key={i} />
-     ))}
-   </div>
- </Carousel>
+ <Carousel hasGradient defaultScroll={{ align: 'center' }} scrollStep={0.75}>
+   {items.map((i) => (
+     <Slide key={i} style={{ marginInlineEnd: 8 }} />
+   ))}
+ </Carousel>
```

`key` は再レンダー時のスライド識別に使うので、一意かつ安定した値にする。

## props 対応表

| sandbox                                           | react                                       | 備考                                                                                                      |
| ------------------------------------------------- | ------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `children`                                        | `children`                                  | ✅ そのまま対応（1 直接子要素 = 1 スライド。ラッパーは外す。上記参照）                                    |
| `scrollAmountCoef`（既定 `0.75`）                 | `scrollStep`（既定 `0.75`）                 | `number`（表示幅比）に加え `(ctx) => px` の関数も渡せる                                                   |
| `defaultScroll: { align, offset }`                | `defaultScroll: { align, offset }`          | `align` は `'left' \| 'center' \| 'right'`。ほぼ同等                                                      |
| `hasGradient`                                     | `hasGradient`（既定 `false`）               | 実装が mask → 背景色オーバーレイに変更                                                                    |
| `fadeInGradient`                                  | （廃止）                                    | 常にオーバーレイ式フェード                                                                                |
| `buttonOffset` / `buttonPadding` / `bottomOffset` | （廃止）                                    | ボタン配置は CSS グリッド（左右 72px ゾーン）に固定                                                       |
| `centerItems`                                     | （廃止）                                    | スライドの寸法・間隔は children 側で注入する（sandbox 同様）                                              |
| `onScroll(left)`                                  | `onScroll(left)`                            | ✅ そのまま対応（scroll で発火）                                                                          |
| `onResize(width)`                                 | `onResize(width)`                           | ✅ scroller 幅の変化で発火                                                                                |
| `onScrollStateChange(canScroll)`                  | `onScrollStateChange(canScroll)`            | ✅ `canPrev \|\| canNext` の変化で発火                                                                    |
| `ref`（`CarouselHandlerRef.resetScroll()`）       | `ref`（`CarouselHandlerRef.resetScroll()`） | ✅ `forwardRef` で対応。`defaultScroll` の初期位置へ戻す                                                  |
| —                                                 | `size: 'S' \| 'M'`（既定 `'M'`）            | 新規。`S` は 1 枚全幅 + `mandatory` スナップ                                                              |
| —                                                 | `navigationButtons?: boolean`               | 既定は `size === 'M'`                                                                                     |
| —                                                 | `indicator?: boolean`                       | 既定は `size === 'S'`                                                                                     |
| —                                                 | `fullWidth?: boolean`（既定 `false`）       | `100vw` 表示                                                                                              |
| —                                                 | `className?: string`                        | ルートに付与                                                                                              |
| —                                                 | `scrollSnap?: { type?; align? }`            | `type`: `none`/`proximity`/`mandatory`、`align`: `center`/`start`。未指定で M=none / S=mandatory / center |

## 挙動の変更（移行時に確認すること）

- **ナビゲーションボタンの hover 表示を廃止**: sandbox はカルーセルに hover した時だけボタンが現れ、
  マウスが離れるとフェードアウトしていた。新版は**常時表示**で、スクロール端でのみ非表示
  （`canPrev`/`canNext`）。hover-reveal に依存した UI だった場合は要確認。
- **タッチ端末**: 両実装ともナビゲーションボタンを非表示（`@media (hover: none) and (pointer: coarse)`）。
- **スナップ**: JS アニメーションから CSS `scroll-snap`（`scroll-snap-align: center`）へ。
  既定は `M` が `none`（スナップなし。`scrollStep`＝0.75×表示幅ちょうど進む。sandbox の進み量と一致）、
  `S` が `mandatory`（1 枚全幅で必ずスナップ）。`scrollSnap` prop で `proximity`/`mandatory` も選べる。
  ※アニメーションは native smooth scroll で、sandbox（react-spring）とイージング/連打時の積算挙動は異なる。
- **インジケーター**: 新規。`indicator` 有効時に dot を表示（CSS Scroll Markers 対応環境では `::scroll-marker`、
  非対応環境では JS フォールバック）。
- **キーボード操作**: スクローラーが `tabIndex={0}` でフォーカス可能になり、`←` / `→` で 1 ステップスクロール。
  フォーカスリングは charcoal 標準（`box-shadow: 0 0 0 4px rgba(0, 150, 250, 0.32)`）。
- **グラデーション**: `mask` による透過から、背景色（`#fff`）オーバーレイ方式に変更。
  ダークモードは現状未対応（背景色固定）。

## スクロール量を細かく制御したい場合

`scrollStep` に関数を渡すと、1 操作あたりの進む量（px）を自前で計算できる。

```tsx
// 表示幅の比率（sandbox の scrollAmountCoef 相当）
<Carousel scrollStep={0.5}>{slides}</Carousel>

// 進む px を直接返す（端は残り全部、など）
<Carousel
  scrollStep={({ clientWidth, scrollWidth, scrollLeft, direction }) =>
    direction === 'next'
      ? Math.min(clientWidth * 0.8, scrollWidth - clientWidth - scrollLeft)
      : Math.min(clientWidth * 0.8, scrollLeft)
  }
>
  {slides}
</Carousel>
```

戻り値は「進む量の絶対値（px）」。符号（prev / next）はコンポーネント側で付与する。
