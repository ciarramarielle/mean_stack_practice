// This is our NODE application
var express = require("express"),
    mongoose = require("mongoose");

// Dev or production mode. If not set, default: development
var env = process.env.NODE_ENV = process.env.NODE_ENV || "development";

//Create express app
var app = express();

var config = require("./server/config/config")[env];

/* EXPRESSJS CONFIGURATION*/
require("./server/config/express")(app, config);

/* DATABASE SETTINGS */
require("./server/config/mongoose")(config);

/* ROUTE SETTINGS */
require("./server/config/routes")(app);

// start listening to requests
// var port = process.env.PORT || 8080;
app.listen(config.port);

// check that server is running
console.log("Listening on port " + config.port);
