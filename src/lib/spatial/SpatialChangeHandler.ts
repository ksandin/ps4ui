import { SpatialNode } from './SpatialNode';

export type SpatialChangeHandler = (
  oldActive?: SpatialNode,
  newActive?: SpatialNode
) => any;
