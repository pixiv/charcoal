import { fireEvent, render, screen } from '@testing-library/react'
import { forwardRef } from 'react'
import TagItem from '.'

describe('TagItem', () => {
  it('preserves link props on a custom link component', () => {
    const NextLink = forwardRef<
      HTMLAnchorElement,
      React.ComponentPropsWithoutRef<'a'>
    >(function NextLink({ children, ...props }, ref) {
      return (
        <a ref={ref} {...props}>
          {children}
        </a>
      )
    })

    const onClick = vi.fn()

    render(
      <TagItem
        component={NextLink}
        href="/tags/girl"
        label="#girl"
        target="_blank"
        onClick={onClick}
      />,
    )

    const link = screen.getByRole('link')

    expect(link).toHaveAttribute('href', '/tags/girl')
    expect(link).toHaveAttribute('target', '_blank')

    fireEvent.click(link)
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
