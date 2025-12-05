import { Meta, StoryObj } from '@storybook/react-vite'
import { FilterButton, FilterLink, FilterIconButton } from '.'

export default {
  title: 'react-sandbox/Filter',
  component: FilterButton,
} satisfies Meta<typeof FilterButton>

export const Default: StoryObj<typeof Filter> = {
  render: (props) => {
    return (
      <>
        FilterButton: <FilterButton {...props}>test</FilterButton>
        FilterLink: <FilterLink {...props}>test</FilterLink>
        FilterIconButton:{' '}
        <FilterIconButton width={40} height={40} {...props}>
          test
        </FilterIconButton>
      </>
    )
  },
}
