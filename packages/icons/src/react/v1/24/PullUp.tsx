import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgPullUp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M16.586 15.914a2 2 0 102.828-2.828L12 5.672l-7.414 7.414a2 2 0 102.828 2.828L12 11.328l4.586 4.586z"
      fill="currentColor"
    />
  </svg>
)
export const IconPullUp24: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgPullUp)
export default IconPullUp24
