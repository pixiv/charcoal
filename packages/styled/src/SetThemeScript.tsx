import React from 'react'
import { DEFAULT_ROOT_ATTRIBUTE, LOCAL_STORAGE_KEY } from './helper'

interface Props {
  localStorageKey: string
  rootAttribute: string
}

/**
 * 同期的にテーマをローカルストレージから取得してhtmlの属性に設定するスクリプトタグ
 * @param props localStorageのキー、htmlのdataになる属性のキーを含むオブジェクト
 * @returns
 */
export function SetThemeScript(props: Props) {
  if (!/^\w((\w|-)+)$/.test(props.localStorageKey)) {
    throw new Error(
      `Unexpected localStorageKey ${props.localStorageKey}. expect /^\\w((\\w|-)+)$/`
    )
  }
  if (!/^\w+$/.test(props.rootAttribute)) {
    throw new Error(
      `Unexpected rootAttribute ${props.rootAttribute}. expect /^\\w+$/`
    )
  }
  const src = `'use strict';
(function () {
    var localStorageKey = '${props.localStorageKey}'
    var rootAttribute = '${props.rootAttribute}'
    var currentTheme = localStorage.getItem(localStorageKey);
    if (currentTheme) {
        document.documentElement.dataset[rootAttribute] = currentTheme;
    }
})();
`

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
