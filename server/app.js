define(
    ["config/config"],
    function (config) {
        var express = require("express"),
            bodyParser = require("body-parser"),
            cookieParser = require("cookie-parser"),
            methodOverride = require("method-override"),
            session = require("express-session"),
            app = express();

        // configuration ===============================================================
        
        // express application ==============================================
        // read cookies (needed for auth)
        app.use(cookieParser());
        // get information from html forms
        app.use(bodyParser());

        app.engine(config.express.view.engine.type, config.express.view.engine.driver);
        app.set("view engine", config.express.view.engine.type);
        app.set("views", config.express.view.path);

        app.use(express.static(config.express.staticPath));
        app.use("/shared-lib", express.static(config.express.sharedLibPath));
        
        // routes ======================================================================
        // load our routes and pass in our app
        require("routes/index")(app);

        app.listen(config.express.port, function (req, res) {
            console.log("express is listening on http://" +
              config.express.ip + ":" + config.express.port);
        });
    });
