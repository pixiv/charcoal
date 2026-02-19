import { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react-webpack5'
import Pagination, { LinkPagination } from '.'

function PaginationWithState(args: React.ComponentProps<typeof Pagination>) {
  const [page, setPage] = useState(args.page)
  return <Pagination {...args} page={page} onChange={setPage} />
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
  render: (args) => <LinkPagination {...args} />,
}
