class Shape {
	constructor() {
		this.shapeColor = "";
	}
	setColor(shapeColor){
		this.shapeColor = shapeColor;
	}
};

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