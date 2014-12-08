// import the express module
var express = require('express');

// instantiate a new express server
var app = express();

// make all the files in the directory publicly accessible
app.use(express.static(__dirname));

// spin up the server on port 8080.
app.listen(8080, function () {
 console.log('visit localhost:8080 to get started');
});