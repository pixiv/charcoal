import React, { useRef } from 'react'
import styled from 'styled-components'
import { useOverlayTriggerState } from 'react-stately'
import { disabledSelector } from '@charcoal-ui/utils'
import Icon from '../Icon'
import FieldLabel from '../FieldLabel'
import { theme } from '../../styled'

import { OptionLi } from './OptionLi'
import { DropdownPopover } from './DropdownPopover'

export type DropdownSelectorProps = {
  label: string
  invalid?: boolean
  assertiveText?: string
  value: string
  options: DropdownSelectorOption[]
  disabled?: boolean
  placeholder?: string
  showLabel?: boolean
  onChange: (option: DropdownSelectorOption) => void
}

export type DropdownSelectorOption = {
  label: string
  id: string
}

export default function DropdownSelector(props: DropdownSelectorProps) {
  const triggerRef = useRef<HTMLButtonElement>(null)
  const state = useOverlayTriggerState({})
  return (
    <DropdownSelectorRoot aria-disabled={props.disabled}>
      {props.showLabel === true && <DropdownFieldLabel label={props.label} />}
      <DropdownButtonWrapper>
        <DropdownButton
          invalid={props.invalid}
          disabled={props.disabled}
          onClick={() => {
            if (props.disabled === true) return
            state.open()
          }}
          ref={triggerRef}
        >
          <DropdownButtonText>
            {props.placeholder !== undefined
              ? props.placeholder
              : props.options.find((option) => option.id === props.value)
                  ?.label}
          </DropdownButtonText>
          <DropdownButtonIcon name="16/Menu" />
        </DropdownButton>
        {state.isOpen && (
          <DropdownPopover
            state={state}
            triggerRef={triggerRef}
            value={props.value}
          >
            <ListboxRoot>
              {props.options.map((option) => {
                return (
                  <OptionLi
                    value={option}
                    key={option.id}
                    isSelected={props.value === option.id}
                    onSelect={() => {
                      props.onChange(option)
                      state.close()
                    }}
                  >
                    {option.label}
                  </OptionLi>
                )
              })}
            </ListboxRoot>
          </DropdownPopover>
        )}
      </DropdownButtonWrapper>
      {props.assertiveText !== undefined && (
        <AssertiveText invalid={props.invalid}>
          {props.assertiveText}
        </AssertiveText>
      )}
    </DropdownSelectorRoot>
  )
}

const ListboxRoot = styled.ul`
  padding-left: 0;
  margin: 0;
  box-sizing: border-box;
  list-style: none;
  overflow: auto;
  max-height: inherit;

  ${theme((o) => [
    o.bg.background1,
    o.border.default,
    o.borderRadius(8),
    o.padding.vertical(8),
  ])}
`
const DropdownSelectorRoot = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;

  ${disabledSelector} {
    cursor: default;
    ${theme((o) => o.disabled)}
  }
`

const DropdownFieldLabel = styled(FieldLabel)`
  width: 100%;

  ${theme((o) => o.margin.bottom(8))}
`

const DropdownButtonWrapper = styled.div`
  position: relative;
`

const DropdownButton = styled.button<{ invalid?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 40px;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;

  ${disabledSelector} {
    cursor: default;
  }

  ${({ invalid }) =>
    theme((o) => [
      o.border.default,
      o.padding.horizontal(8),
      o.outline.default.focus,
      o.bg.surface3,
      o.borderRadius(4),
      invalid === true && o.outline.assertive,
    ])}
`

const DropdownButtonText = styled.span`
  text-align: left;

  ${theme((o) => [o.typography(14), o.font.text2])}
`

const DropdownButtonIcon = styled(Icon)`
  ${theme((o) => [o.font.text2])}
`

const AssertiveText = styled.div<{ invalid?: boolean }>`
  ${({ invalid }) =>
    theme((o) => [
      o.typography(14),
      o.margin.top(8),
      invalid === true ? o.font.assertive : o.font.text2,
    ])}
`
