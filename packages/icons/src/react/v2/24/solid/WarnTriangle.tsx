import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgWarntriangle = (
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
      d="M14.383 4.396c-1.056-1.84-3.71-1.842-4.768-.002L2.464 16.829c-1.054 1.833.269 4.12 2.384 4.12h14.288c2.114 0 3.438-2.285 2.386-4.118L14.383 4.396zM12 8.25a.75.75 0 01.75.75v4.6a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm.09 9.85c.558 0 1.01-.47 1.01-1.05 0-.58-.452-1.05-1.01-1.05h-.08c-.558 0-1.01.47-1.01 1.05 0 .58.452 1.05 1.01 1.05h.08z"
      fill="currentColor"
    />
  </svg>
)
export const IconWarnTriangleSolid = forwardRef(SvgWarntriangle)
export default IconWarnTriangleSolid
