import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgOpenInNew = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M3 7a4 4 0 014-4h4a1 1 0 110 2H7a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4a1 1 0 112 0v4a4 4 0 01-4 4H7a4 4 0 01-4-4V7zm12-2a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V6.414l-8.793 8.793a1 1 0 01-1.414-1.414L17.586 5H15z" fill="currentColor"/>
  </svg>);
export const IconOpenInNew24 = forwardRef(SvgOpenInNew);
export default IconOpenInNew24;
