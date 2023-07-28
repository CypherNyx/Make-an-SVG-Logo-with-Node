const { Circle, Square, Triangle, generateShape, } = require("./shapes");

// Testing Circle 
describe("Purple Circle", () => { 
  it ("should render a circle logo with no more than 3 characters and the color entered by the user", () => {
    const circle = new Circle();
    circle.setColor("lavender");

    expect(circle.render()).toEqual(
      `<circle cx = "150" cy = "100" r = "99" fill = "lavender"/>`
    );
  }); 
});

// Testing Square
describe("Red Square", () =>{
  it("should render a square logo with no more than 3 characters and the color entered by the user", () => {
    const square = new Square();
    square.setColor("red");

    expect(circle.render()).toEqual(
      `<rect x="50" y="0" width="200" height="200" fill = "red"/>`
    );
  });
});