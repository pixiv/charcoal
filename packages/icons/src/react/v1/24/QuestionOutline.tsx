import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgQuestionOutline = (
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
      d="M13.5 18.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 6a3 3 0 00-3 3 1 1 0 01-2 0 5 5 0 0110 0c0 1.182-.3 2.082-.816 2.791-.497.683-1.141 1.111-1.654 1.432l-.235.146c-.433.268-.723.447-.949.683-.201.21-.346.464-.346.948a1 1 0 11-2 0c0-1.016.355-1.762.904-2.333.418-.436.957-.766 1.375-1.022l.191-.118c.487-.304.843-.563 1.096-.912.235-.322.434-.797.434-1.615a3 3 0 00-3-3z"
      fill="currentColor"
    />
  </svg>
)
export const IconQuestionOutline24 = forwardRef(SvgQuestionOutline)
export default IconQuestionOutline24
