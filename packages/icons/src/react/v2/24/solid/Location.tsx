import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgLocation = (
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
      d="M12 2.061c-7.037 0-11.016 8.072-6.731 13.654l3.68 4.793C11 23 13 23 15.051 20.508l3.68-4.793C23.015 10.133 19.036 2.06 12 2.06zm0 11.483a3.25 3.25 0 100-6.5 3.25 3.25 0 000 6.5z"
      fill="currentColor"
    />
  </svg>
)
export const IconLocationSolid: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgLocation)
export default IconLocationSolid
