import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgSliders = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
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
      d="M13.354 4.5a2.751 2.751 0 015.293 0h1.603a.75.75 0 010 1.5h-1.604a2.751 2.751 0 01-5.293 0H3.75a.75.75 0 010-1.5h9.604zm-2.707 8.25a2.751 2.751 0 01-5.293 0H3.75a.75.75 0 010-1.5h1.604a2.751 2.751 0 015.292 0h9.604a.75.75 0 010 1.5h-9.604zM3.75 18a.75.75 0 000 1.5h6.604a2.751 2.751 0 005.293 0h4.603a.75.75 0 000-1.5h-4.604a2.751 2.751 0 00-5.293 0H3.75z"
      fill="currentColor"
    />
  </svg>
)
export const IconSlidersSolid: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgSliders)
export default IconSlidersSolid
