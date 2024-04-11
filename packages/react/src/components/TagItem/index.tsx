import { forwardRef, memo, useMemo, ComponentPropsWithoutRef } from 'react'
import { useObjectRef } from '@react-aria/utils'
import { useLink } from '@react-aria/link'
import Icon from '../Icon'
import { useClassNames } from '../../_lib/useClassNames'

import './index.css'

const sizeMap = {
  S: 32,
  M: 40,
}

export type TagItemProps = {
  label: string
  translatedLabel?: string
  bgColor?: string
  bgImage?: string
  status?: 'default' | 'active' | 'inactive'
  size?: keyof typeof sizeMap
  disabled?: boolean
  className?: string
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

    const { linkProps, isPressed } = useLink(
      useMemo(
        () => ({
          isDisabled: disabled,
          ...props,
        }),
        [disabled, props]
      ),
      ref
    )
    const hasTranslatedLabel =
      translatedLabel !== undefined && translatedLabel.length > 0
    const className = useClassNames(
      'charcoal-tag-item',
      'charcoal-tag-item__bg',
      props.className,
      linkProps.className
    )
    const bgVariant =
      bgImage !== undefined && bgImage.length > 0 ? 'image' : 'color'
    const bg = bgVariant === 'color' ? bgColor : `url(${bgImage ?? ''})`

    return (
      <a
        ref={ref}
        {...linkProps}
        className={className}
        data-state={status}
        data-bg-variant={bgVariant}
        data-pressed={isPressed}
        data-size={hasTranslatedLabel ? 'M' : size}
        style={{ '--charcoal-tag-item-bg': bg }}
      >
        <div
          className="charcoal-tag-item__label"
          data-has-translate={hasTranslatedLabel}
        >
          {hasTranslatedLabel && (
            <span className="charcoal-tag-item-half-leading-text charcoal-tag-item__label__translated">
              {translatedLabel}
            </span>
          )}
          <span
            className="charcoal-tag-item-half-leading-text charcoal-tag-item__label__text"
            data-has-translate={hasTranslatedLabel}
          >
            {label}
          </span>
        </div>
        {status === 'active' && <Icon name="16/Remove" />}
      </a>
    )
  }
)

export default memo(TagItem)
