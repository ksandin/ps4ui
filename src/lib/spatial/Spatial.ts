import { Direction } from './Direction';
import { getNearestNodeInDirection } from './getNearestNodeInDirection';
import { SpatialChangeHandler } from './SpatialChangeHandler';
import { SpatialNode } from './SpatialNode';
import { getBoundsForNodes } from './getBoundsForNodes';
import { Bounds } from './Bounds';
import { SpatialMeta } from './SpatialMeta';
import { action, observable } from 'mobx';

export class Spatial {
  @observable private active?: SpatialNode;
  private nodes: SpatialNode[] = [];
  @observable private meta = new WeakMap<SpatialNode, SpatialMeta>();
  private changeHandlers: SpatialChangeHandler[] = [];

  getActive() {
    return this.active;
  }

  getActiveMeta() {
    return this.meta.get(this.active!);
  }

  @action add(node: SpatialNode, meta?: SpatialMeta) {
    if (node) {
      this.meta.set(node, meta);
    }
    this.nodes.push(node);
    if (!this.active) {
      this.setActive(node);
    }
  }

  @action remove(node: SpatialNode) {
    if (node) {
      this.meta.delete(node);
    }
    const nodeIndex = this.nodes.indexOf(node);
    if (nodeIndex !== -1) {
      if (this.active === node) {
        this.setActive(this.getAdjacentNode());
      }
      this.nodes.splice(nodeIndex, 1);
    }
  }

  @action setActive(newActive?: SpatialNode) {
    const oldActive = this.active;
    this.active = newActive;
    if (oldActive !== newActive) {
      this.emitChange(oldActive, newActive);
    }
  }

  isActive(node: SpatialNode) {
    return this.active === node;
  }

  move(direction: Direction) {
    if (!this.active) {
      this.setActive(this.getDefaultNode());
    } else {
      const newActive = this.getAdjacentNode([direction]);
      if (newActive) {
        this.setActive(newActive);
      }
    }
  }

  getAdjacentNode(directions: Direction[] = ['up', 'right', 'down', 'left']) {
    if (!this.active) {
      return;
    }
    const allBounds = getBoundsForNodes(this.nodes);
    const activeBounds = allBounds[this.nodes.indexOf(this.active)];
    const candidateBounds = allBounds.filter(item => item !== activeBounds);
    for (const direction of directions) {
      const nearestBounds = getNearestNodeInDirection(
        activeBounds,
        candidateBounds,
        direction
      );
      const node = this.nodes[allBounds.indexOf(nearestBounds!)];
      if (node) {
        return node;
      }
    }
  }

  getDefaultNode() {
    const allBounds = getBoundsForNodes(this.nodes);
    const topLeft = getTopLeftBounds(allBounds);
    return this.nodes[allBounds.indexOf(topLeft)];
  }

  subscribeToChanges(handler: SpatialChangeHandler) {
    this.changeHandlers.push(handler);
    return () => {
      const index = this.changeHandlers.indexOf(handler);
      if (index !== -1) {
        this.changeHandlers.splice(index, 1);
      }
    };
  }

  private emitChange: SpatialChangeHandler = (oldActive, newActive) =>
    this.changeHandlers.forEach(emit => emit(oldActive, newActive));
}

function getTopLeftBounds(bounds: Bounds[]): Bounds {
  return bounds.slice().sort((a, b) => {
    const s1 = a.x + a.y;
    const s2 = b.x + b.y;
    return s1 - s2;
  })[0];
}
