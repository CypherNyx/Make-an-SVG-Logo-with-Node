const { Circle, Square, Triangle } = require("./shapes");

describe("Purple Circle", () => {
  it("should render a circle logo with no more than 3 characters and the color entered by the user", () => {
    const circle = new Circle();
    circle.setColor("mediumpurple");

    expect(circle.render()).toEqual(
      `<circle cx = "150" cy = "100" r = "99" fill = "mediumpurple"/>`
    );
  });
});

describe("Red Square", () => {
  it("should render a square logo with no more than 3 characters and the color entered by the user", () => {
    const square = new Square();
    square.setColor("red");

    expect(square.render()).toEqual(
      `<rect x="50" y="0" width="200" height="200" fill = "red"/>`
    );
  });
});

describe("Triangle", () => {
  it("should render a triangle logo with no more than 3 characters and the color entered by the user", () => {
    const triangle = new Triangle();
    triangle.setColor("green");

    expect(triangle.render()).toEqual(
      `<polygon points = "150 0, 300 200, 0 200" fill = "green"/>`
    );
  });
});
