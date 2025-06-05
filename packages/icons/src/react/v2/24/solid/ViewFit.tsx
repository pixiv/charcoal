import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgViewfit = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M2.25 5A2.75 2.75 0 015 2.25h8A2.75 2.75 0 0115.75 5v7.568l-4.736-4.736.01-.009c1.324-1.325.407-3.59-1.466-3.621l-3.254-.054a2.122 2.122 0 00-2.156 2.156l.053 3.254c.031 1.873 2.297 2.79 3.622 1.466l.01-.01 4.735 4.736H5A2.75 2.75 0 012.25 13V5zm12.192 14.799c-1.424-.024-2.295-1.338-2.05-2.549H6.75V19A3.25 3.25 0 0010 22.25h9A3.25 3.25 0 0022.25 19v-9A3.25 3.25 0 0019 6.75h-1.75v5.642c1.211-.245 2.525.627 2.549 2.05l.053 3.254a2.122 2.122 0 01-2.156 2.156l-3.254-.053z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M6.28 5.648l3.254.053a.622.622 0 01.429 1.061l-1.07 1.07 7.275 7.275 1.07-1.07a.622.622 0 011.06.43l.054 3.254a.622.622 0 01-.632.631l-3.254-.053a.622.622 0 01-.429-1.061l1.07-1.07-7.275-7.275-1.07 1.07a.622.622 0 01-1.06-.43L5.647 6.28a.622.622 0 01.632-.632z" fill="currentColor"/>
  </svg>);
export const IconViewFitSolid = forwardRef(SvgViewfit);
export default IconViewFitSolid;
