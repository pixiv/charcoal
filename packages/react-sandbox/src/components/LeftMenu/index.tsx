import styled from 'styled-components'
import { MenuListLinkItem } from '../MenuListItem'
import { useComponentAbstraction } from '@charcoal-ui/react'

interface Props<ID extends string> {
  links: readonly {
    text: string
    to: string
    id: ID
  }[]
  active: ID
}

export default function LeftMenu<ID extends string>({
  links,
  active,
}: Props<ID>) {
  const { Link } = useComponentAbstraction()
  return (
    <Container>
      {links.map((link, index) => (
        <Link to={link.to} key={index}>
          <LinkItem aria-current={link.id === active || undefined}>
            {link.text}
          </LinkItem>
        </Link>
      ))}
    </Container>
  )
}

export function LeftMenuContent<ID extends string>({ links }: Props<ID>) {
  return (
    <>
      {links.map((link, index) => (
        <MenuListLinkItem link={link.to} key={index} primary={link.text} />
      ))}
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const LinkItem = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.text3};
  border-radius: 24px;
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  padding: 0 16px;
  height: 40px;
  transition: 0.2s color;
  &:hover {
    transition: 0.2s color;
    color: ${({ theme }) => theme.color.text2};
  }
  &[aria-current] {
    color: ${({ theme }) => theme.color.text2};
    background-color: ${({ theme }) => theme.color.surface3};
  }
`
