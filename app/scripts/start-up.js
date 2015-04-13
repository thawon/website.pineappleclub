define(
    ["app",
     "angularAMD",
     "controllers/application-controller",
     "controllers/navigator-controller",
     "controllers/header-client-controller",
     "controllers/header-admin-controller",
     "controllers/footer-controller",
     "controllers/page-controller",
     "controllers/side-bar-controller",
     "directives/active-by-state-directive",
     "run",
     "services/auth-interceptor"],
    function (app, angularAMD) {
        angularAMD.bootstrap(app);
    });