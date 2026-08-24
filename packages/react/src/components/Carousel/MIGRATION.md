# Carousel 移行ガイド（`@charcoal-ui/react-sandbox` → `@charcoal-ui/react`）

`@charcoal-ui/react-sandbox` の `Carousel`（react-spring + styled-components 実装）から、
`@charcoal-ui/react` の `Carousel`（CSS scroll-snap + store ベース実装）への移行手順をまとめる。

## 移行の要点

- **import 差し替えがほぼ唯一の必須変更**。`children` はそのまま渡せる（ただし自前の
  `flex` ラッパーは外して **1 スライド 1 直接子要素**にし、ラッパーの `gap` は
  Carousel の `gap` prop に置き換える）。
- `onScroll` / `onResize` / `onScrollStateChange` / `ref`（`resetScroll()`）/ `defaultScroll` /
  `hasGradient` は **sandbox と同じシグネチャ**で利用できる（drop-in 互換）。
- `scrollAmountCoef` は `scrollStep`（関数も可）に名称変更。`fadeInGradient` / `buttonOffset` 系 /
  `centerItems` は廃止。
- `size` / `indicator` / `scrollSnap` / `fullWidth` / `gap` は新規（任意・後方互換）。

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

sandbox と同じく子ノードを直接渡し、スライドの寸法は sandbox 同様に利用者が持つ。
ただし**直接子要素 1 つを 1 スライド**として数えるので、`flex` ラッパーは外し、
ラッパーで指定していた `gap` は Carousel の `gap` prop で指定する。

```diff
- <Carousel hasGradient defaultScroll={{ align: 'center' }} scrollAmountCoef={0.75}>
-   <div style={{ display: 'flex', gap: 8 }}>
-     {items.map((i) => (
-       <Slide key={i} />
-     ))}
-   </div>
- </Carousel>
+ <Carousel hasGradient defaultScroll={{ align: 'center' }} scrollStep={0.75} gap={8}>
+   {items.map((i) => (
+     <Slide key={i} />
+   ))}
+ </Carousel>
```

`key` は再レンダー時のスライド識別に使うので、一意かつ安定した値にする。

## props 対応表

