import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgDropper = (
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
      d="M16.385 3.526a3.002 3.002 0 014.245 4.245l-2.43 2.43 1.33 1.33a.75.75 0 01-1.06 1.06l-7-7a.75.75 0 111.06-1.06l1.425 1.425 2.43-2.43zM4.192 15.996l7.78-7.78 3.89 3.89-7.79 7.788a3.25 3.25 0 01-1.784.911l-1.864.299a1.25 1.25 0 01-1.433-1.423l.286-1.877a3.25 3.25 0 01.915-1.807z"
      fill="currentColor"
    />
  </svg>
)
export const IconDropperSolid: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgDropper)
export default IconDropperSolid
