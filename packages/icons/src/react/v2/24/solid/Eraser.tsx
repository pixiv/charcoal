import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgEraser = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M11.34 3.907a3.949 3.949 0 015.584 0l2.92 2.919a3.949 3.949 0 010 5.584L13.9 18.352 5.398 9.848l5.942-5.941zM4.305 10.94l8.504 8.504-.305.305H20.5a.75.75 0 110 1.5h-11l-.04-.001a3.937 3.937 0 01-2.884-1.156l-2.92-2.919a3.949 3.949 0 010-5.584l.65-.649z"
      fill="currentColor"
    />
  </svg>
)
export const IconEraserSolid: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgEraser)
export default IconEraserSolid
