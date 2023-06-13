import { boolean, number, select, withKnobs } from '@storybook/addon-knobs'
import styled, { css } from 'styled-components'
import Carousel from '.'

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
  decorators: [withKnobs],
}

export const _Carousel = () => {
  const hasGradient = boolean('Gradient', false)
  const fadeInGradient = boolean('FadeInGradient', false)
  const buttonOffset = number('buttonOffset', 0)
  const buttonPadding = number('buttonPadding', 16)
  const defaultScrollAlign = select(
    'scrollAlign',
    {
      Left: 'left',
      Center: 'center',
      Right: 'right',
    },
    'left'
  )
  const defaultScrollOffset = number('scrollOffset', 0)
  const itemCount = number('Item count', 20)
  const itemSize = number('Item size', 118)

  const items = Array.from({ length: itemCount })
  return (
    <Base>
      <Carousel
        buttonOffset={buttonOffset}
        buttonPadding={buttonPadding}
        defaultScroll={{
          align: defaultScrollAlign,
          offset: defaultScrollOffset,
        }}
        hasGradient={hasGradient}
        fadeInGradient={fadeInGradient}
      >
        <Container>
          {items.map((_value, index) => (
            <Box size={itemSize} key={index}>
              Dummy
            </Box>
          ))}
        </Container>
      </Carousel>
    </Base>
  )
}
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
