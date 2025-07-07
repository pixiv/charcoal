import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgZoomIn = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M10.808 4.991a5.816 5.816 0 100 11.633 5.816 5.816 0 000-11.633zM2.49 10.808a8.316 8.316 0 1115.015 4.93l3.136 3.137a1.25 1.25 0 11-1.768 1.767l-3.136-3.136a8.316 8.316 0 01-13.246-6.698zM10.75 7c.69 0 1.25.56 1.25 1.25V9.5h1.25a1.25 1.25 0 110 2.5H12v1.25a1.25 1.25 0 11-2.5 0V12H8.25a1.25 1.25 0 110-2.5H9.5V8.25c0-.69.56-1.25 1.25-1.25z"
      fill="currentColor"
    />
  </svg>
)
export const IconZoomInSolid = forwardRef(SvgZoomIn)
export default IconZoomInSolid
