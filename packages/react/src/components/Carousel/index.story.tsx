import { Meta, StoryObj } from '@storybook/react-vite'
import Carousel from '.'

const sampleImages = Array.from({ length: 6 }, (_, i) => (
  <img
    key={`item-${i + 1}`}
    src="/carousel-sample.png"
    alt="サンプル画像"
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
    }}
  />
))

// 横幅が確定したスロット（defaultScroll の初期位置計算と 0.75 ページ送りを確認するため）。
// スライド間隔はコンポーネントが所有しないので、利用者側の margin で注入する。
const numberedSlides = Array.from({ length: 20 }, (_, i) => (
  <div
    key={`num-${i + 1}`}
    style={{
      width: 200,
      height: 120,
      marginInlineEnd: 24,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: i % 2 === 0 ? '#cfe3ff' : '#ffe3cf',
      borderRadius: 8,
      font: 'bold 32px sans-serif',
      color: '#333',
    }}
  >
    {i + 1}
  </div>
))

export default {
  title: 'react/Carousel',
  component: Carousel,
  parameters: {
    layout: 'padded',
  },
  args: {
    children: sampleImages,
    size: 'M',
    hasGradient: false,
    fullWidth: false,
    scrollStep: 0.75,
  },
  argTypes: {
    children: { control: false },
    size: {
      control: { type: 'radio' },
      options: ['S', 'M'],
    },
    hasGradient: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    navigationButtons: { control: 'boolean' },
    indicator: { control: 'boolean' },
    // react-sandbox 互換コールバックを Actions パネルで確認できるようにする。
    onScroll: { action: 'onScroll' },
    onResize: { action: 'onResize' },
    onScrollStateChange: { action: 'onScrollStateChange' },
    scrollStep: {
      // number は clientWidth に対する比率。関数 (ctx) => px も渡せるが、
      // Controls では数値（比率）のみ操作可能。関数形式は ScrollStepFunction story を参照。
      control: { type: 'range', min: 0.1, max: 1.5, step: 0.05 },
    },
  },
} satisfies Meta<typeof Carousel>

export const SizeM: StoryObj<typeof Carousel> = {
  args: { size: 'M' },
}

export const SizeS: StoryObj<typeof Carousel> = {
  args: { size: 'S' },
}

export const WithGradient: StoryObj<typeof Carousel> = {
  args: { size: 'M', hasGradient: true },
}

export const FullWidth: StoryObj<typeof Carousel> = {
  args: { size: 'M', fullWidth: true },
}

export const NavigationButtonsOnSizeS: StoryObj<typeof Carousel> = {
  args: { size: 'S', navigationButtons: true },
}

export const IndicatorOnSizeM: StoryObj<typeof Carousel> = {
  args: { size: 'M', indicator: true },
}

// 横幅が確定したスロット（番号付き）
export const DefaultScrollCenter: StoryObj<typeof Carousel> = {
  args: {
    size: 'M',
    children: numberedSlides,
    defaultScroll: { align: 'center' },
  },
}

export const DefaultScrollRight: StoryObj<typeof Carousel> = {
  args: {
    size: 'M',
    children: numberedSlides,
    defaultScroll: { align: 'right' },
  },
}

// 遅延読み込み画像（マウント時に幅が未確定）でも初期位置が効くことの確認
export const DefaultScrollCenterAsyncImages: StoryObj<typeof Carousel> = {
  args: {
    size: 'M',
    children: sampleImages,
    defaultScroll: { align: 'center' },
  },
}

// 白フェードが見えることの確認用（暗色コンテンツなら白フェードが明確に出る）
const darkTiles = Array.from({ length: 10 }, (_, i) => (
  <div
    key={`dark-${i + 1}`}
    style={{
      width: 220,
      height: 140,
      marginInlineEnd: 24,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#2a3b8f',
      color: '#fff',
      borderRadius: 4,
      font: 'bold 28px sans-serif',
    }}
  >
    {i + 1}
  </div>
))

export const GradientOnDarkContent: StoryObj<typeof Carousel> = {
  args: { size: 'M', hasGradient: true, children: darkTiles },
}

// scrollStep に関数を渡してフル制御する例（送り量を clientWidth - 48px に固定）。
// Controls の数値スライダーでは表現できない使い方の確認用。
export const ScrollStepFunction: StoryObj<typeof Carousel> = {
  args: {
    size: 'M',
    children: numberedSlides,
    scrollStep: ({ clientWidth }) => clientWidth - 48,
  },
}

// scroll-snap を item ごと（mandatory）に。align: start で各アイテムが左端にスナップする。
export const ScrollSnapPerItem: StoryObj<typeof Carousel> = {
  args: {
    size: 'M',
    children: numberedSlides,
    scrollSnap: { type: 'mandatory', align: 'start' },
  },
}

export const AllControls: StoryObj<typeof Carousel> = {
  args: {
    size: 'M',
    hasGradient: true,
    fullWidth: false,
    navigationButtons: true,
    indicator: true,
  },
}
