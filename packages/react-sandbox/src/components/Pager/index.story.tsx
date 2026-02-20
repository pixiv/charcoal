import { Meta, StoryObj } from '@storybook/react-vite'
import Pager from '.'
import { useState } from 'react'

function PagerWithState(args: React.ComponentProps<typeof Pager>) {
  const [page, setPage] = useState(args.page)
  return <Pager {...args} page={page} onChange={setPage} />
}

export default {
  title: 'react-sandbox/Pager',
  component: Pager,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Pager>

export const Default: StoryObj<typeof Pager> = {
  args: {
    page: 5,
    pageCount: 10,
  },
  render: (args) => <PagerWithState {...args} />,
}
