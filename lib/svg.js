const generateSVG = (answers, shapeInfo) => {
  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${shapeInfo.render()}<text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text></svg>`;
};
module.exports = generateSVG;