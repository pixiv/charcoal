import './index.css'

import { memo, useCallback } from 'react'
import { usePagerWindow } from './helper'
import { useClassNames } from '../../_lib/useClassNames'
import IconButton from '../IconButton'

const Text = 'span'

interface CommonProps {
  page: number
  pageCount: number
  pageRangeDisplayed?: number
}

export interface PaginationProps extends CommonProps {
  onChange(newPage: number): void
}

export default memo(function Pagination({
  page,
  pageCount,
  pageRangeDisplayed,
  onChange,
  className,
  ...props
}: PaginationProps & Omit<React.ComponentPropsWithoutRef<'nav'>, 'onChange'>) {
  const window = usePagerWindow(page, pageCount, pageRangeDisplayed)
  const makeClickHandler = useCallback(
    (value: number) => () => {
      onChange(value)
    },
    [onChange],
  )

  const hasNext = page < pageCount
  const hasPrev = page > 1
  const classNames = useClassNames('charcoal-pagination', className)

  return (
    <nav {...props} className={classNames}>
      <IconButton
        icon="24/Prev"
        size="M"
        className="charcoal-pagination-button"
        data-no-background
        hidden={!hasPrev}
        disabled={!hasPrev}
        onClick={makeClickHandler(Math.max(1, page - 1))}
      />
      {window.map((p) =>
        p === '...' ? (
          <IconButton
            key={p}
            icon="24/Dot"
            size="M"
            disabled
            className="charcoal-pagination-button charcoal-pagination-spacer"
            aria-hidden
          />
        ) : p === page ? (
          // we remove the onClick but don't mark it as disabled to preserve keyboard focus
          // not doing so causes the focus ring to flicker in and out of existence
          <button
            key={p}
            type="button"
            className="charcoal-pagination-button"
            aria-current
          >
            <Text>{p}</Text>
          </button>
        ) : (
          <button
            key={p}
            type="button"
            className="charcoal-pagination-button"
            onClick={makeClickHandler(p)}
          >
            <Text>{p}</Text>
          </button>
        ),
      )}
      <IconButton
        icon="24/Next"
        size="M"
        className="charcoal-pagination-button"
        data-no-background
        hidden={!hasNext}
        disabled={!hasNext}
        onClick={makeClickHandler(Math.min(pageCount, page + 1))}
      />
    </nav>
  )
})

export interface LinkPaginationProps extends CommonProps {
  makeUrl(page: number): string
}

export function LinkPagination({
  page,
  pageCount,
  pageRangeDisplayed,
  makeUrl,
  className,
  ...props
}: LinkPaginationProps & React.ComponentPropsWithoutRef<'nav'>) {
  const window = usePagerWindow(page, pageCount, pageRangeDisplayed)

  const hasNext = page < pageCount
  const hasPrev = page > 1
  const classNames = useClassNames('charcoal-pagination', className)

  return (
    <nav {...props} className={classNames}>
      <IconButton
        icon="24/Prev"
        size="M"
        component="a"
        href={makeUrl(Math.max(1, page - 1))}
        className="charcoal-pagination-button"
        data-no-background
        hidden={!hasPrev}
        aria-disabled={!hasPrev}
      />
      {window.map((p) =>
        p === '...' ? (
          <IconButton
            key={p}
            icon="24/Dot"
            size="M"
            disabled
            className="charcoal-pagination-button charcoal-pagination-spacer"
            aria-hidden
          />
        ) : p === page ? (
          <span key={p} className="charcoal-pagination-button" aria-current>
            <Text>{p}</Text>
          </span>
        ) : (
          <a key={p} href={makeUrl(p)} className="charcoal-pagination-button">
            <Text>{p}</Text>
          </a>
        ),
      )}
      <IconButton
        icon="24/Next"
        size="M"
        component="a"
        href={makeUrl(Math.min(pageCount, page + 1))}
        className="charcoal-pagination-button"
        data-no-background
        hidden={!hasNext}
        aria-disabled={!hasNext}
      />
    </nav>
  )
}
