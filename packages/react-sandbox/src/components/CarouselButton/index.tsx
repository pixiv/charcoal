import styled, { css } from 'styled-components'
import { unreachable } from '../../foundation/utils'
import NextIcon, { WedgeDirection } from '../icons/NextIcon'
import { applyEffect } from '@charcoal-ui/utils'

export enum Direction {
  Right = 'right',
  Left = 'left',
}

interface Props {
  direction: Direction
  show: boolean
  offset?: number
  padding?: number
  bottomOffset?: number
  gradient?: boolean
  onClick(): void
}

const onlyNonTouchDevice = css`
  @media (hover: none) and (pointer: coarse) {
    display: none;
  }
`

export default function CarouselButton({
  direction,
  show,
  offset = 0,
  padding = 0,
  bottomOffset: bottom = 0,
  gradient = false,
  onClick,
}: Props) {
  const offsetStyle =
    direction === Direction.Left
      ? {
          left: gradient ? offset - 72 : offset,
          paddingLeft: Math.max(padding, 0),
          paddingBottom: bottom,
        }
      : {
          right: gradient ? offset - 72 : offset,
          paddingRight: Math.max(padding, 0),
          paddingBottom: bottom,
        }
  return (
    <Button
      type="button"
      onClick={onClick}
      hide={!show}
      style={offsetStyle}
      css={onlyNonTouchDevice}
    >
      <CarouselButtonIcon>
        <NextIcon
          direction={
            direction === Direction.Right
              ? WedgeDirection.Right
              : // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                direction === Direction.Left
                ? WedgeDirection.Left
                : unreachable()
          }
        />
      </CarouselButtonIcon>
    </Button>
  )
}

export const CAROUSEL_BUTTON_SIZE = 40

const CarouselButtonIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${CAROUSEL_BUTTON_SIZE}px;
  height: ${CAROUSEL_BUTTON_SIZE}px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.surface4};
  transition:
    0.4s visibility,
    0.4s opacity,
    0.2s background-color,
    0.2s color;
  color: ${({ theme }) => theme.color.text5};
`

const Button = styled.button<{ hide: boolean }>`
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  padding: 0;
  min-width: 40px;
  border: none;
  outline: 0;
  background: transparent;
  cursor: pointer;
  transition:
    0.4s visibility,
    0.4s opacity;
  /* つらい */
  /* このコンポーネントはCarouselでしか使われてないのでそっちでコンテキストで切る */
  z-index: 1;

  &:hover ${CarouselButtonIcon} {
    background-color: ${({ theme }) =>
      applyEffect(theme.color.surface4, theme.effect.hover)};
    color: ${({ theme }) => applyEffect(theme.color.text5, theme.effect.hover)};
  }

  &:active ${CarouselButtonIcon} {
    background-color: ${({ theme }) =>
      applyEffect(theme.color.surface4, theme.effect.press)};
    color: ${({ theme }) => applyEffect(theme.color.text5, theme.effect.press)};
  }

  ${(p) =>
    p.hide &&
    css`
      visibility: hidden;
      opacity: 0;
      pointer-events: none;
    `}
`
