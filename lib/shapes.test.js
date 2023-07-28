const { Circle, Square, Triangle, generateShape, } = require("./shapes");

// Testing Circle 
describe("Purple Circle", () => { 
  it ("should render a circle logo with no more than 3 characters and the color entered by the user", () => {
    const circle = new Circle(shapeColor);
    circle.setColor("lavender");

    expect(circle.render()).toEqual( '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx = "150" cy = "100" r = "99" fill = "lavender"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="seashell">ABC</text></svg>'
     );
  }); 
});

// Testing Square
describe("Red Square", () =>{
  it("should render a square logo with no more than 3 characters and the color entered by the user", () => {
    const square = new Square();
    square.setColor("red");

    expect(square.render()).toEqual(
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="0" width="200" height="200" fill = "red"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="seashell">ABC</text></svg>'
    );
  });
});