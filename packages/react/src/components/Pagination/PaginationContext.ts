import { createContext, useContext } from 'react'

export type Size = 'S' | 'M'

export type PageRangeDisplayed = 5 | 7

export type LinkComponentProps = {
  href: string
  className?: string
  children?: React.ReactNode
}

type PaginationContextValue = {
  page: number
  pageCount: number
  size: Size
  isLinkMode: boolean
  makeUrl?: (page: number) => string
  LinkComponent: React.ElementType<LinkComponentProps>
  makeClickHandler: (value: number) => () => void
}

export const PaginationContext = createContext<PaginationContextValue | null>(
  null,
)

export function usePaginationContext(): PaginationContextValue {
  const context = useContext(PaginationContext)
  if (context == null) {
    throw new Error(
      'Pagination components must be used within a Pagination component',
    )
  }
  return context
}
