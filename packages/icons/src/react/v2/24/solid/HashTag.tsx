import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgHashTag = (
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
      d="M11.517 4.23a1.25 1.25 0 00-2.457-.46L8.265 8H5.038a1.25 1.25 0 100 2.5h2.76l-.563 3H4.038a1.25 1.25 0 100 2.5h2.728l-.707 3.77a1.25 1.25 0 102.458.46L9.31 16h3.956l-.707 3.77a1.25 1.25 0 002.458.46L15.81 16h3.228a1.25 1.25 0 000-2.5h-2.76l.563-3h3.197a1.25 1.25 0 000-2.5H17.31l.707-3.77a1.25 1.25 0 00-2.457-.46L14.765 8H10.81l.707-3.77zm2.218 9.27l.563-3H10.34l-.562 3h3.956z"
      fill="currentColor"
    />
  </svg>
)
export const IconHashTagSolid: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgHashTag)
export default IconHashTagSolid
