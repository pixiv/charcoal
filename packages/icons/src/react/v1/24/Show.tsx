import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgShow = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path d="M14.5 12a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M1 12c3.143-5.333 6.81-8 11-8s7.857 2.667 11 8c-3.143 5.333-6.81 8-11 8s-7.857-2.667-11-8zm11 4.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9z" fill="currentColor"/>
  </svg>);
export const IconShow24 = forwardRef(SvgShow);
export default IconShow24;
