"use strict";
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    render() {
        console.log("Rendering a circle");
    }
}
let circle = new Circle("Red", 4);
console.log(circle.render());
//# sourceMappingURL=index.js.map