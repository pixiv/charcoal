import { useEffect, useState, useCallback, useRef } from 'react'
import * as React from 'react'
import { animated, useSpring } from 'react-spring'
import styled, { css } from 'styled-components'
import { useDebounceAnimationState } from '../../foundation/hooks'
import { passiveEvents, isEdge } from '../../foundation/support'
import { useIsomorphicLayoutEffect } from '../../hooks'
import CarouselButton, { Direction } from '../CarouselButton'

export const GRADIENT_WIDTH = 72
/**
 * カルーセル系のスクロール量の定数
 *
 * @example
 * const scrollAmount = containerElm.clientWidth * SCROLL_AMOUNT_COEF
 */
export const SCROLL_AMOUNT_COEF = 0.75

interface ScrollProps {
  align?: 'center' | 'left' | 'right'
  offset?: number
}

export interface CarouselBaseAppearanceProps {
  buttonOffset?: number
  buttonPadding?: number
  bottomOffset?: number
  defaultScroll?: ScrollProps
}

export type CarouselGradientProps =
  | { hasGradient?: false }
  | {
      hasGradient: true
      fadeInGradient?: boolean
    }

type CarouselAppearanceProps = CarouselBaseAppearanceProps &
  CarouselGradientProps

type Props = CarouselAppearanceProps & {
  onScroll?: (left: number) => void
  onResize?: (width: number) => void
  children: React.ReactNode
  centerItems?: boolean
  onScrollStateChange?: (canScroll: boolean) => void
  scrollAmountCoef?: number
}

export interface CarouselHandlerRef {
  resetScroll(): void
}

