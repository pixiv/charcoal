import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgEmoji = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M3.5 12a8.5 8.5 0 1117 0 8.5 8.5 0 01-17 0zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-3.75 9.5a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zm-.703 2.39a.75.75 0 011.06.01A4.733 4.733 0 0012 15.325c1.329 0 2.53-.545 3.392-1.425a.75.75 0 011.071 1.05A6.234 6.234 0 0112 16.825a6.233 6.233 0 01-4.464-1.875.75.75 0 01.011-1.06zm8.203-2.39a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"
      fill="currentColor"
    />
  </svg>
)
export const IconEmoji = forwardRef(SvgEmoji)
export default IconEmoji
