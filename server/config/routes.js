module.exports = function(app) {
    // Partials...
    // app.get("/partials/:partialPath", function(req, res) {
    //     res.render("partials/" + req.params.partialPath);
    // });

    // app.get("/partials/*", function(req, res) {
    //     res.render("partials/" + req.params[0]);
    // })

    // ON VIEW, IF LINKED TO ../partials/...  we render public/app/* ...
    // Relative to VIEWS directory
    app.get("/partials/*", function(req, res) {
        res.render("../../public/app/" + req.params[0]);
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
};
