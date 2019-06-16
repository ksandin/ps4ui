export class Vector {
  constructor(public readonly x: number = 0, public readonly y: number = 0) {}

  distance = (b: Vector) => Math.hypot(this.x - b.x, this.y - b.y);

  angle = (b: Vector) => Math.atan2(b.y - this.y, b.x - this.x);
}
