# SVG Logo Maker
> Module 10 - Object-oriented Programming: SVG Logo Maker
Node.js command-line application that takes in user input to generate a logo and save it as an SVG fileLinks to an external site.. The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a .svg file.

![JavaScript](./assets/JavaScript.svg)
![Node](./assets/node.svg)
![HTML](./assets/html.svg)

## Acceptance Criteria

- [ ] The application accepts user input. User is prompted for text
- [ ] User can enter up to three characters
- [ ] User is prompted for the text color <br>
   THEN they enter a color keyword (OR a hexadecimal number)
- [ ] User is prompted for a shape
   THEN they are presented with a list of shapes to choose from: circle, triangle, and square
- [ ] User is prompted for the shape's color
THEN they enter a color keyword (OR a hexadecimal number)
- [ ] Once user entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
- [ ] I can open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered

### Recommended File Structure

```sh
├── examples/           // Example svg file(s) created with the app
├── lib/                // Folder for classes or functions - library
    ├── shapes.js       // Exports `Triangle`, `Circle`, and `Square` classes
    ├── shapes.test.js  // Jest tests for shapes
    └── more...         // Additional files and tests
├── .gitignore          // Indicates which folders and files Git should ignore
├── index.js            // Runs the application using imports from lib/
├── package.json
└── README.md           // App description, link to video, setup and usage instructions           
```

## ScreenCaptures
<br><br>
[SAMPLE of a generated image ➡️](#)
<br><br>

