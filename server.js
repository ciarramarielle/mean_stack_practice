// This is our NODE application
var express = require("express");

// Dev or production mode. If not set, default: development
var env = process.env.NODE_ENV = process.env.NODE_ENV || "development";

//Create express app
var app = express();

// express configuration
// Express VIEWS property, set to path where to house views.
app.set("views", __dirname + "/server/views");