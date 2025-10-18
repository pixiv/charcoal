import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgShopping = (
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
      d="M7.754 6.902a3.75 3.75 0 00-3.75 3.75v7.596a3.75 3.75 0 003.75 3.75h8.492a3.75 3.75 0 003.75-3.75v-7.596a3.75 3.75 0 00-3.75-3.75H7.754zm.508-1.156a3.744 3.744 0 017.488 0v4.986a.75.75 0 01-1.5 0V5.746a2.244 2.244 0 10-4.488 0v4.986a.75.75 0 01-1.5 0V5.746z"
      fill="currentColor"
    />
  </svg>
)
export const IconShoppingSolid: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgShopping)
export default IconShoppingSolid
