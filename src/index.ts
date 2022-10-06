abstract class Shape {
  constructor(public color: string) {}
  abstract render(): void;
}

class Circle extends Shape {
  constructor(color: string, public radius: number) {
    super(color);
  }
  override render(): void {
    console.log("Rendering a circle");
  }
}

let circle = new Circle("Red", 4);
console.log(circle.render());
