import { Bounds } from './Bounds';
import { Direction } from './Direction';
import { Vector } from './Vector';

export function getNearestNodeInDirection(
  start: Bounds,
  candidates: Bounds[],
  direction: Direction
) {
  const getPoints = pointFunctions[direction];
  const directionAngle = directionAngles[direction];
  const { nearest } = candidates.reduce<NearestReducer>(
    ({ nearest, nearestCost }, candidate) => {
      const candidateCost = getTravelCost(
        getPoints(start, candidate),
        directionAngle
      );
      if (candidateCost >= 0 && candidateCost < nearestCost) {
        return { nearest: candidate, nearestCost: candidateCost };
      }
      return { nearest, nearestCost };
    },
    { nearest: null, nearestCost: Infinity }
  );
  if (nearest) {
    return nearest;
  }
}

type NearestReducer = {
  nearest: Bounds | null;
  nearestCost: number;
};

const pointFunctions = {
  right: (a: Bounds, b: Bounds) => [a.centerRight, b.centerLeft],
  down: (a: Bounds, b: Bounds) => [a.centerBottom, b.centerTop],
  left: (a: Bounds, b: Bounds) => [a.centerLeft, b.centerRight],
  up: (a: Bounds, b: Bounds) => [a.centerTop, b.centerBottom]
};

const directionAngles = {
  right: 0,
  down: Math.PI / 2,
  left: Math.PI,
  up: -Math.PI / 2
};

export function getTravelCost([a, b]: Vector[], desiredAngle: number): number {
  const distance = a.distance(b);
  const angle = a.angle(b);
  const angleDelta = getAngleDelta(desiredAngle, angle);
  if (angleDelta >= Math.PI / 2) {
    return -1;
  }
  const anglePenalty = angleDelta / (Math.PI / 2);
  return distance + distance * anglePenalty;
}

export function getAngleDelta(a: number, b: number) {
  return Math.PI - Math.abs(Math.abs(a - b) - Math.PI);
}
