import { number } from '@storybook/addon-knobs'
import styled, { css } from 'styled-components'
import Carousel, { CarouselProps } from '.'

const dummyText = css`
  color: ${({ theme }) => theme.color.text4};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
`

const Dummy = styled.div`
  background-color: ${({ theme }) => theme.color.surface2};
  border-radius: 8px;

  ${dummyText}
`
export default {
  title: 'Sandbox/Carousel',
  component: Carousel,
}

const DefaultStory = (args: CarouselProps) => {
  const itemCount = number('Item count', 20)
  const itemSize = number('Item size', 118)

  const items = Array.from({ length: itemCount })
  return (
    <Base>
      <Carousel {...args}>
        <Container>
          {items.map((_value, index) => (
            <Box size={itemSize} key={index} tabIndex={0}>
              Dummy
            </Box>
          ))}
        </Container>
      </Carousel>
    </Base>
  )
}

export const Default = DefaultStory.bind({})

const Base = styled.div`
  width: 100%;
  padding: 0 108px;
  box-sizing: border-box;
`

const Container = styled.div`
  display: flex;
  padding: 0 16px;

  > * + * {
    margin-left: 4px;
  }
`

const Box = styled(Dummy)<{ size: number }>`
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
`
