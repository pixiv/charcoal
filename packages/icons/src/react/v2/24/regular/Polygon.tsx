import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgPolygon = (
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
      d="M9.796 2.675a3.75 3.75 0 014.408 0l5.983 4.347a3.75 3.75 0 011.362 4.193l-2.285 7.033a3.75 3.75 0 01-3.566 2.591H8.302a3.75 3.75 0 01-3.566-2.59L2.45 11.214a3.75 3.75 0 011.362-4.193l5.983-4.347zm3.527 1.214a2.25 2.25 0 00-2.646 0L4.694 8.236a2.25 2.25 0 00-.817 2.515l2.285 7.034a2.25 2.25 0 002.14 1.554h7.396a2.25 2.25 0 002.14-1.554l2.285-7.034a2.25 2.25 0 00-.818-2.515l-5.982-4.347z"
      fill="currentColor"
    />
  </svg>
)
export const IconPolygon = forwardRef(SvgPolygon)
export default IconPolygon
