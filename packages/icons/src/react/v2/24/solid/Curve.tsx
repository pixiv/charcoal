import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgCurve = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M20.25 5.25c-8.284 0-15 6.716-15 15a1.25 1.25 0 11-2.5 0c0-9.665 7.835-17.5 17.5-17.5a1.25 1.25 0 110 2.5z"
      fill="currentColor"
    />
  </svg>
)
export const IconCurveSolid = forwardRef(SvgCurve)
export default IconCurveSolid
