import { useContext } from 'react'
import * as React from 'react'

export type LinkProps = {
  /**
   * リンクのURL
   */
  to: string
} & Omit<React.ComponentPropsWithoutRef<'a'>, 'href'>

export const DefaultLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
  function DefaultLink({ to, children, ...rest }, ref) {
    return (
      <a href={to} ref={ref} {...rest}>
        {children}
      </a>
    )
  }
)

type DefaultLinkProps = LinkProps & React.RefAttributes<HTMLAnchorElement>
export interface Components {
  Link: React.ComponentType<React.PropsWithoutRef<DefaultLinkProps>>
}

const DefaultValue: Components = {
  Link: DefaultLink,
}

const ComponentAbstractionContext = React.createContext(DefaultValue)

interface Props {
  children: React.ReactNode
  components: Partial<Components>
}

export default function ComponentAbstraction({ children, components }: Props) {
  return (
    <ComponentAbstractionContext.Provider
      value={{ ...DefaultValue, ...components }}
    >
      {children}
    </ComponentAbstractionContext.Provider>
  )
}

export function useComponentAbstraction() {
  return useContext(ComponentAbstractionContext)
}
