import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgFunnel = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.75 4.5c-1.128 0-1.68 1.375-.864 2.154l5.323 5.085c.346.33.541.787.541 1.265v6.378a.25.25 0 00.362.224l1.447-.724a1.25 1.25 0 00.691-1.118v-4.76c0-.478.195-.935.541-1.265l5.323-5.085c.816-.779.264-2.154-.863-2.154H5.749zm-1.9 3.238C2.056 6.025 3.269 3 5.75 3h12.5c2.481 0 3.694 3.025 1.9 4.738l-5.323 5.086a.25.25 0 00-.077.18v4.76a2.75 2.75 0 01-1.52 2.46l-1.447.723a1.75 1.75 0 01-2.533-1.565v-6.378a.25.25 0 00-.077-.18L3.85 7.738z"
      fill="currentColor"
    />
  </svg>
)
export const IconFunnel = forwardRef(SvgFunnel)
export default IconFunnel
