import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgBrushsize = (
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
      d="M20.701 3.423a3.25 3.25 0 00-4.596 0l-7.648 7.648a3.75 3.75 0 00-1.083 2.314l-.088.974a3.158 3.158 0 00-.986-.036c-.865.105-1.67.564-2.3 1.326-.657.794-.844 1.664-.994 2.365l-.023.107c-.16.74-.31 1.328-.8 1.893a.75.75 0 00.14 1.108c.875.605 2.167.742 3.36.547 1.216-.198 2.504-.765 3.384-1.782a.7.7 0 00.016-.018c.507-.627.81-1.505.81-2.37 0-.262-.028-.531-.09-.797l.769-.018a3.75 3.75 0 002.562-1.098l7.567-7.566a3.25 3.25 0 000-4.597zM6.481 15.812c-.44.053-.91.291-1.325.792-.42.508-.539 1.056-.705 1.825l-.002.01c-.113.518-.247 1.12-.568 1.732.431.095.971.114 1.562.018.96-.156 1.888-.593 2.481-1.273.274-.344.469-.878.469-1.417 0-.531-.184-.985-.564-1.279-.436-.337-.909-.461-1.349-.408zm11.568-2.072a.75.75 0 100 1.5h1.72l-4.529 4.53v-1.721a.75.75 0 10-1.5 0v3.46c0 .415.336.75.75.75h3.461a.75.75 0 000-1.5h-1.58l4.389-4.387v1.58a.75.75 0 001.5 0V14.49a.75.75 0 00-.75-.75h-3.461z"
      fill="currentColor"
    />
  </svg>
)
export const IconBrushSizeSolid = forwardRef(SvgBrushsize)
export default IconBrushSizeSolid
