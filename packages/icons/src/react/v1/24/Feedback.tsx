import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgFeedback = (
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
      d="M18 3c2.21 0 4 1.79 4 4v10c0 2.21-1.79 4-4 4H8.5l-5.08 2.35c-.5.23-1.1.01-1.33-.49a.992.992 0 01-.09-.42V7c0-2.21 1.79-4 4-4h12zm-6 12a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm0-8.5a1 1 0 00-1 1v5a1 1 0 102 0v-5a1 1 0 00-1-1z"
      fill="currentColor"
    />
  </svg>
)
export const IconFeedback24: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgFeedback)
export default IconFeedback24
