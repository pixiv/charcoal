import { Meta, StoryObj } from '@storybook/react-vite'
import Carousel from '.'

export default {
  title: 'react-sandbox/Carousel',
  component: Carousel,
  argTypes: {},
} satisfies Meta<typeof Carousel>

const items = [1, 2, 3, 4, 5]
export const Default: StoryObj<typeof Carousel> = {
  render: (props) => (
    <Carousel {...props}>
      <div
        style={{
          display: 'flex',
          gap: '8px',
        }}
      >
        {items.map((item) => (
          <div
            key={item}
            style={{
              width: '200px',
              height: '100px',
              backgroundColor: 'var(--charcoal-brand)',
              filter: `hue-rotate(0.${item}turn)`,
            }}
          />
        ))}
      </div>
    </Carousel>
  ),
}
