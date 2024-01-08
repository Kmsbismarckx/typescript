namespace GeometryLibrary {
  export type TCircle = {
    getCenterX(): number;
    getCenterY(): number;
    getDiameter(): number;
  };
}

type CircleCenter = { x: number; y: number };

class Circle {
  public center: CircleCenter;
  public radius: number;

  constructor(center: CircleCenter, radius: number) {
    this.center = center;
    this.radius = radius;
  }
}

class CircleAdapter implements GeometryLibrary.TCircle {
  private circle: Circle;

  constructor(circle: Circle) {
    this.circle = circle;
  }
  getCenterX(): number {
    return this.circle.center.x;
  }
  getCenterY(): number {
    return this.circle.center.y;
  }
  getDiameter(): number {
    return this.circle.radius;
  }
}

const adapter = new CircleAdapter(new Circle({ x: 4, y: 5 }, 12));
console.log(adapter.getDiameter());
console.log(adapter.getCenterX());
console.log(adapter.getCenterY());
