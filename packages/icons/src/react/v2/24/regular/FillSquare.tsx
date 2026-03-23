import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgFillsquare = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M7 2.068a.75.75 0 011.06 0L15 9.007a1.54 1.54 0 010 2.177l-4.871 4.87a3.117 3.117 0 01-4.409 0l-2.965-2.965a3.117 3.117 0 010-4.409l4.898-4.898L7 3.128a.75.75 0 010-1.06zm6.939 8a.04.04 0 010 .055l-1.354 1.353H3.454a1.618 1.618 0 01.362-1.735l4.898-4.898 5.225 5.225z" fill="#1F1F1F"/>
    <path d="M17 15.62a1.578 1.578 0 11-3.157 0c0-.872 1.579-2.96 1.579-2.96S17 14.748 17 15.62z" fill="#1F1F1F"/>
    <path d="M3 17.25v-1.795l1.5 1.5v.295a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25h-4.636l-1.5-1.5h6.136A3.75 3.75 0 0121 6.75v10.5A3.75 3.75 0 0117.25 21H6.75A3.75 3.75 0 013 17.25z" fill="#1F1F1F"/>
  </svg>);
export const IconFillSquare: ReturnType<typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>> = forwardRef(SvgFillsquare);
export default IconFillSquare;
