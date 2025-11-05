import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgDownload = (
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
      d="M3.5 20c0 .69.56 1.25 1.25 1.25h14.5a1.25 1.25 0 100-2.5H4.75c-.69 0-1.25.56-1.25 1.25zm9.75-6.857l2.947-2.947a1.136 1.136 0 111.607 1.607l-5 5a1.136 1.136 0 01-1.607 0l-5-5a1.136 1.136 0 111.607-1.607l2.946 2.947V3.75a1.25 1.25 0 112.5 0v9.393z"
      fill="currentColor"
    />
  </svg>
)
export const IconDownloadSolid: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgDownload)
export default IconDownloadSolid
