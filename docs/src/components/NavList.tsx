import { Icon } from '@charcoal-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { theme } from '../utils/theme'

type ListItem = {
  text: string
  href: string
}
const styledList: ListItem[] = [
  {
    text: 'クイックスタート',
    href: '/@charcoal-ui/styled/quickstart',
  },
  ...[
    'bg',
    'font',
    'typography',
    'margin',
    'padding',
    'width',
    'height',
    'border',
    'borderRadius',
    'outline',
    'disabled',
  ].map((o) => {
    return {
      text: o,
      href: `/@charcoal-ui/styled/${o}`,
    }
  }),
]

const reactList: ListItem[] = [
  {
    text: 'クイックスタート',
    href: '/@charcoal-ui/react/quickstart',
  },
  {
    text: 'SSR',
    href: '/@charcoal-ui/react/ssr',
  },
  ...[
    'Button',
    'Checkbox',
    'DropdownSelector',
    'Icon',
    'IconButton',
    'LoadingSpinner',
    'Modal',
    'MultiSelect',
    'Radio',
    'SegmentedControl',
    'Switch',
    'TagItem',
    'TextField',
  ].map((o) => {
    return {
      text: o,
      href: `/@charcoal-ui/react/${o}`,
    }
  }),
]

export const NavList: FC<{ className?: string }> = (props) => {
  const router = useRouter()
  useEffect(() => {
    if (typeof window === 'undefined') return
    window.scroll({ top: 0, left: 0 })
  }, [router])
  const href = router.pathname
  return (
    <StyledUl className={props.className}>
      <ListItemHeader>v2.2.1</ListItemHeader>
      <ListItemHeader>@charcoal-ui/styled</ListItemHeader>
      {/* <ListItem active={href === '/@charcoal-ui/styled/Colors'}>
        <ListItemLink href="/@charcoal-ui/styled/Colors">Colors</ListItemLink>
      </ListItem> */}
      {styledList.map((item) => {
        return (
          <ListItem key={item.href} active={href === item.text}>
            <ListItemLink href={item.href}>{item.text}</ListItemLink>
          </ListItem>
        )
      })}
      <ListItemHeader>@charcoal-ui/react</ListItemHeader>
      {reactList.map((item) => {
        return (
          <ListItem key={item.href} active={href == item.href}>
            <ListItemLink href={item.href}>{item.text}</ListItemLink>
          </ListItem>
        )
      })}
      <ListItemHeader>Links</ListItemHeader>
      <ListItem active={false}>
        <ListItemLink
          target={'_blank'}
          href={'https://github.com/pixiv/charcoal'}
        >
          <Icon name="24/OpenInNew" unsafeNonGuidelineScale={0.75} />
          <span
            css={css`
              margin-left: 8px;
            `}
          >
            GitHub
          </span>
        </ListItemLink>
      </ListItem>
      <div
        css={css`
          margin-bottom: 64px;
        `}
      ></div>
    </StyledUl>
  )
}

export const StyledNavList = styled(NavList)`
  margin-top: 8px;
`

const StyledUl = styled.ul`
  padding: 0;
  margin: 0;
`

const ListItemHeader = styled.li`
  margin-top: 16px;
  list-style: none;
  padding-left: 16px;
  height: 22px;

  font-size: 14px;
  line-height: 16px;
  font-weight: bold;
  ${theme((o) => [o.font.text3])}
`

const ListItem = styled.li<{ active: boolean }>`
  list-style: none;
  height: 40px;
  font-size: 14px;
  line-height: 16px;
  font-weight: ${(p) => (p.active ? 'bold' : 'normal')};
  ${(p) => theme((o) => (p.active ? o.bg.surface3 : undefined))}
  :hover {
    ${theme((o) => o.bg.surface2)}
  }
`

const ListItemLink = styled(Link)`
  text-decoration: none;
  display: flex;
  height: 100%;
  font-size: 14px;
  align-items: center;
  padding: 8px 16px;
  ${theme((o) => o.font.link1)}
`
