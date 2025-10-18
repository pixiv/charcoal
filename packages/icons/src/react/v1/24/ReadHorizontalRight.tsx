import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgReadHorizontalRight = (
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
      d="M14.707 8.293a1 1 0 10-1.414 1.414L14.586 11H7a1 1 0 000 2h7.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a.996.996 0 00.293-.694V12v-.013a.994.994 0 00-.29-.692"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 7v10a4 4 0 004 4h10a4 4 0 004-4V7a4 4 0 00-4-4H7a4 4 0 00-4 4zm4 12a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H7z"
      fill="currentColor"
    />
  </svg>
)
export const IconReadHorizontalRight24: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgReadHorizontalRight)
export default IconReadHorizontalRight24
