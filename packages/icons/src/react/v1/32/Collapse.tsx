import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgCollapse = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M21 11h3a1 1 0 110 2h-5V8a1 1 0 112 0v3zM8 21h3v3a1 1 0 102 0v-5H8a1 1 0 100 2zM21 24v-3h3a1 1 0 100-2h-5v5a1 1 0 102 0zM11 8v3H8a1 1 0 100 2h5V8a1 1 0 10-2 0z"
      fill="currentColor"
    />
  </svg>
)
export const IconCollapse32: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgCollapse)
export default IconCollapse32
