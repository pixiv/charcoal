import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgHashTag = (
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
      d="M10.737 4.138a.75.75 0 00-1.474-.276L8.44 8.25H5a.75.75 0 000 1.5h3.159l-.844 4.5H4a.75.75 0 000 1.5h3.034l-.771 4.112a.75.75 0 101.474.276l.823-4.388h5.474l-.771 4.112a.75.75 0 001.474.276l.823-4.388H19a.75.75 0 000-1.5h-3.159l.844-4.5H20a.75.75 0 000-1.5h-3.034l.771-4.112a.75.75 0 00-1.474-.276L15.44 8.25H9.966l.771-4.112zm3.578 10.112l.844-4.5H9.685l-.844 4.5h5.474z"
      fill="currentColor"
    />
  </svg>
)
export const IconHashTag: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgHashTag)
export default IconHashTag
