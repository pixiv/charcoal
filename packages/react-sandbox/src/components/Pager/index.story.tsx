import React, { useState } from 'react'
import {
  MemoryRouter as Router,
  Route,
  Link as RouterLink,
  useParams,
} from 'react-router-dom'
import { Story } from '../../_lib/compat'
import Pager, { LinkPager } from '.'
import { ComponentAbstraction } from '@charcoal/react'

export default {
  title: 'Sandbox/Pager',
  component: Pager,
  argTypes: {
    page: {
      control: {
        type: 'number',
        disable: true,
      },
    },
    pageCount: {
      control: {
        type: 'number',
        min: 1,
      },
    },
  },
}

interface Props {
  page: number
  pageCount: number
}

const DefaultStory: Story<Props> = ({ page: defaultPage, pageCount }) => {
  const [page, setPage] = useState(defaultPage)
  return <Pager page={page} onChange={setPage} pageCount={pageCount} />
}

export const Default = DefaultStory.bind({})
Default.args = {
  page: 1,
  pageCount: 10,
}

const makeUrl = (page: number) => `/${page}`

const LinkStory: Story<Props> = ({ page: defaultPage, pageCount }) => (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  <ComponentAbstraction components={{ Link: RouterLink }}>
    <Router
      initialEntries={Array.from({ length: pageCount }).map((_, i) =>
        makeUrl(i + 1)
      )}
      initialIndex={defaultPage - 1}
    >
      <Route
        path="/:page"
        element={<CurrentPager pageCount={pageCount}></CurrentPager>}
      />
    </Router>
  </ComponentAbstraction>
)

function CurrentPager({ pageCount }: { pageCount: number }) {
  const params = useParams()
  const page = params.page !== undefined ? parseInt(params.page, 10) : 1

  return <LinkPager makeUrl={makeUrl} page={page} pageCount={pageCount} />
}

export const Link = LinkStory.bind({})
Link.args = {
  page: 1,
  pageCount: 10,
}

export const NotCollapsed = LinkStory.bind({})
NotCollapsed.args = {
  page: 4,
  pageCount: 7,
}

export const CollapsedWithDots = LinkStory.bind({})
CollapsedWithDots.args = {
  page: 5,
  pageCount: 8,
}

export const LastPage = LinkStory.bind({})
LastPage.args = {
  page: 103,
  pageCount: 103,
}

export const One = LinkStory.bind({})
One.args = {
  page: 1,
  pageCount: 1,
}
