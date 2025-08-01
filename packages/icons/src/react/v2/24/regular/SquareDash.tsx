import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgSquaredash = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
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
      d="M3.001 6.501a.75.75 0 001.5 0 2 2 0 012-2 .75.75 0 100-1.5 3.5 3.5 0 00-3.5 3.5zm0 11.002a.75.75 0 011.5 0 2 2 0 002 2 .75.75 0 010 1.5 3.5 3.5 0 01-3.5-3.5zm17.206-.75a.75.75 0 01.75.75 3.5 3.5 0 01-3.5 3.5.75.75 0 110-1.5 2 2 0 002-2 .75.75 0 01.75-.75zM21 6.501a.75.75 0 01-1.5 0 2 2 0 00-2-2 .75.75 0 010-1.5 3.5 3.5 0 013.5 3.5zM3.75 8.74a.75.75 0 01.75.75v1a.75.75 0 01-1.5 0v-1a.75.75 0 01.75-.75zM21 9.49a.75.75 0 00-1.5 0v1a.75.75 0 001.5 0v-1zM15.25 3.75a.75.75 0 01-.75.75h-1a.75.75 0 010-1.5h1a.75.75 0 01.75.75zm-.765 17.252a.75.75 0 000-1.5h-1a.75.75 0 100 1.5h1zM3.751 12.736a.75.75 0 01.75.75v1a.75.75 0 11-1.5 0v-1a.75.75 0 01.75-.75zm17.206.75a.75.75 0 00-1.5 0v1a.75.75 0 101.5 0v-1zM11.25 3.751a.75.75 0 01-.75.75h-1a.75.75 0 010-1.5h1a.75.75 0 01.75.75zm-.736 17.252a.75.75 0 000-1.5h-1a.75.75 0 000 1.5h1z"
      fill="currentColor"
    />
  </svg>
)
export const IconSquareDash = forwardRef(SvgSquaredash)
export default IconSquareDash
