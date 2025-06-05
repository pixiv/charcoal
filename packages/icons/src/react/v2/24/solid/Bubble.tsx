import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgBubble = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M7.8 2.25h-.032c-.813 0-1.469 0-2 .043-.546.045-1.026.14-1.47.366a3.75 3.75 0 00-1.64 1.639c-.226.444-.32.924-.365 1.47-.043.531-.043 1.187-.043 2v6.348c0 .818 0 1.376.128 1.855a3.75 3.75 0 002.651 2.651c.344.092.729.118 1.221.125v1.618c0 .24 0 .47.017.655.016.178.057.47.256.72.238.297.598.47.978.47.32 0 .573-.15.722-.25.155-.102.334-.245.522-.396l.023-.018 2.386-1.909c.51-.408.687-.545.875-.64.18-.093.372-.16.571-.201.207-.043.43-.046 1.084-.046h2.548c.813 0 1.469 0 2-.043.546-.045 1.026-.14 1.47-.366a3.75 3.75 0 001.64-1.639c.226-.444.32-.924.365-1.47.043-.531.043-1.187.043-2V7.768c0-.813 0-1.469-.043-2-.045-.546-.14-1.026-.366-1.47a3.75 3.75 0 00-1.639-1.64c-.444-.226-.924-.32-1.47-.365-.531-.043-1.187-.043-2-.043H7.8z" fill="currentColor"/>
  </svg>);
export const IconBubbleSolid = forwardRef(SvgBubble);
export default IconBubbleSolid;
