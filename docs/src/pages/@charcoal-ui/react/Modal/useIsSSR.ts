import { useSyncExternalStore } from "react";

export const useIsSSR = () => typeof window === "undefined";
