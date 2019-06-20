import { SpatialNode } from './SpatialNode';
import { useCallback, useContext, useEffect, useState } from 'react';
import { SpatialContext } from './SpatialContext';

export const useSpatialChanges = <S>(
  getStateForNode: (node?: SpatialNode) => S,
  initialState?: S
) => {
  const spatial = useContext(SpatialContext);
  const [state, setState] = useState(initialState);
  const refreshState = useCallback(
    () => setState(getStateForNode(spatial.getActive())),
    [spatial, setState, getStateForNode]
  );
  useEffect(() => {
    refreshState();
    return spatial.subscribeToChanges(refreshState);
  }, [refreshState, spatial]);
  return state;
};
