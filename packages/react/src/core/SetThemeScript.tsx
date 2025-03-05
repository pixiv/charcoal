import {
  assertKeyString,
  DEFAULT_ROOT_ATTRIBUTE,
  LOCAL_STORAGE_KEY,
} from './themeHelper'

interface Props {
  localStorageKey: string
  rootAttribute: string
}

/**
 * 同期的にテーマをローカルストレージから取得してhtmlの属性に設定するコードを取得する
 * @param props localStorageのキー、htmlのdataになる属性のキーを含むオブジェクト
 * @returns ソースコードの文字列
 */
export function makeSetThemeScriptCode({
  localStorageKey = defaultProps.localStorageKey,
  rootAttribute = defaultProps.rootAttribute,
}: Partial<Props> = defaultProps) {
  assertKeyString(localStorageKey)
  assertKeyString(rootAttribute)
  return `'use strict';
(function () {
    var localStorageKey = '${localStorageKey}'
    var rootAttribute = '${rootAttribute}'
    var currentTheme = localStorage.getItem(localStorageKey);
    if (currentTheme) {
        document.documentElement.dataset[rootAttribute] = currentTheme;
    }
})();
`
}

/**
 * 同期的にテーマをローカルストレージから取得してhtmlの属性に設定するスクリプトタグ
 * @param props localStorageのキー、htmlのdataになる属性のキーを含むオブジェクト
 * @returns
 */
export function SetThemeScript({
  localStorageKey = defaultProps.localStorageKey,
  rootAttribute = defaultProps.rootAttribute,
}: Props) {
  const src = makeSetThemeScriptCode({ localStorageKey, rootAttribute })
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: src,
      }}
    />
  )
}

const defaultProps: Props = {
  localStorageKey: LOCAL_STORAGE_KEY,
  rootAttribute: DEFAULT_ROOT_ATTRIBUTE,
}
