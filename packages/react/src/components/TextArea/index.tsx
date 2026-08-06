import './index.css'

import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'
import FieldLabel from '../FieldLabel'
import { countCodePointsInString, mergeRefs } from '../../_lib'
import { useFocusWithClick } from '../TextField/useFocusWithClick'
import { AssistiveText } from '../TextField/AssistiveText'
import { useClassNames } from '../../_lib/useClassNames'
import { useVisuallyHidden } from 'react-aria/VisuallyHidden'
import { useId } from 'react-aria/useId'
import { useIsomorphicLayoutEffect } from '../../_lib/useIsomorphicLayoutEffect'

const measureTextAreaRows = (textarea: HTMLTextAreaElement) => {
  const previousHeight = textarea.style.height

  try {
    // A fixed height prevents scrollHeight from shrinking with the content.
    // Reset it synchronously so that soft-wrapped lines are measured as laid
    // out by the browser, rather than inferred from the textarea value.
    textarea.style.height = '0px'

    const style = getComputedStyle(textarea)
    const lineHeight = Number.parseFloat(style.lineHeight)
    const paddingBlock =
      Number.parseFloat(style.paddingTop) + Number.parseFloat(style.paddingBottom)
    const contentHeight = textarea.scrollHeight - paddingBlock

    // scrollHeight is rounded to whole pixels while line-height can be a
    // fractional value (notably due to the iOS Safari scale workaround).
    return Math.max(1, Math.round(contentHeight / lineHeight))
  } finally {
    textarea.style.height = previousHeight
  }
}

/**
 * `TextArea` を `imperativeRef` から操作するためのハンドル
 */
export type TextAreaImperativeHandle = {
  /**
   * textarea の値を更新し、文字数や高さなどの内部状態を同期する
   */
  setValue: (value: string) => void
  /**
   * textarea の現在の値をもとに、文字数や高さなどの内部状態を同期する
   */
  sync: () => void
}