| sandbox                                           | react                                       | 備考                                                                                                                                                                                                                                                     |
| ------------------------------------------------- | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children`                                        | `children`                                  | ✅ そのまま対応（1 直接子要素 = 1 スライド。ラッパーは外す。上記参照）                                                                                                                                                                                   |
| `scrollAmountCoef`（既定 `0.75`）                 | `scrollStep`（既定 `0.75`）                 | `number`（表示幅比）に加え `(ctx) => px` の関数も渡せる                                                                                                                                                                                                  |
| `defaultScroll: { align, offset }`                | `defaultScroll: { align, offset }`          | `align` は `'left' \| 'center' \| 'right'`。ほぼ同等                                                                                                                                                                                                     |
| `hasGradient`                                     | `hasGradient`（既定 `false`）               | ✅ そのまま対応（mask による透過フェード）                                                                                                                                                                                                               |
| `fadeInGradient`                                  | （廃止）                                    | スクロール可能な側のみ常にフェード                                                                                                                                                                                                                       |
| `buttonOffset` / `buttonPadding` / `bottomOffset` | （廃止）                                    | ボタン配置は CSS グリッド（左右 72px ゾーン）に固定                                                                                                                                                                                                      |
| `centerItems`                                     | （廃止）                                    | スライド寸法は children 側で注入する（sandbox 同様）。間隔は `gap` prop。単数形の `centerItem` は別機能                                                                                                                                                  |
| `onScroll(left)`                                  | `onScroll(left)`                            | ✅ そのまま対応（scroll で発火）                                                                                                                                                                                                                         |
| `onResize(width)`                                 | `onResize(width)`                           | ✅ scroller 幅の変化で発火                                                                                                                                                                                                                               |
| `onScrollStateChange(canScroll)`                  | `onScrollStateChange(canScroll)`            | ✅ `canPrev \|\| canNext` の変化で発火                                                                                                                                                                                                                   |
| `ref`（`CarouselHandlerRef.resetScroll()`）       | `ref`（`CarouselHandlerRef.resetScroll()`） | ✅ `forwardRef` で対応。`defaultScroll` の初期位置へ戻す                                                                                                                                                                                                 |
| —                                                 | `size: 'S' \| 'M'`（既定 `'M'`）            | 新規。`S` は 1 枚全幅 + `mandatory` スナップ                                                                                                                                                                                                             |
| —                                                 | `navigationButtons?: boolean`               | 既定は `size === 'M'`                                                                                                                                                                                                                                    |
| —                                                 | `indicator?: boolean`                       | 既定は `size === 'S'`                                                                                                                                                                                                                                    |
| —                                                 | `fullWidth?: boolean`（既定 `false`）       | `100vw` 表示                                                                                                                                                                                                                                             |
| —                                                 | `className?: string`                        | ルートに付与                                                                                                                                                                                                                                             |
| —                                                 | `scrollSnap?: { type?; align? }`            | `type`: `none`/`proximity`/`mandatory`、`align`: `center`/`start`。未指定で M=none / S=mandatory / center                                                                                                                                                |
| —                                                 | `gap?: number \| string`                    | 新規。スライド間隔。number は px、string は CSS 値をそのまま使う                                                                                                                                                                                         |
| —                                                 | `loop?: boolean`（既定 `false`）            | 新規（charcoal 独自）。clone + 端テレポートによる無限ループ。`defaultScroll` とは型レベルで排他                                                                                                                                                          |
| —                                                 | `centerItem?: number`                       | 新規（charcoal 独自）。`loop` 時のみ有効で、初期表示で指定 index のスライドを viewport 中央に置く                                                                                                                                                        |
| —                                                 | `autoplay?: { interval?; pauseOnHover? }`   | 新規（charcoal 独自）。一定時間ごとに 1 スライド進む。`interval` 既定 5000ms、`pauseOnHover` 既定 `true`                                                                                                                                                 |
| —                                                 | `onChange?: (e) => void`                    | 新規（charcoal 独自）。スクロール静止で `activeIndex` が変わったとき `{ index, source }` を 1 回通知。`source` は `auto`/`navigation`/`indicator`/`keyboard`/`pointer` の 5 種（`resetScroll()` は初期位置への復帰として扱われ `onChange` を発火しない） |

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
- **`loop` 時のスライド内 `id` / `name` は重複する**: clone 方式の制約として、スライドの
  DOM は clone 帯にもそのまま複製される（複製時に剥がされるのは**ルート要素の ref のみ**で、
  ネストした要素の ref や `id` / `name` 属性は剥がせない）。clone-before 帯が DOM 上は
  実スライドより先に来るため、スライド内に `id` があると `document.getElementById` や
  `label[for]` / `aria-describedby` の参照が先頭の inert な clone 側に解決されてしまう。
  `name` でグループ化するフォームコントロール（radio 等）も全 clone で同一グループに
  なる。`loop` を使うスライドの中では、文書内一意の `id` や `name` グループに依存する
  仕組みを使わないこと。
- **`loop` 時の dot ナビゲーションは実スライドへ移動する**: indicator の dot は常に
  実セットのスライドへ `scrollIntoView` する。現在位置が clone 帯寄りの場合、視覚的に
  最寄りの複製ではなく実スライドまで（最大でおよそ半セットぶん）長くスクロールする
  ことがある。既知の制限。
- **`autoplay` は画面外・タブ非表示でも回り続ける**: IntersectionObserver や `document.hidden`
  による停止は入れていない。結果として、Carousel が見えていなくても自動送りが進み、
  `onChange` が飛ぶ。imp 計測を正確にしたい場合は、利用側で可視判定を持つこと。
- **`onChange` は初期表示では発火しない**: 発火はスクロール静止で `activeIndex` が
  変わったときだけ。初期スライドの imp は利用側の責務（初期 index は `centerItem ?? 0`）。
  また、フリックで複数枚を通過して止まった場合、発火するのは着地したスライドの 1 回だけで、
  通過したスライドは発火しない。
- **`autoplay` + 非 loop + `scrollSnap.align: 'center'` では末尾数枚が中央に来ない**:
  末尾付近の静止位置がスクロール上限にクランプされて潰れるため。中央配置を末尾まで
  保ちたい場合は `loop` を使う。
- **`prefers-reduced-motion: reduce` は `autoplay` のみを止める**: prev/next ボタンや
  キーボード操作の smooth scroll は従来どおり動く。
- **タッチ端末では `autoplay` を利用者が止める手段が無い**: `pauseOnHover` は react-aria の
  `useHover` が `pointerType === 'touch'` を無視するため効かず、キーボードフォーカスによる
  一時停止もタッチ操作ではフォーカスが visible にならない（modality が `pointer` になる）
  ため効かない。ドラッグ中は自動送りの tick が割り込まないが（進行中のユーザースクロール
  を検知して 1 tick 分だけ譲る）、ドラッグが終われば何事もなく回転を再開する——恒久的な
  停止手段ではない。`role="region"` + `aria-roledescription="carousel"` を持つ本コンポーネントに
  `autoplay` を使う画面で WCAG 2.2.2（Pause, Stop, Hide）が要件になる場合は、利用側で
  明示的な一時停止 UI を用意すること（本コンポーネントは CSS を変更しない前提のため
  pause ボタン等は提供しない）。
- **キーボードフォーカスによる一時停止は `pauseOnHover: false` でも効く**: 一時停止条件は
  `isHovered || rootFocusVisible` の OR で、`pauseOnHover` は hover 側の判定だけを切り替える
  （`false` にしても、フォーカスを合わせている間は止まる）。

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

なお、走行中の連打では `scrollLeft` に実座標ではなく**前回のまだ到達していない目標位置**が
渡る（native smooth scroll は新しい呼び出しで残距離を破棄するため、目標を積算して連打を
成立させる）。上の例のような「残り全部」計算は目標位置基準で行われ、静止後・ユーザーの
手動スクロール後は実座標に戻る。
