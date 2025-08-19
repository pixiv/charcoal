import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgShowOutline = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M3.35 12c2.782 4.292 5.694 6 8.65 6 2.956 0 5.868-1.708 8.65-6-2.782-4.292-5.694-6-8.65-6-2.956 0-5.868 1.708-8.65 6zM23 12c-3.143 5.333-6.81 8-11 8s-7.857-2.667-11-8c3.143-5.333 6.81-8 11-8s7.857 2.667 11 8z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM12 14.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" fill="currentColor"/>
  </svg>);
export const IconShowOutline24 = forwardRef(SvgShowOutline);
export default IconShowOutline24;
