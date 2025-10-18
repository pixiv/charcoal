import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgDotsvertical = (
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
      d="M10 5.5a2 2 0 104 0 2 2 0 00-4 0zm0 6.5a2 2 0 104 0 2 2 0 00-4 0zm0 6.5a2 2 0 104 0 2 2 0 00-4 0z"
      fill="currentColor"
    />
  </svg>
)
export const IconDotsVerticalSolid: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgDotsvertical)
export default IconDotsVerticalSolid
