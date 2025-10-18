import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgTransform = (
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
      d="M17.1 3.8a2.501 2.501 0 113.15 3.086v10.229A2.501 2.501 0 1117.1 20.2L6.893 18.743a.764.764 0 01-.119-.027 2.5 2.5 0 11-3.025-3.758V9.042a2.5 2.5 0 113.025-3.758.755.755 0 01.119-.026L17.099 3.8zm-11.85 11a2.5 2.5 0 012 2.478l9.884 1.412a2.506 2.506 0 011.616-1.576V6.886a2.506 2.506 0 01-1.616-1.576L7.25 6.722v.028a2.5 2.5 0 01-2 2.45v5.6z"
      fill="currentColor"
    />
  </svg>
)
export const IconTransformSolid: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgTransform)
export default IconTransformSolid
