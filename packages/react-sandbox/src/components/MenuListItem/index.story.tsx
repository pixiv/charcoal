import { action } from '@storybook/addon-actions'
import { boolean, select, text } from '@storybook/addon-knobs'
import React from 'react'
import styled from 'styled-components'
import SwitchCheckbox from '../SwitchCheckbox'
import WithIcon from '../WithIcon'
import MenuListItem, {
  MenuListItemContext,
  MenuListLabel,
  MenuListLinkItem,
  MenuListLinkItemWithIcon,
  MenuListSpacer,
} from '.'

export default {
  title: 'Sandbox/MenuListItem',
  component: MenuListItem,
}

export const Default = () => {
  const primary = text('primary', 'Knob to change')
  const secondary = text('secondary', '')
  const disabled = boolean('diasbled', false)
  const padding = select('padding', { '16': 16, '24': 24 }, 24)
  const noHover = boolean('noHover', false)
  return (
    <MenuListItemContext.Provider value={{ padding }}>
      <MenuListItem
        primary={primary}
        secondary={secondary === '' ? undefined : secondary}
        disabled={disabled}
        onClick={action('click')}
        noHover={noHover}
      />
    </MenuListItemContext.Provider>
  )
}

export const Simple = () => (
  <MenuListItem
    primary="Simple item"
    secondary="with secondary"
    onClick={action('click')}
  />
)

export const Disabled = () => (
  <MenuListItem
    primary="Disabled item"
    disabled
    onClick={action('disabled click')}
  />
)

export const Link = () => (
  <MenuListLinkItem
    primary="This is link"
    onClick={action('link click')}
    link="#linkTo"
  />
)

export const HardLink = () => (
  <MenuListLinkItem
    primary='This is link with target "_blank"'
    onClick={action('link click')}
    link="#linkTo"
    target="_blank"
    rel="noopener noreferrer"
  />
)

export const InlineIcon = () => (
  <MenuListItem
    primary={
      <WithIcon icon={<TestInlineIcon />}>Label with inline icon</WithIcon>
    }
    onClick={action('toggle')}
  />
)

export const Icon = () => (
  <MenuListLinkItemWithIcon
    primary="Link with 24px icon"
    icon={<TestIcon />}
    link="#linkTo"
  />
)

export const NoHoverEffect = () => (
  <MenuListItem
    primary="With toggle (no hover effect)"
    onClick={action('toggle')}
    noHover
  >
    <SwitchCheckbox checked onChange={action('toggle')} />
  </MenuListItem>
)

export const Spacer = () => (
  <>
    <MenuListItem primary="↓ This is spacer" />
    <MenuListSpacer />
    <MenuListItem primary="↑ This is spacer" />
  </>
)

export const Label = () => (
  <>
    <MenuListLabel>Label</MenuListLabel>
    <MenuListItem primary="Label grouped items" />
  </>
)

export const TextEllipsis = () => (
  <div
    css={`
      width: 300px;
    `}
  >
    <MenuListItem primary="Loooooooooooooooooooooooooong texxxxxxxxxxxxxxxxxxxxxxxxxt" />
  </div>
)

const TestIcon = styled.div`
  display: inline-block;
  width: 24px;
  height: 24px;
  background-color: currentColor;
`

const TestInlineIcon = styled.div`
  display: inline-flex;
  vertical-align: top;
  align-items: center;
  &::before {
    content: '';
    display: inline-block;
    height: 16px;
    width: 16px;
    background-color: currentColor;
  }
`
