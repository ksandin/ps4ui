import { Vector } from './Vector';

export class Bounds extends Vector {
  get left() {
    return this.x;
  }

  get top() {
    return this.y;
  }

  get right() {
    return this.x + this.width;
  }

  get bottom() {
    return this.y + this.height;
  }

  get centerY() {
    return this.y + this.height / 2;
  }

  get centerX() {
    return this.x + this.width / 2;
  }

  get centerRight() {
    return new Vector(this.right, this.centerY);
  }

  get centerLeft() {
    return new Vector(this.left, this.centerY);
  }

  get centerTop() {
    return new Vector(this.centerX, this.top);
  }

  get centerBottom() {
    return new Vector(this.centerX, this.bottom);
  }

  constructor(
    x?: number,
    y?: number,
    public width: number = 0,
    public height: number = 0
  ) {
    super(x, y);
  }
}
