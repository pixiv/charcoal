import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgReadVertical = (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 9a4 4 0 014-4h14a4 4 0 014 4v14a4 4 0 01-4 4H9a4 4 0 01-4-4V9zm4-2a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H9z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.707 22.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L15 19.586V10a1 1 0 112 0v9.586l2.293-2.293a1 1 0 011.414 1.414l-4 4z"
      fill="currentColor"
    />
  </svg>
)
export const IconReadVertical32: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgReadVertical)
export default IconReadVertical32
