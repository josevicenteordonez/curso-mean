require("./instantHello");

var goodbye = require("./talk/goodbye");

var talk = require("./talk"); // No specified file because exits index.js file
talk.intro();
talk.hello("Simon");

var question = require("./talk/question"); 
var anwser = question.ask("What is the meaning of life?");
console.log(anwser);

goodbye();