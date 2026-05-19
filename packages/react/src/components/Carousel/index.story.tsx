import { Meta, StoryObj } from '@storybook/react-vite'
import Carousel, { type CarouselItem } from '.'

const sampleImage = (
  <img
    src="/carousel-sample.png"
    alt="サンプル画像"
    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
  />
)

const items: CarouselItem[] = Array.from({ length: 6 }, (_, i) => ({
  id: `item-${i + 1}`,
  children: sampleImage,
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

export const AllControls: StoryObj<typeof Carousel> = {
  args: {
    size: 'M',
    hasGradient: true,
    fullWidth: false,
    navigationButtons: true,
    indicator: true,
  },
}
