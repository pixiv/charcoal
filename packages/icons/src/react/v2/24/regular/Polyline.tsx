import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgPolyline = (
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
      d="M8.985 6.75a.75.75 0 01.64.334l5.346 8.02L21.36 4.61a.75.75 0 111.282.78l-7 11.5a.75.75 0 01-1.265.026l-5.347-8.02L2.64 19.39a.75.75 0 01-1.282-.78l7-11.5a.75.75 0 01.626-.36z"
      fill="currentColor"
    />
  </svg>
)
export const IconPolyline: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgPolyline)
export default IconPolyline
