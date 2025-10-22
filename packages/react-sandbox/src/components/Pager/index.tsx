import { memo, useCallback, useDebugValue, useMemo } from 'react'

import styled, { css } from '../../styledExportFix'
import warning from 'warning'
import DotsIcon from '../icons/DotsIcon'
import WedgeIcon, { WedgeDirection } from '../icons/WedgeIcon'
import { useComponentAbstraction } from '../../_lib/ComponentAbstraction'

function usePagerWindow(
  page: number,
  pageCount: number,
  pageRangeDisplayed = 7,
) {
  // ページャーのリンク生成例:
  //
  //     < [ 1 ] [*2*] [ 3 ] [ 4 ] [ 5 ] [ 6 ] [ 7 ] >
  //
  //     < [ 1 ] [ 2 ] [ 3 ] [*4*] [ 5 ] [ 6 ] [ 7 ] >
  //
  //     < [ 1 ]  ...  [ 4 ] [*5*] [ 6 ] [ 7 ] [ 8 ] >
  //
  //     < [ 1 ]  ...  [ 99 ] [*100*] [ 101 ] [ 102 ] [ 103 ] >
  //
  //     < [ 1 ]  ...  [ 99 ] [ 100 ] [ 101 ] [ 102 ] [*103*]
  //
  //       [*1*] [ 2 ] >
  //
  // デザインの意図: 前後移動時のカーソル移動を最小限にする。

  if (process.env.NODE_ENV !== 'production') {
    warning((page | 0) === page, `\`page\` must be integer (${page})`)
    warning(
      (pageCount | 0) === pageCount,
      `\`pageCount\` must be integer (${pageCount})`,
    )
    warning(
      (pageRangeDisplayed | 0) === pageRangeDisplayed,
      `\`pageRangeDisplayed\` must be integer (${pageRangeDisplayed})`,
    )
    warning(pageRangeDisplayed > 2, `\`windowSize\` must be greater than 2`)
  }

  const window = useMemo(() => {
    const visibleFirstPage = 1
    const visibleLastPage = Math.min(
      pageCount,
      Math.max(page + Math.floor(pageRangeDisplayed / 2), pageRangeDisplayed),
    )

    if (visibleLastPage <= pageRangeDisplayed) {
      // 表示範囲が1-7ページなら省略は無い。
      return Array.from(
        { length: 1 + visibleLastPage - visibleFirstPage },
        (_, i) => visibleFirstPage + i,
      )
    } else {
      const start = visibleLastPage - (pageRangeDisplayed - 1) + 2
      return [
        // 表示範囲が1-7ページを超えるなら、
        // - 1ページ目は固定で表示する
        visibleFirstPage,
        // - 2ページ目から現在のページの直前までは省略する
        '...' as const,
        ...Array.from(
          { length: 1 + visibleLastPage - start },
          (_, i) => start + i,
        ),
      ]
    }
  }, [page, pageCount, pageRangeDisplayed])

  useDebugValue(window)

  return window
}

interface CommonProps {
  page: number
  pageCount: number
  pageRangeDisplayed?: number
}

export interface PagerProps extends CommonProps {
  onChange(newPage: number): void
}

// this pager is just regular buttons; for links use LinkPager
export default memo(function Pager({
  page,
  pageCount,
  pageRangeDisplayed,
  onChange,
}: PagerProps) {
  // TODO: refactor Pager and LinkPager to use a common parent component
  const window = usePagerWindow(page, pageCount, pageRangeDisplayed)
  const makeClickHandler = useCallback(
    (value: number) => () => {
      onChange(value)
    },
    [onChange],
  )

  const hasNext = page < pageCount
  const hasPrev = page > 1
  return (
    <PagerContainer>
      <CircleButton
        type="button"
        hidden={!hasPrev}
        disabled={!hasPrev}
        onClick={makeClickHandler(Math.max(1, page - 1))}
        noBackground
      >
        <WedgeIcon size={16} direction={WedgeDirection.Left} />
      </CircleButton>
      {window.map((p) =>
        p === '...' ? (
          <Spacer key={p}>
            <DotsIcon size={20} />
          </Spacer>
        ) : p === page ? (
          // we remove the onClick but don't mark it as disabled to preserve keyboard focus
          // not doing so causes the focus ring to flicker in and out of existence
          <CircleButton key={p} type="button" aria-current>
            <Text>{p}</Text>
          </CircleButton>
        ) : (
          <CircleButton key={p} type="button" onClick={makeClickHandler(p)}>
            <Text>{p}</Text>
          </CircleButton>
        ),
      )}
      <CircleButton
        type="button"
        hidden={!hasNext}
        disabled={!hasNext}
        onClick={makeClickHandler(Math.min(pageCount, page + 1))}
        noBackground
      >
        <WedgeIcon size={16} direction={WedgeDirection.Right} />
      </CircleButton>
    </PagerContainer>
  )
})

