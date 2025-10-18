import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgShutter = (
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
      d="M5.794 6.192a8.477 8.477 0 016.521-2.686l1.28 4.777-2.36-.633-5.441-1.458zM4.8 7.48A8.46 8.46 0 003.5 12c0 .865.13 1.7.37 2.486l3.995-3.995 1.728-1.728L4.8 7.48zm-.31 8.507a8.515 8.515 0 005.611 4.301L8.64 14.83l-.633-2.36-3.516 3.516zm7.22 4.51a8.477 8.477 0 006.516-2.709l-5.443-1.459-2.36-.632 1.287 4.8zm7.503-3.998A8.46 8.46 0 0020.5 12c0-.865-.13-1.7-.37-2.487l-3.975 3.975-1.728 1.728 4.787 1.282zm.295-8.485a8.516 8.516 0 00-5.584-4.294l1.455 5.43.633 2.36 3.496-3.496zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-.734 7.211l2.778.745.744 2.778-2.034 2.033-2.778-.744-.744-2.778 2.034-2.034z"
      fill="currentColor"
    />
  </svg>
)
export const IconShutter: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgShutter)
export default IconShutter
