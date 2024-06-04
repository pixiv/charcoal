import { SSRProvider as OriginSSRProvider } from '@react-aria/ssr'
import { version, Fragment } from 'react'

export function isReactVersionOver(minVersion: number): boolean {
  const reactMajorVersion = parseInt(version.split('.')[0], 10)
  return Number.isFinite(reactMajorVersion)
    ? reactMajorVersion >= minVersion
    : false
}

export const SSRProvider = isReactVersionOver(18) ? Fragment : OriginSSRProvider
