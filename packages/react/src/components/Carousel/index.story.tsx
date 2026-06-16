import { Meta, StoryObj } from '@storybook/react-vite'
import Carousel, { type CarouselItem } from '.'

const sampleImage = (
  <img
    src="/carousel-sample.png"
    alt="サンプル画像"
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
    }}
  />
)

const items: CarouselItem[] = Array.from({ length: 6 }, (_, i) => ({
  id: `item-${i + 1}`,
  children: sampleImage,
}))

// 横幅が確定したスロット（defaultScroll の初期位置計算を確認するため）
const numberedItems: CarouselItem[] = Array.from({ length: 10 }, (_, i) => ({
  id: `num-${i + 1}`,
  children: (
    <div
      style={{
        width: 200,
        height: 120,
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
  ),
}))

export default {
  title: 'react/Carousel',
  component: Carousel,
  parameters: {
    layout: 'padded',
  },
  args: {
    items,
    size: 'M',
    hasGradient: false,
    fullWidth: false,
  },
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['S', 'M'],
    },
    hasGradient: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    navigationButtons: { control: 'boolean' },
    indicator: { control: 'boolean' },
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
  args: { size: 'M', items: numberedItems, defaultScroll: { align: 'center' } },
}

export const DefaultScrollRight: StoryObj<typeof Carousel> = {
  args: { size: 'M', items: numberedItems, defaultScroll: { align: 'right' } },
}

// 遅延読み込み画像（マウント時に幅が未確定）でも初期位置が効くことの確認
export const DefaultScrollCenterAsyncImages: StoryObj<typeof Carousel> = {
  args: { size: 'M', items, defaultScroll: { align: 'center' } },
}

// 白フェードが見えることの確認用（暗色コンテンツなら白フェードが明確に出る）
const darkTiles: CarouselItem[] = Array.from({ length: 10 }, (_, i) => ({
  id: `dark-${i + 1}`,
  children: (
    <div
      style={{
        width: 220,
        height: 140,
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
  ),
}))

export const GradientOnDarkContent: StoryObj<typeof Carousel> = {
  args: { size: 'M', hasGradient: true, items: darkTiles },
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
