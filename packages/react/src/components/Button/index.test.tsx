import renderer from 'react-test-renderer'
import Button from '.'

function Link({
  as,
  children,
  ...props
}: { as: string; children: React.ReactNode } & React.ComponentProps<'a'>) {
  return (
    <a {...props} data-as={as}>
      {children}
    </a>
  )
}

describe('<Button />', () => {
  test('componentAs props are passed to the data-as attribute', () => {
    expect(
      renderer.create(
        <Button
          href="/"
          target="_blank"
          fullWidth
          as={Link}
          componentAs="componentAs"
        />
      )
    ).toMatchSnapshot()
  })
})
