// only use the type
import type { default as ButtonType } from '../../react/src/components/Button/index'
import styled from 'styled-components'

declare const Button: typeof ButtonType

const Custom = ({ custom }: { custom: string }) => <>{custom}</>
const CustomGeneric = <C extends string>({ custom }: { custom: C }) => (
  <>{custom}</>
)

const StyledButton = styled(Button)``
const StyledButtonAsButton = styled(Button<'button'>)``
const StyledButtonA = styled(Button<'a'>)``
const StyledButtonCustom = styled(Button<typeof Custom>)``
const StyledButtonCustomAsButton = styled(
  Button<typeof Custom>
)`` as typeof Button
const StyledButtonCustomGeneric = styled(Button<typeof CustomGeneric>)``
const StyledButtonCustomGenericFoo = styled(
  Button<typeof CustomGeneric<'foo'>>
)``

// for type test only
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Tests() {
  return (
    <>
      {/* OK */}

      <StyledButton />
      <StyledButton type="button" disabled />
      <StyledButtonAsButton type="button" disabled />
      <StyledButtonA component="a" href="#" />
      <StyledButtonCustom component={Custom} custom="" />
      <StyledButtonCustomAsButton<'a'> component="a" href="#" />
      <StyledButtonCustomAsButton<typeof CustomGeneric<'bar'>>
        component={CustomGeneric}
        custom="bar"
      />
      <StyledButtonCustomAsButton component="a" href="#" />
      <StyledButtonCustomGeneric component={CustomGeneric} custom="" />
      <StyledButtonCustomGenericFoo component={CustomGeneric} custom="foo" />
      <StyledButtonCustomGenericFoo
        component={CustomGeneric<'foo'>}
        custom="foo"
      />

      {/* NG */}

      {/* @ts-expect-error Property 'href' does not exist on type  */}
      <StyledButton href="" />
      {/* @ts-expect-error Property 'href' does not exist on type  */}
      <StyledButtonAsButton href="" />
      {/* @ts-expect-error Property 'component' is missing */}
      <StyledButtonA href="#" />
      {/* @ts-expect-error Property 'disabled' does not exist on type  */}
      <StyledButtonA disabled />
      {/* @ts-expect-error Type '"button"' is not assignable to type '"a"'  */}
      <StyledButtonA component="button" href="" />
      {/* @ts-expect-error Property 'component' is missing */}
      <StyledButtonCustom custom="" />
      {/* @ts-expect-error Type 'string' is not assignable  */}
      <StyledButtonCustom component="a" custom="" />
      {/* @ts-expect-error Property 'custom' does not exist on type  */}
      <StyledButtonCustomAsButton custom="" />
      {/* @ts-expect-error Type 'href' is not assignable  */}
      <StyledButtonCustomAsButton<'button'> href="#" />
      <StyledButtonCustomGenericFoo
        /* @ts-expect-error Type '"foo"' is not assignable to type '"bar"' */
        component={CustomGeneric<'bar'>}
        custom="foo"
      />
      {/* @ts-expect-error '""' is not assignable to type '"foo"' */}
      <StyledButtonCustomGenericFoo custom="" />
    </>
  )
}
