import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgSubtract = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z" fill="currentColor"/>
  </svg>);
export const IconSubtract = forwardRef(SvgSubtract);
export default IconSubtract;
