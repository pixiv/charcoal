import React from 'react'
import {
  assertKeyString,
  DEFAULT_ROOT_ATTRIBUTE,
  LOCAL_STORAGE_KEY,
} from './helper'

interface Props {
  localStorageKey: string
  rootAttribute: string
}

/**
 * 同期的にテーマをローカルストレージから取得してhtmlの属性に設定するコードを取得する
 * @param props localStorageのキー、htmlのdataになる属性のキーを含むオブジェクト
 * @returns ソースコードの文字列
 */
export function makeSetThemeScriptCode(props: Props = defaultProps) {
  assertKeyString(props.localStorageKey)
  assertKeyString(props.rootAttribute)
  return `'use strict';
(function () {
    var localStorageKey = '${props.localStorageKey}'
    var rootAttribute = '${props.rootAttribute}'
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
export function SetThemeScript(props: Props) {
  const src = makeSetThemeScriptCode(props)
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

SetThemeScript.defaultProps = defaultProps
