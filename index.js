/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
// var qr = require("qr-image");
import fs from "fs";
import qr from "qr-image";
console.log("hi");
let userMessage;
inquirer
  .prompt([
    /* Pass your questions in here */
    { name: "user", message: "Please Type your url here ", type: "input" },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.user;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));
    // var svg_string = qr.imageSync(userMessage, { type: "svg" });
    // console.log(svg_string);
    fs.writeFile("mynewfile.txt", url, function (err) {
      if (err) throw err;
      console.log("saved");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log(error);
    } else {
      // Something else went wrong
      console.log(error);
    }
  });

// console.log(svg_string);
