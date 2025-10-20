import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgAdd = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width={10}
    height={10}
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M6 6h3a1 1 0 100-2H6V1a1 1 0 00-2 0v3H1a1 1 0 000 2h3v3a1 1 0 102 0V6z"
      fill="currentColor"
    />
  </svg>
)
export const IconAddInline: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgAdd)
export default IconAddInline
