import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgAddcircle = (
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
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 4.425c.456 0 .825.37.825.825v3.925h3.925a.825.825 0 010 1.65h-3.925v3.925a.825.825 0 01-1.65 0v-3.925H7.25a.825.825 0 010-1.65h3.925V7.25c0-.456.37-.825.825-.825z"
      fill="currentColor"
    />
  </svg>
)
export const IconAddCircleSolid: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgAddcircle)
export default IconAddCircleSolid
