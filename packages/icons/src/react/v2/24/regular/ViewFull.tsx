import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgViewfull = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M5.766 3a2.75 2.75 0 00-2.75 2.75v2.64a.75.75 0 101.5 0V5.75c0-.69.56-1.25 1.25-1.25h2.12a.75.75 0 000-1.5h-2.12zm10.36 0a.75.75 0 000 1.5h2.12c.69 0 1.25.56 1.25 1.25v2.64a.75.75 0 001.5 0V5.75A2.75 2.75 0 0018.246 3h-2.12zM4.516 15.607a.75.75 0 00-1.5 0v2.64a2.75 2.75 0 002.75 2.75h2.12a.75.75 0 000-1.5h-2.12c-.69 0-1.25-.56-1.25-1.25v-2.64zm16.48 0a.75.75 0 00-1.5 0v2.64c0 .69-.56 1.25-1.25 1.25h-2.12a.75.75 0 000 1.5h2.12a2.75 2.75 0 002.75-2.75v-2.64zm-9.982-7.725a.75.75 0 10.013-1.5l-3.924-.036a.75.75 0 00-.757.757l.035 3.924a.75.75 0 101.5-.013l-.018-2.09L15.14 16.2l-2.09-.019a.75.75 0 00-.014 1.5l3.925.035a.75.75 0 00.757-.756l-.036-3.925a.75.75 0 10-1.5.014l.02 2.09-7.279-7.277 2.09.019z" fill="currentColor"/>
  </svg>);
export const IconViewFull = forwardRef(SvgViewfull);
export default IconViewFull;
