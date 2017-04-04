var fs = require("fs"); // import module nodeJs File System

console.log("Going to get a file");
var file = fs.readFileSync("readFileSync.js");
console.log("Got the file");
console.log("App continues ...");