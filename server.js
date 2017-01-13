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


/* DATABASE SETTINGS */
// Connect to my mongoose database by using mongoose.connect
var c9host = "0.0.0.0";
mongoose.connect("mongodb://"+ c9host + "/multivision");


// using jeames existing db
// mongoose.connect("mongodb://user:password@ds123456.mlab.com:23456/db_name");

// RUNNING MONGO: mongod --bind_ip=$IP --nojournal

var db = mongoose.connection;
db.on("error", console.error.bind(console, "cnxn error"));
db.once("open", function cb() {
    console.log("multivision db opened");
});

/* @VIEW: USED mongoMessage
var mSchema = mongoose.Schema({message: String});
var Message = mongoose.model("Message", mSchema);
var mMessage;
Message.findOne().exec(function(err, mDoc) {
    mMessage = mDoc.message;
}); // PASS THIS OBJECT TO A VIEW, i.e. INDEX VIEW app.get("*")
*/


// Partials...
app.get("/partials/:partialPath", function(req, res) {
    res.render("partials/" + req.params.partialPath);
})


// route that delivers my index page
// app.get("/"); //at route of website
app.get("*", function(req, res) {
    res.render("index", {
        // MONGO MESSAGE OBJECT PASSED INTO THIS VIEW.
        /* @VIEW: USED mongoMessage
        mongoMessage: mMessage  */
    }); // index within /server/views/
}); // deliver index page at any request... for now

// start listening to requests
var port = process.env.PORT || 8080;
app.listen(port);

// check that server is running
console.log("Listening on port " + port);
