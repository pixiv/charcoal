import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgDial = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M13.256 3.229a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zm-7 2.897a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zm12.75 1.254a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM5.001 21.375a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zm-1.647-8.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zm18.55 1.256a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM19 21.379a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM12.004 7.994a5 5 0 00-4.032 7.958l3.09-3.09a.75.75 0 011.06 1.06l-3.091 3.093a5 5 0 102.973-9.02zm-6.5 5a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"
      fill="currentColor"
    />
  </svg>
)
export const IconDial = forwardRef(SvgDial)
export default IconDial
