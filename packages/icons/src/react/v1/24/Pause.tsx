import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgPause = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
      fill="currentColor"
    />
    <path
      d="M9 8a1 1 0 00-1 1v6a1 1 0 001 1h1a1 1 0 001-1V9a1 1 0 00-1-1H9zM14 8a1 1 0 00-1 1v6a1 1 0 001 1h1a1 1 0 001-1V9a1 1 0 00-1-1h-1z"
      fill="#fff"
    />
  </svg>
)
export const IconPause24 = forwardRef(SvgPause)
export default IconPause24
