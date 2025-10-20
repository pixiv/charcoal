import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgAdd = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M13.25 5.386a1.25 1.25 0 10-2.5 0v5.364H5.386a1.25 1.25 0 100 2.5h5.364v5.364a1.25 1.25 0 002.5 0V13.25h5.364a1.25 1.25 0 100-2.5H13.25V5.386z"
      fill="currentColor"
    />
  </svg>
)
export const IconAddSolid: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgAdd)
export default IconAddSolid
