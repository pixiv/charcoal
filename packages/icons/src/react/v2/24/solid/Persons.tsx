import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgPersons = (
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
      d="M15.75 2.741a2.958 2.958 0 114.183 4.184 2.958 2.958 0 01-4.184-4.184zM12.875 12.794a4.427 4.427 0 014.427-4.427h1.088a4.427 4.427 0 014.427 4.427 2.331 2.331 0 01-2.332 2.331h-5.279a2.331 2.331 0 01-2.331-2.331zM5.655 6.646a3.4 3.4 0 114.808 4.808 3.4 3.4 0 01-4.808-4.808zM2.25 18.603a5.162 5.162 0 015.162-5.163h1.306a5.162 5.162 0 015.162 5.163 2.647 2.647 0 01-2.647 2.647H4.897a2.647 2.647 0 01-2.647-2.647z"
      fill="currentColor"
    />
  </svg>
)
export const IconPersonsSolid: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgPersons)
export default IconPersonsSolid
