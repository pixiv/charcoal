import { useEffect, useState } from 'react'
import { Meta, StoryObj } from '@storybook/react-vite'
import Pagination, { type PaginationProps } from '.'

type PaginationStoryArgs = Pick<
  PaginationProps,
  'page' | 'pageCount' | 'pageRangeDisplayed' | 'size'
>

function PaginationWithState(args: PaginationStoryArgs) {
  const [page, setPage] = useState(args.page)
  return (
    <Pagination
      page={page}
      pageCount={args.pageCount}
      pageRangeDisplayed={args.pageRangeDisplayed}
      size={args.size}
      onChange={setPage}
    />
  )
}

function parsePageFromHash(fallback: number): number {
  const match = window.location.hash.match(/^#page-(\d+)$/)
  return match ? parseInt(match[1], 10) : fallback
}

function LinkPaginationWithState(args: PaginationStoryArgs) {
  const [page, setPage] = useState(() => parsePageFromHash(args.page))

  useEffect(() => {
    const handleHashChange = () => setPage(parsePageFromHash(args.page))
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [args.page])

  return (
    <div>
      <p style={{ marginBottom: 8, fontSize: 14, color: '#666' }}>
        Current page: {page}
      </p>
      <Pagination
        page={page}
        pageCount={args.pageCount}
        pageRangeDisplayed={args.pageRangeDisplayed}
        size={args.size}
        makeUrl={(p) => `#page-${p}`}
      />
    </div>
  )
}

export default {
  title: 'react/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  render: (args) => <PaginationWithState {...args} />,
} satisfies Meta<typeof Pagination>

export const Default: StoryObj<typeof Pagination> = {
  args: {
    page: 5,
    pageCount: 10,
  },
}

export const FirstPage: StoryObj<typeof Pagination> = {
  args: {
    page: 1,
    pageCount: 10,
  },
}

export const LastPage: StoryObj<typeof Pagination> = {
  args: {
    page: 10,
    pageCount: 10,
  },
}

export const ManyPages: StoryObj<typeof Pagination> = {
  args: {
    page: 50,
    pageCount: 103,
  },
}

export const SizeS: StoryObj<typeof Pagination> = {
  args: {
    page: 5,
    pageCount: 10,
    size: 'S',
  },
}

export const PageRange5: StoryObj<typeof Pagination> = {
  args: {
    page: 5,
    pageCount: 10,
    pageRangeDisplayed: 5,
    size: 'S',
  },
}

export const LinkPaginationStory: StoryObj<typeof Pagination> = {
  args: {
    page: 5,
    pageCount: 10,
  },
  render: (args) => <LinkPaginationWithState {...args} />,
}
