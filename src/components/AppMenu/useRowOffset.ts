import * as React from 'react';
import { SpatialContext } from '../../lib/spatial/SpatialContext';
import { useObserver } from 'mobx-react-lite';

export const useRowOffset = <T extends any>(
  rowRef: React.RefObject<HTMLElement> | undefined,
  renderOffset: (offset: number) => React.ReactElement<T>
) => {
  const spatial = React.useContext(SpatialContext);
  return useObserver(() => {
    const active = spatial.getActive();
    const isContained =
      rowRef && active && rowRef.current && rowRef.current.contains(active);
    const offset = isContained ? -active!.offsetLeft : 0;
    return renderOffset(offset);
  });
};
