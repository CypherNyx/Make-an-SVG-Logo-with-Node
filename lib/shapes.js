// Set Shape class as "parent" and add method for setting color
class Shape {
	constructor() {
		this.shapeColor = "";
	}
	setColor(shapeColor){
		this.shapeColor = shapeColor;
	}
};
//Set "child" class for each listed shape and render it's respective element dimmensions
class Circle extends Shape {
	constructor(){
		super();
	}
	render(){
		return `<circle cx = "150" cy = "100" r = "99" fill = "${this.shapeColor}"/>`
	}
};

class Square extends Shape {
	constructor() {
		super();
	}
	render(){
		return `<rect x="50" y="0" width="200" height="200" fill = "${this.shapeColor}"/>`
	}
};

class Triangle extends Shape {
	constructor() {
		super();
	}
	render() {
		return `<polygon points = "150 0, 300 200, 0 200" fill = "${this.shapeColor}"/>`
	}
};

// Function to generate a shape
function generateShape(data) {
	if(data.shape === "circle"){
		let chosenShape = new Circle();
		chosenShape.setColor(data.shapeColor);
		return chosenShape;
	}else if (data.shape === "square"){
		let chosenShape = new Square();
		chosenShape.setColor(data.shapeColor);
		return chosenShape;
	}else if(data.shape === "triangle") {
		let chosenShape = new Triangle();
		chosenShape.setColor(data.shapeColor);
		return chosenShape;
	}
};

module.exports = {Circle, Square, Triangle, generateShape,};

