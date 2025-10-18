import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgDownloadios = (
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
      d="M7.75 6.5A3.75 3.75 0 004 10.25v8A3.75 3.75 0 007.75 22h8.5A3.75 3.75 0 0020 18.25v-8a3.75 3.75 0 00-3.75-3.75h-8.5zm1.28 4.47a.75.75 0 00-1.06 1.06l3.5 3.5a.75.75 0 001.06 0l3.5-3.5a.75.75 0 10-1.06-1.06l-2.22 2.22V2.5a.75.75 0 00-1.5 0v10.69l-2.22-2.22z"
      fill="currentColor"
    />
  </svg>
)
export const IconDownloadIosSolid: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgDownloadios)
export default IconDownloadIosSolid