export default function Carousel({
  buttonOffset = 0,
  buttonPadding = 16,
  bottomOffset = 0,
  defaultScroll: { align = 'left', offset: scrollOffset = 0 } = {},
  onScroll,
  onResize,
  children,
  centerItems,
  onScrollStateChange,
  scrollAmountCoef = SCROLL_AMOUNT_COEF,
  ...options
}: Props) {
  // スクロール位置を保存する
  // アニメーション中の場合は、アニメーション終了時のスクロール位置が保存される
  const [scrollLeft, setScrollLeft] = useDebounceAnimationState(0)
  // アニメーション中かどうか
  const animation = useRef(false)
  // スクロール可能な領域を保存する
  const [maxScrollLeft, setMaxScrollLeft] = useState(0)
  // 左右のボタンの表示状態を保存する
  const [leftShow, setLeftShow] = useState(false)
  const [rightShow, setRightShow] = useState(false)

  // const [props, set, stop] = useSpring(() => ({
  //   scroll: 0
  // }))
  const [styles, set] = useSpring(() => ({ scroll: 0 }))

  const ref = useRef<HTMLDivElement>(null)
  const visibleAreaRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLUListElement>(null)

  const handleRight = useCallback(() => {
    if (visibleAreaRef.current === null) {
      return
    }
    const { clientWidth } = visibleAreaRef.current
    // スクロール領域を超えないように、アニメーションを開始
    // アニメーション中にアニメーションが開始されたときに、アニメーション終了予定の位置から再度計算するようにする
    const scroll = Math.min(
      scrollLeft + clientWidth * scrollAmountCoef,
      maxScrollLeft
    )
    setScrollLeft(scroll, true)
    set({ scroll, from: { scroll: scrollLeft }, reset: !animation.current })
    animation.current = true
  }, [
    animation,
    maxScrollLeft,
    scrollLeft,
    set,
    scrollAmountCoef,
    setScrollLeft,
  ])

  const handleLeft = useCallback(() => {
    if (visibleAreaRef.current === null) {
      return
    }
    const { clientWidth } = visibleAreaRef.current
    const scroll = Math.max(scrollLeft - clientWidth * scrollAmountCoef, 0)
    setScrollLeft(scroll, true)
    set({ scroll, from: { scroll: scrollLeft }, reset: !animation.current })
    animation.current = true
  }, [animation, scrollLeft, set, scrollAmountCoef, setScrollLeft])

  // スクロール可能な場合にボタンを表示する
  // scrollLeftが変化したときに処理する (アニメーション開始時 & 手動スクロール時)
  useEffect(() => {
    const newLeftShow = scrollLeft > 0
    const newRightShow = scrollLeft < maxScrollLeft && maxScrollLeft > 0
    if (newLeftShow !== leftShow || newRightShow !== rightShow) {
      setLeftShow(newLeftShow)
      setRightShow(newRightShow)
      onScrollStateChange?.(newLeftShow || newRightShow)
    }
  }, [leftShow, maxScrollLeft, onScrollStateChange, rightShow, scrollLeft])

  const handleScroll = useCallback(() => {
    if (ref.current === null) {
      return
    }
    // 手動でスクロールが開始されたときにアニメーションを中断
    if (animation.current) {
      styles.scroll.stop()
      animation.current = false
    }
    // スクロール位置を保存 (アニメーションの基準になる)
    const manualScrollLeft = ref.current.scrollLeft
    // 過剰にsetStateが走らないようにdebounceする
    setScrollLeft(manualScrollLeft)
  }, [animation, setScrollLeft, styles])

  // リサイズが起きたときに、アニメーション用のスクロール領域 & ボタンの表示状態 を再計算する
  const handleResize = useCallback(() => {
    if (ref.current === null) {
      return
    }
    const { clientWidth, scrollWidth } = ref.current
    const newMaxScrollLeft = scrollWidth - clientWidth
    setMaxScrollLeft(newMaxScrollLeft)
    if (onResize) {
      onResize(clientWidth)
    }
  }, [onResize])

  useIsomorphicLayoutEffect(() => {
    const elm = ref.current
    const innerElm = innerRef.current
    if (elm === null || innerElm === null) {
      return
    }

    elm.addEventListener(
      'wheel',
      handleScroll,
      passiveEvents() && { passive: true }
    )

    const resizeObserver = new ResizeObserver(handleResize)
    resizeObserver.observe(elm)

    const resizeObserverInner = new ResizeObserver(handleResize)
    resizeObserverInner.observe(innerElm)

    return () => {
      elm.removeEventListener('wheel', handleScroll)
      resizeObserver.disconnect()
      resizeObserverInner.disconnect()
    }
  }, [handleResize, handleScroll])

  // 初期スクロールを行う
  useIsomorphicLayoutEffect(() => {
    if (align !== 'left' || scrollOffset !== 0) {
      const scroll = ref.current
      if (scroll !== null) {
        const scrollLength = Math.max(
          0,
          Math.min(
            align === 'left' && scrollOffset > 0
              ? scrollOffset
              : align === 'center'
              ? maxScrollLeft / 2 + scrollOffset
              : align === 'right' && scrollOffset <= maxScrollLeft
              ? maxScrollLeft - scrollOffset / 2
              : 0,
            maxScrollLeft
          )
        )
        scroll.scrollLeft = scrollLength
        setScrollLeft(scrollLength, true)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current])

  const handleScrollMove = useCallback(() => {
    if (ref.current === null) {
      return
    }
    if (onScroll) {
      onScroll(ref.current.scrollLeft)
    }
  }, [onScroll])

  const [disableGradient, setDisableGradient] = useState(false)

  useIsomorphicLayoutEffect(() => {
    if (isEdge()) {
      setDisableGradient(true)
    }
  }, [])

  // NOTE: Edgeではmaskを使うと要素のレンダリングがバグる（場合によっては画像が表示されない）のでグラデーションを無効にする
  if (!disableGradient && options.hasGradient === true) {
    const fadeInGradient = options.fadeInGradient ?? false
    const overflowGradient = !fadeInGradient
    return (
      <Container ref={visibleAreaRef}>
        <GradientContainer fadeInGradient={fadeInGradient}>
          <RightGradient>
            <LeftGradient show={overflowGradient || scrollLeft > 0}>
              <ScrollArea
                ref={ref}
                scrollLeft={styles.scroll}
                onScroll={handleScrollMove}
              >
                <CarouselContainer ref={innerRef} centerItems={centerItems}>
                  {children}
                </CarouselContainer>
              </ScrollArea>
            </LeftGradient>
          </RightGradient>
        </GradientContainer>
        <ButtonsContainer>
          <CarouselButton
            direction={Direction.Left}
            show={leftShow}
            offset={buttonOffset}
            bottomOffset={bottomOffset}
            padding={buttonPadding}
            gradient={overflowGradient}
            onClick={handleLeft}
          />
          <CarouselButton
            direction={Direction.Right}
            show={rightShow}
            offset={buttonOffset}
            bottomOffset={bottomOffset}
            padding={buttonPadding}
            gradient
            onClick={handleRight}
          />
        </ButtonsContainer>
      </Container>
    )
  }

  return (
    <Container ref={visibleAreaRef}>
      <ScrollArea
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        ref={ref}
        scrollLeft={styles.scroll}
        onScroll={handleScrollMove}
      >
        <CarouselContainer ref={innerRef} centerItems={centerItems}>
          {children}
        </CarouselContainer>
      </ScrollArea>
      <ButtonsContainer>
        <CarouselButton
          direction={Direction.Left}
          show={leftShow}
          offset={buttonOffset}
          bottomOffset={bottomOffset}
          padding={buttonPadding}
          onClick={handleLeft}
        />
        <CarouselButton
          direction={Direction.Right}
          show={rightShow}
          offset={buttonOffset}
          bottomOffset={bottomOffset}
          padding={buttonPadding}
          onClick={handleRight}
        />
      </ButtonsContainer>
    </Container>
  )
}

const CarouselContainer = styled.ul<{ centerItems?: boolean }>`
  vertical-align: top;
  overflow: hidden;
  list-style: none;
  padding: 0;

  /* 最小幅を100%にして親要素にぴったりくっつけることで子要素で要素を均等に割り付けるなどを出来るようにしてある */
  min-width: 100%;
  box-sizing: border-box;

  ${({ centerItems = false }) =>
    centerItems
      ? css`
          display: flex;
          width: max-content;
          margin: 0 auto;
        `
      : css`
          display: inline-flex;
          margin: 0;
        `}
`

const ButtonsContainer = styled.div`
  opacity: 0;
  transition: 0.4s opacity;
`
const Container = styled.div`
  &:hover ${ButtonsContainer} {
    opacity: 1;
  }

  /* CarouselButtonの中にz-index:1があるのでここでコンテキストを切る */
  position: relative;
  z-index: 0;
`

const ScrollArea = styled(animated.div)`
  overflow-x: auto;
  padding: 0;
  margin: 0;

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
`

const GradientContainer = styled.div<{ fadeInGradient: boolean }>`
  /* NOTE: LeftGradientがはみ出るためhidden */
  overflow: hidden;
  ${(p) =>
    !p.fadeInGradient &&
    css`
      margin-left: ${-GRADIENT_WIDTH}px;
      ${CarouselContainer} {
        padding-left: ${GRADIENT_WIDTH}px;
      }
    `}

  margin-right: ${-GRADIENT_WIDTH}px;
  /* stylelint-disable-next-line no-duplicate-selectors */
  ${CarouselContainer} {
    padding-right: ${GRADIENT_WIDTH}px;
  }
`

const RightGradient = styled.div`
  mask-image: linear-gradient(
    to right,
    #000 calc(100% - ${GRADIENT_WIDTH}px),
    transparent
  );
`

const LeftGradient = styled.div<{ show: boolean }>`
  /* NOTE: mask-position が left → negative px の時、right → abs(negative px) の位置に表示されるため */
  margin-right: ${-GRADIENT_WIDTH}px;
  padding-right: ${GRADIENT_WIDTH}px;
  /* NOTE: mask-position に transition をつけたいが vender prefixes 対策で all につける */
  transition: 0.2s all ease-in;
  mask: linear-gradient(to right, transparent, #000 ${GRADIENT_WIDTH}px)
    ${(p) => (p.show ? 0 : -GRADIENT_WIDTH)}px 0;
`
