import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgIndex = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.5 11.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM11 10a1 1 0 011-1h13a1 1 0 110 2H12a1 1 0 01-1-1zm1 5a1 1 0 100 2h13a1 1 0 100-2H12zm0 6a1 1 0 100 2h13a1 1 0 100-2H12zm-3-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-1.5 7.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
      fill="currentColor"
    />
  </svg>
)
export const IconIndex32: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgIndex)
export default IconIndex32
