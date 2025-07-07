import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgQuestioncircle = (
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
      d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 1.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17zm.035 11.915a1 1 0 010 2h-.014a1 1 0 010-2h.014zm-.98-8.952a3.116 3.116 0 012.71 5.59c-.296.173-.56.368-.742.574-.18.203-.242.37-.242.51v.153a.75.75 0 11-1.5 0v-.152c0-.624.287-1.13.618-1.505.33-.372.742-.66 1.106-.874a1.617 1.617 0 00.364-2.494 1.615 1.615 0 00-2.798 1.091.75.75 0 01-1.5-.008 3.117 3.117 0 011.984-2.885z"
      fill="currentColor"
    />
  </svg>
)
export const IconQuestionCircle = forwardRef(SvgQuestioncircle)
export default IconQuestionCircle
