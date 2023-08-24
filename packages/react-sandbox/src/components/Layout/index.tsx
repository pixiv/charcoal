import { useContext } from 'react'
import * as React from 'react'
import styled, { createGlobalStyle, css } from 'styled-components'
import {
  MAIN_COLUMN_HORIZONTAL_MIN_MARGIN,
  RESPONSIVE_LEFT_WIDTH,
  RESPONSIVE_MAIN_MAX_WIDTH,
} from '../../foundation/constants'
import { useMediaScreen1 } from '../../foundation/hooks'
import { columnSystem, COLUMN_UNIT, GUTTER_UNIT } from '@charcoal-ui/foundation'
import { maxWidth } from '@charcoal-ui/utils'

interface Props {
  menu?: React.ReactNode
  isHeaderTopMenu?: boolean
  children: React.ReactNode
  header?: React.ReactNode
  wide?: boolean
  center?: boolean
}

const LayoutConfigContext = React.createContext({
  wide: false,
  center: false,
  withLeft: false,
})

export default function Layout({
  menu,
  children,
  header,
  center = false,
  wide,
  isHeaderTopMenu = false,
}: Props) {
  const config = {
    center,
    wide: center ? true : wide ?? false,
    withLeft: menu != null && !isHeaderTopMenu,
  }
  return (
    <LayoutRoot>
      <LayoutConfigContext.Provider value={config}>
        {config.withLeft && <LeftArea>{menu}</LeftArea>}
        <MainArea center={center}>
          {header != null && <Header>{header}</Header>}
          {isHeaderTopMenu && (
            <HeaderTopMenuContainer>{menu}</HeaderTopMenuContainer>
          )}
          <Grid>{children}</Grid>
        </MainArea>
      </LayoutConfigContext.Provider>
      <GlobalStyle />
    </LayoutRoot>
  )
}

const HeaderTopMenuContainer = styled.div`
  margin-bottom: 40px;
  overflow-x: auto;
  word-break: keep-all;

  @media ${({ theme }) => maxWidth(theme.breakpoint.screen1)} {
    margin-bottom: 0;
    padding-left: 16px;
    padding-bottom: 16px;
    background-color: ${({ theme }) => theme.color.surface2};
  }
`

const GlobalStyle = createGlobalStyle`
  :root {
    background-color: ${({ theme }) => theme.color.background2};

    @media ${({ theme }) => maxWidth(theme.breakpoint.screen1)} {
      background-color: ${({ theme }) => theme.color.background1};
    }
  }
`

const LayoutRoot = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.color.background2};

  @media ${({ theme }) => maxWidth(theme.breakpoint.screen1)} {
    background-color: ${({ theme }) => theme.color.background1};
  }
`

const LeftArea = styled.div`
  min-width: ${RESPONSIVE_LEFT_WIDTH}px;
  padding: 40px 0 40px ${GUTTER_UNIT}px;
  box-sizing: border-box;

  @media ${({ theme }) => theme.breakpoint.screen3} {
    display: none;
  }
`

const MainArea = styled.div<{ center: boolean }>`
  flex-grow: 1;
  /* https://www.w3.org/TR/css-flexbox-1/#min-size-auto */
  min-width: 0;
  max-width: ${(p) =>
    p.center
      ? columnSystem(6, COLUMN_UNIT, GUTTER_UNIT)
      : RESPONSIVE_MAIN_MAX_WIDTH}px;
  padding: 40px ${MAIN_COLUMN_HORIZONTAL_MIN_MARGIN}px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => maxWidth(theme.breakpoint.screen1)} {
    padding: 0;
  }
`

const Header = styled.div`
  font-weight: bold;
  margin-bottom: 12px;
  font-size: 20px;
  line-height: 28px;
  color: ${({ theme }) => theme.color.text2};

  @media ${({ theme }) => maxWidth(theme.breakpoint.screen1)} {
    margin-bottom: 0;
    padding: 12px;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.color.surface2};
  }
`

const Grid = styled.div`
  display: grid;
  gap: ${GUTTER_UNIT}px;
  grid-template-columns: 1fr;
  grid-auto-columns: 1fr;
  grid-auto-rows: auto;

  @media ${({ theme }) => maxWidth(theme.breakpoint.screen1)} {
    gap: 0;
    background-color: ${({ theme }) => theme.color.background1};
    padding-bottom: 60px;
  }
`

interface LayoutItemProps {
  span: number
  children?: React.ReactNode
}

export const LayoutItem = React.forwardRef<HTMLDivElement, LayoutItemProps>(
  function LayoutItem({ span, children }, ref) {
    const { withLeft } = useContext(LayoutConfigContext)

    return (
      <StyledLayoutItem span={span} withLeft={withLeft} ref={ref}>
        {children}
      </StyledLayoutItem>
    )
  }
)

interface StyledLayoutItemProps {
  span: number
  withLeft: boolean
}

const StyledLayoutItem = styled.div<StyledLayoutItemProps>`
  grid-column-start: auto;
  grid-column-end: span ${(p) => p.span};
  border-radius: 24px;
  color: ${({ theme }) => theme.color.text2};
  background-color: ${({ theme }) => theme.color.background1};
  /* https://www.w3.org/TR/css-grid-1/#min-size-auto */
  min-width: 0;

  @media ${(p) =>
      p.withLeft ? p.theme.breakpoint.screen4 : p.theme.breakpoint.screen3} {
    ${(p) =>
      p.span > 2 &&
      css`
        grid-column-end: span 2;
      `}
  }

  @media ${({ theme }) => maxWidth(theme.breakpoint.screen1)} {
    ${(p) =>
      p.span > 1 &&
      css`
        grid-column-end: span 1;
      `}

    border-radius: 0;
    padding-bottom: 40px;
  }
