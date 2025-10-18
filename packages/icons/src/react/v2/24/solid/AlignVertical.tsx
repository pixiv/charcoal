import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgAlignvertical = (
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
      d="M2 12a.75.75 0 01.75-.75h2.5v-5.5C5.25 4.784 6.034 4 7 4h2c.966 0 1.75.784 1.75 1.75v5.5h2.5V8c0-.966.784-1.75 1.75-1.75h2c.966 0 1.75.784 1.75 1.75v3.25h2.5a.75.75 0 010 1.5h-2.5V16A1.75 1.75 0 0117 17.75h-2A1.75 1.75 0 0113.25 16v-3.25h-2.5v5.5A1.75 1.75 0 019 20H7a1.75 1.75 0 01-1.75-1.75v-5.5h-2.5A.75.75 0 012 12z"
      fill="currentColor"
    />
  </svg>
)
export const IconAlignVerticalSolid: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgAlignvertical)
export default IconAlignVerticalSolid
