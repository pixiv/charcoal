import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgTrash = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path d="M4 7a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1V7zM10 3h1.5a1 1 0 110 2h-7a1 1 0 010-2H6V2h4v1z" fill="currentColor"/>
  </svg>);
export const IconTrash16: ReturnType<typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>> = forwardRef(SvgTrash);
export default IconTrash16;
