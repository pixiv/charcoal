import * as React from 'react'

/**
 * react-aria@3.48.0の`useTextField()`は、<textarea>をサポートするにも関わらず、
 * `React.KeyboardEvent<HTMLInputElement>`しか想定していないイベントハンドラがいくつかある
 * react-aria@3.49.0で修正済みだが、peerDependenciesで3.48.0もサポートしているため、
 * 以下のイベントハンドラの型は信用しない（本当は`Element`ではなく`HTMLTextAreaElement`とかにしたい）
 *
 * @see https://github.com/adobe/react-spectrum/issues/4662
 */
export interface ReactAriaUseTextFieldCompat<E = Element> {
  readonly onCopy?: React.ClipboardEventHandler<E>
  readonly onPaste?: React.ClipboardEventHandler<E>
  readonly onCut?: React.ClipboardEventHandler<E>
  readonly onCompositionStart?: React.CompositionEventHandler<E>
  readonly onCompositionEnd?: React.CompositionEventHandler<E>
  readonly onCompositionUpdate?: React.CompositionEventHandler<E>
  readonly onSelect?: React.ReactEventHandler<E>
  readonly onBeforeInput?: React.FormEventHandler<E>
  readonly onInput?: React.FormEventHandler<E>
  readonly autoCapitalize?:
    'none' | 'on' | 'off' | 'sentences' | 'words' | 'characters' | undefined
}
