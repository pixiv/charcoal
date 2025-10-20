import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgBulbshine = (
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
      d="M12 .914a.75.75 0 01.75.75V2.71a.75.75 0 01-1.5 0V1.664a.75.75 0 01.75-.75zM3.668 4.88a.75.75 0 011.05-.146l.835.631a.75.75 0 01-.905 1.197l-.834-.631a.75.75 0 01-.146-1.05zm16.664 0c.25.33.184.8-.146 1.05l-.834.632a.75.75 0 11-.905-1.197l.834-.63a.75.75 0 011.05.145zM12 6.54a4.747 4.747 0 00-2.246 8.93.75.75 0 01.395.661v.479h3.702v-.479a.75.75 0 01.395-.66A4.747 4.747 0 0012 6.54zm1.851 11.57H10.15v.464c0 .74.6 1.341 1.341 1.341h1.02c.74 0 1.341-.6 1.341-1.341v-.465zm-8.098-6.823a6.247 6.247 0 119.598 5.273V18.573a2.842 2.842 0 01-2.841 2.841h-1.02a2.841 2.841 0 01-2.841-2.841V16.559a6.243 6.243 0 01-2.896-5.273zm-4.147-.294a.75.75 0 01.75-.75h1.046a.75.75 0 010 1.5H2.356a.75.75 0 01-.75-.75zm18.242 0a.75.75 0 01.75-.75h1.046a.75.75 0 010 1.5h-1.046a.75.75 0 01-.75-.75zm-14.15 5.142c.25.33.185.8-.145 1.05l-.668.505a.75.75 0 01-.904-1.196l.667-.505a.75.75 0 011.05.146zm12.604 0a.75.75 0 011.05-.146l.667.505a.75.75 0 01-.904 1.196l-.668-.505a.75.75 0 01-.145-1.05z"
      fill="currentColor"
    />
  </svg>
)
export const IconBulbShine: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgBulbshine)
export default IconBulbShine
