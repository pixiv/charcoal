import { useEffect, useState } from 'react'
import { Meta, StoryObj } from '@storybook/react-webpack5'
import Pagination, { LinkPagination } from '.'

function PaginationWithState(args: React.ComponentProps<typeof Pagination>) {
  const [page, setPage] = useState(args.page)
  return <Pagination {...args} page={page} onChange={setPage} />
}

function parsePageFromHash(fallback: number): number {
  const match = window.location.hash.match(/^#page-(\d+)$/)
  return match ? parseInt(match[1], 10) : fallback
}

function LinkPaginationWithState(
  args: React.ComponentProps<typeof LinkPagination>,
) {
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
      <LinkPagination {...args} page={page} makeUrl={(p) => `#page-${p}`} />
    </div>
  )
}

export default {
  title: 'react/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Pagination>

export const Default: StoryObj<typeof Pagination> = {
  args: {
    page: 5,
    pageCount: 10,
  },
  render: (args) => <PaginationWithState {...args} />,
}

export const FirstPage: StoryObj<typeof Pagination> = {
  args: {
    page: 1,
    pageCount: 10,
  },
  render: (args) => <PaginationWithState {...args} />,
}

export const LastPage: StoryObj<typeof Pagination> = {
  args: {
    page: 10,
    pageCount: 10,
  },
  render: (args) => <PaginationWithState {...args} />,
}

export const ManyPages: StoryObj<typeof Pagination> = {
  args: {
    page: 50,
    pageCount: 103,
  },
  render: (args) => <PaginationWithState {...args} />,
}

export const LinkPaginationStory: StoryObj<typeof LinkPagination> = {
  args: {
    page: 5,
    pageCount: 10,
    makeUrl: (p) => `#page-${p}`,
  },
  render: (args) => <LinkPaginationWithState {...args} />,
}
