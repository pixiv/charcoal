import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgHistory = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M6.99 6.522a7.75 7.75 0 11-1.965 7.631.75.75 0 00-1.441.416 9.25 9.25 0 102.345-9.107C5.201 6.19 4.4 7.11 3.75 7.885V5.75a.75.75 0 00-1.5 0V10c0 .414.336.75.75.75h4.25a.75.75 0 000-1.5H4.566l.164-.198c.669-.805 1.516-1.785 2.26-2.53zM12.5 9A.75.75 0 0011 9v4.5c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5H12.5V9z" fill="currentColor"/>
  </svg>);
export const IconHistory = forwardRef(SvgHistory);
export default IconHistory;
