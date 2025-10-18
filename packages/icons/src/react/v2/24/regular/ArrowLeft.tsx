import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgArrowleft = (
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
      d="M11.53 5.53a.75.75 0 00-1.06-1.06l-7 7a.75.75 0 000 1.06l7 7a.75.75 0 101.06-1.06l-5.72-5.72H20a.75.75 0 000-1.5H5.81l5.72-5.72z"
      fill="currentColor"
    />
  </svg>
)
export const IconArrowLeft: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgArrowleft)
export default IconArrowLeft
