import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M9.78 2.22a.75.75 0 00-1.06 1.06l.97.97-6.349 6.348a3.75 3.75 0 000 5.304l3.757 3.757a3.75 3.75 0 005.304 0l6.171-6.172a1.75 1.75 0 000-2.474L9.78 2.22zm.97 3.09L4.402 11.66A2.25 2.25 0 003.87 14h12.068l1.574-1.573a.25.25 0 000-.354L10.75 5.311z" fill="currentColor"/>
    <path d="M19.25 21.25a2 2 0 002-2c0-1.105-2-3.75-2-3.75s-2 2.645-2 3.75a2 2 0 002 2z" fill="currentColor"/>
  </svg>);
export const IconFill: ReturnType<typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>> = forwardRef(SvgFill);
export default IconFill;
