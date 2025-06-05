import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgRotate = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M11.004 1.285a.75.75 0 011.178.93l-.793 1.005.981-.263a6.75 6.75 0 018.385 5.294l.26 1.404.516-1.201a.75.75 0 111.378.592l-1.23 2.858a.75.75 0 01-.984.393l-2.858-1.23a.75.75 0 11.593-1.377l1.157.498-.307-1.665a5.25 5.25 0 00-6.522-4.117l-1.203.322 1.018.803a.75.75 0 01-.93 1.177L9.201 4.781a.75.75 0 01-.124-1.053l1.927-2.443zm-.152 6.767a3.75 3.75 0 014.593 2.652l1.553 5.795a3.75 3.75 0 01-2.652 4.593l-5.795 1.553a3.75 3.75 0 01-4.593-2.652l-1.553-5.795a3.75 3.75 0 012.651-4.593l5.796-1.553z" fill="currentColor"/>
  </svg>);
export const IconRotateSolid = forwardRef(SvgRotate);
export default IconRotateSolid;
