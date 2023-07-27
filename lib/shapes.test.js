const { generateShapes, Circle, Square, Triangle } = require("./shapes");
const testTheSVG = require("./svg");


//*** Jest test suite */

describe("x", () => {
  it("what is is x supposed to do?", () => {
    const x = new X();
    x.setColor("red");

    expect(x.render()).toEqual(
      `<p style="color: red">X</p>`
    );
  });
});

//*** Testing Circle */
describe('Circle', () => { 
  it ("should return a circle logo with no more than 3 characters and the color entered by the user", () => {
    const circle = new Circle();
    

  }); 
});