export type TextAreaProps = {
  value?: string
  onChange?: (value: string) => void
  imperativeRef?: React.Ref<TextAreaImperativeHandle>

  showCount?: boolean
  showLabel?: boolean
  assistiveText?: string
  invalid?: boolean

  label?: string
  requiredText?: string
  disabled?: boolean
  subLabel?: React.ReactNode
  autoHeight?: boolean

  maxRows?: number

  getCount?: (value: string) => number
} & Omit<React.ComponentPropsWithoutRef<'textarea'>, 'onChange'>

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function TextAreaInner(
    {
      onChange,
      className,
      value,
      showCount = false,
      showLabel = false,
      label = '',
      requiredText,
      subLabel,
      disabled = false,
      required,
      assistiveText,
      maxLength,
      autoHeight = false,
      rows: initialRows = 4,
      maxRows,
      invalid,
      getCount = countCodePointsInString,
      defaultValue,
      imperativeRef,
      ...props
    },
    forwardRef,
  ) {
    const isUncontrolled = value === undefined
    // `null` is invalid for TextAreaProps, but may arrive at runtime. Keep the
    // pre-f710d512 nullish fallback so getCount is never called with null.
    const countValue = value ?? defaultValue?.toString() ?? ''
    const [rows, setRows] = useState(initialRows)
    const [count, setCount] = useState(getCount(countValue))

    const textareaRef = useRef<HTMLTextAreaElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    useFocusWithClick(containerRef, textareaRef)
    const { visuallyHiddenProps } = useVisuallyHidden()

    const isEnableAutoHeight = useMemo(
      () => autoHeight || (maxRows !== undefined && maxRows >= 1),
      [autoHeight, maxRows],
    )
    const classNames = useClassNames('charcoal-text-area-root', className)
    const showAssistiveText =
      assistiveText != null && assistiveText.length !== 0

    const syncHeight = useCallback(
      (textarea: HTMLTextAreaElement) => {
        const currentRows = measureTextAreaRows(textarea)
        const hasValidMaxRows = maxRows !== undefined && maxRows >= 1
        const nextRows = initialRows <= currentRows ? currentRows : initialRows
        const nextHeightRows = hasValidMaxRows
          ? Math.min(nextRows, maxRows)
          : nextRows

        setRows((currentHeightRows) =>
          currentHeightRows === nextHeightRows
            ? currentHeightRows
            : nextHeightRows,
        )
      },
      [initialRows, maxRows],
    )

    const syncTextAreaState = useCallback(
      (textarea: HTMLTextAreaElement) => {
        const count = getCount(textarea.value)

        if (isUncontrolled) {
          setCount(count)
        }

        if (isEnableAutoHeight) {
          syncHeight(textarea)
        }

        return count
      },
      [getCount, isEnableAutoHeight, isUncontrolled, syncHeight],
    )

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.currentTarget.value
        const count = getCount(value)
        if (maxLength !== undefined && count > maxLength) {
          return
        }

        syncTextAreaState(e.currentTarget)
        onChange?.(value)
      },
      [getCount, maxLength, onChange, syncTextAreaState],
    )

    useImperativeHandle(
      imperativeRef,
      () => ({
        setValue: (value: string) => {
          if (textareaRef.current === null) {
            return
          }

          textareaRef.current.value = value
          syncTextAreaState(textareaRef.current)
        },
        sync: () => {
          if (textareaRef.current !== null) {
            syncTextAreaState(textareaRef.current)
          }
        },
      }),
      [syncTextAreaState],
    )

    const textAreaId = useId(props.id)
    const describedbyId = useId()
    const labelledbyId = useId()

    useIsomorphicLayoutEffect(() => {
      // 制御コンポーネントの時の挙動
      if (!isUncontrolled) {
        setCount(getCount(countValue))
      }

      //　autoHeight同期(valueが変更された時にsyncHeightしたい)
      if (isEnableAutoHeight && textareaRef.current !== null) {
        syncHeight(textareaRef.current)
      }
    }, [
      isUncontrolled,
      countValue,
      getCount,
      isEnableAutoHeight,
      textareaRef,
      syncHeight,
    ])

    useIsomorphicLayoutEffect(() => {
      const container = containerRef.current
      if (
        !isEnableAutoHeight ||
        container === null ||
        !('ResizeObserver' in window)
      ) {
        return
      }

      let previousWidth = container.getBoundingClientRect().width
      const observer = new ResizeObserver((entries) => {
        const width = entries[0]?.contentRect.width
        if (width === undefined || width === previousWidth) {
          return
        }

        previousWidth = width
        if (textareaRef.current !== null) {
          syncHeight(textareaRef.current)
        }
      })

      observer.observe(container)
      return () => observer.disconnect()
    }, [isEnableAutoHeight, syncHeight])

    return (
      <div className={classNames} aria-disabled={disabled}>
        <FieldLabel
          htmlFor={textAreaId}
          id={labelledbyId}
          label={label}
          required={required}
          requiredText={requiredText}
          subLabel={subLabel}
          {...(!showLabel ? visuallyHiddenProps : {})}
        />
        <div
          className="charcoal-text-area-container"
          aria-disabled={disabled === true ? 'true' : undefined}
          aria-invalid={invalid === true}
          ref={containerRef}
          style={{
            '--charcoal-text-area-rows': rows,
          }}
        >
          <textarea
            className="charcoal-text-area-textarea"
            aria-describedby={showAssistiveText ? describedbyId : undefined}
            aria-invalid={invalid}
            aria-labelledby={labelledbyId}
            id={textAreaId}
            maxLength={maxLength}
            data-no-bottom-padding={showCount}
            onChange={handleChange}
            ref={mergeRefs(forwardRef, textareaRef)}
            rows={rows}
            value={value}
            disabled={disabled}
            defaultValue={defaultValue}
            {...props}
          />
          {showCount && (
            <span className="charcoal-text-area-counter">
              {maxLength !== undefined ? `${count}/${maxLength}` : count}
            </span>
          )}
        </div>
        {showAssistiveText && (
          <AssistiveText data-invalid={invalid === true} id={describedbyId}>
            {assistiveText}
          </AssistiveText>
        )}
      </div>
    )
  },
)

export default TextArea
