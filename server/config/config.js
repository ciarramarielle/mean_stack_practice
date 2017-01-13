var path = require("path");
var rootPath = path.normalize(__dirname +"../../..");

module.exports = {
    development: {
        rootPath: rootPath,
        db: "mongodb://0.0.0.0/multivision",
        port: process.env.PORT || 8080
    },
    production: {
        rootPath: __dirname,
        port: process.env.PORT || 80
    }
}