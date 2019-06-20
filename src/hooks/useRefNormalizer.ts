import { Ref, RefObject } from 'react';

export function useRefNormalizer<T>(ref: Ref<T>): RefObject<T> {
  return ref as RefObject<T>;
}
