import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgBezierCurve = (
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
      d="M11 7a1 1 0 112 0 1 1 0 01-2 0zM9.832 8.245a7.35 7.35 0 00-5.17 6.594 2.501 2.501 0 11-1.504.056A8.851 8.851 0 017.33 7.75H4.347a1.5 1.5 0 11-.102-1.5h5.37a2.501 2.501 0 014.77 0h5.368a1.5 1.5 0 11-.102 1.5h-2.98a8.845 8.845 0 014.174 7.146 2.501 2.501 0 11-1.505-.058 7.352 7.352 0 00-5.171-6.593 2.5 2.5 0 01-4.337 0zM4 16.25a1 1 0 100 2 1 1 0 000-2zm16 0a1 1 0 100 2 1 1 0 000-2z"
      fill="currentColor"
    />
  </svg>
)
export const IconBezierCurve = forwardRef(SvgBezierCurve)
export default IconBezierCurve