export interface LinkPagerProps extends CommonProps {
  makeUrl(page: number): string
}

export function LinkPager({
  page,
  pageCount,
  pageRangeDisplayed,
  makeUrl,
}: LinkPagerProps) {
  const { Link } = useComponentAbstraction()
  const window = usePagerWindow(page, pageCount, pageRangeDisplayed)

  const hasNext = page < pageCount
  const hasPrev = page > 1
  return (
    <PagerContainer>
      <Link to={makeUrl(Math.max(1, page - 1))}>
        <CircleButton hidden={!hasPrev} aria-disabled={!hasPrev} noBackground>
          <WedgeIcon size={16} direction={WedgeDirection.Left} />
        </CircleButton>
      </Link>
      {window.map((p) =>
        p === '...' ? (
          <Spacer key={p}>
            <DotsIcon size={20} subLink />
          </Spacer>
        ) : p === page ? (
          <CircleButton key={p} type="button" aria-current>
            <Text>{p}</Text>
          </CircleButton>
        ) : (
          <Link key={p} to={makeUrl(p)}>
            <CircleButton type="button">
              <Text>{p}</Text>
            </CircleButton>
          </Link>
        ),
      )}
      <Link to={makeUrl(Math.min(pageCount, page + 1))}>
        <CircleButton hidden={!hasNext} aria-disabled={!hasNext} noBackground>
          <WedgeIcon size={16} direction={WedgeDirection.Right} />
        </CircleButton>
      </Link>
    </PagerContainer>
  )
}

const PagerContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`

const CircleButton = styled.button<{ noBackground?: boolean }>`
  font-size: 1rem;
  line-height: calc(1em + 8px);
  text-decoration: none;
  border: none;
  outline: none;
  touch-action: manipulation;
  user-select: none;
  transition:
    box-shadow 0.2s ease 0s,
    color 0.2s ease 0s,
    background 0.2s ease 0s,
    opacity 0.2s ease 0s;

  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: content-box;
  min-width: 24px;
  min-height: 24px;
  padding: 8px;
  cursor: pointer;
  font-weight: bold;
  /* HACK:
   * Safari doesn't correctly repaint the elements when they're reordered in response to interaction.
   * This forces it to repaint them. This doesn't work if put on the parents either, has to be here.
   */
  /* stylelint-disable-next-line property-no-vendor-prefix */
  -webkit-transform: translateZ(0);

  &[hidden] {
    visibility: hidden;
    display: block;
  }

  border-radius: 48px;

  background: transparent;
  color: ${({ theme }) => theme.color.text3};

  &:hover {
    background: ${({ theme }) => theme.color.surface3};
    color: ${({ theme }) => theme.color.text2};
  }

  &[aria-current] {
    background-color: ${({ theme }) => theme.color.surface6};
    color: ${({ theme }) => theme.color.text5};
  }

  &[aria-current]:hover {
    background-color: ${({ theme }) => theme.color.surface6};
    color: ${({ theme }) => theme.color.text5};
  }

  ${({ noBackground = false }) =>
    noBackground &&
    css`
      &:hover {
        background: transparent;
      }
    `}
`

const Spacer = styled(CircleButton).attrs({ type: 'button', disabled: true })`
  && {
    color: ${({ theme }) => theme.color.text3};
    background: none;
  }
`

const Text = 'span'
