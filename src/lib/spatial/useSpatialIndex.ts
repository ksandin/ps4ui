import { SpatialNode } from './SpatialNode';
import { RefObject } from 'react';
import { useSpatialChanges } from './useSpatialChanges';

export const useSpatialIndex = <T extends SpatialNode>(
  container: RefObject<T>
): number => {
  const index = useSpatialChanges(active =>
    active && container.current
      ? Array.from(container.current.children).indexOf(active)
      : -1
  );
  return index !== undefined ? index : -1;
};
