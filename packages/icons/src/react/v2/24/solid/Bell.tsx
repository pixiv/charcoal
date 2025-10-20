import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgBell = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M12 1.75a.75.75 0 01.75.75v1.046c3.298.41 5.861 3.485 5.861 6.931v2.462c0 .67.153 1.33.447 1.93l.485.988c.654 1.334-.303 2.643-1.772 2.643H6.229c-1.469 0-2.426-1.309-1.772-2.643l.485-.989c.294-.6.447-1.26.447-1.929v-2.462c0-3.446 2.563-6.52 5.861-6.93V2.5a.75.75 0 01.75-.75zM12 22a3.998 3.998 0 01-3.465-2h6.93A3.998 3.998 0 0112 22z"
      fill="currentColor"
    />
  </svg>
)
export const IconBellSolid: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgBell)
export default IconBellSolid
