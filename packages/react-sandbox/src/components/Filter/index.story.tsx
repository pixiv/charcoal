import { Meta, StoryObj } from '@storybook/react-webpack5'
import { FilterButton, FilterLink, FilterIconButton } from '.'

export default {
  title: 'react-sandbox/Filter',
  component: FilterButton,
} as Meta<typeof FilterButton>

export const Default: StoryObj<typeof FilterButton> = {
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
