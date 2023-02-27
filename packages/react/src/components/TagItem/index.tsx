import React, {
  forwardRef,
  memo,
  useMemo,
  ComponentPropsWithoutRef
} from 'react'
import { useObjectRef } from '@react-aria/utils'
import styled, { css } from 'styled-components'
import { theme } from '../../styled'
import { disabledSelector, px } from '@charcoal-ui/utils'
import { AriaButtonProps, useButton } from '@react-aria/button'
import Icon from '../Icon'

const sizeMap = {
  S: 32,
  M: 40
}

export type TagItemProps = {
  label: string
  translatedLabel?: string
  bgColor?: string
  bgImage?: string
  status?: 'default' | 'active' | 'inactive'
  size?: keyof typeof sizeMap
  disabled?: boolean
} & Pick<ComponentPropsWithoutRef<'a'>, 'href' | 'target' | 'rel' | 'onClick'>

const TagItem = forwardRef<HTMLAnchorElement, TagItemProps>(
  function TagItemInner(
    {
      label,
      translatedLabel,
      bgColor = '#7ACCB1',
      bgImage,
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
        ...props
      }),
      [disabled, props]
    )

    const { buttonProps } = useButton(ariaButtonProps, ref)
    const hasTranslatedLabel =
      translatedLabel !== undefined && translatedLabel.length > 0

    return (
      <TagItemRoot
        ref={ref}
        size={hasTranslatedLabel ? 'M' : size}
        status={status}
        {...buttonProps}
      >
        <Background bgColor={bgColor} bgImage={bgImage} status={status} />

        <Inner>
          <LabelWrapper isTranslate={hasTranslatedLabel}>
            {hasTranslatedLabel && (
              <TranslatedLabel>
                <Label>{translatedLabel}</Label>
              </TranslatedLabel>
            )}
            <Label>{label}</Label>
          </LabelWrapper>
          {status === 'active' && <Icon name="16/Remove" />}
        </Inner>
      </TagItemRoot>
    )
  }
)

export default memo(TagItem)

type TagItemRootProps = Pick<TagItemProps, 'status'> &
  Required<Pick<TagItemProps, 'size'>>

const TagItemRoot = styled.a<TagItemRootProps>`
  isolation: isolate;
  position: relative;
  height: ${({ size }) => sizeMap[size]}px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  overflow: hidden;

  ${({ size, status }) =>
    theme((o) => [
      o.outline.default.focus,
      o.borderRadius(4),
      status !== 'active' && size === 'M' && o.padding.horizontal(24),
      status !== 'active' && size === 'S' && o.padding.horizontal(16),
      status === 'inactive' ? o.font.text2 : o.font.text5,
      ...(status === 'active' ? [o.padding.left(16), o.padding.right(8)] : [])
    ])}

  ${disabledSelector} {
    ${theme((o) => [o.disabled])}
    cursor: default;
  }
`

const Background = styled.div<
  Pick<TagItemProps, 'bgColor' | 'bgImage' | 'status'>
>`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: ${({ bgColor }) => bgColor};
  ${({ status }) => status === 'inactive' && theme((o) => o.bg.surface3)}

  ${({ bgImage }) =>
    bgImage !== undefined &&
    css`
      ${theme((o) => [o.bg.surface4])}
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-position: center;
        background-size: cover;
        background-image: url(${bgImage});
        mix-blend-mode: overlay;
      }
    `}
`

const Inner = styled.div`
  display: inline-flex;
  gap: ${({ theme }) => px(theme.spacing[8])};
  align-items: center;
  z-index: 2;
`

const labelCSS = css`
  ${theme((o) => [o.typography(14).bold])}
`
const translateLabelCSS = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 10px;
`
const LabelWrapper = styled.div<{ isTranslate?: boolean }>`
  ${({ isTranslate }) => (isTranslate ?? false ? translateLabelCSS : labelCSS)}
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

const TranslatedLabel = styled.div`
  ${theme((o) => [o.typography(12).bold])}
`
