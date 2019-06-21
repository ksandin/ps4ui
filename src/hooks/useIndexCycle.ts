import { useCallback, useState } from 'react';

export const useIndexCycle = (cycleCount: number, startIndex = 0) => {
  const [index, setIndex] = useState(startIndex);
  const cycle = useCallback(() => setIndex((index + 1) % cycleCount), [
    index,
    cycleCount
  ]);
  return { index, cycle };
};
