import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgUndo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M8.707 3.293a1 1 0 010 1.414L7.414 6H13a7 7 0 010 14h-2a1 1 0 110-2h2a5 5 0 000-10H7.414l1.293 1.293a1 1 0 01-1.414 1.414L3.586 7l3.707-3.707a1 1 0 011.414 0z"
      fill="currentColor"
    />
  </svg>
)
export const IconUndo24: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgUndo)
export default IconUndo24
