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
      d="M14.75 5.25a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0zm-1.396-.75H3.75a.75.75 0 000 1.5h9.604a2.751 2.751 0 005.293 0h1.603a.75.75 0 000-1.5h-1.604a2.751 2.751 0 00-5.293 0zM9.25 12a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zm-3.896-.75H3.75a.75.75 0 000 1.5h1.604a2.751 2.751 0 005.292 0h9.604a.75.75 0 000-1.5h-9.604a2.751 2.751 0 00-5.292 0zM3.75 18a.75.75 0 000 1.5h6.604a2.751 2.751 0 005.293 0h4.603a.75.75 0 000-1.5h-4.604a2.751 2.751 0 00-5.293 0H3.75zm9.25-.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z"
      fill="currentColor"
    />
  </svg>
)
export const IconSliders: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgSliders)
export default IconSliders
