import { Icon } from '@charcoal-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useCallback, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { theme } from '../utils/theme'
import pkgJson from '../../../packages/react/package.json'

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
    text: 'サーバーサイドレンダリング',
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
    'TextArea',
    'TextField',
  ].map((component) => {
    return {
      text: component,
      href: `/@charcoal-ui/react/${component}`,
    }
  }),
]

const iconsList: ListItem[] = [
  {
    text: 'クイックスタート',
    href: '/@charcoal-ui/icons/quickstart',
  },
  {
    text: '<pixiv-icon>',
    href: '/@charcoal-ui/icons/element',
  },
  {
    text: 'Reactと組み合わせて使う',
    href: '/@charcoal-ui/icons/react',
  },
  {
    text: '独自のアイコンを登録する',
    href: '/@charcoal-ui/icons/extend',
  },
  {
    text: 'サーバーサイドレンダリング',
    href: '/@charcoal-ui/icons/ssr',
  },
]

const tailwindConfigList: ListItem[] = [
  {
    text: 'クイックスタート',
    href: '/@charcoal-ui/tailwind-config/quickstart',
  },
  {
    text: 'カスタマイズする',
    href: '/@charcoal-ui/tailwind-config/customize',
  },
  {
    text: 'Typography',
    href: '/@charcoal-ui/tailwind-config/typography',
  },
  {
    text: 'Spacing',
    href: '/@charcoal-ui/tailwind-config/spacing',
  },
]

const tailwindDiffList: ListItem[] = [
  {
    text: 'クイックスタート',
    href: '/@charcoal-ui/tailwind-diff/quickstart',
  },
  {
    text: 'check',
    href: '/@charcoal-ui/tailwind-diff/check',
  },
  {
    text: 'dump',
    href: '/@charcoal-ui/tailwind-diff/dump',
  },
]

const foundationList: ListItem[] = [
  {
    text: 'クイックスタート',
    href: '/@charcoal-ui/foundation/quickstart',
  },
  {
    text: 'borderRadius',
    href: '/@charcoal-ui/foundation/borderRadius',
  },
  {
    text: 'breakPoints',
    href: '/@charcoal-ui/foundation/breakPoint',
  },
  {
    text: 'color',
    href: '/@charcoal-ui/foundation/color',
  },
  {
    text: 'effect',
    href: '/@charcoal-ui/foundation/effect',
  },
  {
    text: 'grid',
    href: '/@charcoal-ui/foundation/grid',
  },
  {
    text: 'spacing',
    href: '/@charcoal-ui/foundation/spacing',
  },
  {
    text: 'typography',
    href: '/@charcoal-ui/foundation/typography',
  },
]

const themeList: ListItem[] = [
  {
    text: 'クイックスタート',
    href: '/@charcoal-ui/theme/quickstart',
  },
  {
    text: 'テーマカラー',
    href: '/@charcoal-ui/theme/colors',
  },
]
const tailwindConfigList: ListItem[] = [
  {
    text: 'クイックスタート',
    href: '/@charcoal-ui/tailwind-config/quickstart',
  },
  {
    text: 'カスタマイズする',
    href: '/@charcoal-ui/tailwind-config/customize',
  },
  {
    text: 'Break points',
    href: '/@charcoal-ui/tailwind-config/screens',
  },
]

export const NavList: FC<{ className?: string }> = (props) => {
  const router = useRouter()
  useEffect(() => {
    if (typeof window === 'undefined') return
    window.scroll({ top: 0, left: 0 })
  }, [router])
  const href = router.pathname

  const renderListItem = useCallback(
    (item: ListItem) => {
      return (
        <ListItem key={item.href} active={href === item.href}>
          <ListItemLink href={item.href}>{item.text}</ListItemLink>
        </ListItem>
      )
    },
    [href]
  )

  return (
    <StyledUl className={props.className}>
      <ListItemHeader>v{pkgJson.version}</ListItemHeader>
      <ListItem active={href === '/v3.0.0-guide'}>
        <ListItemLink href="/v3.0.0-guide">
          v3.0.0マイグレーションガイド
        </ListItemLink>
      </ListItem>
      <ListItemHeader>@charcoal-ui/styled</ListItemHeader>
      {styledList.map((item) => {
        return (
          <ListItem key={item.href} active={href === item.href}>
            <ListItemLink href={item.href}>{item.text}</ListItemLink>
          </ListItem>
        )
      })}
      <ListItemHeader>@charcoal-ui/react</ListItemHeader>
      {reactList.map(renderListItem)}
      <ListItemHeader>@charcoal-ui/icons</ListItemHeader>
      {iconsList.map(renderListItem)}
      <ListItemHeader>@charcoal-ui/tailwind-config</ListItemHeader>
      {tailwindConfigList.map(renderListItem)}
      <ListItemHeader>@charcoal-ui/tailwind-diff</ListItemHeader>
      {tailwindDiffList.map(renderListItem)}
      <ListItemHeader>@charcoal-ui/foundation</ListItemHeader>
      {foundationList.map(renderListItem)}
      <ListItemHeader>@charcoal-ui/theme</ListItemHeader>
      {themeList.map(renderListItem)}
      <ListItemHeader>Links</ListItemHeader>
      <ExternalLink href="https://github.com/pixiv/charcoal" text="GitHub" />
      <ExternalLink href="https://pixiv.github.io/charcoal/" text="Storybook" />
      <div
        css={css`
          margin-bottom: 64px;
        `}
      ></div>
    </StyledUl>
  )
}

const ExternalLink = (props: { href: string; text: string }) => {
  return (
    <ListItem active={false}>
      <ListItemLink target={'_blank'} href={props.href}>
        <Icon name="24/OpenInNew" unsafeNonGuidelineScale={0.75} />
        <span
          css={css`
            margin-left: 8px;
          `}
        >
          {props.text}
        </span>
      </ListItemLink>
    </ListItem>
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
  box-sizing: border-box;
  text-decoration: none;
  display: flex;
  height: 100%;
  font-size: 14px;
  align-items: center;
  padding: 8px 16px;
  ${theme((o) => o.font.link1)}
`
