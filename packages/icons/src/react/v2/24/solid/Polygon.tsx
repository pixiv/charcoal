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
      d="M14.204 2.675a3.75 3.75 0 00-4.408 0L3.813 7.022a3.75 3.75 0 00-1.362 4.193l2.285 7.033a3.75 3.75 0 003.566 2.591h7.396a3.75 3.75 0 003.566-2.59l2.285-7.034a3.75 3.75 0 00-1.362-4.193l-5.983-4.347z"
      fill="currentColor"
    />
  </svg>
)
export const IconPolygonSolid = forwardRef(SvgPolygon)
export default IconPolygonSolid
