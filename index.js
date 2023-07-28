// import req files and other dependencies
const inquirer = require ("inquirer");
const fs = require("fs");
const generateShape = require("./lib/shapes");
const generateSVG = require("./lib/svg");
const cssColorNames = require("./lib/color");

// Questions prompted by inquirer
const questions = [
// WHEN I am prompted for text
// THEN I can enter up to three characters
    {
      type: "input",
      name: "text",
      message: "Enter up to 3 characters to display inside your logo:",
      validate: (input) => input.length <= 3,
    },

// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
    {
      type: "input",
      name: "textColor",
      message:"What text color would you like for these characters?",
      validate: (input) => {
        // check if the input is a valid CSS color name
        const isColorName = cssColorNames.includes(input.toLowerCase());
        //use regex to check if the input is a valid hex code
        const isHexCode = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(input);
        return isColorName || isHexCode;
      },
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
      message: "What fill color would you like your shape's background to be?",
      validate: (input) => {
        // check if the input is a valid CSS color name
        const isColorName = cssColorNames.includes(input.toLowerCase());
        //use regex to check if the input is a valid hex code
        const isHexCode = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(input);
        return isColorName || isHexCode;
      },
    },
  ];
// Create a function to initialize app
  function runApp(){
    inquirer.prompt(questions)
    .then((answers) => {
      const fileName = "logo.svg";
      const shapeInfo = generateShape(answers);
      const svgInfo = generateSVG(answers, shapeInfo);
      writeToFile(fileName, svgInfo);
     console.log(shapeInfo);
    })
    .catch((error) => {
      console.log(error);
    });
  };
// Write Function to file
  function writeToFile(svgFile, data){
    fs.writeFile(svgFile, data, 
      (error) => error ? console.log("Could not create file") : console.log("Generated logo.svg file!")
      );
  };
  // Function call to initialize app
      runApp();
      

  
 
    
  

