import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgSmile = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width={12}
    height={12}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M2 6a2 2 0 100-4 2 2 0 000 4zM10 6a2 2 0 100-4 2 2 0 000 4zM9.89 8.89a5.5 5.5 0 01-7.78 0 1 1 0 011.415-1.415 3.5 3.5 0 004.95 0 1 1 0 011.414 1.414z"
      fill="currentColor"
    />
  </svg>
)
export const IconSmileInline = forwardRef(SvgSmile)
export default IconSmileInline
