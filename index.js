const student = require("./information");
let cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: `Je suis ${student.name}, du campus ${student.campus}`,
    e: "oO",
    T: "U ",
  })
);

