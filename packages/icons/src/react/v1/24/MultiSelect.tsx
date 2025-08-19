import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgMultiSelect = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M7 3a4 4 0 00-4 4v10a4 4 0 004 4h10a4 4 0 004-4v-5a1 1 0 10-2 0v5a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h7a1 1 0 100-2H7zm.293 7.293a1 1 0 011.414 0L11 12.586l7.293-7.293a1 1 0 111.414 1.414L11 15.414l-3.707-3.707a1 1 0 010-1.414z" fill="currentColor"/>
  </svg>);
export const IconMultiSelect24 = forwardRef(SvgMultiSelect);
export default IconMultiSelect24;
