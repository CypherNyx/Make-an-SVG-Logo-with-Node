// import req files and other dependencies
const inquirer = require ("inquirer");
const fs = require("fs");
const catchColor = require("./lib/color");
const generateShape = require("./lib/shapes");
const generateSVG = require("./lib/svg");

// Questions prompted by inquirer
const questions = [
// WHEN I am prompted for text
// THEN I can enter up to three characters
    {
      type: "input",
      name: "title",
      message: "Enter up to 3 characters to display inside your logo:" ,
    },

// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
    {
      type: "input",
      name: "textColor",
      message:"What text color would you like for these characters?",
    },

// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
    {
      type: "list",
      name: "shape",
      message: "Please pick a shape for your logo:",
      choices: ["circle", "square", "triangle"],
    },

// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)
    {
      type: "input",
      name: 'shapeColor',
      message: "What color would you like your shape's background to be?",
      // validate: (input) => {
      //   const pickColor = color.includes(input.toLowerCase());
      //   const pickHexColorCode = "";
      //   return pickColor || pickHexColorCode; 
      // },
    },
  ];
// Create a function to initialize app
  function runApp(){
    inquirer.prompt(questions)
    .then((answers) => {
      const fileName = "logo.svg";
      const shapeInfo = generateShape(answers);
      const svgInfo = generateSVG(answers, shapeInfo);
      fs.writeFile(fileName, svgInfo);
     console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  };
  // Function call to initialize app
      runApp();
      

  
 
    
  

