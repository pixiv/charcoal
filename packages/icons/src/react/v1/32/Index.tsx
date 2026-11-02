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
      d="M7.5 11.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM25 9a1 1 0 110 2H12a1 1 0 110-2h13zm1 7a1 1 0 00-1-1H12a1 1 0 100 2h13a1 1 0 001-1zm0 6a1 1 0 00-1-1H12a1 1 0 100 2h13a1 1 0 001-1zM9 16a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-1.5 7.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
      fillRule="evenodd"
      clipRule="evenodd"
      fill="currentColor"
    />
  </svg>
)
export const IconIndex32: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgIndex)
export default IconIndex32
