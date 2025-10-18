import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgCheck = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M21.084 6.116a1.25 1.25 0 010 1.768L10.538 18.431a1.75 1.75 0 01-2.475 0l-4.847-4.847a1.25 1.25 0 011.768-1.768L9.3 16.133 19.316 6.116a1.25 1.25 0 011.768 0z"
      fill="currentColor"
    />
  </svg>
)
export const IconCheckSolid: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgCheck)
export default IconCheckSolid
