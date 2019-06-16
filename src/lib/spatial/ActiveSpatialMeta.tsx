import * as React from 'react';
import { SpatialContext } from './SpatialContext';
import { useObserver } from 'mobx-react-lite';

export type ActiveSpatialMetaProps<T> = {
  type: new () => T;
  children: (meta?: T) => React.ReactElement;
};

export function ActiveSpatialMeta<T>({
  type,
  children
}: ActiveSpatialMetaProps<T>) {
  return useObserver(() => {
    const spatial = React.useContext(SpatialContext);
    const meta = spatial.getActiveMeta();
    return children(meta instanceof type ? meta : undefined);
  });
}
