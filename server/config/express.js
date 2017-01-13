// This is where I can configure EXPRESSJS.
var express = require("express"),
    stylus = require("stylus"),
    logger = require("morgan"),
    bodyParser = require("body-parser");

module.exports = function(app, config) {
    // Compile Stylus middleware
    function compile(str, path) {
        return stylus(str).set("filename", path);
    }


    /***    CONFIGURATION SECTION    ***/
    // Express VIEWS property, set to path where to house views.
    app.set("views", config.rootPath + "/server/views");

    // view engine
    app.set("view engine", "jade");

    app.use(logger("dev"));
    app.use(bodyParser.urlencoded({
        extended: true
    })); // enable url-encoded bodies
    app.use(bodyParser.json()); //enable json-encoded bodies


    // Configure stylus middleware
    app.use(stylus.middleware({
        src: config.rootPath + "/public",
        compile: compile
    }));


    /*** ROUTING ***/

    /* Static route handling */
    // Need routes to /public (static route)
    // if any request inside public, serve the file.
    app.use(express.static(config.rootPath + "/public"));
};
