import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgWarning = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
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
      d="M2.47 14h11.06c1.131 0 1.836-1.277 1.27-2.293L9.27 1.762a1.44 1.44 0 00-2.54 0L1.2 11.707C.633 12.723 1.338 14 2.47 14zM8 4a1 1 0 00-1 1v3a1 1 0 102 0V5a1 1 0 00-1-1zm0 6a1.25 1.25 0 100 2.5A1.25 1.25 0 008 10z"
      fill="currentColor"
    />
  </svg>
)
export const IconWarning16: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgWarning)
export default IconWarning16
