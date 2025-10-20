import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgCurvenodes = (
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
      d="M19.502 1.752a2.5 2.5 0 00-2.295 1.508C9.716 3.54 3.704 9.604 3.505 17.116a2.501 2.501 0 101.5.002c.196-6.634 5.458-11.996 12.05-12.35a2.5 2.5 0 102.447-3.016z"
      fill="currentColor"
    />
  </svg>
)
export const IconCurveNodesSolid: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgCurvenodes)
export default IconCurveNodesSolid
