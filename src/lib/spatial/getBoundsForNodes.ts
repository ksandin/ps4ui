import { Bounds } from './Bounds';
import { SpatialNode } from './SpatialNode';

export const getBoundsForNodes = (elements: SpatialNode[]): Bounds[] =>
  elements.map(element => {
    const rect = element.getBoundingClientRect();
    return new Bounds(rect.left, rect.top, rect.width, rect.height);
  });
