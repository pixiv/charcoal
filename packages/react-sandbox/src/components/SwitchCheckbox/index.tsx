import * as React from 'react'

import styled, { css } from '../../styledExportFix'
import { applyEffect } from '@charcoal-ui/utils'

export interface Props extends React.ComponentPropsWithoutRef<'input'> {
  gtmClass?: string
  flex?: boolean
  rowReverse?: boolean
}

export default React.forwardRef(function SwitchCheckbox(
  {
    gtmClass,
    flex = false,
    rowReverse = false,
    children,
    disabled,
    ...props
  }: Props,
  ref: React.Ref<HTMLInputElement>,
) {
  return (
    <Label
      className={gtmClass !== undefined ? `gtm-${gtmClass}` : ''}
      flex={flex}
      rowReverse={rowReverse}
      aria-disabled={disabled}
    >
      <SwitchOuter>
        <SwitchInput {...props} disabled={disabled} ref={ref} />
        <SwitchInner>
          <SwitchInnerKnob />
        </SwitchInner>
      </SwitchOuter>
      {children != null && (
        <Children rowReverse={rowReverse}>{children}</Children>
      )}
    </Label>
  )
})

const Children = styled.span<{ rowReverse: boolean }>`
  ${(p) =>
    p.rowReverse
      ? css`
          margin-right: 8px;
        `
      : css`
          margin-left: 8px;
        `}
`

const Label = styled.label<{ flex: boolean; rowReverse: boolean }>`
  display: inline-flex;
  align-items: center;
  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      justify-content: space-between;
    `}
  ${({ rowReverse }) => css`
    flex-direction: ${rowReverse ? 'row-reverse' : 'row'};
  `}
  cursor: pointer;
  outline: 0;

  &[aria-disabled='true'] {
    cursor: auto;
  }
`

const SwitchOuter = styled.span`
  display: inline-flex;
  position: relative;
  z-index: 0;
`

const SwitchInner = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 28px;
  height: 16px;
  border-radius: 16px;
  border: 2px solid transparent;
  background: ${({ theme }) => theme.color.text4};
  transition:
    box-shadow 0.2s,
    background-color 0.2s;
`

const SwitchInnerKnob = styled.div`
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: 12px;
  height: 12px;
  background-color: ${({ theme }) => theme.color.text5};
  border-radius: 50%;
  transform: translateX(0);
  transition: transform 0.2s;
`

const SwitchInput = styled.input.attrs({
  type: 'checkbox' as string,
})`
  position: absolute;
  /* NOTE: this is contained by the GraphicCheckboxOuter */
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* just to control the clickable area if used standalone */
  border-radius: 16px;
  opacity: 0;
  appearance: none;
  outline: none;
  cursor: pointer;

  &:checked {
    ~ ${SwitchInner} {
      background-color: ${({ theme }) => theme.color.brand};

      ${SwitchInnerKnob} {
        transform: translateX(12px);
      }
    }
  }

  &:disabled {
    cursor: auto;

    ~ ${SwitchInner} {
      opacity: ${({ theme }) => theme.elementEffect.disabled.opacity};
    }
  }

  &:not(:disabled):focus {
    ~ ${SwitchInner} {
      box-shadow: 0 0 0 4px
        ${({ theme }) =>
          applyEffect(theme.color.brand, theme.elementEffect.disabled)};
    }
  }
`
