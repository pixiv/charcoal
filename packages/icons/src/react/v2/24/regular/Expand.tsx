import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgExpand = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M3.952 4.702a.75.75 0 01.75-.75h4.423a.75.75 0 010 1.5H6.513L12 10.94l5.487-5.487h-2.612a.75.75 0 010-1.5h4.423a.75.75 0 01.75.75v4.423a.75.75 0 01-1.5 0V6.513L13.06 12l5.487 5.487v-2.612a.75.75 0 011.5 0v4.422a.75.75 0 01-.75.75h-4.423a.75.75 0 010-1.5h2.612L12 13.061l-5.487 5.486h2.612a.75.75 0 010 1.5H4.702a.75.75 0 01-.75-.75v-4.422a.75.75 0 011.5 0v2.612L10.94 12 5.452 6.513v2.612a.75.75 0 01-1.5 0V4.702z"
      fill="currentColor"
    />
  </svg>
)
export const IconExpand: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgExpand)
export default IconExpand
