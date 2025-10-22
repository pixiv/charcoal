import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgLinenodes = (
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
      d="M19.002 4.002a1 1 0 100 2 1 1 0 000-2zm-2.5 1a2.5 2.5 0 111.34 2.215L7.219 17.843a2.5 2.5 0 11-1.062-1.06L16.784 6.155a2.49 2.49 0 01-.282-1.153zm-11.5 13a1 1 0 100 2 1 1 0 000-2z"
      fill="currentColor"
    />
  </svg>
)
export const IconLineNodes: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgLinenodes)
export default IconLineNodes
