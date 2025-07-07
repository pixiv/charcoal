import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgX = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M20.056 5.712a1.25 1.25 0 00-1.768-1.768L12 10.232 5.71 3.944a1.25 1.25 0 00-1.768 1.768L10.232 12 3.943 18.29a1.25 1.25 0 101.768 1.767L12 13.768l6.288 6.288a1.25 1.25 0 101.768-1.767L13.767 12l6.289-6.288z"
      fill="currentColor"
    />
  </svg>
)
export const IconXSolid = forwardRef(SvgX)
export default IconXSolid
