import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgEraser = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M11.34 3.907a3.949 3.949 0 015.584 0l2.92 2.919a3.949 3.949 0 010 5.584l-7.34 7.34H20.5a.75.75 0 010 1.5h-11l-.04-.001a3.937 3.937 0 01-2.884-1.156l-2.92-2.919a3.949 3.949 0 010-5.584l7.684-7.683zm4.492 1.092a2.403 2.403 0 00-3.4 0L6.49 10.941l6.319 6.318 5.942-5.942a2.403 2.403 0 000-3.399L15.83 5zM4.749 12.683l.649-.65 6.318 6.32-.649.648a2.403 2.403 0 01-3.399 0L4.75 16.08a2.403 2.403 0 010-3.398z"
      fill="currentColor"
    />
  </svg>
)
export const IconEraser: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgEraser)
export default IconEraser
