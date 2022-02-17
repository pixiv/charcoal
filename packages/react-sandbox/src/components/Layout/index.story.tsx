import React from 'react'
import styled from 'styled-components'
import { dummyText } from '../../misc/storybook-helper'
import { theme } from '../../styled'
import LeftMenu from '../LeftMenu'
import Layout, { LayoutItem, LayoutItemBody, LayoutItemHeader } from '.'

export default {
  title: 'Sandbox/Layout',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
  },
}

export function Basic() {
  const menu = <DummyMenu />
  const header = <>Header</>
  return (
    <Layout menu={menu} header={header}>
      <DummyCard span={3}>Span 3</DummyCard>
      <DummyCard span={2}>Span 2</DummyCard>
      <DummyCard span={1}>Span 1</DummyCard>
      <DummyCard span={1}>Span 1</DummyCard>
      <DummyCard span={1}>Span 1</DummyCard>
      <DummyCard span={1}>Span 1</DummyCard>
    </Layout>
  )
}

export function NoMenu() {
  const header = <>Header</>
  return (
    <Layout header={header}>
      <DummyCard span={3}>Span 3</DummyCard>
      <DummyCard span={2}>Span 2</DummyCard>
      <DummyCard span={1}>Span 1</DummyCard>
      <DummyCard span={1}>Span 1</DummyCard>
      <DummyCard span={1}>Span 1</DummyCard>
      <DummyCard span={1}>Span 1</DummyCard>
    </Layout>
  )
}

export function Wide() {
  const menu = <DummyMenu />
  const header = <>Header</>
  return (
    <Layout menu={menu} header={header} wide>
      <LayoutItem span={3}>
        <LayoutItemHeader>Wide</LayoutItemHeader>
        <LayoutItemBody>
          <Dummy>Hello, Flexible Grid Layout!</Dummy>
        </LayoutItemBody>
      </LayoutItem>
    </Layout>
  )
}

export function Center() {
  const header = <>Header</>
  return (
    <Layout header={header} wide center>
      <LayoutItem span={3}>
        <LayoutItemHeader>Center</LayoutItemHeader>
        <LayoutItemBody>
          <Dummy>Hello, Flexible Grid Layout!</Dummy>
        </LayoutItemBody>
      </LayoutItem>
    </Layout>
  )
}

function DummyCard({
  span,
  children,
}: {
  span: number
  children: React.ReactNode
}) {
  return (
    <LayoutItem span={span}>
      <LayoutItemHeader>Dummy</LayoutItemHeader>
      <LayoutItemBody>
        <Dummy>{children}</Dummy>
      </LayoutItemBody>
    </LayoutItem>
  )
}

const Dummy = styled.div`
  ${theme((o) => o.height.column(2))}

  ${dummyText}
`

function DummyMenu() {
  const links = [
    {
      id: 'hello',
      text: 'Hello',
      to: '#hello',
    },
    {
      id: 'world',
      text: 'World',
      to: '#world',
    },
    {
      id: 'dummy',
      text: 'Dummy',
      to: '#dummy',
    },
    {
      id: 'menu',
      text: 'Menu',
      to: '#menu',
    },
  ] as const
  return <LeftMenu links={links} active="hello" />
}
