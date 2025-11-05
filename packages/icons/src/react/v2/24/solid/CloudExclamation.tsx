import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgCloudexclamation = (
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
      d="M6.629 19.056a.78.78 0 01-.054-.002h-.044A4.527 4.527 0 015.3 10.17a6.9 6.9 0 0112.678-1.758 5.415 5.415 0 013.7 7.062l-1.174-2.031c-1.11-1.923-3.891-1.924-5.003-.002l-3.248 5.615H6.629zm12.579-4.863a1.394 1.394 0 00-2.409 0l-3.612 6.24c-.533.92.136 2.067 1.204 2.067h7.218c1.068 0 1.736-1.147 1.205-2.067l-3.606-6.24zm-.708 2.004a.5.5 0 10-1 0v2.4a.5.5 0 101 0v-2.4zm-.425 5.103a.638.638 0 00.625-.65c0-.359-.28-.65-.625-.65h-.05a.638.638 0 00-.625.65c0 .359.28.65.625.65h.05z"
      fill="currentColor"
    />
  </svg>
)
export const IconCloudExclamationSolid: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgCloudexclamation)
export default IconCloudExclamationSolid
