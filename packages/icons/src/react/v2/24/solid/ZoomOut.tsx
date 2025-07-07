import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgZoomOut = (
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
      d="M10.808 4.991a5.816 5.816 0 100 11.633 5.816 5.816 0 000-11.633zM2.49 10.808a8.316 8.316 0 1115.015 4.93l3.136 3.137a1.25 1.25 0 11-1.768 1.767l-3.136-3.136a8.316 8.316 0 01-13.246-6.698zM8.2 9.75a1.25 1.25 0 100 2.5h5a1.25 1.25 0 100-2.5h-5z"
      fill="currentColor"
    />
  </svg>
)
export const IconZoomOutSolid = forwardRef(SvgZoomOut)
export default IconZoomOutSolid
