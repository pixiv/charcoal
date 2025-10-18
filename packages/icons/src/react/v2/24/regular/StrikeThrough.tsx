import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgStrikeThrough = (
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
      d="M7.659 4.491c1.081-.884 2.586-1.373 4.339-1.373 1.902 0 3.206.295 4.188.688.681.273 1.242.619 1.65.87.147.09.275.17.38.227a.75.75 0 11-.722 1.315 12.379 12.379 0 01-.573-.34c-.37-.23-.735-.456-1.293-.68-.78-.312-1.891-.58-3.63-.58-1.482 0-2.63.413-3.39 1.034-.751.615-1.163 1.458-1.163 2.435 0 .714.354 1.367.98 1.91H6.48a3.682 3.682 0 01-.535-1.91c0-1.438.623-2.704 1.714-3.596zm7.837 9.507h1.98c.356.57.574 1.23.574 1.973 0 1.41-.542 2.682-1.617 3.59-1.063.896-2.577 1.38-4.435 1.38-1.906 0-3.21-.296-4.191-.689-.68-.272-1.24-.618-1.646-.868-.149-.092-.276-.17-.382-.229a.75.75 0 11.722-1.314c.21.115.394.23.577.343.368.228.73.453 1.287.676.779.312 1.89.581 3.633.581 1.61 0 2.746-.418 3.468-1.027.71-.6 1.084-1.437 1.084-2.443 0-.741-.382-1.418-1.055-1.973zM4 11.248a.75.75 0 100 1.5h16a.75.75 0 000-1.5H4z"
      fill="currentColor"
    />
  </svg>
)
export const IconStrikeThrough: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgStrikeThrough)
export default IconStrikeThrough
