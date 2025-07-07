import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgTemperature = (
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
      d="M12 1a3.636 3.636 0 00-3.636 3.636v9.992c0 .062-.029.165-.132.288a4.92 4.92 0 107.536 0c-.103-.122-.132-.226-.132-.287V4.636A3.636 3.636 0 0012 1zm-.594 5.594a.594.594 0 111.188 0v9.467c0 .433.289.806.555 1.148a1.454 1.454 0 11-2.297 0c.265-.342.554-.715.554-1.148V6.594z"
      fill="currentColor"
    />
  </svg>
)
export const IconTemperatureSolid = forwardRef(SvgTemperature)
export default IconTemperatureSolid
