import React, { useContext } from 'react'
import styled, { css } from 'styled-components'
import { theme } from '../../styled'
import { TextEllipsis } from '../TextEllipsis'
import { LinkProps, useComponentAbstraction } from '@pixiv-elements/react'
import { disabledSelector } from '@pixiv-elements/utils'

interface MenuListItemContextProps {
  padding: 16 | 24
}

export const MenuListItemContext =
  React.createContext<MenuListItemContextProps>({ padding: 24 })

export interface MenuListItemBaseData {
  primary: string | React.ReactNode // 表示アイテム名(上に表示)
  secondary?: string // 表示アイテム名2(下に表示)
  onClick?: (e: React.MouseEvent) => void
  disabled?: boolean
  gtmClass?: string
  noHover?: boolean
}

interface MenuListItemProps extends MenuListItemBaseData {
  children?: React.ReactNode // 右寄せで表示したい要素
}

export default function MenuListItem({
  primary,
  secondary,
  onClick,
  disabled = false,
  noHover = false,
  gtmClass,
  children,
}: MenuListItemProps) {
  const { padding } = useContext(MenuListItemContext)

  return (
    <Item
      hasSubLabel={secondary !== undefined}
      onClick={(e) => !disabled && onClick && onClick(e)}
      sidePadding={padding}
      noHover={noHover}
      noClick={onClick === undefined}
      aria-disabled={disabled}
      role={onClick !== undefined ? 'button' : undefined}
      className={gtmClass !== undefined ? `gtm-${gtmClass}` : undefined}
    >
      <Labels>
        <PrimaryText>
          <TextEllipsis lineHeight={22} lineLimit={1}>
            {primary}
          </TextEllipsis>
        </PrimaryText>
        {secondary !== undefined && (
          <SecondaryText>
            <TextEllipsis lineHeight={22} lineLimit={1}>
              {secondary}
            </TextEllipsis>
          </SecondaryText>
        )}
      </Labels>
      {children}
    </Item>
  )
}

interface ItemProps {
  hasSubLabel: boolean
  sidePadding: 16 | 24
  noHover: boolean
  noClick: boolean
}

const Item = styled.div<ItemProps>`
  display: flex;
  height: ${(p) => (p.hasSubLabel ? 56 : 40)}px;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${(p) => p.sidePadding}px;
  user-select: none;
  cursor: ${(p) => (p.noClick ? 'default' : 'pointer')};
  transition: 0.2s background-color;

  &:hover {
    ${(p) =>
      !p.noHover &&
      css`
        background-color: ${({ theme }) => theme.color.surface3};
      `}
  }

  ${theme((o) => o.disabled)}

  ${disabledSelector} {
    cursor: default;
    pointer-events: none;

    &:hover {
      background-color: unset;
    }
  }
`

const Labels = styled.div`
  display: flex;
  flex-direction: column;
`

const PrimaryText = styled.div`
  color: ${(p) => p.theme.color.text2};
  line-height: 22px;
  font-size: 14px;
  display: grid;
`

const SecondaryText = styled.div`
  color: ${(p) => p.theme.color.text3};
  line-height: 18px;
  font-size: 10px;
`

interface MenuListLinkItemProps
  extends MenuListItemBaseData,
    Omit<LinkProps, 'to' | 'onClick' | 'children'> {
  link: string
  children?: React.ReactNode
}

export function MenuListLinkItem({
  link,
  onClick,
  disabled = false,
  primary,
  secondary,
  gtmClass,
  noHover,
  children,
  ...linkProps
}: MenuListLinkItemProps) {
  const { Link } = useComponentAbstraction()
  const props: MenuListItemProps = {
    disabled,
    primary,
    secondary,
    gtmClass,
    noHover,
    children,
  }

  return disabled ? (
    <span onClick={onClick}>
      <MenuListItem {...props} />
    </span>
  ) : (
    <A<typeof Link> as={Link} to={link} onClick={onClick} {...linkProps}>
      <MenuListItem onClick={() => void 0} {...props} />
    </A>
  )
}

const A = styled.a`
  display: block;
`

interface MenuListLinkItemWithIconProps extends MenuListLinkItemProps {
  icon: React.ReactNode
}

interface MenuListItemWithIconProps extends MenuListItemProps {
  icon: React.ReactNode
}

export function MenuListLinkItemWithIcon({
  icon,
  primary: text,
  ...props
}: MenuListLinkItemWithIconProps) {
  const primary = (
    <IconContainer>
      <Icon>{icon}</Icon>
      {text}
    </IconContainer>
  )
  return <MenuListLinkItem primary={primary} {...props} />
}

export function MenuListItemWithIcon({
  icon,
  primary: text,
  ...props
}: MenuListItemWithIconProps) {
  const primary = (
    <IconContainer>
      <Icon>{icon}</Icon>
      {text}
    </IconContainer>
  )
  return <MenuListItem primary={primary} {...props} />
}

const IconContainer = styled.div`
  display: grid;
  gap: 8px;
  grid-auto-flow: column;
  align-items: center;
`

const Icon = styled.div`
  color: ${({ theme }) => theme.color.text3};
  display: flex;
`

export const MenuListSpacer = styled.div`
  height: 24px;
`

export const MenuListLabel = styled.div`
  padding: 0 16px;
  font-size: 12px;
  line-height: 16px;
  color: ${({ theme }) => theme.color.text3};
  margin-top: -2px;
  margin-bottom: 6px;
`
