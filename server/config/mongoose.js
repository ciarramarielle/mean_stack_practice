var mongoose = require("mongoose");

module.exports = function(config) {
    // RUNNING MONGO: mongod --bind_ip=$IP --nojournal
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on("error", console.error.bind(console, "cnxn error"));
    db.once("open", function cb() {
        console.log("multivision db opened");
    });
};


// // Connect to my mongoose database by using mongoose.connect
// var c9host = "0.0.0.0";
// if (env === "development") {
//     mongoose.connect("mongodb://"+ c9host + "/multivision");
// } else {
// // using jeames existing db
// // mongoose.connect("mongodb://user:password@ds123456.mlab.com:23456/db_name");
// }





/* @VIEW: USED mongoMessage
var mSchema = mongoose.Schema({message: String});
var Message = mongoose.model("Message", mSchema);
var mMessage;
Message.findOne().exec(function(err, mDoc) {
    mMessage = mDoc.message;
}); // PASS THIS OBJECT TO A VIEW, i.e. INDEX VIEW app.get("*")
*/