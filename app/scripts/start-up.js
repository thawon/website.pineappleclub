define(
    ["app",
     "angularAMD",
     "controllers/application-controller",
     "run",
     "services/auth-interceptor"],
    function (app, angularAMD) {
        angularAMD.bootstrap(app);
    });