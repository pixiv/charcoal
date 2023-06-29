import { action } from '@storybook/addon-actions'
import { boolean, number, select, withKnobs } from '@storybook/addon-knobs'
import CarouselButton, { Direction, ScrollHintButton } from '.'

export default {
  title: 'Sandbox/Carousel/CarouselButton',
  decorators: [withKnobs],
  component: CarouselButton,
}

export const _CarouselButton = () => {
  const direction = select(
    'direction',
    { left: Direction.Left, right: Direction.Right },
    Direction.Left
  )
  const show = boolean('show', true)
  const offset = number('offset', 0)
  const padding = number('padding', 0)

  return (
    <CarouselButton
      direction={direction}
      show={show}
      offset={offset}
      padding={padding}
      onClick={noop}
    />
  )
}

function noop() {
  // empty
}

export const _ScrollHintButton = () => {
  const direction = select(
    'direction',
    { left: Direction.Left, right: Direction.Right },
    Direction.Left
  )
  return <ScrollHintButton direction={direction} onClick={action('click')} />
}
