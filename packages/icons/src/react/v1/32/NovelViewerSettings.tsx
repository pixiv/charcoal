import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgNovelViewerSettings = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.001 21l-1.575 3.876a1 1 0 01-1.852-.752l6.5-16c.337-.832 1.515-.832 1.853 0l6.5 16a1 1 0 11-1.853.752L13.999 21H6zM27 15.5v.141a5.75 5.75 0 100 8.718v.141a1 1 0 102 0v-9a1 1 0 10-2 0zm0 4.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zm-13.814-1H6.814L10 11.157 13.186 19z"
      fill="currentColor"
    />
  </svg>
)
export const IconNovelViewerSettings32: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgNovelViewerSettings)
export default IconNovelViewerSettings32
