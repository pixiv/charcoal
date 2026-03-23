import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgFolder = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width={12}
    height={12}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 2a2 2 0 012-2h2.342a2 2 0 011.506.683L6.125 1H10a2 2 0 012 2v6a2 2 0 01-2 2H2a2 2 0 01-2-2V2zm1 2V3h10v1H1z"
      fill="currentColor"
    />
  </svg>
)
export const IconFolderInline: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgFolder)
export default IconFolderInline
