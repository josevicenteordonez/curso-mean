var fs = require("fs"); // import module nodeJs File System

console.log("Going to get a file");

fs.readFile("readFileSync.js", function(err, file){ // Anonymous function
	console.log("Got the file");	
});


var onFielLoad = function(err, file){
	console.log("Got the file - onFielLoad");
};

fs.readFile("readFileSync.js", onFielLoad); // Name function

console.log("App continues ...");