import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgUpload = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M16.197 9.804a1.136 1.136 0 001.607-1.607l-5-5a1.136 1.136 0 00-1.607 0l-5 5a1.136 1.136 0 101.607 1.607l2.946-2.947v8.393a1.25 1.25 0 102.5 0V6.857l2.947 2.947zM3.5 19.75c0-.69.56-1.25 1.25-1.25h14.5a1.25 1.25 0 110 2.5H4.75c-.69 0-1.25-.56-1.25-1.25z"
      fill="currentColor"
    />
  </svg>
)
export const IconUploadSolid: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgUpload)
export default IconUploadSolid
