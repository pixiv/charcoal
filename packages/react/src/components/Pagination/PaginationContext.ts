import { createContext, useContext } from 'react'

export type Size = 'S' | 'M'

export type PageRangeDisplayed = 5 | 7

export type LinkComponentProps = {
  href: string
  className?: string
  children?: React.ReactNode
}

export type PaginationContextValue<T extends React.ElementType = 'a'> = {
  page: number
  pageCount: number
  size: Size
  isLinkMode: boolean
  makeUrl?: (page: number) => string
  LinkComponent: T
  makeClickHandler: (value: number) => () => void
  linkProps?: Omit<React.ComponentPropsWithoutRef<T>, 'href' | 'children'>
}

export const PaginationContext = createContext<PaginationContextValue<
  React.ElementType<LinkComponentProps>
> | null>(null)

export function usePaginationContext<
  T extends React.ElementType = 'a',
>(): PaginationContextValue<T> {
  const context = useContext(PaginationContext)
  if (context == null) {
    throw new Error(
      'Pagination components must be used within a Pagination component',
    )
  }
  return context as PaginationContextValue<T>
}
