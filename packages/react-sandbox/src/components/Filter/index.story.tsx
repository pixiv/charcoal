import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'
import {
  Link as RouterLink,
  MemoryRouter as Router,
  Route,
  useParams,
  useNavigate,
  Routes,
} from 'react-router-dom'
import Filter, { FilterButton, FilterLink } from '.'
import { ComponentAbstraction } from '@charcoal-ui/react'

export default {
  title: 'Sandbox/Filter',
  component: Filter,
}

const makeUrl = (page: number) => `/${page}`

export function Default() {
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error TODO: adapt to react-router@6  (props should be covariant not bivariant)
    <ComponentAbstraction components={{ Link: RouterLink }}>
      <Router
        initialEntries={Array.from({ length: 5 }).map((_, i) => makeUrl(i + 1))}
        initialIndex={0}
      >
        <Routes>
          <Route path="/:page" element={<FilterButtons />} />
        </Routes>
      </Router>
    </ComponentAbstraction>
  )
}

function FilterButtons() {
  const navigate = useNavigate()
  const params = useParams()
  const page = params.page !== undefined ? parseInt(params.page, 10) : 0

  return (
    <Filter>
      <FilterLink to={makeUrl(0)} active={page === 0}>
        新しい順
      </FilterLink>
      <FilterLink to={makeUrl(1)} active={page === 1}>
        古い順
      </FilterLink>
      <FilterButton active={page === 2} onClick={() => navigate('2')}>
        人気順
      </FilterButton>
      <FilterLink to={makeUrl(3)} active={page === 3}>
        これはリンク
      </FilterLink>
      <FilterButton active={page === 4} onClick={() => navigate('4')}>
        これはボタン
      </FilterButton>
    </Filter>
  )
}

export function Button() {
  const active = boolean('Active', true)
  const reactive = boolean('Reactive', false)
  return (
    <FilterButton onClick={action('click')} active={active} reactive={reactive}>
      Label
    </FilterButton>
  )
}

export function Link() {
  const active = boolean('Active', true)
  const reactive = boolean('Reactive', false)
  return (
    <FilterLink to="#" active={active} reactive={reactive}>
      Label
    </FilterLink>
  )
}
