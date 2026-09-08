import './index.css'

import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
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
import { observeResize } from '../Carousel/resizeObserver'

/**
 * 値に含まれる改行だけから行数を数える。CSS にもレイアウトにも依存しないため、
 * 実測できない環境ではこれを使う。
 */
const countValueRows = (value: string) => (value.match(/\n/gu)?.length ?? 0) + 1

/**
 * 折り返しを含めて実際に表示されている行数を DOM から測る。
 * 1 行の高さは、いま描画されている行数（rows 属性）と、その時の高さから割り出す。
 * getComputedStyle を使わないので、レイアウトを走らせる読み取りだけで完結する。
 * 測定できなかった場合は `undefined` を返す。
 */
const measureTextAreaRows = (
  textarea: HTMLTextAreaElement,
): number | undefined => {
  // 潰す前の高さ = 1 行の高さ * いまの行数 + padding
  const currentHeight = textarea.clientHeight
  const currentRows = textarea.rows

  const previous = {
    height: textarea.style.height,
    overflowY: textarea.style.overflowY,
  }

  try {
    // 高さが固定されていると scrollHeight が内容に追随しないので一旦潰す。
    textarea.style.height = '0px'
    // 測定中だけ現れるスクロールバーが行の幅を狭めるのを防ぐ。
    textarea.style.overflowY = 'hidden'

    // box-sizing: border-box なので height: 0 だと content box が潰れ、
    // clientHeight は padding そのものになる。
    const padding = textarea.clientHeight
    const lineHeight = (currentHeight - padding) / currentRows
    const rows = Math.round((textarea.scrollHeight - padding) / lineHeight)

    // レイアウトが無い環境（jsdom, display: none, 未挿入）や rows が 0 の時は
    // NaN / Infinity / 0 以下になる。すべて測定失敗として扱う。
    return Number.isFinite(rows) && rows >= 1 ? rows : undefined
  } finally {
    Object.assign(textarea.style, previous)
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
  /**
   * 内容に合わせて高さを自動調整する。折り返しも含めて実測するため、
   * 幅は呼び出し側で決めること。親要素が内容依存の幅（shrink-to-fit, inline-flex,
   * fit-content, 幅未指定の絶対配置など）だと想定より狭くなり、折り返しが増えて
   * 高さが過剰に伸びる。
   */
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
    const [contentRows, setContentRows] = useState<number>()
    const [count, setCount] = useState(getCount(countValue))

    const textareaRef = useRef<HTMLTextAreaElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    useFocusWithClick(containerRef, textareaRef)
    const { visuallyHiddenProps } = useVisuallyHidden()

    // maxRows は 1 以上の時だけ上限として扱う
    const rowsLimit =
      maxRows !== undefined && maxRows >= 1 ? maxRows : undefined
    const isEnableAutoHeight = autoHeight || rowsLimit !== undefined
    // 表示行数は実測値を rows 以上 maxRows 以下に収めたもの。autoHeight が無効なら
    // contentRows は undefined のままなので rows prop がそのまま出る。
    const rows = Math.min(
      Math.max(initialRows, contentRows ?? 0),
      rowsLimit ?? Infinity,
    )
    const classNames = useClassNames('charcoal-text-area-root', className)
    const showAssistiveText =
      assistiveText != null && assistiveText.length !== 0

    const syncHeight = useCallback((textarea: HTMLTextAreaElement) => {
      // 実測できない環境では改行数にフォールバックする。折り返しは反映されないが、
      // 少なくとも改行分は伸びる（この変更以前と同じ挙動）。
      setContentRows(
        measureTextAreaRows(textarea) ?? countValueRows(textarea.value),
      )
    }, [])

    const syncTextAreaState = useCallback(
      (textarea: HTMLTextAreaElement) => {
        if (isUncontrolled) {
          setCount(getCount(textarea.value))
        }

        if (isEnableAutoHeight) {
          syncHeight(textarea)
        }
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

        // 非制御では DOM が値の source of truth なので、ここで内部状態を合わせる。
        // 制御コンポーネントでは親が value を確定させた後（下の layout effect）に
        // 測る。ここで測ると、親が変更を弾いた時に行数だけ取り残される。
        if (isUncontrolled) {
          syncTextAreaState(e.currentTarget)
        }

        onChange?.(value)
      },
      [getCount, isUncontrolled, maxLength, onChange, syncTextAreaState],
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

    // 制御コンポーネントの時の挙動。高さと違い描画前に確定する必要はない。
    useEffect(() => {
      if (!isUncontrolled) {
        setCount(getCount(countValue))
      }
    }, [countValue, getCount, isUncontrolled])

    // autoHeight 同期(確定した value prop が変わった時に syncHeight したい)。
    // ちらつきを避けるため描画前に行う。
    useIsomorphicLayoutEffect(() => {
      if (isEnableAutoHeight && textareaRef.current !== null) {
        syncHeight(textareaRef.current)
      }
    }, [value, isEnableAutoHeight, syncHeight])

    // 幅が変われば折り返し位置が変わるので測り直す。
    useIsomorphicLayoutEffect(() => {
      const container = containerRef.current
      if (!isEnableAutoHeight || container === null) {
        return
      }

      // 基準値は observe する前に取っておく。最初の通知を基準取りに使うと、
      // その通知が届く前に幅が変わった場合に変化を取りこぼす。
      let previousWidth = container.clientWidth

      return observeResize(container, () => {
        const width = container.clientWidth
        if (width === previousWidth) {
          // 高さだけが変わった通知（自分の setState の結果）では測り直さない。
          // 幅が変わっていない限り再入しないので、ループにはならない。
          return
        }
        previousWidth = width

        if (textareaRef.current !== null) {
          syncHeight(textareaRef.current)
        }
      })
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
