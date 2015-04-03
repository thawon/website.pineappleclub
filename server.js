var requirejs = require("requirejs");

requirejs.config({

    nodeRequire: require,

    baseUrl: "./",

    paths: {
        app: "server/app",

        config: "server/config",

        routes: "server/routes",
        
        sharedLib: "shared-lib",

        constants: "shared-lib/constants"
    }
});

requirejs(["app"],
    function (app) { }
);