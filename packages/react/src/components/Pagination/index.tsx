import './index.css'

import { useCallback } from 'react'
import { usePaginationWindow } from './helper'
import { useClassNames } from '../../_lib/useClassNames'
import IconButton from '../IconButton'

interface CommonProps {
  page: number
  pageCount: number
  pageRangeDisplayed?: number
}

type LinkComponentProps = {
  href: string
  className?: string
  children?: React.ReactNode
}

type NavProps = Omit<React.ComponentPropsWithoutRef<'nav'>, 'onChange'>

/**
 * Pagination component. Use either `onChange` (button mode) or `makeUrl` (link mode).
 *
 * @example
 * // Button mode - for client-side state
 * <Pagination page={1} pageCount={10} onChange={setPage} />
 *
 * @example
 * // Link mode - for server routing / static pages
 * <Pagination page={1} pageCount={10} makeUrl={(p) => `?page=${p}`} />
 *
 * @example
 * // Link mode with custom component (e.g. Next.js Link)
 * <Pagination page={1} pageCount={10} makeUrl={(p) => `?page=${p}`} component={Link} />
 */
export type PaginationProps = CommonProps &
  NavProps &
  (
    | { onChange(newPage: number): void; makeUrl?: never; component?: never }
    | {
        makeUrl(page: number): string
        onChange?: never
        /**
         * The component used for link elements. Receives `href`, `className`, and `children`.
         * @default 'a'
         */
        component?: React.ElementType<LinkComponentProps>
      }
  )

export default function Pagination({
  page,
  pageCount,
  pageRangeDisplayed,
  onChange,
  makeUrl,
  component: LinkComponent = 'a',
  className,
  ...navProps
}: PaginationProps) {
  'use memo'
  const window = usePaginationWindow(page, pageCount, pageRangeDisplayed)
  const isLinkMode = makeUrl !== undefined

  const makeClickHandler = useCallback(
    (value: number) => () => onChange?.(value),
    [onChange],
  )

  const classNames = useClassNames('charcoal-pagination', className)

  const NavButton = ({ direction }: { direction: 'prev' | 'next' }) => {
    const isPrev = direction === 'prev'
    const targetPage = isPrev
      ? Math.max(1, page - 1)
      : Math.min(pageCount, page + 1)
    const disabled = isPrev ? page <= 1 : page >= pageCount

    return (
      <IconButton
        icon={isPrev ? '24/Prev' : '24/Next'}
        size="M"
        className="charcoal-pagination-button"
        hidden={disabled}
        {...(isLinkMode && makeUrl
          ? {
              component: LinkComponent as 'a',
              href: makeUrl(targetPage),
              'aria-disabled': disabled,
            }
          : {
              disabled,
              onClick: makeClickHandler(targetPage),
            })}
      />
    )
  }

  const renderPageItem = (p: number | string) => {
    // 省略記号
    if (p === '...') {
      return (
        <IconButton
          key={p}
          icon="24/Dot"
          size="M"
          disabled
          className="charcoal-pagination-button charcoal-pagination-spacer"
          aria-hidden
        />
      )
    }
    // 現在ページ（クリック不可）
    if (p === page) {
      return (
        <span
          key={p}
          className="charcoal-pagination-button"
          aria-current="page"
        >
          {p}
        </span>
      )
    }
    // リンクモード: ページへのリンク
    if (isLinkMode && makeUrl) {
      return (
        <LinkComponent
          key={p}
          href={makeUrl(p as number)}
          className="charcoal-pagination-button"
        >
          {p}
        </LinkComponent>
      )
    }
    // ボタンモード: クリックでページ遷移
    return (
      <button
        key={p}
        type="button"
        className="charcoal-pagination-button"
        onClick={makeClickHandler(p as number)}
      >
        {p}
      </button>
    )
  }

  return (
    <nav {...navProps} className={classNames} aria-label="Pagination">
      <NavButton direction="prev" />
      {window.map(renderPageItem)}
      <NavButton direction="next" />
    </nav>
  )
}
