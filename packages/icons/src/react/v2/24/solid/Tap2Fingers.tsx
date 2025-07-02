import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgTap2Fingers = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12.5 1.691a.75.75 0 100 1.5 5.775 5.775 0 015.578 4.28.75.75 0 001.449-.388A7.275 7.275 0 0012.5 1.691zm-2.606 1.81a.75.75 0 00-.16-1.49 7.275 7.275 0 00-6.256 5.35.75.75 0 001.449.388 5.775 5.775 0 014.967-4.247zm2.606.694a.75.75 0 000 1.5 3.142 3.142 0 013.035 2.33.75.75 0 101.45-.389 4.642 4.642 0 00-4.485-3.44zm-2.357 1.798a.75.75 0 00-.174-1.49 4.642 4.642 0 00-3.948 3.41.75.75 0 101.449.388 3.142 3.142 0 012.673-2.308zm-.294 1.399c.461 0 .835.373.835.834v3.633a.579.579 0 001.157 0V7.788a.85.85 0 111.7 0V12l3.12.916c.164.07.32.159.466.264.584.424.928 1.102.926 1.824v1.692l-.009 1.125a4.618 4.618 0 01-4.617 4.617h-.855a5.472 5.472 0 01-4.117-1.868l-1.698-1.94a2.355 2.355 0 01.418-3.478l.682-.478v1.881a.579.579 0 101.157 0V8.226c0-.46.374-.834.835-.834z" fill="currentColor"/>
  </svg>);
export const IconTap2FingersSolid = forwardRef(SvgTap2Fingers);
export default IconTap2FingersSolid;
