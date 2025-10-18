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
      d="M16.97 9.78a.75.75 0 101.06-1.06l-5.5-5.5a.75.75 0 00-1.06 0l-5.5 5.5a.75.75 0 001.06 1.06l4.22-4.22V16a.75.75 0 001.5 0V5.56l4.22 4.22zM4 20.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H4.75a.75.75 0 01-.75-.75z"
      fill="currentColor"
    />
  </svg>
)
export const IconUpload: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgUpload)
export default IconUpload