`

export function LayoutItemHeader({ children }: { children: React.ReactNode }) {
  const { wide, center } = useContext(LayoutConfigContext)

  return (
    <StyledLayoutItemHeader wide={wide} center={center}>
      {children}
    </StyledLayoutItemHeader>
  )
}

interface StyledLayoutItemHeaderProps {
  wide: boolean
  center: boolean
}

const StyledLayoutItemHeader = styled.div<StyledLayoutItemHeaderProps>`
  padding: 0 ${(p) => (p.wide ? 40 : 24)}px;
  height: ${(p) => (p.wide ? 64 : 48)}px;
  display: grid;
  align-items: center;
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
  background-color: ${({ theme }) => theme.color.surface2};
  color: ${({ theme }) => theme.color.text2};
  border-radius: 24px 24px 0 0;
  ${(p) =>
    p.center &&
    css`
      justify-content: center;
    `}

  @media ${({ theme }) => maxWidth(theme.breakpoint.screen1)} {
    margin-top: 4px;
    padding: 0 16px;
    background: none;
    overflow-x: auto;
    border-radius: unset;
    ${(p) =>
      p.wide &&
      css`
        height: 48px;
        margin-top: 0;
      `}
  }
`

export const LAYOUT_ITEM_BODY_PADDING = {
  wide: {
    x: 40,
    y: 40,
  },
  default: {
    x: 24,
    y: 24,
  },
  column1: {
    x: 16,
    y: 16,
  },
  narrow: {
    x: 24,
    yTop: 12,
    yBottom: 20,
  },
  narrowColumn1: {
    x: 16,
    yTop: 4,
    yBottom: 0,
  },
}

export function LayoutItemBody({
  children,
  horizontal = false,
  narrow = false,
}: {
  children: React.ReactNode
  horizontal?: boolean
  narrow?: boolean
}) {
  const { wide } = useContext(LayoutConfigContext)

  return (
    <StyledLayoutItemBody wide={wide} horizontal={horizontal} narrow={narrow}>
      {children}
    </StyledLayoutItemBody>
  )
}

interface StyledLayoutItemBodyProps {
  wide: boolean
  horizontal: boolean
  narrow: boolean
}

export const StyledLayoutItemBody = styled.div<StyledLayoutItemBodyProps>`
  padding: ${(p) =>
    p.narrow
      ? `${LAYOUT_ITEM_BODY_PADDING.narrow.yTop}px ${
          p.horizontal ? 0 : LAYOUT_ITEM_BODY_PADDING.narrow.x
        }px ${LAYOUT_ITEM_BODY_PADDING.narrow.yBottom}px`
      : p.wide
      ? `${p.horizontal ? 0 : LAYOUT_ITEM_BODY_PADDING.wide.y}px ${
          LAYOUT_ITEM_BODY_PADDING.wide.x
        }px`
      : `${p.horizontal ? 0 : LAYOUT_ITEM_BODY_PADDING.default.y}px ${
          LAYOUT_ITEM_BODY_PADDING.default.x
        }px`};

  @media ${({ theme }) => maxWidth(theme.breakpoint.screen1)} {
    padding: ${(p) =>
      p.narrow
        ? `${LAYOUT_ITEM_BODY_PADDING.narrowColumn1.yTop}px ${
            p.horizontal ? 0 : LAYOUT_ITEM_BODY_PADDING.narrowColumn1.x
          }px ${LAYOUT_ITEM_BODY_PADDING.narrowColumn1.yBottom}px`
        : `${LAYOUT_ITEM_BODY_PADDING.column1.y}px ${
            LAYOUT_ITEM_BODY_PADDING.column1.x
          }px ${0}`};
  }

  width: 100%;
  box-sizing: border-box;
`

export function useLayoutItemBodyPadding() {
  const { wide } = useContext(LayoutConfigContext)
  return useMediaScreen1()
    ? LAYOUT_ITEM_BODY_PADDING.column1
    : wide
    ? LAYOUT_ITEM_BODY_PADDING.wide
    : LAYOUT_ITEM_BODY_PADDING.default
}

export function CancelLayoutItemBodyPadding({
  children,
  cancelTop,
}: {
  children: React.ReactNode
  cancelTop?: boolean
}) {
  const { wide } = useContext(LayoutConfigContext)

  return (
    <StyledCancelLayoutItemBodyPadding wide={wide} cancelTop={cancelTop}>
      {children}
    </StyledCancelLayoutItemBodyPadding>
  )
}

interface StyledCancelLayoutItemBodyPaddingProps {
  wide: boolean
  cancelTop?: boolean
}

/* eslint-disable max-len */
export const StyledCancelLayoutItemBodyPadding = styled.div<StyledCancelLayoutItemBodyPaddingProps>`
  margin: 0 -${(p) => (p.wide ? LAYOUT_ITEM_BODY_PADDING.wide.x : LAYOUT_ITEM_BODY_PADDING.default.x)}px;
  margin-top: -${({ cancelTop = false, wide }) => (!cancelTop ? 0 : wide ? LAYOUT_ITEM_BODY_PADDING.wide.y : LAYOUT_ITEM_BODY_PADDING.default.y)}px;

  @media ${({ theme }) => maxWidth(theme.breakpoint.screen1)} {
    margin: 0 -${LAYOUT_ITEM_BODY_PADDING.column1.x}px;
    margin-top: -${({ cancelTop = false }) => (!cancelTop ? 0 : LAYOUT_ITEM_BODY_PADDING.column1.x)}px;
  }
`
/* eslint-enable max-len */
