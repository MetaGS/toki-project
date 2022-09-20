import { useMemo } from "react";
import { useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import { metals } from "../features/Calculator/types";

export function useSelectorWithProps<Type>(
  prop: metals,
  selector: (prop: metals) => (state: RootState) => Type
) {
  // можно использовать reselect
  const memoizedSelector = useMemo(() => selector(prop), [selector, prop]);
  return useAppSelector(memoizedSelector);
}
