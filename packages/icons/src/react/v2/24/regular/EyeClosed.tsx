import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgEyeclosed = (
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
      d="M3.614 9.357a.75.75 0 011.03.257c.453.757 1.39 1.933 2.684 2.913 1.29.978 2.885 1.723 4.672 1.723s3.381-.745 4.672-1.723c1.293-.98 2.23-2.156 2.685-2.913a.75.75 0 111.286.772c-.306.51-.775 1.152-1.386 1.81l1.273 1.274a.75.75 0 11-1.06 1.06l-1.292-1.292c-.192.165-.392.327-.6.485-.673.51-1.44.98-2.29 1.34l.44 1.755a.75.75 0 11-1.456.364l-.412-1.65a8.093 8.093 0 01-1.86.218 8.092 8.092 0 01-1.86-.218l-.412 1.65a.75.75 0 11-1.456-.364l.44-1.756a10.75 10.75 0 01-2.29-1.34c-.208-.157-.408-.319-.6-.484L4.53 14.53a.75.75 0 01-1.06-1.06l1.273-1.273c-.61-.66-1.08-1.3-1.386-1.811a.75.75 0 01.257-1.029z"
      fill="currentColor"
    />
  </svg>
)
export const IconEyeClosed: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgEyeclosed)
export default IconEyeClosed
