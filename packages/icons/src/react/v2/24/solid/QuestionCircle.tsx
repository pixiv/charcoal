import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgQuestioncircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-.824 5.545a2.783 2.783 0 012.42 4.992 2.557 2.557 0 00-.612.472c-.144.163-.18.282-.18.369v.131a.75.75 0 01-1.5 0v-.131c0-.57.261-1.029.557-1.363a4.03 4.03 0 01.975-.772 1.283 1.283 0 10-1.932-1.114.75.75 0 01-1.5-.008 2.783 2.783 0 011.772-2.576zm1.88 8.65a1 1 0 01-1 1h-.011a1 1 0 110-2h.011a1 1 0 011 1z" fill="currentColor"/>
  </svg>);
export const IconQuestionCircleSolid = forwardRef(SvgQuestioncircle);
export default IconQuestionCircleSolid;
