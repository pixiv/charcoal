import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgPolylinenodes = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M20.052 5.052a1 1 0 112 0 1 1 0 01-2 0zm1-2.5a2.5 2.5 0 00-1.802 4.232l-3.508 5.614a2.499 2.499 0 00-2.006.277l-2.467-2.467a2.5 2.5 0 10-4.165.41l-3.58 5.729a2.5 2.5 0 101.322.716l3.506-5.61a2.503 2.503 0 001.857-.184l2.545 2.546a2.5 2.5 0 104.239-.589l3.576-5.721a2.5 2.5 0 10.484-4.953zm-12 5.5a1 1 0 100 2 1 1 0 000-2zm6 5.75a1 1 0 100 2 1 1 0 000-2zm-12.002 4a1 1 0 100 2 1 1 0 000-2z" fill="currentColor"/>
  </svg>);
export const IconPolylineNodes = forwardRef(SvgPolylinenodes);
export default IconPolylineNodes;
