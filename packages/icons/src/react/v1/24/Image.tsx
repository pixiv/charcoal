import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgImage = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M6 4a3 3 0 00-3 3v10a3 3 0 003 3h12a3 3 0 003-3V7a3 3 0 00-3-3H6zm13 8.5l-4 2-6-3-4 2V17a1 1 0 001 1h12a1 1 0 001-1v-4.5zM18 9a2 2 0 11-4 0 2 2 0 014 0z"
      fill="currentColor"
    />
  </svg>
)
export const IconImage24 = forwardRef(SvgImage)
export default IconImage24
