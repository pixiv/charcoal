import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgAdd = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M12.75 5a.75.75 0 00-1.5 0v6.25H5a.75.75 0 000 1.5h6.25V19a.75.75 0 001.5 0v-6.25H19a.75.75 0 000-1.5h-6.25V5z"
      fill="currentColor"
    />
  </svg>
)
export const IconAdd: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgAdd)
export default IconAdd
