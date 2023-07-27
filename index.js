// import req files and other dependencies
const inquirer = require ("inquirer");
const fs = require("fs");
const catchColor = require("./lib/color");
const generateShape = require("./lib/shapes");
const generateSVG = require("./lib/svg");

// Questions prompted by inquirer
questions() = [
// WHEN I am prompted for text
// THEN I can enter up to three characters
    {
      type: "input",
      message: "Enter up to 3 characters to display inside your logo:" ,
      name: "title",
    },

// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
    {
      type: "input",
      message:"What text color would you like for these characters?",
      name: "textColor",
    },

// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
    {
      type: "list",
      message: "Please pick a shape for your logo:",
      name: "shape",
      choices: ["circle", "triangle", "square"],
    },

// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)
    {
      type: "input",
      message: "What color would you like your shape's background to be?",
      name: 'shapeColor',
      // validate: (input) => {
      //   const pickColor = color.includes(input.toLowerCase());
      //   const pickHexColorCode = "";
      //   return pickColor || pickHexColorCode; 
      // },
    },
  ];

  function runApp(){
    inquirer.prompt(questions)
    .then((answers) => {

    })

  };

   



    console.log(response);
  

