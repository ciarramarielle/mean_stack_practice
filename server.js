// This is our NODE application
var express = require("express");
var stylus = require("stylus");
var logger = require("morgan");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

// Dev or production mode. If not set, default: development
var env = process.env.NODE_ENV = process.env.NODE_ENV || "development";

//Create express app
var app = express();

// Compile Stylus middleware
function compile(str, path) {
    return stylus(str).set("filename", path);
}


/***    CONFIGURATION SECTION    ***/
// Express VIEWS property, set to path where to house views.
app.set("views", __dirname + "/server/views");

// view engine
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(bodyParser.urlencoded({extended: true}));   // enable url-encoded bodies
app.use(bodyParser.json());                         //enable json-encoded bodies


// Configure stylus middleware
app.use(stylus.middleware(
    {
        src: __dirname + "/public",
        compile: compile
    }
));


/*** ROUTING ***/

/* Static route handling */
// Need routes to /public (static route)
// if any request inside public, serve the file.
app.use(express.static(__dirname + "/public"));


// Connect to my mongoose database by using mongoose.connect
var c9host = "0.0.0.0";
mongoose.connect("mongodb://"+ c9host + "/mean-stack");
var db = mongoose.connection;
db.on("error", console.error.bind(console, "cnxn error"));
db.once("open", function cb() {
    console.log("mean-stack db opened");
});




// Partials...
app.get("/partials/:partialPath", function(req, res) {
    res.render("partials/" + req.params.partialPath);
})


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
