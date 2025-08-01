import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgBrushpress = (
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
      d="M7.832 16.044c-.84 0-1.733-.205-2.462-.96a.75.75 0 01.103-1.132l.012-.009a2.17 2.17 0 00.286-.28 1.77 1.77 0 00.406-.808c.03-.164.073-.37.12-.588.31-1.427 1.573-2.475 3.056-2.453.103.001.205.01.304.024l.003-.021.138-1.02a.75.75 0 01.212-.43l1.21-1.212 4.863-4.873a1.75 1.75 0 012.475-.003l.593.593a1.75 1.75 0 01.003 2.475l-6.073 6.085a.75.75 0 01-.428.213l-1.02.14c.018.11.028.224.03.339.031 2.158-1.825 3.92-3.83 3.92zm-.76-1.607c.223.075.474.107.76.107 1.19 0 2.35-1.098 2.331-2.399a.846.846 0 00-.832-.831 1.595 1.595 0 00-1.568 1.27c-.046.214-.085.403-.111.545a3.195 3.195 0 01-.58 1.308zM2.25 17a.75.75 0 01.75-.75h1a.75.75 0 01.53.22l.465.464a4.25 4.25 0 006.01 0l.465-.464a.75.75 0 01.53-.22h9a.75.75 0 010 1.5h-8.69l-.244.245a5.75 5.75 0 01-8.132 0l-.245-.245H3a.75.75 0 01-.75-.75zm1.114 2.47a.75.75 0 00-1.061 1.06 8.292 8.292 0 0011.727 0 .75.75 0 10-1.06-1.06 6.793 6.793 0 01-9.606 0z"
      fill="currentColor"
    />
  </svg>
)
export const IconBrushPressSolid = forwardRef(SvgBrushpress)
export default IconBrushPressSolid
