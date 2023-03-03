import { useEffect, useRef } from "react";

export function useRoundRobinTraversal(arr: any[], perUnit: string) {
  const index = useRef(0);
  const n = arr.length;

  function getNext() {
    index.current = (index.current + 1) % n;
    const result = arr[index.current];
    return result;
  }

  useEffect(() => {
    // При смене perUnit, здесь нужно проставить соответствующий perUnit'у индекс массива
    index.current = arr.indexOf(perUnit);
  }, [arr, perUnit]);

  return getNext;
}
