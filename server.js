// This is our NODE application
var express = require("express");

// Dev or production mode. If not set, default: development
var env = process.env.NODE_ENV = process.env.NODE_ENV || "development";

//Create express app
var app = express();

// express configuration
// Express VIEWS property, set to path where to house views.
app.set("views", __dirname + "/server/views");

// view engine
app.set("view engine", "jade");

// route that delivers my index page
// app.get("/"); //at route of website
app.get("*", function(req, res) {
    res.render("index"); // index within /server/views/
}); // deliver index page at any request... for now

// start listening to requests
var port = 8080;
app.listen(port);

// check that server is running
console.log("Listening on port " + port);