import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgEye = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M12 7.939a4 4 0 100 8 4 4 0 000-8zm-2.5 4a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.016 3.65c-2.537 0-4.648 1.07-6.271 2.444-1.618 1.37-2.785 3.067-3.46 4.414a3.362 3.362 0 00-.023 2.983c1.312 2.704 4.672 6.859 9.754 6.859 5.081 0 8.441-4.156 9.753-6.86a3.362 3.362 0 00-.023-2.982c-.675-1.347-1.841-3.044-3.46-4.414-1.623-1.374-3.734-2.444-6.27-2.444zm-8.39 7.53c.602-1.2 1.652-2.726 3.088-3.941 1.431-1.211 3.211-2.09 5.302-2.09 2.09 0 3.87.879 5.301 2.09 1.436 1.216 2.486 2.74 3.089 3.941.263.525.268 1.132.014 1.656-1.22 2.512-4.187 6.014-8.404 6.014-4.218 0-7.186-3.502-8.405-6.014a1.862 1.862 0 01.015-1.656z"
      fill="currentColor"
    />
  </svg>
)
export const IconEye: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgEye)
export default IconEye
