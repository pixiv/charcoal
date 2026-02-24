import './index.css'

import { usePaginationWindow } from './helper'
import { useClassNames } from '../../_lib/useClassNames'
import IconButton from '../IconButton'
import {
  PaginationContext,
  usePaginationContext,
  type LinkComponentProps,
  type PageRangeDisplayed,
  type Size,
} from './PaginationContext'

type NavButtonProps = {
  direction: 'prev' | 'next'
}

function NavButton({ direction }: NavButtonProps) {
  'use memo'
  const {
    page,
    pageCount,
    size,
    isLinkMode,
    makeUrl,
    LinkComponent,
    makeClickHandler,
    linkProps,
  } = usePaginationContext()

  const isPrev = direction === 'prev'
  const targetPage = isPrev
    ? Math.max(1, page - 1)
    : Math.min(pageCount, page + 1)
  const disabled = isPrev ? page <= 1 : page >= pageCount

  return (
    <IconButton
      icon={isPrev ? '24/Prev' : '24/Next'}
      size={size}
      hidden={disabled}
      className="charcoal-pagination-nav-button"
      {...(isLinkMode && makeUrl
        ? {
            component: LinkComponent as 'a',
            href: makeUrl(targetPage),
            'aria-disabled': disabled,
            ...linkProps,
          }
        : {
            disabled,
            onClick: makeClickHandler(targetPage),
          })}
    />
  )
}

function PageItem({ value }: { value: number | string }) {
  'use memo'
  const {
    page,
    size,
    isLinkMode,
    makeUrl,
    LinkComponent,
    makeClickHandler,
    linkProps,
  } = usePaginationContext()
  // 省略記号
  if (value === '...') {
    return (
      <IconButton
        icon="24/Dot"
        size={size}
        disabled
        className="charcoal-pagination-spacer"
        aria-hidden
      />
    )
  }
  // 現在ページ（クリック不可）
  if (value === page) {
    return (
      <span className="charcoal-pagination-button" aria-current="page">
        {value}
      </span>
    )
  }
  if (typeof value !== 'number') return null
  // リンクモード: ページへのリンク
  if (isLinkMode && makeUrl) {
    return (
      <LinkComponent
        href={makeUrl(value)}
        className="charcoal-pagination-button"
        {...linkProps}
      >
        {value}
      </LinkComponent>
    )
  }
  // ボタンモード: クリックでページ遷移
  return (
    <button
      type="button"
      className="charcoal-pagination-button"
      onClick={makeClickHandler(value)}
    >
      {value}
    </button>
  )
}

interface CommonProps {
  page: number
  pageCount: number
  pageRangeDisplayed?: PageRangeDisplayed
  size?: Size
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
 *
 * @example
 * // Link mode with linkProps (e.g. Next.js scroll)
 * <Pagination page={1} pageCount={10} makeUrl={(p) => `?page=${p}`} component={Link} linkProps={{ scroll: 'marker' }} />
 */
export type PaginationProps = CommonProps &
  NavProps &
  (
    | {
        onChange(newPage: number): void
        makeUrl?: never
        component?: never
        linkProps?: undefined
      }
    | {
        makeUrl(page: number): string
        onChange?: never
        /**
         * The component used for link elements. Receives `href`, `className`, and `children`.
         * @default 'a'
         */
        component?: React.ElementType<LinkComponentProps>
        /**
         * Additional props passed to all link elements (e.g. Next.js Link's scroll, prefetch).
         */
        linkProps?: Record<string, unknown>
      }
  )

export default function Pagination({
  page,
  pageCount,
  pageRangeDisplayed,
  size = 'M',
  onChange,
  makeUrl,
  component: LinkComponent = 'a',
  linkProps,
  className,
  ...navProps
}: PaginationProps) {
  'use memo'
  const window = usePaginationWindow(page, pageCount, pageRangeDisplayed)
  const isLinkMode = makeUrl !== undefined
  const makeClickHandler = (value: number) => () => onChange?.(value)
  const classNames = useClassNames('charcoal-pagination', className)

  const contextValue = {
    page,
    pageCount,
    size,
    isLinkMode,
    makeUrl,
    LinkComponent,
    makeClickHandler,
    linkProps,
  }

  return (
    <PaginationContext.Provider value={contextValue}>
      <nav
        className={classNames}
        data-size={size}
        aria-label="Pagination"
        {...navProps}
      >
        <NavButton direction="prev" />
        {window.map((p) => (
          <PageItem key={p} value={p} />
        ))}
        <NavButton direction="next" />
      </nav>
    </PaginationContext.Provider>
  )
}
