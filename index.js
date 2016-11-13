var express = require("express");
var app= express();

//this is what helps in socket connection
var http = require('http').Server(app);
var io = require('socket.io')(http);
//to maintain history of paths drawn
var historyPath=[];

//only this folder will be public. This is a keyword.. has to be "public"
app.use(express.static('public'));
app.set("port", process.env.PORT || "3000");

//this is the resource which is to be fetched
/**app.get("/", function(req,res){
	res.send("Hello");
});**/
app.get("/", function(req,res){
	res.render("index.html");
});

//opens a port on your computer and starts a server
http.listen(app.get("port"), function(){
	console.log("Listening to port");
});

app.get("/getSession",function(req,res){
connection.query('SELECT * from user LIMIT 2', function(err, rows, fields) {
connection.end();
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
  });
});