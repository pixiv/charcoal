import React, {
  forwardRef,
  memo,
  useMemo,
  ComponentPropsWithoutRef,
} from 'react'
import { useObjectRef } from '@react-aria/utils'
import styled from 'styled-components'
import { theme } from '../../styled'
import { disabledSelector, px } from '@charcoal-ui/utils'
import { AriaButtonProps, useButton } from '@react-aria/button'
import Icon from '../Icon'

const sizeMap = {
  S: 32,
  M: 40,
}

export type TagItemProps = {
  label: string
  translatedLabel?: string
  color?: string
  bgColor?: string
  status?: 'default' | 'active' | 'inactive'
  size?: keyof typeof sizeMap
  disabled?: boolean
} & Pick<ComponentPropsWithoutRef<'a'>, 'href' | 'target' | 'rel' | 'onClick'>

const TagItem = forwardRef<HTMLAnchorElement, TagItemProps>(
  function TagItemInner(
    {
      label,
      translatedLabel,
      color,
      bgColor = '#7ACCB1',
      size = 'M',
      disabled,
      status = 'default',
      ...props
    },
    _ref
  ) {
    const ref = useObjectRef(_ref)
    const ariaButtonProps = useMemo<AriaButtonProps<'a'>>(
      () => ({
        elementType: 'a',
        isDisabled: disabled,
        ...props,
      }),
      [disabled, props]
    )

    const { buttonProps } = useButton(ariaButtonProps, ref)
    const hasTranslatedLabel =
      translatedLabel !== undefined && translatedLabel.length > 0

    return (
      <TagItemRoot
        ref={ref}
        bgColor={bgColor}
        color={color}
        size={hasTranslatedLabel ? 'M' : size}
        status={status}
        {...buttonProps}
      >
        {hasTranslatedLabel ? (
          <TranslatedLabelRoot>
            <TranslatedLabelInner>
              <Label>{translatedLabel}</Label>
            </TranslatedLabelInner>
            <Label>{label}</Label>
          </TranslatedLabelRoot>
        ) : (
          <LabelRoot>
            <Label>{label}</Label>
          </LabelRoot>
        )}
        {status === 'active' && <CloseIcon name="16/Remove" />}
      </TagItemRoot>
    )
  }
)

export default memo(TagItem)

type TagItemRootProps = Pick<TagItemProps, 'bgColor' | 'color' | 'status'> &
  Required<Pick<TagItemProps, 'size'>>

const TagItemRoot = styled.a<TagItemRootProps>`
  height: ${({ size }) => sizeMap[size]}px;
  display: inline-flex;
  gap: ${({ theme }) => px(theme.spacing[8])};
  align-items: center;
  background: ${({ bgColor }) => bgColor};
  color: ${({ color, theme }) => color ?? theme.color.text5};
  text-decoration: none;

  cursor: cursor;

  ${({ size, status }) =>
    theme((o) => [
      o.outline.default.focus,
      o.borderRadius(4),
      status !== 'active' && size === 'M' && o.padding.horizontal(24),
      status !== 'active' && size === 'S' && o.padding.horizontal(16),
      status === 'inactive' && o.bg.surface3,
      status === 'inactive' && o.font.text2,
      ...(status === 'active' ? [o.padding.left(16), o.padding.right(8)] : []),
    ])}

  ${disabledSelector} {
    ${theme((o) => [o.disabled])}
  }
`

const LabelRoot = styled.div`
  ${theme((o) => [o.typography(14).bold])}
`

const Label = styled.span`
  max-width: 152px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: inherit;
  color: inherit;
  line-height: inherit;
`

const TranslatedLabelRoot = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 10px;
`

const TranslatedLabelInner = styled.div`
  ${theme((o) => [o.typography(12).bold])}
`

const CloseIcon = styled(Icon)`
  ${theme((o) => [o.height.px(16), o.width.px(16)])}
`
