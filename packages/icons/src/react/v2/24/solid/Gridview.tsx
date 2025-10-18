import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgGridview = (
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
      d="M8.124 4a1.125 1.125 0 10-2.25 0v1.873H3.997a1.125 1.125 0 000 2.25h1.877v2.75H3.997a1.125 1.125 0 000 2.25h1.877v2.75H3.997a1.125 1.125 0 000 2.25h1.877V20a1.125 1.125 0 002.25 0v-1.877h2.75V20a1.125 1.125 0 002.25 0v-1.877h2.75V20a1.125 1.125 0 002.25 0v-1.877h1.873a1.125 1.125 0 100-2.25h-1.873v-2.75h1.873a1.125 1.125 0 100-2.25h-1.873v-2.75h1.873a1.125 1.125 0 100-2.25h-1.873V4a1.125 1.125 0 00-2.25 0v1.873h-2.75V4a1.125 1.125 0 00-2.25 0v1.873h-2.75V4zm7.75 11.873v-2.75h-2.75v2.75h2.75zm-5 0v-2.75h-2.75v2.75h2.75zm5-7.75v2.75h-2.75v-2.75h2.75zm-5 2.75v-2.75h-2.75v2.75h2.75z"
      fill="currentColor"
    />
  </svg>
)
export const IconGridviewSolid: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgGridview)
export default IconGridviewSolid
