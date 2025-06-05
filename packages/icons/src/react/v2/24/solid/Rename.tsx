import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgRename = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M17.08 4.428a.75.75 0 10-.66-1.346l-.366.18a2.25 2.25 0 01-1.983 0l-.365-.18a.75.75 0 00-.661 1.346l.365.18c.29.142.593.244.902.308V19.07c-.309.064-.612.166-.902.308l-.365.18a.75.75 0 10.66 1.346l.366-.179a2.25 2.25 0 011.983 0l.365.18a.75.75 0 00.661-1.347l-.365-.18a3.746 3.746 0 00-.903-.308V4.916c.31-.063.613-.166.903-.308l.365-.18zM18 17.75h-.688V6.25H18A3.75 3.75 0 0121.75 10v4A3.75 3.75 0 0118 17.75zM6 6.25h6.813v11.5H6A3.75 3.75 0 012.25 14v-4A3.75 3.75 0 016 6.25z" fill="currentColor"/>
  </svg>);
export const IconRenameSolid = forwardRef(SvgRename);
export default IconRenameSolid;
