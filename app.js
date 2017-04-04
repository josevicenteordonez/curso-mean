var express = require("express");
var path = require("path");

var app = express();

app.set('port',3000);

app.use(function(req, res, next){
	console.log(req.method, req.url);
	next();
});


app.use('/public', express.static(path.join(__dirname, 'public'))); // used static folder and files
// for example access to http://localhost:3000/public/index.html


// setup routing
app.get("/",function(req, res){
	console.log("GET the homepage");
	res
	 // .status(404) // add status to response, default value 200
	.send("Express Yoruself"); // send string to response
});

app.get("/json",function(req, res){
	console.log("GET the json");
	res.json({"data": true}); // send json to response, ideal for the API
});


app.get("/file",function(req, res){
	console.log("GET the file");
	res.sendFile(path.join(__dirname, 'app.js')); // send file to response
});


app.get("/home",function(req, res){
	console.log("GET the file");
	res.sendFile(path.join(__dirname, 'public' , 'index.html')); // send file to response
});


// start up app
var server = app.listen(app.get('port'), function(){
	var port = server.address().port;
	console.log("Magic Happens on port " + port);
});

console.log("Me first!");