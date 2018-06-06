var http = require('http');
var express = require('express');
var port = process.env.PORT || 3031
var app = express();
var appRoutes = require('./controllers/appRoutes');

app.use('/',appRoutes);


http.createServer(app).listen(port);

console.log("this server is running in port",port);