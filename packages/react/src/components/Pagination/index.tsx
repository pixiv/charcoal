import './index.css'

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

  // 'use memo' により React Compiler が自動でメモ化するため useCallback は不要
  const makeClickHandler = (value: number) => () => onChange?.(value)

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

  const PageItem = ({ value }: { value: number | string }) => {
    // 省略記号
    if (value === '...') {
      return (
        <IconButton
          icon="24/Dot"
          size="M"
          disabled
          className="charcoal-pagination-button charcoal-pagination-spacer"
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

  return (
    <nav {...navProps} className={classNames} aria-label="Pagination">
      <NavButton direction="prev" />
      {window.map((p) => (
        <PageItem key={p} value={p} />
      ))}
      <NavButton direction="next" />
    </nav>
  )
}
