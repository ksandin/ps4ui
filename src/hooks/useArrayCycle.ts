import { useIndexCycle } from './useIndexCycle';

export const useArrayCycle = <T extends any>(array: T[], startIndex = 0) => {
  const { index, cycle } = useIndexCycle(array.length, startIndex);
  return { index, cycle, item: array[index] };
};
