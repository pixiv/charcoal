import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgSearch = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M4.991 10.808a5.816 5.816 0 1111.633 0 5.816 5.816 0 01-11.633 0zm5.817-8.317a8.316 8.316 0 104.93 15.015l3.136 3.136a1.25 1.25 0 001.768-1.767l-3.136-3.137a8.316 8.316 0 00-6.698-13.247z"
      fill="currentColor"
    />
  </svg>
)
export const IconSearchSolid = forwardRef(SvgSearch)
export default IconSearchSolid
