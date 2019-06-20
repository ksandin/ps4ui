import * as React from 'react';
import { useSpatialChanges } from '../lib/spatial/useSpatialChanges';

export const useSpatialOffset = <T extends any>(
  rowRef: React.RefObject<HTMLElement> | undefined
) =>
  useSpatialChanges(node => {
    const isContained =
      rowRef && node && rowRef.current && rowRef.current.contains(node);
    return isContained ? -node!.offsetLeft : 0;
  });
