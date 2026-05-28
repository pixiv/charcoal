import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgDescription = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.707 5.207a1 1 0 01.293.707V12a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2 0 012-2h4.086a1 1 0 01.707.293l2.914 2.914zM6 10a.5.5 0 000 1h4a.5.5 0 000-1H6zm0-2a.5.5 0 000 1h4a.5.5 0 000-1H6zm2.5-2.5a1 1 0 001 1H12L8.5 3v2.5z"
      fill="currentColor"
    />
  </svg>
)
export const IconDescription16: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgDescription)
export default IconDescription16
