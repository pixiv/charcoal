import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgOpenInNew = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
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
      d="M19.558 10.033a.75.75 0 001.5 0V3.67a.75.75 0 00-.75-.75h-6.364a.75.75 0 000 1.5h4.576l-8.05 8.05a.75.75 0 101.06 1.061l8.028-8.028v4.531zm-8.597-4.286a.75.75 0 00-.75-.75H6.75A3.75 3.75 0 003 8.747v8.5a3.75 3.75 0 003.75 3.75h8.497a3.75 3.75 0 003.75-3.75v-3.454a.75.75 0 10-1.5 0v3.453a2.25 2.25 0 01-2.25 2.25H6.75a2.25 2.25 0 01-2.25-2.25V8.747a2.25 2.25 0 012.25-2.25h3.461a.75.75 0 00.75-.75z"
      fill="currentColor"
    />
  </svg>
)
export const IconOpenInNew: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgOpenInNew)
export default IconOpenInNew
