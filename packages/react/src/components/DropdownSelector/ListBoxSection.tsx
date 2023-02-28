import { useListBoxSection } from '@react-aria/listbox'
import { useSeparator } from '@react-aria/separator'
import { Node } from '@react-types/shared'
import React from 'react'
import { ListState } from 'react-stately'
import styled from 'styled-components'
import { Option } from './Option'
import { Divider } from './Divider'
import { theme } from '../../styled'

export function ListBoxSection<T>(props: {
  section: Node<T>
  state: ListState<T>
}) {
  const { state } = props
  const { itemProps, headingProps, groupProps } = useListBoxSection({
    heading: props.section.rendered,
    'aria-label': props.section['aria-label'],
  })

  const { separatorProps } = useSeparator({
    elementType: 'li',
  })

  return (
    <>
      {props.section.key !== props.state.collection.getFirstKey() && (
        <Divider {...separatorProps} role="separator" />
      )}
      <StyledLi {...itemProps}>
        {props.section.rendered != null && (
          <SectionSpan {...headingProps}>{props.section.rendered}</SectionSpan>
        )}
        <StyledUl {...groupProps}>
          {[...props.section.childNodes].map((node) => (
            <Option key={node.key} item={node} state={state} />
          ))}
        </StyledUl>
      </StyledLi>
    </>
  )
}

const SectionSpan = styled.span`
  ${theme((o) => [
    o.font.text3,
    o.typography(14),
    o.margin.bottom(8).left(16).top(16),
  ])}
`

const StyledUl = styled.ul`
  padding-left: 0;
  margin: 0;
  box-sizing: border-box;
  list-style: none;
  overflow: hidden;
`

const StyledLi = styled.li``
